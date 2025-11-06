// import React from "react";
import "./Footer.css";
import logo from "../assets/Logos/tarloseNavLogo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-container container">
        <hr style={{ color: "white" }}></hr>
        <div className="footer-content">
          <div className="left-footer">
            <div className="footer-logo">
              <img src={logo} alt="logo" />
            </div>
            <div>
              <p>
                Join our newsletter to stay up to date on features and releases.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-input"
              />
              <button className="footer-subscribe">
                Subscribe <span>→</span>
              </button>
              <p className="footer-consent">
                By subscribing you agree with our <a href="/privacy-policy">Privacy Policy</a>{" "}
                and provide consent to receive updates from our company.
              </p>
              <p className="footer-rights">
                © Tarlose. All rights reserved.
              </p>
            </div>
          </div>
          <div className="right-footer">
            <div className="footer-grid">
              <div className="column">
                <h5>Website</h5>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/blogs">Blogs</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
              
                </ul>
              </div>
              <div className="column">
                <h5>Services</h5>
                <ul>
                  <li>
                    <a href="/services/ecommerce-development">Ecommerce</a>
                  </li>
                  <li>
                    <a href="/services/lms-development">LMS</a>
                  </li>
                  <li>
                    <a href="/services/search-engine-optimization">SEO</a>
                  </li>
                  <li>
                    <a href="/services/social-media-marketing">SMM</a>
                  </li>
                </ul>
              </div>
              <div className="column">
                <h5>Follow Us</h5>
                <ul>
                 
                  <li>
                    <a href="https://www.instagram.com/tarloseofficial/">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/people/Tarlose/61563414116294/?sk=about">Facebook</a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/company/Tarlose">LinkedIn</a>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-links">
                <a href="/privacy-policy">Privacy Policy</a> |{" "}
                <a href="/terms-of-service">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Footer;
{
  /* <div class="d-sm-flex justify-content-between ">
    <div class="d-sm-flex gap-4">
      <a class="text-light text-decoration-none" href="mailto:admin@tarlose.com"><p>admin@tarlose.com</p></a>
      <a class="text-light text-decoration-none" href="tel:8291617114"><p>+91 8291617114</p></a>
    </div>
      <p>2025 © Tarlose. All Rights Reserved. </p>
      <p>
        <a href="/terms" class="text-light text-decoration-none pe-4">Terms & condition</a>
        <a href="/privacy" class="text-light text-decoration-none"> Privacy policy</a>
      </p>
    </div> */
}
