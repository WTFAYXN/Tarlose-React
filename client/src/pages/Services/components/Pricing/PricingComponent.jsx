import React, { useState } from "react";
import "./PricingComponent.css";

const TickMark = () => (
  <svg
    className="tick-mark"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
  >
    <circle
      cx="26"
      cy="26"
      r="25"
      fill="#8d6a9f"
      stroke="#8d6a9f"
      strokeWidth="2"
    />
    <path
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      d="M14.1 27.2l7.1 7.2 16.7-16.8"
    />
  </svg>
);

const PricingComponent = ({ pricing }) => {
  if (!pricing) {
    return null;
  }

  // Get all available pricing types (excluding 'terms')
  const availableTypes = Object.keys(pricing).filter(key => key !== 'terms' && Array.isArray(pricing[key]) && pricing[key].length > 0);
  
  // Set initial active type to the first available type
  const [activeType, setActiveType] = useState(availableTypes[0] || null);

  if (availableTypes.length === 0) {
    return null;
  }

  const plans = pricing[activeType] || [];
  const terms = pricing.terms || [];

  const handleTypeClick = (type) => {
    setActiveType(type);
  };

  // Function to format the display name for buttons
  const formatTypeName = (type) => {
    return type.charAt(0).toUpperCase() + type.slice(1).replace(/([A-Z])/g, ' $1');
  };

  return (
    <>
      <div className="container basic-grid-container">
        <div className="services-header d-flex flex-column text-center">
          <h2>
            Simple Pricing for <span className="eco-sub">All Your Needs</span>
          </h2>
        </div>

        <div className="pricing-container">
          {/* Only show toggle buttons if there are multiple pricing types */}
          {availableTypes.length > 1 && (
            <div className="pricing-btn-container">
              {availableTypes.map((type) => (
                <button
                  key={type}
                  className={`plan-toggle ${activeType === type ? "active" : ""}`}
                  onClick={() => handleTypeClick(type)}
                >
                  {formatTypeName(type)}
                </button>
              ))}
            </div>
          )}
          
          <div className="pricing-cards">
            {plans.length === 0 ? (
              <div className="text-center w-100">No plans available.</div>
            ) : (
              plans.map((plan, index) => (
                <div className="pricing-card" key={index}>
                  <div className="plan-badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      display="block"
                      role="presentation"
                      viewBox="0 0 40 40"
                    >
                      <g opacity="0.4">
                        <path
                          d="M 0 0 L 0.024 0 M 0.006 9.524 L 0.03 9.524"
                          fill="transparent"
                          height="9.523789610181538px"
                          id="V13bMP9Do"
                          strokeDasharray=""
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.86"
                          stroke="var(--qkmj15, rgb(0,13,26))"
                          transform="translate(18.406 16.822)"
                          width="1px"
                        />
                      </g>
                      <g opacity="0.4">
                        <path
                          d="M 0 0 L 12.698 0"
                          fill="transparent"
                          height="1px"
                          id="pg1OG3sQg"
                          strokeDasharray=""
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.86"
                          stroke="var(--qkmj15, rgb(0,13,26))"
                          transform="translate(12.063 21.584)"
                          width="12.698457142857174px"
                        />
                      </g>
                      <path
                        d="M 2.381 0 C 3.696 0 4.762 1.066 4.762 2.381 C 4.762 3.696 3.696 4.762 2.381 4.762 C 1.066 4.762 0 3.696 0 2.381 C 0 1.066 1.066 0 2.381 0 Z"
                        fill="transparent"
                        height="4.761904761904762px"
                        id="R2_P1txVF"
                        strokeDasharray=""
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.86"
                        stroke="var(--qkmj15, rgb(0,13,26))"
                        transform="translate(26.349 8.887)"
                        width="4.761904761904759px"
                      />
                      <path
                        d="M 1.229 14.514 C -0.363 16.293 -0.398 18.976 1.064 20.863 C 3.964 24.608 7.138 27.782 10.883 30.682 C 12.77 32.144 15.454 32.109 17.232 30.517 C 22.06 26.194 26.482 21.676 30.749 16.711 C 31.171 16.22 31.435 15.619 31.494 14.974 C 31.756 12.124 32.294 3.912 30.064 1.682 C 27.834 -0.548 19.622 -0.01 16.772 0.252 C 16.127 0.311 15.526 0.575 15.035 0.997 C 10.07 5.264 5.552 9.686 1.229 14.514 Z"
                        fill="transparent"
                        height="31.746024840221637px"
                        id="uKrnvNblq"
                        strokeDasharray=""
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeWidth="2.86"
                        stroke="var(--qkmj15, rgb(0,13,26))"
                        transform="translate(4.128 4.125)"
                        width="31.745964887458296px"
                      />
                    </svg>
                    {plan.name}
                  </div>
                  <div className="pricing">₹{plan.price}</div>
                  {plan.priceType && (
                    <div className="payment-type">{plan.priceType}</div>
                  )}
                  {plan.description && (
                    <div className="target-audience">{plan.description}</div>
                  )}
                  {plan.features && plan.features.length > 0 && (
                    <ul className="features-list">
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>
                          <TickMark /> {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href="#"
                    className="btn btn-dark btn-lg me-3 shining-button pricing-btn"
                  >
                    {`Get ${plan.name}`}
                  </a>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Terms section  */}
        {terms.length > 0 && (
          <div className="add-on-parent-container">
            <div className="add-on-heading-conatiner">
              <h2 className="m-0 mb-4">Terms</h2>
            </div>
            <div className="add-on-container">
              {terms.map((term, index) => (
                <div className="add-on" key={index}>
                  <div className="add-on-icon">
                    <i className="bi bi-plus-circle-fill"></i>
                  </div>
                  <div className="add-on-content">
                    <p>{term}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PricingComponent;