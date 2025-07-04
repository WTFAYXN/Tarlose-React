import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/Logos/Tarlose-Logo.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(() => {
    return localStorage.getItem("activeNavLink") || "/";
  });

  useEffect(() => {
    const navLinks = document.querySelectorAll("#navList .nav-link");

    function removeActiveClass() {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        removeActiveClass();
        this.classList.add("active");
        localStorage.setItem("activeNavLink", this.getAttribute("href"));
        setActiveLink(this.getAttribute("href"));
      });
    });

    const currentLink = document.querySelector(
      `#navList .nav-link[href="${activeLink}"]`
    );
    if (currentLink) {
      removeActiveClass();
      currentLink.classList.add("active");
    }

    // Cleanup event listeners on component unmount
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", function (event) {
          removeActiveClass();
          this.classList.add("active");
          localStorage.setItem("activeNavLink", this.getAttribute("href"));
          setActiveLink(this.getAttribute("href"));
        });
      });
    };
  }, [activeLink]);

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg p-0">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand p-0 mt-3" href="/">
            <img src={logo} alt="Tarlose" width={100} />
          </a>
          <div className="justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav nav-pills mx-auto mb-2 mb-lg-0" id="navList">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#Service">Services</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/projects">Projects</a></li>
                  <li><a className="dropdown-item" href="/testimonials">Testimonials</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/career">Careers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blogs">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <button type="button" className="nav-btn px-4 py-2 rounded border-0">
            <a href="https://calendly.com/ayansayad2005/30min?month=2024-12">Book a Call</a>
          </button>
        </div>
      </nav> */}

      <nav class="navbar bg-dark fixed-top">
        <div class="container-fluid">
         <a className="navbar-brand p-0 mt-3" href="/">
            <img src={logo} alt="Tarlose" width={100} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-top"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body bg-black">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/#Service"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Service
                  </a>
                  <ul class="dropdown-menu bg-black">
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
                  <a class="nav-link" href="/career">
                    Careers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/blogs">
                    Blogs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Contact">
                    Contact
                  </a>
                </li>
              </ul>

              <button
                type="button"
                className="nav-btn px-4 py-2 rounded border-0"
              >
                <a href="https://calendly.com/ayansayad2005/30min?month=2024-12">
                  Book a Call
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
