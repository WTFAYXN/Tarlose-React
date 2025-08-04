import React from "react";
import "./Cta.css";

const Cta = () => {
  return (
    <>
      <div className="section-cta">
        <div className="cta-container container">
          <h2>
            Start your project with Tarlose <span className="cta-span">®</span>
          </h2>
          <button type="button" className="nav-btn">
            <a href="https://calendly.com/ayansayad2005/30min?month=2024-12" target="_blank">
              Book a Call
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cta;
