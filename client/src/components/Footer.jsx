import React from "react";
import "./Footer.css";
import logo from "../assets/Logos/tarloseNavLogo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-container container">
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
                By subscribing you agree with our <a href="#">Privacy Policy</a>{" "}
                and provide consent to receive updates from our company.
              </p>
              <p className="footer-rights">
                © Aesthetica. All rights reserved.
              </p>
            </div>
          </div>
          <div className="right-footer">
            <div className="footer-grid">
              <div className="column">
                <h5>Website</h5>
                <ul>
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/studio">Studio</a>
                  </li>
                  <li>
                    <a href="/work">Work</a>
                  </li>
                  <li>
                    <a href="/insights">Insights</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="column">
                <h5>Admin</h5>
                <ul>
                  <li>
                    <a href="/style-guide">Style Guide</a>
                  </li>
                  <li>
                    <a href="/licenses">Licenses</a>
                  </li>
                  <li>
                    <a href="/changelog">Changelog</a>
                  </li>
                  <li>
                    <a href="/instructions">Instructions</a>
                  </li>
                  <li>
                    <a href="/animations">Animations</a>
                  </li>
                </ul>
              </div>
              <div className="column">
                <h5>Follow Us</h5>
                <ul>
                  <li>
                    <a href="https://twitter.com">X / Twitter</a>
                  </li>
                  <li>
                    <a href="https://instagram.com">Instagram</a>
                  </li>
                  <li>
                    <a href="https://facebook.com">Facebook</a>
                  </li>
                  <li>
                    <a href="https://linkedin.com">LinkedIn</a>
                  </li>
                  <li>
                    <a href="https://youtube.com">YouTube</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-links">
                <a href="#">Privacy Policy</a> |{" "}
                <a href="#">Terms of Service</a>
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
