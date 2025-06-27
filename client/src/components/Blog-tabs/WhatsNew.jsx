import { useState } from "react";
import "./WhatsNew.css";

function WhatsNew() {
  const [posts] = useState([
    {
      id: 1,
      category: "Inside Help Scout",
      title: "Listen First, Design Later",
      description:
        "Design better by listening first. Learn how Help Scout product designers use support conversations to build empathy, improve products, and stay close to customers.",
      image:
        "https://cdn.pixabay.com/photo/2016/08/12/14/25/abstract-1588720_1280.jpg",
      link: "https://www.helpscout.com/blog/rome-retreat/",
    },
    {
      id: 2,
      category: "Customer Service",
      title: "Noticing the Small Wins",
      description: "Celebrate the little victories that make a big difference.",
      image:
        "https://cdn.pixabay.com/photo/2016/08/12/14/25/abstract-1588720_1280.jpg",
      link: "#",
    },
    {
      id: 3,
      category: "Inside Help Scout",
      title: "Building Connections at Help Scout's Rome Retreat",
      description: "Team bonding and inspiration from our latest retreat.",
      image:
        "https://cdn.pixabay.com/photo/2016/08/12/14/25/abstract-1588720_1280.jpg",
      link: "#",
    },
  ]);

  return (
    <div className="container mx-auto p-4">
      <div className="header-title mb-4">
          <h2 className="text-xl font-bold text-gray-800">Most Recent Posts </h2>
        
        <div>
          <a href="#" className="text-blue-600 hover:underline ">
            view all Posts
          </a>
        </div>
      </div>

      <hr className="hr-blog" />

      <div className="recent-posts mt-4">
        <a href={posts[0].link} className="large-post block hover:bg-gray-50 transition">
          <div className="post-image mb-4">
            <img
              src={posts[0].image}
              alt=""
              className="rounded img-fluid"
            />
          </div>
          <div className="post-content">
            <p className="post-category">{posts[0].category}</p>
            <h2 className="post-title mb-3">{posts[0].title}</h2>
            <p className="post-description">
              {posts[0].description}
            </p>
          </div>
        </a>

        <div className="small-posts">
          <a href={posts[1].link} className="small-post-one block hover:bg-gray-50 transition">
            <div className="small-post-image mb-3">
              <img
                src={posts[1].image}
                alt=""
                className="rounded img-fluid"
              />
            </div>
            <div className="small-post-content">
              <p className="small-post-category">{posts[1].category}</p>
              <h2 className="small-post-title">{posts[1].title}</h2>
            </div>
          </a>
          <a href={posts[2].link} className="small-post-two mt-5 block hover:bg-gray-50 transition">
            <div className="small-post-image mb-3">
              <img
                src={posts[2].image}
                alt=""
                className="rounded img-fluid"
              />
            </div>
            <div className="small-post-content">
              <p className="small-post-category">{posts[2].category}</p>
              <h2 className="small-post-title">
                {posts[2].title}
              </h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhatsNew;
