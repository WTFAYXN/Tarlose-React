import React from "react";
import "./Footer.css";
import logo from "../assets/Logos/tarloseNavLogo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-container container">
        <div className="left-footer">
          <div className="footer-img">
            <img src={logo} alt="Tarlose Logo" />
          </div>
          <div className="footer-contact">
            <a className="text-light text-decoration-none" href="tel:8291617114">
              <p className="footer-contact-num">+91 8291617114</p>
            </a>
            <a className="text-light text-decoration-none" href="mailto:admin@tarlose.com">
              <p className="footer-contact-mail">admin@tarlose.com</p>
            </a>
          </div>
        </div>
        <div className="right-footer">
          <div className="connected-container">
            <h2>Stay connected</h2>
            <p>Join our newsletter and stay updated on the latest trends in digital design</p>
            <div className="email-input">
              <input type="email" className="connected-mail" placeholder="E-mail" />
              <span className="submit-arrow">→</span>
            </div>
            <p>
              With Tarlose, your company gets more than just a website. We design experiences that resonate with your customers and drive meaningful engagement.
            </p>
          </div>
          <div className="links-container">
            <ul>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/projects" className="footer-link">Projects</a></li>
              <li><a href="/blog" className="footer-link">Blog</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/terms" className="footer-link">Terms of Service</a></li>
              <li><a href="/404" className="footer-link">404</a></li>
            </ul>
            <div className="social-links">
              <a href="https://twitter.com" className="social-link">Twitter</a>
              <a href="https://behance.com" className="social-link">Behance</a>
              <a href="https://instagram.com" className="social-link">Instagram</a>
              <a href="https://dribbble.com" className="social-link">Dribbble</a>
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
