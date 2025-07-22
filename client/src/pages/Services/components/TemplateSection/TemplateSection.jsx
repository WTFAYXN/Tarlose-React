import React from "react";
import "./TemplateSection.css";

const TemplateSection = () => {
  // Dynamic data for templates
  const templates = [
    {
      id: 1,
      image: "https://framerusercontent.com/images/US5AgZU6K6UjoTYD8lIQXtv2gg.jpg?scale-down-to=1024",
      price: "$49",
      label: "Top Selling",
      title: "Notionary",
      description: "An all-in-one Notion template designed for professionals, creators, and teams.",
      link: "#templates"
    },
    {
      id: 2,
      image: "https://framerusercontent.com/images/US5AgZU6K6UjoTYD8lIQXtv2gg.jpg?scale-down-to=1024",
      price: "$59",
      label: "Best Value",
      title: "Productivity Pro",
      description: "A comprehensive template for managing projects and boosting productivity.",
      link: "#templates"
    },
    {
      id: 3,
      image: "https://framerusercontent.com/images/US5AgZU6K6UjoTYD8lIQXtv2gg.jpg?scale-down-to=1024",
      price: "$39",
      label: "New Release",
      title: "Creative Flow",
      description: "Perfect for creators to organize ideas, tasks, and creative projects efficiently.",
      link: "#templates"
    }
  ];

  return (
    <>
      <div className="services-parent-container container">
        <div className="services-header d-flex flex-column text-center">
          <h2>Top-Performing Templates for <span className="eco-sub">Every Need</span></h2>
          <p>
            Each template is crafted to help you achieve clarity, focus, and
            efficiency in your daily tasks and long-term goals.
          </p>
        </div>

        <div className="Template-content">
          <div className="Template-cards">
            {templates.map((template) => (
              <div key={template.id} className="Template-card">
                <div className="Template-card-img">
                  <img src={template.image} alt={template.title} />
                </div>
                <div className="top-selling-container">
                  <p className="price m-0">{template.price}</p>
                  <p className="top-sell m-0">{template.label}</p>
                </div>
                <h3 className="card-Template-heading m-0">{template.title}</h3>
                <p className="card-Template-discription m-0">{template.description}</p>
                <a
                  href={template.link}
                  className="btn btn-dark btn-lg me-3 shining-button Template-card-btn"
                >
                  Explore Templates
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateSection;