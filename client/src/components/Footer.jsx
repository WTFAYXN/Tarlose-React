import React from "react";
import "./Footer.css";
// import logo from "../assets/Logos/Tarlose.svg"; // old logo
import logo from "../assets/Logos/tarloseNavLogo.svg";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <>
      <div className="upper-container">
        <h2>Ready to transform your data?</h2>
        <p>
          Join thousands of data-driven professionals who are creating beautiful
          visualizations in minutes.
        </p>

        <button className="btn shining-button">
          <a href="https://calendly.com/ayansayad2005/30min?month=2024-12">
            Start for free
          </a>
        </button>
      </div>

      <div className="footer-parent-container">
        <div className="footer-main-container container">
          <div className="footer-content">
            <div className="footer-section-left">
              <img src={logo} alt="Graphy Logo" className="footer-logo" />
              <p>
                Graphy empowers teams to transform raw data into clear,
                compelling visuals — making insights easier to share,
                understand, and act on.
              </p>
              <div className="social-icons">
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/company/tarlose/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                <a href="mailto:admin@tarlose.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope"></i></a>
              </div>
            </div>
            <div className="footer-section-right">
              <div className="footer-section">
                <h3>Product</h3>
                <ul>
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Integrations</li>
                  <li>Changelog</li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Resources</h3>
                <ul>
                  <li>Documentation</li>
                  <li>Tutorials</li>
                  <li>Blog</li>
                  <li>Support</li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Company</h3>
                <ul>
                  <li>About</li>
                  <li>Careers</li>
                  <li>Contact</li>
                  <li>Partners</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>2025 © Tarlose. All Rights Reserved.</p>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="#">Cookies Settings</a>
            </div>
          </div>
        </div>
        <h1 className="footer-style-text">Tarlose</h1>
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
