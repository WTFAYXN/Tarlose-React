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

const PricingComponent = () => {
  const [activePlan, setActivePlan] = useState("monthly");
  const [addOns, setAddOns] = useState([
    {
      title: "Custom Templates",
      price: "$499",
      description: "All plans require the client to provide their own design and branding materials.",
    },
    {
      title: "Priority Support",
      price: "$89",
      description: "Hosting and domain charges are not included unless specified.",
    },
    {
      title: "Template Guides",
      price: "$19",
      description: "Custom design services available as add-ons upon request.",
    },
  ]);

  const handlePlanClick = (plan) => {
    setActivePlan(plan);
  };

  const getDynamicPrice = (basePrice) => {
    const priceNum = parseFloat(basePrice.replace("€", ""));
    if (activePlan === "annually") {
      // Apply 10% discount for annual plan
      return `€${(priceNum * 0.9).toFixed(2)}`;
    }
    return basePrice;
  };

  const plans = [
    {
      name: "Starter",
      price: "₹17,000",
      paymentType: "One-time payment",
      targetAudience: "For new entrepreneurs and small businesses launching their first online store",
      features: [
        "Fully functional ecommerce platform setup",
        "Basic SEO setup (on-page essentials)",
        "Client supplies design and branding assets",
        "Integration with up to 2 payment gateways",
        "Product upload assistance (up to 15 products)",
        "Hosting, Platform and domain charges handled by client",
        "Email support for 1 month"
      ],
    },
    {
      name: "Growing Businesses",
      price: "₹36,000",
      paymentType: "One-time payment",
      targetAudience: "Ideal for expanding businesses seeking a complete online presence.",
      features: [
        "Complete ecommerce platform setup",
        "Advanced SEO setup (on-page + basic off-page tips)",
        "Integration with up to 4 payment gateways",
        "Product upload assistance (up to 50 products)",
        "Priority email & chat support for 3 months",
        "Hosting, Platform and domain charges handled by client"
      ],
    },
    {
      name: "Established Brands",
      price: "₹1,20,000+",
      paymentType: "For established brands needing scalability and advanced features.",
      targetAudience: "Individuals & small teams",
      features: [
        "End-to-end ecommerce platform setup",
        "Full SEO optimization (on-page + strategy guidance)",
        "Advanced analytics dashboard",
        "Multi-store and multi-language support",
        "Product upload assistance (up to 150 products)",
        "Tech support for 6 months (dedicated channel)",
        "Hosting and domain charges handled by us",
        "Custom integrations (client to provide design assets and requirements)",
      ],
    },
  ];

  return (
    <>
      <div className="container basic-grid-container">
        <div className="services-header d-flex flex-column text-center">
          <h2>
            Simple Pricing for <span className="eco-sub">All Your Needs</span>
          </h2>
          {/* <p>
            Get access to powerful Notion templates and tools to organize your
            life and work effortlessly.
          </p> */}
        </div>

        <div className="pricing-container">
          <div className="pricing-btn-container">
            <button
              className={`plan-toggle ${
                activePlan === "monthly" ? "active" : ""
              }`}
              onClick={() => handlePlanClick("monthly")}
            >
              Monthly
            </button>
            <button
              className={`plan-toggle ${
                activePlan === "annually" ? "active" : ""
              }`}
              onClick={() => handlePlanClick("annually")}
            >
              Annually
            </button>
          </div>
          <div className="pricing-cards">
            {plans.map((plan, index) => (
              <div
                className={`pricing-card ${
                  plan.name === "Pro" ? "pro-border" : ""
                }`}
                key={index}
              >
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
                        stroke-dasharray=""
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.86"
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
                        stroke-dasharray=""
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.86"
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
                      stroke-dasharray=""
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.86"
                      stroke="var(--qkmj15, rgb(0,13,26))"
                      transform="translate(26.349 8.887)"
                      width="4.761904761904759px"
                    />
                    <path
                      d="M 1.229 14.514 C -0.363 16.293 -0.398 18.976 1.064 20.863 C 3.964 24.608 7.138 27.782 10.883 30.682 C 12.77 32.144 15.454 32.109 17.232 30.517 C 22.06 26.194 26.482 21.676 30.749 16.711 C 31.171 16.22 31.435 15.619 31.494 14.974 C 31.756 12.124 32.294 3.912 30.064 1.682 C 27.834 -0.548 19.622 -0.01 16.772 0.252 C 16.127 0.311 15.526 0.575 15.035 0.997 C 10.07 5.264 5.552 9.686 1.229 14.514 Z"
                      fill="transparent"
                      height="31.746024840221637px"
                      id="uKrnvNblq"
                      stroke-dasharray=""
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-width="2.86"
                      stroke="var(--qkmj15, rgb(0,13,26))"
                      transform="translate(4.128 4.125)"
                      width="31.745964887458296px"
                    />
                  </svg>
                  {plan.name}
                </div>
                <div className="pricing">{getDynamicPrice(plan.price)}</div>
                <div className="payment-type">
                  {activePlan === "annually"
                    ? "Annual payment"
                    : "One-time payment"}
                </div>
                <div className="target-audience">{plan.targetAudience}</div>
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <TickMark /> {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="btn btn-dark btn-lg me-3 shining-button pricing-btn"
                >
                  {`Get ${plan.name}`}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Add on section  */}

        <div className="add-on-parent-container">
          <div className="add-on-heading-conatiner">
            <h2 className="m-0 mb-4">Terms</h2>
          </div>
          <div className="add-on-container">
            {addOns.map((addOn, index) => (
              <div className="add-on" key={index}>
                {/* <div className="add-on-pricing">
                  <h5>{addOn.price}</h5>
                </div> */}
                <div className="add-on-icon">
                <i class="bi bi-plus-circle-fill"></i>
                </div>
                <div className="add-on-content">
                  {/* <h5>{addOn.title}</h5> */}
                  <p>{addOn.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingComponent;