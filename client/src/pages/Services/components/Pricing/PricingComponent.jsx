import React from "react";

import "./PricingComponent.css"

const PricingComponent = () => {
  return (
    <>
      <div className="container basic-grid-container">
        <div className="services-header d-flex flex-column text-center">
          <h2>
            Simple Pricing for <span className="eco-sub">All Your Needs</span>
          </h2>
          <p>
            Get access to powerful Notion templates and tools to organize your
            life and work effortlessly.s
          </p>
        </div>

        <div className="pricing-container">
          <div className="pricing-cards">

          </div>

        </div>
      </div>
    </>
  );
};

export default PricingComponent;
