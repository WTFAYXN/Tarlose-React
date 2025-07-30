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

      {/* about founders */}

      <div className="about-founders container">
        <div className="about-title text-center">
          <p>A little about the</p>
          <h2 className="text-uppercase eco-sub">FOUNDERS</h2>

        </div>

        <div className="founder-container">
          <div className="founder-img">
            <img src="https://cdn-wp.thesportsrush.com/2024/06/635c8b75-untitled-design.jpg?format=auto&w=3840&q=75" alt="Ayan" />

          </div>
          <div className="founder-details">
            <h2 className="founder-name">Ayan Khan</h2>
            <p className="founder-position">Co-founder</p>
            <p className="founder-discription">Lynn has over 15 years of experience in Online Marketing,  Advertising and Creative Production. Prior to co-founding SilkTricky, she worked as a Producer at AKQA, an Interactive Marketing Manager for Red Bull and a Web Manager for American Apparel. As Executive Producer for SilkTricky, she is responsible for ensuring daily that we are on top of our game and clients needs are met.</p>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default About;
