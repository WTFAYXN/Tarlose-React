import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BlogTabsPages.css";

const API_URL = import.meta.env.VITE_API_URL;

function CardList({ cards }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
      {cards.map((card) => (
        <div className="col" key={card._id}>
          <Link
            to={`/blog/${card.slug}`}
            className="col-link"
            style={{ textDecoration: 'none' }}
          >
            <div
              className="card glass-card h-100"
              style={{ cursor: "pointer" }}
              tabIndex={0}
              role="button"
            >
              <img src={card.featuredImage?.url || ''} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <p className="card-text text-capitalize">{card.title}</p>
                <p className="card-text">
                  {card.metaDescription?.split(" ").slice(0, 8).join(" ")}...
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

const BlogTabsPages = ({ category }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/blogs`, {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' }
        });
        let blogs = response.data;
        if (category) {
          blogs = blogs.filter(blog => blog.categories && blog.categories.includes(category));
        }
        setCards(blogs);
      } catch (err) {
        setCards([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [category]);

  if (loading) return <div style={{ color: '#fff', textAlign: 'center', padding: '2rem' }}>Loading...</div>;
  if (!cards.length) return <div style={{ color: '#fff', textAlign: 'center', padding: '2rem' }}>No posts found.</div>;

  return (
    <div className="container mx-auto p-4">
      <CardList cards={cards} />
    </div>
  );
};

export default BlogTabsPages;