import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import BlogTabsNav from "../../components/Blog-tabs/BlogTabsNav";
import "../../components/Blog-tabs/BlogDetailPage.css";
import logo from "../../assets/Logos/favicon.svg"

const API_URL = import.meta.env.VITE_API_URL;

const Blog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/blogs/${slug}`);
        setBlog(response.data);
        setLoading(false);
      } catch (err) {
        setError("Blog not found");
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  const handleShare = (platform, blog) => {
    const url = `${window.location.origin}/blog/${blog.slug}`;
    const title = blog.title;
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return (
      <div style={{ color: '#fff', textAlign: 'center', padding: '2rem' }}>Loading...</div>
    );
  }
  if (error || !blog) {
    return (
      <div style={{ color: '#fff', textAlign: 'center', padding: '2rem' }}>{error || "Blog not found"}</div>
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
      <BlogTabsNav className="blog-tabs-nav" />
      <header className="blog-detail-header">
        <div className="container">
          <div className="grid">
            <div className="column-one">
              <h2>{blog.title}</h2>
              <div className="PostAuthorsstyles">
                <div className="AvatarsRow">
                  <img
                    src={logo}
                    alt={blog.title}
                  />
                  <a href="#">
                    <div className="Avatar size--S"></div>
                  </a>
                </div>
                <span className="authors ">
                  Written By
                  <a href="#">{blog.author || "Author Name"}</a>
                </span>
                <span className="divider">•</span>
                <span className="date">{blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "December 17, 2024"}</span>
              </div>
            </div>
            <div className="column-two">
              <div className="postImage">
                <img
                  src={blog.featuredImage?.url || "https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F1fdaLBuBELIc9AbULUzoDH%2Ffddea4af5e3d31715ddeeac25e3410f6%2FHow_AI_Can_Help_You_Scale_Multilingual_Support__1_.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1678&h=942&s=96b2356ac8953ce9c6b50439f9e94ce7"}
                  alt={blog.title}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="blog-detail-content">
        <div className="blog-detail-flex">
          <div className="blog-detail-text">
            {/* Blog content from database, rendered as HTML */}
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
          <div className="blog-detail-social-share">
            <ul className="blog-detail-social SocialShare SocialShare--direction-VERTICAL">
              <li>
                <button
                  type="button"
                  aria-label="Share on Twitter"
                  onClick={() => handleShare("twitter", blog)}
                  style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-twitter-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  aria-label="Share on Facebook"
                  onClick={() => handleShare("facebook", blog)}
                  style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  aria-label="Share on LinkedIn"
                  onClick={() => handleShare("linkedin", blog)}
                  style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  aria-label="Share via Email"
                  onClick={() => handleShare("email", blog)}
                  style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;