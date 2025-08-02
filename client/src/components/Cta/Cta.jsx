import React from "react";
import "./Cta.css";

const Cta = () => {
  return (
    <>
      <div className="section-cta container">
        <div className="cta-container">
          <h2>Start your project with Alture <span className="cta-span">®</span></h2>
            <button type="button" className="nav-btn">
              <a href="https://calendly.com/ayansayad2005/30min?month=2024-12">
                Book a Call
              </a>
            </button>
        </div>
      </div>
    </>
  );
};

export default Cta;
