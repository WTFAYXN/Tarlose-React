import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../assets/Logos/Tarlose-Logo.svg";

import React from "react";
import "./Navbar.css"; 

const Navbar = () => {
  return (
      <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a className="navbar-brand p-0" href="/">
            {/* <img src={logo} alt="Tarlose" width={100} /> */}
            <h2>Tarlose</h2>
          </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="/">
                Home
              </a>
            </li>
          
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Service
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/career">Careers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/blogs">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Contact">Contact</a>
            </li>
          </ul>
          <button type="button" className="nav-btn px-4 py-2 rounded border-0">
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
