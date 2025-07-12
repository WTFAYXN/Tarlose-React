import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <div className="container my-5">
        <div className="Testimonial-container">
          <div className="Testimonial-left-container">
            {/* heading container */}
            <div className="Testimonial-heading-container">
              <div className="tag-container">
                <div className="tag">
                  <span>•</span> Testimonials
                </div>
              </div>
              <div className="Testimonial-content-container">
                <h2 className="m-0">
                  Clients <span>Love Me</span>
                </h2>
                <p className="m-0">
                  Trusted by 100+ Happy clients,adding$250M+in revenue.{" "}
                </p>
              </div>
            </div>
            {/* content container */}
            <div className="Testimonial-content-container">
              <div className="parent-box d-flex gap-4">
                <div className="box">
                  <h2 className="p-0 m-0">100+</h2>
                  <p>Happy clients</p>
                </div>
                <div className="box">
                  <h2 className="p-0 m-0">$250m</h2>
                  <p>revenue added</p>
                </div>
                <div className="box">
                  <h2 className="p-0 m-0">4.8</h2>
                  <p>Average Rating</p>
                </div>
              </div>
              <hr className="Testimonial-divider" />
              <div className="button-group Testimonial-btn">
          <button className="btn shining-button"><a href="https://calendly.com/ayansayad2005/30min?month=2024-12">
              Book a Free Call
            </a></button>
          <button className="btn shining-button">See Projects</button>
        </div>
            </div>


          </div>
          <div className="Testimonial-right-container"></div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
