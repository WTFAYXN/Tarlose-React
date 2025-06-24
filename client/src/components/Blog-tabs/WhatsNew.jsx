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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Most Recent Posts </h2>
        <div className="text-end">
          <a href="#" className="text-blue-600 hover:underline ">
            view all Posts
          </a>
        </div>
      </div>
      <div className="parant-grid">
<div className="grid-style large">
        {posts.map((post) => (
          <div
            key={post.id}
            className="grid-item rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-gray-500">{post.category}</span>
              <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
}

export default WhatsNew;
