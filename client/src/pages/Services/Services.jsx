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
              $200 OFF
            </span>
            On All Notion Templates
          </div>
          <h1 className="service-heading mb-3">
            Transform Productivity with Premium{" "}
            <span className="eco-sub">Notion Templates</span>{" "}
          </h1>
          <p className="lead mb-4 p-0">
            Level up your workflow and simplify your life with beautifully
            designed Notion templates built for results.
          </p>
          <div>
            <a
              href="#templates"
              className="btn btn-dark btn-lg me-3 shining-button"
            >
              Explore Templates
            </a>
            <a
              href="#bundle"
              className="btn btn-outline-dark btn-lg shining-button"
            >
              Get the Entire Bundle
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
