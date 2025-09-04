import React from "react";
import "./Faq.css";

import faqSvg from '../../../../assets/svgs/FAQs.svg';

const FAQ = () => {
  return (
    <>
      <div className="faq-parent-container container">
        <div className="faq-left-container">
            <div className="faq-heading-container">
                <h2>Frequently <span className="eco-sub">asked </span>
                questions</h2>
                <p>Got questions? Find quick answers here! If you need more details, feel free to get in touch anytime.</p>
                
                <div className="faq-svg">
                    <img src={faqSvg} alt="" />
                   
                </div>

            </div>

        </div>
        <div className="faq-right-container">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  How long does it take to build an eCommerce website?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Most stores are ready to launch in 2-6 weeks, depending on complexity and inventory size.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Which platforms do you support?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We work with Shopify, WooCommerce, Magento, and custom solutions—always recommending what fits your needs.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can I migrate my existing store?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Absolutely. We handle migrations with zero downtime and full data preservation.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  What is your project development process?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Our development process follows these key stages:
                  <ol>
                    <li>Discovery & Planning - Understanding requirements</li>
                    <li>Design & Prototyping - Creating visual solutions</li>
                    <li>Development - Building the solution</li>
                    <li>Testing & QA - Ensuring quality</li>
                    <li>Deployment - Going live</li>
                    <li>Maintenance - Ongoing support</li>
                  </ol>
                  Each stage includes client collaboration and feedback
                  integration.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  What support services do you offer after project completion?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Our post-project support includes:
                  <ul>
                    <li>24/7 technical support</li>
                    <li>Regular maintenance and updates</li>
                    <li>Performance monitoring</li>
                    <li>Security patches</li>
                    <li>Feature enhancements</li>
                    <li>Training and documentation</li>
                  </ul>
                  We offer flexible support packages tailored to your needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
