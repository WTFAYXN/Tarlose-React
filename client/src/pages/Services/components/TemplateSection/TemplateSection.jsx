import React from "react";
import "./TemplateSection.css";
import ViewAllbox from "../ViewAllbox/ViewAllbox";

const TemplateSection = () => {
  // Dynamic data for templates
  const templates = [
    {
      id: 1,
      image: "https://framerusercontent.com/images/US5AgZU6K6UjoTYD8lIQXtv2gg.jpg?scale-down-to=1024",
      price: "$49",
      label: "Top Selling",
      title: "Custom Online Stores",
      description: "Get a storefront designed for your brand and audience.",
      link: "#templates"
    },
    {
      id: 2,
      image: "https://framerusercontent.com/images/US5AgZU6K6UjoTYD8lIQXtv2gg.jpg?scale-down-to=1024",
      price: "$59",
      label: "Best Value",
      title: "Scalable Solutions:",
      description: "From small shops to enterprise-grade platforms, we handle it all.",
      link: "#templates"
    },
    {
      id: 3,
      image: "https://framerusercontent.com/images/US5AgZU6K6UjoTYD8lIQXtv2gg.jpg?scale-down-to=1024",
      price: "$39",
      label: "New Release",
      title: "User-Friendly Experience",
      description: "Smooth navigation from product browsing to checkout.",
      link: "#templates"
    }
  ];

  return (
    <>
      <div className="services-parent-container container">
        <div className="services-header d-flex flex-column text-center">
          <h2>Custom Online Stores That <span className="eco-sub">Drive Growth</span></h2>
          <p>
            Deliver a shopping experience customers love. We build eCommerce sites with unique design, usability, and security.
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
                  {/* <p className="price m-0">{template.price}</p> */}
                  {/* <p className="top-sell m-0">{template.label}</p> */}
                </div>
                <h3 className="card-Template-heading m-0">{template.title}</h3>
                <p className="card-Template-discription m-0">{template.description}</p>
                {/* <a
                  href={template.link}
                  className="btn btn-dark btn-lg me-3 shining-button Template-card-btn"
                >
                  Explore Templates
                </a> */}
              </div>
            ))}
          </div>
        </div>
         {/* <ViewAllbox /> */}
      </div>

     
    </>
  );
};

export default TemplateSection;