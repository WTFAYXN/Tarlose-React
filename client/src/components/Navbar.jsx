import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/Logos/tarloseNavLogo.svg";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid p-0">
        <a className="navbar-brand p-0" href="/">
          <img src={logo} alt="Tarlose" width={150} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

            <li className="nav-item dropdown" onClick={toggleDropdown}>
              <span className="nav-link dropdown-toggle" role="button">
                Services
              </span>
              {dropdownOpen && (
                <ul className="dropdown-menu show">
                  <li>
                    <a className="dropdown-item" href="#">
                      Website Development
                    </a>
                    <div className="mega-menu d-flex">
                      <div className="nav-column-mobile">
                        <img
                          src="https://framerusercontent.com/images/QT0FZzKWoPVDhBD0kmSv4UX5zU.png"
                          alt=""
                        />
                      </div>
                      <div className="mega-content">
                        <p>Search</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quae?</p>

                      </div>
                    </div>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/career">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blogs">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">
                Contact
              </a>
            </li>
          </ul>
          <button type="button" className="nav-btn">
            <a href="https://calendly.com/ayansayad2005/30min?month=2024-12">
              Book a Call
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
