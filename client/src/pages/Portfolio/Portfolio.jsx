import React from "react";

import './Portfolio.css'

const Portfolio = () => {
  return (
    <>
        <section className="portfolio-section container">
          <div className="portfolio-container">
            <div className="portfolio-left-container">
              <h2 className="m-0">Fade</h2>
              <p className="m-0">
                Fade is a premium portfolio template designed to showcase work
                with elegance and precision, perfect for designers, developers,
                and creative professionals.
              </p>
              <button className="btn shining-button">
                    <a href="https://calendly.com/ayansayad2005/30min?month=2024-12">
                      Live Site Preview
                    </a>
                  </button>
              <div className="project-container">
                <div className="client">
                  <p className="m-0">Client</p>
                  <h6>Framer Template</h6>
                </div>
                <div className="Service-provider">
                  <p className="m-0">Service Provided</p>
                  <h6>Web Design, Web Development</h6>
                </div>
              </div>
            </div>

            <div className="portfolio-right-container">
                <div className="portfolio-right-container-image">
                    <img src='https://framerusercontent.com/images/lpo2IfbEoH5pVlCclxyuFUYN7w.png' alt="Fade" />
                </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Portfolio;
