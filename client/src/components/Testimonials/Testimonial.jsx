import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <div className="container my-5">
        <div className="Testimonial-container">
          <div className="Testimonial-left-container">
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
                <p className="m-0">Trusted by 100+ Happy clients,adding$250M+in revenue. </p>
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
