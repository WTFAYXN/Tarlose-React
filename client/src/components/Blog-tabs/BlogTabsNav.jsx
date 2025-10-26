import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import searchIcon from "../../assets/svgs/search.svg";
import './SearchBar.css';

const API_URL = import.meta.env.VITE_API_URL;

const BlogTabsNav = ({ activeTab, setActiveTab, searchTerm, setSearchTerm }) => {
  const [isSearchActive, setIsSearchActive] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Fetch all blogs on mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/blogs`);
        setAllBlogs(response.data);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search and prioritize results
  useEffect(() => {
    if (searchTerm.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedIndex(-1);
      return;
    }

    const searchLower = searchTerm.toLowerCase();
    
    // Score each blog based on match quality
    const scoredBlogs = allBlogs.map(blog => {
      let score = 0;
      let matchType = '';

      // Title matches (highest priority)
      if (blog.title?.toLowerCase().includes(searchLower)) {
        if (blog.title.toLowerCase().startsWith(searchLower)) {
          score += 100; // Exact start match
          matchType = 'Title';
        } else {
          score += 50; // Contains in title
          matchType = 'Title';
        }
      }

      // Excerpt matches
      if (blog.excerpt?.toLowerCase().includes(searchLower)) {
        score += 30;
        if (!matchType) matchType = 'Excerpt';
      }

      // Meta description matches
      if (blog.metaDescription?.toLowerCase().includes(searchLower)) {
        score += 25;
        if (!matchType) matchType = 'Description';
      }

      // Category matches
      if (blog.categories?.some(cat => cat.toLowerCase().includes(searchLower))) {
        score += 40;
        if (!matchType) matchType = 'Category';
      }

      // Content matches (lowest priority)
      if (blog.content?.toLowerCase().includes(searchLower)) {
        score += 10;
        if (!matchType) matchType = 'Content';
      }

      return { ...blog, score, matchType };
    });

    // Filter blogs with score > 0, sort by score descending, take top 5
    const topResults = scoredBlogs
      .filter(blog => blog.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    setSuggestions(topResults);
    setShowSuggestions(topResults.length > 0);
    setSelectedIndex(-1);
  }, [searchTerm, allBlogs]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("blogActiveTab", tab);
    if (window.location.pathname !== "/blogs") {
      navigate("/blogs");
    }
  };

  const handleSuggestionClick = (slug) => {
    setShowSuggestions(false);
    setSearchTerm('');
    setSelectedIndex(-1);
    navigate(`/blog/${slug}`);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSuggestionClick(suggestions[selectedIndex].slug);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
      default:
        break;
    }
  };

  const highlightMatch = (text, searchTerm) => {
    if (!text || !searchTerm) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === searchTerm.toLowerCase() 
        ? <mark key={index} className="search-highlight">{part}</mark>
        : part
    );
  };

  return (
    <div className="blog-tabs-container">
      <div className="blog-tabs container">
        <nav className="nav-menu">
          <ul>
            <li>
              <a
                href="#"
                className={activeTab === "whats-new" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick("whats-new");
                }}
                style={{
                  color: activeTab === "whats-new" ? "#007bff" : "#333",
                  fontWeight: activeTab === "whats-new" ? "bold" : "normal",
                }}
              >
                What's New
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeTab === "website-development" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick("website-development");
                }}
                style={{
                  color: activeTab === "website-development" ? "#007bff" : "#333",
                  fontWeight: activeTab === "website-development" ? "bold" : "normal",
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
                  handleTabClick("graphic-design");
                }}
                style={{
                  color: activeTab === "graphic-design" ? "#007bff" : "#333",
                  fontWeight: activeTab === "graphic-design" ? "bold" : "normal",
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
                  handleTabClick("digital-marketing");
                }}
                style={{
                  color: activeTab === "digital-marketing" ? "#007bff" : "#333",
                  fontWeight: activeTab === "digital-marketing" ? "bold" : "normal",
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
                  handleTabClick("tech-tools");
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
        <div 
          ref={searchRef}
          className={`search-bar-container ${isSearchActive ? 'active' : ''}`}
        >
          <img 
            src={searchIcon}
            alt="magnifier"
            className="magnifier" 
            onClick={() => setIsSearchActive(!isSearchActive)}
          />
          <input 
            type="text" 
            className="input" 
            placeholder="Search blogs..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => searchTerm.length >= 2 && suggestions.length > 0 && setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
          />
          
          {showSuggestions && suggestions.length > 0 && (
            <div className="search-suggestions">
              <div className="suggestions-header">
                <span className="suggestions-count">{suggestions.length} result{suggestions.length !== 1 ? 's' : ''} found</span>
                <span className="suggestions-hint">Use ↑↓ to navigate, Enter to select, Esc to close</span>
              </div>
              {suggestions.map((blog, index) => (
                <div
                  key={blog._id}
                  className={`suggestion-item ${selectedIndex === index ? 'selected' : ''}`}
                  onClick={() => handleSuggestionClick(blog.slug)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="suggestion-content">
                    {blog.featuredImage?.url && (
                      <img 
                        src={blog.featuredImage.url} 
                        alt={blog.title}
                        className="suggestion-image"
                      />
                    )}
                    <div className="suggestion-text">
                      <div className="suggestion-title">
                        {highlightMatch(blog.title, searchTerm)}
                      </div>
                      <div className="suggestion-meta">
                        <span className="suggestion-badge">{blog.matchType}</span>
                        {blog.categories?.[0] && (
                          <>
                            <span className="suggestion-divider">•</span>
                            <span className="suggestion-category">{blog.categories[0]}</span>
                          </>
                        )}
                      </div>
                      {(blog.excerpt || blog.metaDescription) && (
                        <div className="suggestion-excerpt">
                          {blog.excerpt || blog.metaDescription}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogTabsNav;