import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import "../../index.css";
import "../home.css";
import "../responsive.css";
import "../Blogs/Blog.css";
import { Helmet } from "react-helmet";
import bgheader from "../../assets/svgs/background-header.svg";
import { FaHeart, FaRegHeart, FaShare, FaFacebook, FaTwitter, FaLinkedin, FaEye, FaClock, FaUser } from 'react-icons/fa';

const API_URL = import.meta.env.VITE_API_URL;

const Blog = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [comment, setComment] = useState("");
    const [showShareOptions, setShowShareOptions] = useState(false);

    useEffect(() => {
        fetchBlog();
    }, [slug]);

    const fetchBlog = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/blogs/${slug}`, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setBlog(response.data);
            setLoading(false);
        } catch (error) {
            setError("Failed to load blog post");
            setLoading(false);
        }
    };

    const handleLike = async () => {
        try {
            const response = await axios.put(`${API_URL}/api/blogs/${blog._id}/like`, {}, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setBlog(response.data);
        } catch (error) {
            console.error("Failed to like blog:", error);
        }
    };

    const handleComment = async (e) => {
        e.preventDefault();
        if (!comment.trim()) return;

        try {
            const response = await axios.post(`${API_URL}/api/blogs/${blog._id}/comment`, {
                comment: comment.trim()
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setBlog(response.data);
            setComment("");
        } catch (error) {
            console.error("Failed to add comment:", error);
        }
    };

    const handleShare = (platform) => {
        const url = window.location.href;
        const title = blog.title;
        let shareUrl = '';

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, '_blank', 'width=600,height=400');
        setShowShareOptions(false);
    };

    if (loading) {
        return (
            <>
                <Navbar />
                <div style={{
                    minHeight: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)'
                }}>
                    <div style={{
                        textAlign: 'center',
                        color: '#e0e0e0'
                    }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            border: '3px solid #333',
                            borderTop: '3px solid #007bff',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                            margin: '0 auto 20px'
                        }}></div>
                        <p style={{ fontSize: '18px', fontWeight: '300' }}>Loading article...</p>
                    </div>
                </div>
                <Footer />
                <style jsx>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </>
        );
    }

    if (error || !blog) {
        return (
            <>
                <Navbar />
                <div style={{
                    minHeight: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)',
                    padding: '40px 20px'
                }}>
                    <div style={{
                        textAlign: 'center',
                        background: 'rgba(220, 53, 69, 0.1)',
                        border: '1px solid rgba(220, 53, 69, 0.3)',
                        borderRadius: '12px',
                        padding: '40px',
                        maxWidth: '500px'
                    }}>
                        <h3 style={{ color: '#dc3545', marginBottom: '16px' }}>Oops!</h3>
                        <p style={{ color: '#e0e0e0', fontSize: '16px' }}>
                            {error || "Blog post not found"}
                        </p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>{blog.metaTitle || blog.title} - Tarlose Blog</title>
                <meta name="description" content={blog.metaDescription || blog.excerpt} />
                <meta name="keywords" content={blog.metaKeywords?.join(", ")} />
            </Helmet>
            <Cursor />
            <Navbar />

            {/* Hero Section */}
            <div style={{
                position: 'relative',
                height: '70vh',
                background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${blog.featuredImage?.url || bgheader})`,
                backgroundSize: '70vh',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    textAlign: 'center',
                    maxWidth: 'auto',
                    padding: '0 20px',
                    animation: 'fadeInUp 1s ease-out'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '700',
                        color: '#ffffff',
                        marginBottom: '24px',
                        lineHeight: '1.2',
                        textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                    }}>
                        {blog.title}
                    </h1>
                    
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px',
                        flexWrap: 'wrap',
                        fontSize: '16px',
                        color: '#b0b0b0'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaUser style={{ fontSize: '14px' }} />
                            <span>{blog.author}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaClock style={{ fontSize: '14px' }} />
                            <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                            })}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaEye style={{ fontSize: '14px' }} />
                            <span>{blog.views} views</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div style={{
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                minHeight: '100vh',
                paddingTop: '80px',
                paddingBottom: '80px'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 20px'
                }}>
                    <article style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '20px',
                        padding: '60px 40px',
                        marginBottom: '40px',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                    }}>
                        {blog.excerpt && (
                            <div style={{
                                marginBottom: '40px',
                                padding: '0 0 40px 0',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <p style={{
                                    fontSize: '20px',
                                    lineHeight: '1.6',
                                    color: '#c0c0c0',
                                    fontWeight: '300',
                                    fontStyle: 'italic'
                                }}>
                                    {blog.excerpt}
                                </p>
                            </div>
                        )}

                        <div 
                            style={{
                                color: '#e0e0e0',
                                fontSize: '18px',
                                lineHeight: '1.8',
                                marginBottom: '50px'
                            }}
                            dangerouslySetInnerHTML={{ __html: blog.content }} 
                        />

                        {/* Tags and Categories */}
                        {(blog.categories?.length > 0 || blog.tags?.length > 0) && (
                            <div style={{
                                padding: '30px 0',
                                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                                marginBottom: '40px'
                            }}>
                                {blog.categories?.length > 0 && (
                                    <div style={{ marginBottom: '20px' }}>
                                        <h5 style={{ 
                                            color: '#ffffff', 
                                            fontSize: '16px', 
                                            marginBottom: '12px',
                                            fontWeight: '600'
                                        }}>
                                            Categories
                                        </h5>
                                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                            {blog.categories.map((category, index) => (
                                                <span
                                                    key={index}
                                                    style={{
                                                        background: 'linear-gradient(135deg, #007bff, #0056b3)',
                                                        color: '#ffffff',
                                                        padding: '6px 16px',
                                                        borderRadius: '20px',
                                                        fontSize: '14px',
                                                        fontWeight: '500'
                                                    }}
                                                >
                                                    {category}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {blog.tags?.length > 0 && (
                                    <div>
                                        <h5 style={{ 
                                            color: '#ffffff', 
                                            fontSize: '16px', 
                                            marginBottom: '12px',
                                            fontWeight: '600'
                                        }}>
                                            Tags
                                        </h5>
                                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                            {blog.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    style={{
                                                        background: 'rgba(255, 255, 255, 0.1)',
                                                        color: '#b0b0b0',
                                                        padding: '6px 16px',
                                                        borderRadius: '20px',
                                                        fontSize: '14px',
                                                        border: '1px solid rgba(255, 255, 255, 0.2)'
                                                    }}
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div style={{
                            display: 'flex',
                            gap: '16px',
                            alignItems: 'center',
                            paddingTop: '30px',
                            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                            marginBottom: '50px'
                        }}>
                            <button 
                                onClick={handleLike}
                                style={{
                                    background: blog.isLiked ? 'linear-gradient(135deg, #dc3545, #c82333)' : 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: '50px',
                                    padding: '12px 24px',
                                    color: '#ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    backdropFilter: 'blur(10px)'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = 'none';
                                }}
                            >
                                {blog.isLiked ? <FaHeart /> : <FaRegHeart />}
                                <span>{blog.likes} Likes</span>
                            </button>

                            <div style={{ position: 'relative' }}>
                                <button 
                                    onClick={() => setShowShareOptions(!showShareOptions)}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: '50px',
                                        padding: '12px 24px',
                                        color: '#ffffff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    <FaShare />
                                    <span>Share</span>
                                </button>
                                
                                {showShareOptions && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '100%',
                                        left: '0',
                                        marginTop: '10px',
                                        background: 'rgba(0, 0, 0, 0.9)',
                                        backdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '12px',
                                        padding: '10px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '8px',
                                        minWidth: '150px',
                                        zIndex: 1000,
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                                    }}>
                                        <button 
                                            onClick={() => handleShare('facebook')}
                                            style={{
                                                background: '#1877f2',
                                                border: 'none',
                                                borderRadius: '8px',
                                                padding: '10px 16px',
                                                color: '#ffffff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                cursor: 'pointer',
                                                fontSize: '14px'
                                            }}
                                        >
                                            <FaFacebook /> Facebook
                                        </button>
                                        <button 
                                            onClick={() => handleShare('twitter')}
                                            style={{
                                                background: '#1da1f2',
                                                border: 'none',
                                                borderRadius: '8px',
                                                padding: '10px 16px',
                                                color: '#ffffff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                cursor: 'pointer',
                                                fontSize: '14px'
                                            }}
                                        >
                                            <FaTwitter /> Twitter
                                        </button>
                                        <button 
                                            onClick={() => handleShare('linkedin')}
                                            style={{
                                                background: '#0077b5',
                                                border: 'none',
                                                borderRadius: '8px',
                                                padding: '10px 16px',
                                                color: '#ffffff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                cursor: 'pointer',
                                                fontSize: '14px'
                                            }}
                                        >
                                            <FaLinkedin /> LinkedIn
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Comments Section */}
                        <div>
                            <h3 style={{
                                color: '#ffffff',
                                fontSize: '28px',
                                marginBottom: '30px',
                                fontWeight: '600'
                            }}>
                                Comments ({blog.comments?.length || 0})
                            </h3>
                            
                            <form onSubmit={handleComment} style={{ marginBottom: '40px' }}>
                                <textarea
                                    style={{
                                        width: '100%',
                                        minHeight: '120px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: '12px',
                                        padding: '16px',
                                        color: '#ffffff',
                                        fontSize: '16px',
                                        resize: 'vertical',
                                        marginBottom: '16px',
                                        fontFamily: 'inherit'
                                    }}
                                    placeholder="Share your thoughts..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                                <button 
                                    type="submit" 
                                    style={{
                                        background: 'linear-gradient(135deg, #007bff, #0056b3)',
                                        border: 'none',
                                        borderRadius: '50px',
                                        padding: '12px 32px',
                                        color: '#ffffff',
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 25px rgba(0,123,255,0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    Post Comment
                                </button>
                            </form>

                            <div>
                                {blog.comments?.map((comment, index) => (
                                    <div 
                                        key={index} 
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255, 255, 255, 0.08)',
                                            borderRadius: '16px',
                                            padding: '24px',
                                            marginBottom: '20px',
                                            backdropFilter: 'blur(10px)'
                                        }}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '12px'
                                        }}>
                                            <strong style={{ 
                                                color: '#ffffff',
                                                fontSize: '16px'
                                            }}>
                                                {comment.user?.name || 'Anonymous'}
                                            </strong>
                                            <small style={{ 
                                                color: '#888888',
                                                fontSize: '14px'
                                            }}>
                                                {new Date(comment.createdAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                            </small>
                                        </div>
                                        <p style={{ 
                                            color: '#d0d0d0',
                                            fontSize: '16px',
                                            lineHeight: '1.6',
                                            margin: 0
                                        }}>
                                            {comment.comment}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <Footer />
            
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    );
};

export default Blog;