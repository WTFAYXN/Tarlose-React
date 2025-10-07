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
                    <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_9_5)">
<path d="M242.15 65.7948L356.225 67.3719H356.228C374.139 67.614 388.577 82.0398 388.839 99.9461V107.191L395.451 109.572C400.636 111.438 405.83 113.375 410.984 115.497H410.985C439.207 127.214 463.663 142.857 480.188 159.383L481.134 160.329C494.311 173.768 499.485 184.884 501.225 193.079C502.958 201.242 501.456 207.31 499.908 210.996L499.901 211.013L499.895 211.028C498.333 214.784 495.057 220.144 488.043 224.666C480.99 229.213 469.45 233.368 450.619 233.466H450.607C435.34 233.564 417.676 230.912 399.224 225.741L390.53 223.305L387.222 231.705C384.981 237.392 381.526 242.745 377.048 247.223L186.645 437.628C175.2 449.072 156.614 449.072 145.169 437.628L145.166 437.625L18.5811 311.144C7.1395 299.7 7.13994 281.118 18.582 269.674L209.091 79.2694L209.109 79.2518L209.127 79.2332C217.544 70.7325 228.962 65.9275 240.985 65.7928L242.15 65.7948ZM337.991 116.853C321.364 100.227 294.426 100.227 277.799 116.853C261.193 133.459 261.151 160.397 277.693 176.94C292.785 192.032 316.371 193.424 333.031 181.12C345.29 189.355 359.445 196.844 374.256 203.061L374.267 203.066L374.278 203.07C404.424 215.64 429.869 220.156 448.681 220.242C458.044 220.285 466.045 219.23 472.267 217.333C475.367 216.388 478.306 215.148 480.814 213.524C483.193 211.984 486.012 209.56 487.543 205.912L487.542 205.911C488.771 202.988 488.778 199.945 488.463 197.546C488.123 194.952 487.292 192.201 486.02 189.354C483.476 183.662 478.896 176.975 471.49 169.398L471.41 169.316L470.779 168.686C455.201 153.108 431.586 138.38 405.847 127.629H405.846C405.308 127.393 404.817 127.189 404.434 127.031C403.972 126.841 403.648 126.707 403.32 126.561L389.045 120.217L389.26 135.838L389.688 167.055C388.904 166.741 388.114 166.423 387.317 166.098C373.9 160.537 361.306 153.837 350.424 146.645C350.366 135.89 346.225 125.087 337.991 116.853Z" stroke="white" stroke-width="20"/>
</g>
<defs>
<clipPath id="clip0_9_5">
<rect width="512" height="512" fill="white"/>
</clipPath>
</defs>
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