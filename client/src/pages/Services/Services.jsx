import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";

import "./Services.css";
import TemplateSection from "./components/TemplateSection/TemplateSection";
import BasicGrid from "./components/BasicGrid/BasicGrid";
import FullWidthGrid from "./components/FullWidthGrid/FullWidthGrid";
import PricingComponent from "./components/Pricing/PricingComponent";
import TestimonialSlider from "./components/TestimonialSlider/TestimonialSlider";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import FAQ from "./components/Faqs/Faq";
const Services = () => {
  return (
    <>
      <Cursor />
      <Navbar />

      <header className="services-hero container">
        <div className="hero-content text-center py-5">
          <div className="badge text-white d-inline-block mb-3">
            <span className="text-decoration-line-through off-style">
              10% OFF
            </span>
            On All BUSINESS PLANS
          </div>
          <h1 className="service-heading mb-3">
            Launch Your Online Store {" "}
            <span className="eco-sub">With Confidence</span>{" "}
          </h1>
          <p className="lead mb-4 p-0">
            Build and grow eCommerce websites that deliver seamless shopping experiences and drive real customer conversions
          </p>
          <div>
            <a
              href="#templates"
              className="btn btn-dark btn-lg me-3 shining-button"
            >
             Check Value Proposition
            </a>
            <a
              href="#bundle"
              className="btn btn-outline-dark btn-lg shining-button trans-btn"
            >
              Pick a Plan
            </a>
          </div>
          <div className="signed-container">
            <div className="signed-img-container">
              <img
                src="https://framerusercontent.com/images/jV8DcNXONCWtgoj7AZcAKHm03c.png"
                alt=""
              />
              <img
                src="https://framerusercontent.com/images/jV8DcNXONCWtgoj7AZcAKHm03c.png"
                alt=""
              />
              <img
                src="https://framerusercontent.com/images/jV8DcNXONCWtgoj7AZcAKHm03c.png"
                alt=""
              />
            </div>
            <p className="mt-4 text-muted p-0">Join 50K+ others who signed up</p>
          </div>
        </div>
      </header>

      <TemplateSection />

      <BasicGrid />

      <FullWidthGrid />

      <PricingComponent />

      <TestimonialSlider />

      <HowItWorks />

      <FAQ />


      <Footer />
    </>
  );
};

export default Services;
