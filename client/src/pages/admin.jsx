import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import "../index.css";
import "./home.css";
import "./responsive.css";
import { Helmet } from "react-helmet";
import bgheader from "../assets/svgs/background-header.svg";
import axios from "axios";
import { Editor } from '@tinymce/tinymce-react';

const apiKey = import.meta.env.VITE_TINYMCE_API_KEY;

const Admin = () => {
    const navigate = useNavigate();
    const [blogData, setBlogData] = useState({
        title: "",
        content: "",
        excerpt: "",
        featuredImage: null,
        author: "",
        categories: [],
        tags: "",
        metaTitle: "",
        metaDescription: "",
        metaKeywords: "",
        published: false,
        publishedAt: ""
    });
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const predefinedCategories = [
        "Website Development",
        "App Development",
        "Digital Marketing",
        "Graphic Design",
        "Tech Tools"
    ];

    useEffect(() => {
        // Check if user is authenticated
        const isAuthenticated = localStorage.getItem("isAdminAuthenticated");
        if (!isAuthenticated) {
            navigate("/login");
        }
        // Fetch existing blogs
        fetchBlogs();
    }, [navigate]);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/blogs', {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setBlogs(response.data);
        } catch (error) {
            setError("Failed to fetch blogs");
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setBlogData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleEditorChange = (content) => {
        setBlogData(prevState => ({
            ...prevState,
            content: content
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setBlogData(prevState => ({
            ...prevState,
            featuredImage: file
        }));
    };

    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;
        setBlogData(prevState => ({
            ...prevState,
            categories: checked 
                ? [...prevState.categories, value]
                : prevState.categories.filter(category => category !== value)
        }));
    };

    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const formData = new FormData();
            
            // Add slug to the form data
            formData.append('slug', generateSlug(blogData.title));
            
            // Add all other fields
            Object.keys(blogData).forEach(key => {
                if (key === 'featuredImage' && blogData[key]) {
                    formData.append(key, blogData[key]);
                } else if (key === 'categories') {
                    // Convert categories array to string for FormData
                    formData.append(key, blogData[key].join(','));
                } else {
                    formData.append(key, blogData[key]);
                }
            });

            await axios.post('http://localhost:5000/api/blogs', formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setSuccess("Blog post created successfully!");
            setBlogData({
                title: "",
                content: "",
                excerpt: "",
                featuredImage: null,
                author: "",
                categories: [],
                tags: "",
                metaTitle: "",
                metaDescription: "",
                metaKeywords: "",
                published: false,
                publishedAt: ""
            });
            fetchBlogs();
        } catch (error) {
            setError(error.response?.data?.message || "Failed to create blog post");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("isAdminAuthenticated");
        navigate("/login");
    };

    return (
        <>
            <Helmet>
                <title>Tarlose - Admin Panel</title>
                <meta name="description" content="Tarlose admin panel for managing blog content" />
            </Helmet>
            <Cursor />
            <Navbar />

            <div className="card text-bg-dark position-relative overflow-hidden">
                <img 
                    src={bgheader} 
                    className="card-img" 
                    alt="Admin Panel Header" 
                    loading="lazy"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
                    <h2 className="card-title display-4 mb-4 fw-bold">Admin Panel</h2>
                    <p className="card-text fs-5 mx-auto" style={{maxWidth: "800px"}}>
                        Manage your blog content and create engaging posts for your audience
                    </p>
                </div>
            </div>

            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card bg-dark text-white border border-secondary">
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h3 className="card-title mb-0">Create New Blog Post</h3>
                                    <button 
                                        onClick={handleLogout}
                                        className="btn btn-contact"
                                    >
                                        Logout
                                    </button>
                                </div>

                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}
                                {success && (
                                    <div className="alert alert-success" role="alert">
                                        {success}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input
                                            type="text"
                                            className="form-control bg-dark text-white border-secondary"
                                            id="title"
                                            name="title"
                                            value={blogData.title}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="content" className="form-label">Content</label>
                                        <Editor
                                            apiKey={apiKey} // Replace with your TinyMCE API key
                                            value={blogData.content}
                                            onEditorChange={handleEditorChange}
                                            init={{
                                                height: 500,
                                                menubar: true,
                                                plugins: [
                                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                                ],
                                                toolbar: 'undo redo | blocks | ' +
                                                    'bold italic forecolor | alignleft aligncenter ' +
                                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                                    'removeformat | help',
                                                content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; font-size: 14px; }',
                                                skin: 'oxide-dark',
                                                content_css: 'dark'
                                            }}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="excerpt" className="form-label">Excerpt</label>
                                        <textarea
                                            className="form-control bg-dark text-white border-secondary"
                                            id="excerpt"
                                            name="excerpt"
                                            rows="3"
                                            value={blogData.excerpt}
                                            onChange={handleInputChange}
                                            maxLength="300"
                                        ></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="featuredImage" className="form-label">Featured Image</label>
                                        <input
                                            type="file"
                                            className="form-control bg-dark text-white border-secondary"
                                            id="featuredImage"
                                            name="featuredImage"
                                            onChange={handleImageChange}
                                            accept="image/*"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="author" className="form-label">Author</label>
                                        <input
                                            type="text"
                                            className="form-control bg-dark text-white border-secondary"
                                            id="author"
                                            name="author"
                                            value={blogData.author}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Categories</label>
                                        <div className="d-flex flex-column gap-2">
                                            {predefinedCategories.map((category, index) => (
                                                <div key={index} className="form-check">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id={`category-${index}`}
                                                        value={category}
                                                        checked={blogData.categories.includes(category)}
                                                        onChange={handleCategoryChange}
                                                    />
                                                    <label 
                                                        className="form-check-label" 
                                                        htmlFor={`category-${index}`}
                                                    >
                                                        {category}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                        <small className="text-muted">Select one or more categories</small>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="tags" className="form-label">Tags (comma separated)</label>
                                        <input
                                            type="text"
                                            className="form-control bg-dark text-white border-secondary"
                                            id="tags"
                                            name="tags"
                                            value={blogData.tags}
                                            onChange={handleInputChange}
                                            placeholder="e.g., web, design, marketing"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="metaTitle" className="form-label">Meta Title</label>
                                        <input
                                            type="text"
                                            className="form-control bg-dark text-white border-secondary"
                                            id="metaTitle"
                                            name="metaTitle"
                                            value={blogData.metaTitle}
                                            onChange={handleInputChange}
                                            maxLength="60"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="metaDescription" className="form-label">Meta Description</label>
                                        <textarea
                                            className="form-control bg-dark text-white border-secondary"
                                            id="metaDescription"
                                            name="metaDescription"
                                            rows="2"
                                            value={blogData.metaDescription}
                                            onChange={handleInputChange}
                                            maxLength="160"
                                        ></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="metaKeywords" className="form-label">Meta Keywords (comma separated)</label>
                                        <input
                                            type="text"
                                            className="form-control bg-dark text-white border-secondary"
                                            id="metaKeywords"
                                            name="metaKeywords"
                                            value={blogData.metaKeywords}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="published"
                                                name="published"
                                                checked={blogData.published}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-check-label" htmlFor="published">
                                                Publish immediately
                                            </label>
                                        </div>
                                    </div>

                                    {blogData.published && (
                                        <div className="mb-4">
                                            <label htmlFor="publishedAt" className="form-label">Publish Date</label>
                                            <input
                                                type="datetime-local"
                                                className="form-control bg-dark text-white border-secondary"
                                                id="publishedAt"
                                                name="publishedAt"
                                                value={blogData.publishedAt}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    )}

                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-contact">
                                            Create Blog Post
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Admin;
