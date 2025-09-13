import React from "react";
import "./HowItWorks.css";

const HowItWorks = ({ data }) => {
  if (!data || !data.steps || data.steps.length === 0) {
    return null;
  }
  return (
    <div className="how-it-works-parent-container container">
      <div className="how-it-works-container ">
        <div className="how-it-works-heading">
          <h2 className="how-it-works-title">{data.title || "How It Works?"}</h2>
        </div>
        <div className="steps-parent-container">
          {data.steps.map((step, idx) => (
            <div className="steps-container" key={idx}>
              <div className="step">
                <div className="dot-line-container">
                  <div className="step-dot"></div>
                  <div className="work-step-line-container">
                    <hr className="work-step-line m-0" />
                  </div>
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
