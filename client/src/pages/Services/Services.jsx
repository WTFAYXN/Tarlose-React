import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Services.css";
import TemplateSection from "./components/TemplateSection/TemplateSection";
import BasicGrid from "./components/BasicGrid/BasicGrid";
import FullWidthGrid from "./components/FullWidthGrid/FullWidthGrid";
import PricingComponent from "./components/Pricing/PricingComponent";
import TestimonialSlider from "./components/TestimonialSlider/TestimonialSlider";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import FAQ from "./components/Faqs/Faq";
const Services = () => {
 const { serviceSlug } = useParams(); // 2. Get the slug from the URL
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const fetchServiceData = async () => {
      setLoading(true); // Set loading to true on each new fetch
      try {
        // 3. Use the slug to make the API call dynamic
        console.log("Fetching service data for slug:", serviceSlug);
        const response = await fetch(`${API_URL}/api/service/${serviceSlug}`);
        const data = await response.json();
        console.log("Fetched service data:", data);
        setPageData(data);
      } catch (error) {
        console.error(`Failed to fetch data for ${serviceSlug}:`, error);
        setPageData(null); // Clear old data on error
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [serviceSlug]); // 4. Add serviceSlug to the dependency array!

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="modern-loading-container">
          <div className="modern-spinner">
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
          </div>
          <p className="loading-text">Loading amazing content...</p>
        </div>
        <Footer />
      </>
    );
  }
  
  if (!pageData) {
      return <p>Error: Could not load content for this service.</p>;
  }
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
          {pageData.header.headline}
        </h1>
        <p className="lead mb-4 p-0">
          {pageData.header.intro}
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

      <TemplateSection id="value-prop" content={pageData.valueProposition}/>

      <FullWidthGrid features={pageData.coreFeatures}/>

      <PricingComponent id="pricing" pricing={pageData.pricing}/>

      <HowItWorks data={pageData.howItWorks}/>

      <BasicGrid services={pageData.additionalServices}/>

      <TestimonialSlider />

      <FAQ faqs={pageData.faqs} />


      <Footer />
    </>
  );
};

export default Services;
