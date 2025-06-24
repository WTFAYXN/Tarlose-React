import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BlogLive.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import { Helmet } from "react-helmet";
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
                    <a href="#">What's New</a>
                  </li>
                  <li>
                    <a href="#">Customer Service</a>
                  </li>
                  <li>
                    <a href="#">Growth & Culture</a>
                  </li>
                  <li>
                    <a href="#">Inside Help Scout</a>
                  </li>
                  <li>
                    <a href="#">The Supportive</a>
                  </li>
                  <li>
                    <a href="#">Support Toolkit</a>
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

          {/* <div className="row g-5"> */}
          {/* Modern Sidebar */}
          {/* <div className="col-lg-4 col-xl-3">
                            <div className="modern-sidebar">
                                <div className="sidebar-section">
                                    <div className="section-header">
                                        <FaSearch className="section-icon" />
                                        <h3 className="section-title">Search</h3>
                                    </div>
                                    <div className="modern-search-container">
                                        <input
                                            type="text"
                                            className="modern-search-input"
                                            placeholder="Search articles..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                        <FaSearch className="search-icon" />
                                    </div>
                                </div>

                                <div className="sidebar-section">
                                    <div className="section-header">
                                        <FaFilter className="section-icon" />
                                        <h3 className="section-title">Categories</h3>
                                    </div>
                                    <div className="category-filters">
                                        <button
                                            className={`category-btn ${!selectedCategory ? 'active' : ''}`}
                                            onClick={() => setSelectedCategory("")}
                                        >
                                            <span className="category-text">All Categories</span>
                                            <span className="category-count">{blogs.length}</span>
                                        </button>
                                        {categories.map((category, index) => {
                                            const count = blogs.filter(blog => blog.categories.includes(category)).length;
                                            return (
                                                <button
                                                    key={index}
                                                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                                    onClick={() => setSelectedCategory(category)}
                                                >
                                                    <span className="category-text">{category}</span>
                                                    <span className="category-count">{count}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div> */}

          {/* Modern Blog Grid */}
          {/* <div className="col-lg-8 col-xl-9">
                            {error ? (
                                <div className="modern-error-container">
                                    <div className="error-icon">⚠️</div>
                                    <h3 className="error-title">Oops! Something went wrong</h3>
                                    <p className="error-message">{error}</p>
                                </div>
                            ) : filteredBlogs.length === 0 ? (
                                <div className="modern-empty-state">
                                    <div className="empty-icon">🔍</div>
                                    <h3 className="empty-title">No articles found</h3>
                                    <p className="empty-message">Try adjusting your search or exploring different categories</p>
                                </div>
                            ) : (
                                <>
                                    <div className="results-header">
                                        <h2 className="results-title">
                                            {selectedCategory ? `${selectedCategory} Articles` : 'All Articles'}
                                        </h2>
                                        <span className="results-count">{filteredBlogs.length} articles</span>
                                    </div>
                                    
                                    <div className="modern-blog-grid">
                                        {filteredBlogs.map((blog, index) => (
                                            <article key={blog._id} className={`modern-blog-card ${index === 0 ? 'featured' : ''}`}>
                                                <div className="card-image-container">
                                                    <img
                                                        src={blog.featuredImage?.url || bgheader}
                                                        className="card-image"
                                                        alt={blog.featuredImage?.altText || blog.title}
                                                        loading="lazy"
                                                    />
                                                    <div className="image-overlay">
                                                        <Link to={`/blog/${blog.slug}`} className="read-more-btn">
                                                            <span>Read Article</span>
                                                            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none">
                                                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                                
                                                <div className="card-content">
                                                    <div className="card-categories">
                                                        {blog.categories?.slice(0, 2).map((category, idx) => (
                                                            <span key={idx} className="category-tag">
                                                                {category}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    
                                                    <h3 className="card-title">
                                                        <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                                                    </h3>
                                                    
                                                    <p className="card-excerpt">
                                                        {blog.excerpt?.substring(0, 120)}...
                                                    </p>
                                                    
                                                    <div className="card-meta">
                                                        <time className="publish-date">
                                                            {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                                                                month: 'short',
                                                                day: 'numeric',
                                                                year: 'numeric'
                                                            })}
                                                        </time>
                                                        
                                                        <div className="card-actions">
                                                            <button 
                                                                className={`action-btn like-btn ${blog.isLiked ? 'liked' : ''}`}
                                                                onClick={() => handleLike(blog._id)}
                                                                title="Like this article"
                                                            >
                                                                {blog.isLiked ? <FaHeart /> : <FaRegHeart />}
                                                                <span>{blog.likes}</span>
                                                            </button>
                                                            
                                                            <Link 
                                                                to={`/blog/${blog.slug}#comments`}
                                                                className="action-btn comment-btn"
                                                                title="View comments"
                                                            >
                                                                <FaComment />
                                                                <span>{blog.comments?.length || 0}</span>
                                                            </Link>
                                                            
                                                            <div className="share-container">
                                                                <button 
                                                                    className="action-btn share-btn"
                                                                    onClick={() => setShowShareOptions(showShareOptions === blog._id ? null : blog._id)}
                                                                    title="Share this article"
                                                                >
                                                                    <FaShare />
                                                                </button>
                                                                
                                                                {showShareOptions === blog._id && (
                                                                    <div className="modern-share-menu">
                                                                        <button 
                                                                            onClick={() => handleShare('facebook', blog)} 
                                                                            className="share-option facebook"
                                                                        >
                                                                            <FaFacebook />
                                                                            <span>Facebook</span>
                                                                        </button>
                                                                        <button 
                                                                            onClick={() => handleShare('twitter', blog)} 
                                                                            className="share-option twitter"
                                                                        >
                                                                            <FaTwitter />
                                                                            <span>Twitter</span>
                                                                        </button>
                                                                        <button 
                                                                            onClick={() => handleShare('linkedin', blog)} 
                                                                            className="share-option linkedin"
                                                                        >
                                                                            <FaLinkedin />
                                                                            <span>LinkedIn</span>
                                                                        </button>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div> */}
          {/* </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogLive;
