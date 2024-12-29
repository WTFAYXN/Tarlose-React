import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/Logos/Tarlose-Logo.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(() => {
    return localStorage.getItem('activeNavLink') || '/';
  });

  useEffect(() => {
    const navLinks = document.querySelectorAll('#navList .nav-link');

    function removeActiveClass() {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
    }

    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        removeActiveClass();
        this.classList.add('active');
        localStorage.setItem('activeNavLink', this.getAttribute('href'));
        setActiveLink(this.getAttribute('href'));
      });
    });

    const currentLink = document.querySelector(`#navList .nav-link[href="${activeLink}"]`);
    if (currentLink) {
      removeActiveClass();
      currentLink.classList.add('active');
    }

    // Cleanup event listeners on component unmount
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', function(event) {
          removeActiveClass();
          this.classList.add('active');
          localStorage.setItem('activeNavLink', this.getAttribute('href'));
          setActiveLink(this.getAttribute('href'));
        });
      });
    };
  }, [activeLink]);

    return (
        <>
         <nav className="navbar navbar-expand-lg p-0">
            <div className="container d-flex justify-content-between align-items-center">
                <a className="navbar-brand p-0 mt-3" href="/">
                    <img src={logo} alt="Tarlose" width={100}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    {/* <ul className="navbar-nav nav-pills mx-auto mb-2 mb-lg-0" id="navList">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#Service">Services</a>
                        </li>
                      
           
                        <li className="nav-item">
                            <a className="nav-link" href="/career">Careers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blogs">Blogs</a>
                        </li>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" href="#">Services</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </ul> */}
                    <button type="button" className="nav-btn px-4 py-2 rounded border-0">
                        <a href="https://calendly.com/ayansayad2005">Book a Call</a>
                    </button>
                </div>
            </div>
        </nav>
        </>
    )
 }

 export default Navbar;