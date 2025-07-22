import React from "react";
import "./TemplateSection.css";

const TemplateSection = () => {
  return (
    <>
      <div className="services-parent-container container">
        <div className="services-header d-flex flex-column text-center">
          <h2>Top-Performing Templates for <span className="eco-sub">Every Need</span> </h2>
          <p className="">
            Each template is crafted to help you achieve clarity, focus, and
            efficiency in your daily tasks and long-term goals.
          </p>
        </div>

        <div className="Template-content">
          <div className="Template-cards">
            <div className="Template-card">
              <div className="Template-card-img">
                <img
                  src="https://framerusercontent.com/images/US5AgZU6K6UjoTYD8lIQXtv2gg.jpg?scale-down-to=1024"
                  alt=""
                />
              </div>
              <div className="top-selling-container">
                <p className="price m-0">$49</p>
                <p className="top-sell m-0">Top Selling</p>
              </div>
              <h3 className="card-Template-heading m-0">Notionary</h3>
              <p className="card-Template-discription m-0">An all-in-one Notion template designed for professionals, creators, and teams.</p>

              <a
              href="#templates"
              className="btn btn-dark btn-lg me-3 shining-button Template-card-btn"
            >
              Explore Templates
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateSection;
