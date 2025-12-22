import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Editor } from '@tinymce/tinymce-react';
import "./AdminDashboard.css";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const apiKey = import.meta.env.VITE_TINYMCE_API_KEY;

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('list'); // 'list', 'create', 'edit'
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all"); // 'all', 'published', 'draft'
    const [currentBlog, setCurrentBlog] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    
    const [blogData, setBlogData] = useState({
        title: "",
        content: "",
        excerpt: "",
        featuredImageUrl: "",
        featuredImageAlt: "",
        author: "",
        categories: [],
        tags: "",
        metaTitle: "",
        metaDescription: "",
        metaKeywords: "",
        published: false,
        publishedAt: ""
    });

    const predefinedCategories = [
        "Website Development",
        "App Development",
        "Digital Marketing",
        "Graphic Design",
        "Tech Tools"
    ];

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAdminAuthenticated");
        if (!isAuthenticated) {
            navigate("/login");
            return;
        }
        fetchBlogs();
    }, [navigate]);

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/api/blogs/all`, {
                withCredentials: true,
            });
            setBlogs(response.data);
            setError("");
        } catch (error) {
            setError("Failed to fetch blogs");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setBlogData({
            title: "",
            content: "",
            excerpt: "",
            featuredImageUrl: "",
            featuredImageAlt: "",
            author: "",
            categories: [],
            tags: "",
            metaTitle: "",
            metaDescription: "",
            metaKeywords: "",
            published: false,
            publishedAt: ""
        });
        setImagePreview(null);
        setCurrentBlog(null);
        setError("");
        setSuccess("");
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setBlogData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleEditorChange = (content) => {
        setBlogData(prev => ({ ...prev, content }));
    };

    const handleImageUrlChange = (e) => {
        const url = e.target.value;
        setBlogData(prev => ({ ...prev, featuredImageUrl: url }));
        // Update preview when URL changes
        if (url) {
            setImagePreview(url);
        } else {
            setImagePreview(null);
        }
    };

    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;
        setBlogData(prev => ({
            ...prev,
            categories: checked 
                ? [...prev.categories, value]
                : prev.categories.filter(cat => cat !== value)
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
        setLoading(true);

        try {
            const payload = {
                ...blogData,
                slug: generateSlug(blogData.title),
                categories: blogData.categories.join(','),
                tags: blogData.tags,
                metaKeywords: blogData.metaKeywords
            };

            if (currentBlog) {
                // Update existing blog
                await axios.put(`${API_URL}/api/blogs/${currentBlog._id}`, payload, {
                    withCredentials: true,
                    headers: { 'Content-Type': 'application/json' }
                });
                setSuccess("Blog post updated successfully!");
            } else {
                // Create new blog
                await axios.post(`${API_URL}/api/blogs`, payload, {
                    withCredentials: true,
                    headers: { 'Content-Type': 'application/json' }
                });
                setSuccess("Blog post created successfully!");
            }

            resetForm();
            fetchBlogs();
            setTimeout(() => setActiveTab('list'), 2000);
        } catch (error) {
            setError(error.response?.data?.message || "Failed to save blog post");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (blog) => {
        setCurrentBlog(blog);
        setBlogData({
            title: blog.title || "",
            content: blog.content || "",
            excerpt: blog.excerpt || "",
            featuredImageUrl: blog.featuredImage?.url || "",
            featuredImageAlt: blog.featuredImage?.altText || "",
            author: blog.author || "",
            categories: blog.categories || [],
            tags: blog.tags?.join(', ') || "",
            metaTitle: blog.metaTitle || "",
            metaDescription: blog.metaDescription || "",
            metaKeywords: blog.metaKeywords?.join(', ') || "",
            published: blog.published || false,
            publishedAt: blog.publishedAt ? new Date(blog.publishedAt).toISOString().slice(0, 16) : ""
        });
        
        if (blog.featuredImage?.url) {
            setImagePreview(blog.featuredImage.url);
        }
        
        setActiveTab('edit');
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this blog post?")) {
            return;
        }

        setLoading(true);
        try {
            await axios.delete(`${API_URL}/api/blogs/${id}`, {
                withCredentials: true,
            });
            setSuccess("Blog post deleted successfully!");
            fetchBlogs();
        } catch (error) {
            setError("Failed to delete blog post");
        } finally {
            setLoading(false);
        }
    };

    const handleTogglePublish = async (blog) => {
        setLoading(true);
        try {
            const payload = {
                published: !blog.published,
                slug: blog.slug,
                title: blog.title,
                content: blog.content,
                excerpt: blog.excerpt || '',
                author: blog.author,
                categories: (blog.categories || []).join(','),
                tags: Array.isArray(blog.tags) ? blog.tags.join(',') : blog.tags || '',
                metaTitle: blog.metaTitle || '',
                metaDescription: blog.metaDescription || '',
                metaKeywords: Array.isArray(blog.metaKeywords) ? blog.metaKeywords.join(',') : blog.metaKeywords || '',
                featuredImageUrl: blog.featuredImage?.url || '',
                featuredImageAlt: blog.featuredImage?.altText || ''
            };
            
            if (blog.publishedAt) {
                payload.publishedAt = blog.publishedAt;
            }
            
            await axios.put(`${API_URL}/api/blogs/${blog._id}`, payload, {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' }
            });
            
            setSuccess(`Blog ${!blog.published ? 'published' : 'unpublished'} successfully!`);
            fetchBlogs();
        } catch (error) {
            setError("Failed to update blog status");
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("isAdminAuthenticated");
        navigate("/login");
    };

    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            blog.author?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === "all" ? true :
                            filterStatus === "published" ? blog.published :
                            !blog.published;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="admin-dashboard">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <div className="admin-sidebar-header">
                    <h2>Tarlose Admin</h2>
                    <p className="admin-text-muted">Blog Management</p>
                </div>
                
                <nav className="admin-sidebar-nav">
                    <button 
                        className={`admin-nav-item ${activeTab === 'list' ? 'admin-active' : ''}`}
                        onClick={() => { setActiveTab('list'); resetForm(); }}
                    >
                        <i className="admin-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14 2 14 8 20 8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <polyline points="10 9 9 9 8 9"/>
                            </svg>
                        </i>
                        All Blogs
                    </button>
                    <button 
                        className={`admin-nav-item ${activeTab === 'create' ? 'admin-active' : ''}`}
                        onClick={() => { setActiveTab('create'); resetForm(); }}
                    >
                        <i className="admin-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"/>
                                <line x1="12" y1="8" x2="12" y2="16"/>
                                <line x1="8" y1="12" x2="16" y2="12"/>
                            </svg>
                        </i>
                        Create New
                    </button>
                </nav>

                <div className="admin-sidebar-footer">
                    <button className="admin-logout-btn" onClick={handleLogout}>
                        <i className="admin-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                                <polyline points="16 17 21 12 16 7"/>
                                <line x1="21" y1="12" x2="9" y2="12"/>
                            </svg>
                        </i>
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="admin-main">
                <header className="admin-header">
                    <h1>
                        {activeTab === 'list' ? 'All Blog Posts' : 
                         activeTab === 'edit' ? 'Edit Blog Post' : 
                         'Create New Blog Post'}
                    </h1>
                </header>

                {error && (
                    <div className="admin-alert admin-alert-danger">
                        <span className="admin-alert-icon">⚠️</span>
                        {error}
                        <button onClick={() => setError("")} className="admin-alert-close">×</button>
                    </div>
                )}
                
                {success && (
                    <div className="admin-alert admin-alert-success">
                        <span className="admin-alert-icon">✓</span>
                        {success}
                        <button onClick={() => setSuccess("")} className="admin-alert-close">×</button>
                    </div>
                )}

                {/* Blog List */}
                {activeTab === 'list' && (
                    <div className="admin-blog-list-container">
                        <div className="admin-list-controls">
                            <div className="admin-search-box">
                                <input
                                    type="text"
                                    placeholder="Search blogs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="admin-search-input"
                                />
                            </div>
                            <div className="admin-filter-box">
                                <select 
                                    value={filterStatus} 
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                    className="admin-filter-select"
                                >
                                    <option value="all">All Status</option>
                                    <option value="published">Published</option>
                                    <option value="draft">Draft</option>
                                </select>
                            </div>
                        </div>

                        <div className="admin-blog-stats">
                            <div className="admin-stat-card">
                                <h3>{blogs.length}</h3>
                                <p>Total Blogs</p>
                            </div>
                            <div className="admin-stat-card">
                                <h3>{blogs.filter(b => b.published).length}</h3>
                                <p>Published</p>
                            </div>
                            <div className="admin-stat-card">
                                <h3>{blogs.filter(b => !b.published).length}</h3>
                                <p>Drafts</p>
                            </div>
                            <div className="admin-stat-card">
                                <h3>{blogs.reduce((sum, b) => sum + (b.views || 0), 0)}</h3>
                                <p>Total Views</p>
                            </div>
                        </div>

                        {loading ? (
                            <div className="admin-loading">Loading blogs...</div>
                        ) : (
                            <div className="admin-blog-table-container">
                                <table className="admin-blog-table">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Author</th>
                                            <th>Categories</th>
                                            <th>Status</th>
                                            <th>Views</th>
                                            <th>Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredBlogs.length === 0 ? (
                                            <tr>
                                                <td colSpan="8" className="admin-text-center">
                                                    No blogs found
                                                </td>
                                            </tr>
                                        ) : (
                                            filteredBlogs.map(blog => (
                                                <tr key={blog._id}>
                                                    <td>
                                                        {blog.featuredImage?.url ? (
                                                            <img 
                                                                src={blog.featuredImage.url} 
                                                                alt={blog.featuredImage.altText || blog.title}
                                                                className="admin-blog-thumbnail"
                                                            />
                                                        ) : (
                                                            <div className="admin-blog-thumbnail-placeholder">📄</div>
                                                        )}
                                                    </td>
                                                    <td className="admin-blog-title-cell">{blog.title}</td>
                                                    <td>{blog.author}</td>
                                                    <td>
                                                        <div className="admin-categories">
                                                            {blog.categories?.slice(0, 2).map((cat, i) => (
                                                                <span key={i} className="admin-category-badge">{cat}</span>
                                                            ))}
                                                            {blog.categories?.length > 2 && (
                                                                <span className="admin-category-badge">+{blog.categories.length - 2}</span>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className={`admin-status-badge ${blog.published ? 'admin-published' : 'admin-draft'}`}>
                                                            {blog.published ? '✓ Published' : '○ Draft'}
                                                        </span>
                                                    </td>
                                                    <td>{blog.views || 0}</td>
                                                    <td>
                                                        {new Date(blog.publishedAt || blog.createdAt || blog.updatedAt).toLocaleDateString('en-US', { 
                                                            year: 'numeric', 
                                                            month: 'short', 
                                                            day: 'numeric',
                                                            timeZone: 'UTC'
                                                        })}
                                                    </td>
                                                    <td>
                                                        <div className="admin-action-buttons">
                                                            <button 
                                                                className="admin-btn-icon admin-btn-edit"
                                                                onClick={() => handleEdit(blog)}
                                                                title="Edit"
                                                            >
                                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                                                </svg>
                                                            </button>
                                                            <button 
                                                                className="admin-btn-icon admin-btn-toggle"
                                                                onClick={() => handleTogglePublish(blog)}
                                                                title={blog.published ? "Unpublish" : "Publish"}
                                                            >
                                                                {blog.published ? (
                                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                                                        <circle cx="12" cy="12" r="3"/>
                                                                    </svg>
                                                                ) : (
                                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                                                                        <line x1="1" y1="1" x2="23" y2="23"/>
                                                                    </svg>
                                                                )}
                                                            </button>
                                                            <button 
                                                                className="admin-btn-icon admin-btn-delete"
                                                                onClick={() => handleDelete(blog._id)}
                                                                title="Delete"
                                                            >
                                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                    <polyline points="3 6 5 6 21 6"/>
                                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                                                    <line x1="10" y1="11" x2="10" y2="17"/>
                                                                    <line x1="14" y1="11" x2="14" y2="17"/>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}

                {/* Create/Edit Form */}
                {(activeTab === 'create' || activeTab === 'edit') && (
                    <div className="admin-blog-form-container">
                        <form onSubmit={handleSubmit} className="admin-blog-form">
                            <div className="admin-form-row">
                                <div className="admin-form-group admin-full-width">
                                    <label htmlFor="title">Blog Title *</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={blogData.title}
                                        onChange={handleInputChange}
                                        placeholder="Enter an engaging title..."
                                        required
                                    />
                                </div>
                            </div>

                            <div className="admin-form-row">
                                <div className="admin-form-group">
                                    <label htmlFor="author">Author *</label>
                                    <input
                                        type="text"
                                        id="author"
                                        name="author"
                                        value={blogData.author}
                                        onChange={handleInputChange}
                                        placeholder="Author name"
                                        required
                                    />
                                </div>
                                <div className="admin-form-group">
                                    <label htmlFor="publishedAt">Publish Date</label>
                                    <input
                                        type="datetime-local"
                                        id="publishedAt"
                                        name="publishedAt"
                                        value={blogData.publishedAt}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="admin-form-group admin-full-width">
                                <label htmlFor="excerpt">Excerpt</label>
                                <textarea
                                    id="excerpt"
                                    name="excerpt"
                                    rows="3"
                                    value={blogData.excerpt}
                                    onChange={handleInputChange}
                                    placeholder="Brief summary (max 300 characters)"
                                    maxLength="300"
                                ></textarea>
                                <small className="admin-char-count">{blogData.excerpt.length}/300</small>
                            </div>

                            <div className="admin-form-group admin-full-width">
                                <label htmlFor="content">Content *</label>
                                <Editor
                                    apiKey={apiKey}
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
                                        toolbar: 'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                                        content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; font-size: 16px; line-height: 1.6; }',
                                        skin: 'oxide-dark',
                                        content_css: 'dark',
                                        relative_urls: false,
                                        remove_script_host: false,
                                        document_base_url: 'https://www.tarlose.com/'
                                    }}
                                />
                            </div>

                            <div className="admin-form-row">
                                <div className="admin-form-group">
                                    <label htmlFor="featuredImageUrl">Featured Image URL</label>
                                    <input
                                        type="text"
                                        id="featuredImageUrl"
                                        name="featuredImageUrl"
                                        value={blogData.featuredImageUrl}
                                        onChange={handleImageUrlChange}
                                        placeholder="Paste Cloudinary image URL here"
                                    />
                                    <small style={{ color: '#888', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                                        Upload your image to Cloudinary first, then paste the URL here
                                    </small>
                                    {imagePreview && (
                                        <div className="admin-image-preview">
                                            <img src={imagePreview} alt="Preview" />
                                        </div>
                                    )}
                                </div>
                                <div className="admin-form-group">
                                    <label htmlFor="featuredImageAlt">Image Alt Text</label>
                                    <input
                                        type="text"
                                        id="featuredImageAlt"
                                        name="featuredImageAlt"
                                        value={blogData.featuredImageAlt}
                                        onChange={handleInputChange}
                                        placeholder="Describe the image for accessibility"
                                    />
                                    <small className="admin-form-hint">Important for SEO and accessibility</small>
                                </div>
                            </div>

                            <div className="admin-form-group admin-full-width">
                                <label>Categories</label>
                                <div className="admin-checkbox-grid">
                                    {predefinedCategories.map((category, index) => (
                                        <div key={index} className="admin-checkbox-item">
                                            <input
                                                type="checkbox"
                                                id={`category-${index}`}
                                                value={category}
                                                checked={blogData.categories.includes(category)}
                                                onChange={handleCategoryChange}
                                            />
                                            <label htmlFor={`category-${index}`}>{category}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="admin-form-row">
                                <div className="admin-form-group">
                                    <label htmlFor="tags">Tags (comma separated)</label>
                                    <input
                                        type="text"
                                        id="tags"
                                        name="tags"
                                        value={blogData.tags}
                                        onChange={handleInputChange}
                                        placeholder="e.g., web, design, marketing"
                                    />
                                </div>
                            </div>

                            <div className="admin-form-section">
                                <h3>SEO Settings</h3>
                                <div className="admin-form-row">
                                    <div className="admin-form-group">
                                        <label htmlFor="metaTitle">Meta Title</label>
                                        <input
                                            type="text"
                                            id="metaTitle"
                                            name="metaTitle"
                                            value={blogData.metaTitle}
                                            onChange={handleInputChange}
                                            placeholder="SEO title (max 80 characters)"
                                            maxLength="80"
                                        />
                                        <small className="admin-char-count">{blogData.metaTitle.length}/80</small>
                                    </div>
                                </div>

                                <div className="admin-form-group admin-full-width">
                                    <label htmlFor="metaDescription">Meta Description</label>
                                    <textarea
                                        id="metaDescription"
                                        name="metaDescription"
                                        rows="2"
                                        value={blogData.metaDescription}
                                        onChange={handleInputChange}
                                        placeholder="SEO description (max 200 characters)"
                                        maxLength="200"
                                    ></textarea>
                                    <small className="admin-char-count">{blogData.metaDescription.length}/200</small>
                                </div>

                                <div className="admin-form-group admin-full-width">
                                    <label htmlFor="metaKeywords">Meta Keywords (comma separated)</label>
                                    <input
                                        type="text"
                                        id="metaKeywords"
                                        name="metaKeywords"
                                        value={blogData.metaKeywords}
                                        onChange={handleInputChange}
                                        placeholder="keyword1, keyword2, keyword3"
                                    />
                                </div>
                            </div>

                            <div className="admin-form-group admin-full-width">
                                <div className="admin-checkbox-item admin-large">
                                    <input
                                        type="checkbox"
                                        id="published"
                                        name="published"
                                        checked={blogData.published}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="published">
                                        <strong>Publish immediately</strong>
                                        <span>Make this blog post visible to public</span>
                                    </label>
                                </div>
                            </div>

                            <div className="admin-form-actions">
                                <button 
                                    type="button" 
                                    className="admin-btn admin-btn-secondary"
                                    onClick={() => { setActiveTab('list'); resetForm(); }}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    className="admin-btn admin-btn-primary"
                                    disabled={loading}
                                >
                                    {loading ? 'Saving...' : currentBlog ? 'Update Blog' : 'Create Blog'}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
