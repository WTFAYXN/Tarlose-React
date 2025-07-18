import React from "react";
import "./Footer.css";
// import logo from "../assets/Logos/Tarlose.svg"; // old logo
import logo from "../assets/Logos/Tarlose-Logo.svg";

const Footer = () => {
  return (
    <>
      <div className="upper-continer">
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
