import React from "react";
import "./Footer.css";
import logo from "../assets/Logos/tarloseNavLogo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-container container">
        <div className="footer-content">
          <div className="left-footer">
            <div className="footer-img">
              <img src={logo} alt="logo" />
            </div>
            <div>
              <p>
                Join our newsletter to stay up to date on features and releases.
              </p>

              <a
                className="text-light text-decoration-none footer-mail"
                href="mailto:admin@tarlose.com"
              >
                <p>admin@tarlose.com</p>
              </a>
              <a className="text-light text-decoration-none footer-contact" href="tel:8291617114">
                <p>+91 8291617114</p>
              </a>
              <p>2025 © Tarlose. All Rights Reserved. </p>
            </div>
          </div>
          <div className="right-footer">
            
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
