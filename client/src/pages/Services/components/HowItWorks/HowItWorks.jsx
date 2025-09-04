import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (

    <>
    <div className="how-it-works-parent-container container">
 <div className="how-it-works-container ">
      <div className="how-it-works-heading">
        <h2 className="how-it-works-title">How It Works?</h2>
      </div>

      <div className="steps-parent-container">
        <div className="steps-container">
          <div className="step">
            <div className="dot-line-container">
              <div className="step-dot"></div>
              <div className="work-step-line-container">
                <hr className="work-step-line m-0" />
              </div>
            </div>

            <div className="step-content">
              <h3>Book a Free Consultation</h3>
              <p>Share your goals and business needs with our expert team.</p>
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
              <h3>Get Your Custom Store Built</h3>
              <p>Review designs, approve features, and watch your store come to life.</p>
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
              <h3>Launch & Growy</h3>
              <p>Go live with confidence—start selling instantly and get ongoing support to grow.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>

   
  );
};

export default HowItWorks;
