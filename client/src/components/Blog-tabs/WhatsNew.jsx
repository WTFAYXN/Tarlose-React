import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./WhatsNew.css";

const API_URL = import.meta.env.VITE_API_URL;

function WhatsNew() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/blogs`, {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' }
        });
        // Sort by publishedAt and take the 3 most recent
        const sorted = response.data.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        setPosts(sorted.slice(0, 3));
      } catch (err) {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <div style={{ color: '#fff', textAlign: 'center', padding: '2rem' }}>Loading...</div>;
  if (!posts.length) return <div style={{ color: '#fff', textAlign: 'center', padding: '2rem' }}>No posts found.</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="header-title mb-4">
          <h2 className="text-xl font-bold text-gray-800">Most Recent Posts </h2>
        <div>
          <Link to="/blogs" className="text-blue-600 hover:underline ">
            view all Posts
          </Link>
        </div>
      </div>
      <hr className="hr-blog" />
      <div className="recent-posts mt-4">
        <Link to={`/blog/${posts[0].slug}`} className="large-post block hover:bg-gray-50 transition">
          <div className="post-image mb-4">
            <img
              src={posts[0].featuredImage?.url || ''}
              alt={posts[0].title}
              className="rounded img-fluid"
            />
          </div>
          <div className="post-content">
            <p className="post-category">{posts[0].categories?.[0]}</p>
            <h2 className="post-title mb-3">{posts[0].title}</h2>
            <p className="post-description">
              {posts[0].excerpt || posts[0].metaDescription || ''}
            </p>
          </div>
        </Link>
        <div className="small-posts">
          {posts.slice(1, 3).map((post, idx) => (
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
