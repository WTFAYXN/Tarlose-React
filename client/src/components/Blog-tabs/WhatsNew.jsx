import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./WhatsNew.css";

const API_URL = import.meta.env.VITE_API_URL;

function WhatsNew({ searchTerm = "" }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/blogs`, {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' }
        });
        // Sort by publishedAt (or fallback to createdAt/updatedAt) and take the 3 most recent
        const sorted = response.data.sort((a, b) => {
          const dateA = new Date(a.publishedAt || a.createdAt || a.updatedAt);
          const dateB = new Date(b.publishedAt || b.createdAt || b.updatedAt);
          return dateB - dateA;
        });
        setPosts(sorted.slice(0, 3));
      } catch (err) {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Filter posts based on search term
  const filteredPosts = posts.filter((post) => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      post.title?.toLowerCase().includes(searchLower) ||
      post.excerpt?.toLowerCase().includes(searchLower) ||
      post.metaDescription?.toLowerCase().includes(searchLower) ||
      post.content?.toLowerCase().includes(searchLower) ||
      post.categories?.some(cat => cat.toLowerCase().includes(searchLower))
    );
  });

  if (loading) return <div style={{ color: '#fff', textAlign: 'center', padding: '2rem' }}>Loading...</div>;
  if (!filteredPosts.length) return <div style={{ color: '#fff', textAlign: 'center', padding: '2rem' }}>No posts found{searchTerm ? ` for "${searchTerm}"` : ''}.</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="header-title mb-4">
          <h2 className="text-xl font-bold text-gray-800">Most Recent Posts </h2>
        <div>
          {/* <Link to="/blogs" className="text-blue-600 hover:underline ">
            view all Posts
          </Link> */}
        </div>
      </div>
      <hr className="hr-blog" />
      <div className="recent-posts mt-4">
        <Link to={`/blog/${filteredPosts[0].slug}`} className="large-post block hover:bg-gray-50 transition">
          <div className="post-image mb-4">
            <img
              src={filteredPosts[0].featuredImage?.url || ''}
              alt={filteredPosts[0].title}
              className="rounded img-fluid"
            />
          </div>
          <div className="post-content">
            <p className="post-category">{filteredPosts[0].categories?.[0]}</p>
            <h2 className="post-title mb-3">{filteredPosts[0].title}</h2>
            <p className="post-description">
              {filteredPosts[0].excerpt || filteredPosts[0].metaDescription || ''}
            </p>
          </div>
        </Link>
        <div className="small-posts">
          {filteredPosts.slice(1, 3).map((post, idx) => (
            <Link
              key={post._id}
              to={`/blog/${post.slug}`}
              className={`small-post-${idx === 0 ? 'one' : 'two'} block hover:bg-gray-50 transition${idx === 1 ? ' mt-5' : ''}`}
            >
              <div className="small-post-image mb-3">
                <img
                  src={post.featuredImage?.url || ''}
                  alt={post.title}
                  className="rounded img-fluid"
                />
              </div>
              <div className="small-post-content">
                <p className="small-post-category">{post.categories?.[0]}</p>
                <h2 className="small-post-title">{post.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatsNew;
