import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-it-works-container container">
      <h2 className="how-it-works-title">How It Works?</h2>
      <div className="steps-container">
        <div className="step">
          <div className="dot-line-container">
            <div className="step-dot"></div>
            <div className="work-step-line-container">
                 <hr className="work-step-line m-0" />
            </div>
          </div>

          <div className="step-content">
            <h3>Explore Notionary</h3>
            <p>Visit our website anytime from your phone or desktop.</p>
          </div>
        </div>
      </div>
      <div className="steps-container">
        <div className="step">
          <div className="dot-line-container">
            <div className="step-dot"></div>
            <div className="work-step-line-container">
                 <hr className="work-step-line m-0" />
            </div>
          </div>

          <div className="step-content">
            <h3>Explore Notionary</h3>
            <p>Visit our website anytime from your phone or desktop.</p>
          </div>
        </div>
      </div>
      <div className="steps-container">
        <div className="step">
          <div className="dot-line-container">
            <div className="step-dot"></div>
            <div className="work-step-line-container">
                 <hr className="work-step-line m-0" />
            </div>
          </div>

          <div className="step-content">
            <h3>Explore Notionary</h3>
            <p>Visit our website anytime from your phone or desktop.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
