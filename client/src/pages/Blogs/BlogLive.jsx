import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BlogLive.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import { Helmet } from "react-helmet";

import WhatsNew from "../../components/Blog-tabs/WhatsNew";

import bgheader from "../../assets/svgs/background-header.svg";
import {
  FaHeart,
  FaRegHeart,
  FaShare,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaComment,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

const BlogLive = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [showShareOptions, setShowShareOptions] = useState(null);

  const [activeTab, setActiveTab] = useState("whats-new");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/blogs`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Ensure blogs is always an array
      const blogsArray = Array.isArray(response.data)
        ? response.data
        : Array.isArray(response.data.blogs)
        ? response.data.blogs
        : [];
      setBlogs(blogsArray);
      // Extract unique categories
      const uniqueCategories = [
        ...new Set(blogsArray.flatMap((blog) => blog.categories)),
      ];
      setCategories(uniqueCategories);
      setLoading(false);
    } catch (error) {
      setError("Failed to load blogs");
      setLoading(false);
    }
  };

  const handleLike = async (blogId) => {
    try {
      const response = await axios.put(
        `${API_URL}/api/blogs/${blogId}/like`,
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setBlogs(
        blogs.map((blog) => (blog._id === blogId ? response.data : blog))
      );
    } catch (error) {
      console.error("Failed to like blog:", error);
    }
  };

  const handleShare = (platform, blog) => {
    const url = `${window.location.origin}/blog/${blog.slug}`;
    const title = blog.title;
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
    setShowShareOptions(null);
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      !selectedCategory || blog.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="modern-loading-container">
          <div className="modern-spinner">
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
          </div>
          <p className="loading-text">Loading amazing content...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog - Tarlose</title>
        <meta
          name="description"
          content="Explore our latest blog posts about technology, design, and digital solutions."
        />
      </Helmet>
      <Cursor />
      <Navbar />

      {/* Modern Hero Section */}

      {/* <div className="modern-blog-hero">
                <div className="hero-background">
                    <div className="hero-gradient"></div>
                    <div className="hero-pattern"></div>
                </div>
                <div className="hero-content">
                    <div className="container">
                        <div className="hero-text-container">
                            <h1 className="hero-title">
                                <span className="title-line">Discover</span>
                                <span className="title-line accent">Our Stories</span>
                            </h1>
                            <p className="hero-subtitle">
                                Explore curated insights, innovative ideas, and expert perspectives from the world of technology and design
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">{blogs.length}</span>
                                    <span className="stat-label">Articles</span>
                                </div>
                                <div className="stat-divider"></div>
                                <div className="stat-item">
                                    <span className="stat-number">{categories.length}</span>
                                    <span className="stat-label">Categories</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

      <div className="modern-blog-container">
        <div className="container">
          <div className="blog-tabs-container">
            <div className="blog-tabs">
              <nav className="nav-menu">
                <ul>
                  <li>
                    <a
                      href="#"
                      className={activeTab === "whats-new" ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab("whats-new");
                      }}
                      style={{
                        color: activeTab === "whats-new" ? "#007bff" : "#333",
                        fontWeight:
                          activeTab === "whats-new" ? "bold" : "normal",
                      }}
                    >
                      What's New
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={
                        activeTab === "website-development" ? "active" : ""
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab("website-development");
                      }}
                      style={{
                        color:
                          activeTab === "website-development" ? "#007bff" : "#333",
                        fontWeight:
                          activeTab === "website-development" ? "bold" : "normal",
                      }}
                    >
                      Website Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={activeTab === "graphic-design" ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab("graphic-design");
                      }}
                      style={{
                        color:
                          activeTab === "graphic-design" ? "#007bff" : "#333",
                        fontWeight:
                          activeTab === "graphic-design" ? "bold" : "normal",
                      }}
                    >
                      Graphic Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={activeTab === "digital-marketing" ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab("digital-marketing");
                      }}
                      style={{
                        color:
                          activeTab === "digital-marketing" ? "#007bff" : "#333",
                        fontWeight:
                          activeTab === "digital-marketing" ? "bold" : "normal",
                      }}
                    >
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={activeTab === "tech-tools" ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab("tech-tools");
                      }}
                      style={{
                        color: activeTab === "tech-tools" ? "#007bff" : "#333",
                        fontWeight: activeTab === "tech-tools" ? "bold" : "normal",
                      }}
                    >
                      Tech Tools
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="modern-search-container">
                <div className="search-icon">
                  <FaSearch />
                </div>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div style={{ marginTop: "2rem" }}>
            {activeTab === "whats-new" && <WhatsNew />}
            {activeTab === "website-development" && <div>Website Development Content</div>}
            {activeTab === "graphic-design" && <div>Graphic Design Content</div>}
            {activeTab === "digital-marketing" && <div>Digital Marketing Content</div>}
            {activeTab === "tech-tools" && <div>Tech Tools Content</div>}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogLive;
