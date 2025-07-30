import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";

import "./about.css";

const About = () => {
  return (
    <>
      <Navbar />

      <Cursor />

      <div className="about-hero container">
        <p>We get it done.</p>
        <h1>CONCEPTS <span className="eco-sub">DESIGNED</span>  TO MAKE AN IMPACT</h1>
      </div>

      <div className="about-tarlose container">
        <h5 className="text-uppercase">ABOUT Tarlose </h5>

        <div className="about-experience-container">
            <h2 className="text-uppercase">not old, just experienced.</h2>
            <p>We've been around since 2009, and we've seen the industry change and grow.</p>
            <p>We have collaborated on an impressive list of high-profile interactive projects through partnerships with some of the top advertising agencies and brands in the world. Our work has ranged from entertainment and consumer goods, to manufacturing, technology, and more.</p>
            <button type="button" className="nav-btn">
            <a href="https://calendly.com/ayansayad2005/30min?month=2024-12">
              Book a Call
            </a>
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default About;
