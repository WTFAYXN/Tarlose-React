import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    if (isOpen) {
      // Close animation
      gsap.to(dropdownRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      // Open animation (auto height using GSAP trick)
      gsap.set(dropdownRef.current, { height: "auto" });
      const height = dropdownRef.current.offsetHeight;
      gsap.fromTo(
        dropdownRef.current,
        { height: 0, opacity: 0 },
        { height, opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );
    }

    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a href="/" className="navbar-brand">
            <h2>Tarlose</h2>
          </a>
          <button className="menu-button" onClick={toggleMenu}>
            {isOpen ? "✖" : "="}
          </button>
        </div>
      </nav>

      <div
        className="dropdown-wrapper"
        ref={dropdownRef}
        style={{ overflow: "hidden", height: 0, opacity: 0 }}
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#Service">Services</a>
          </li>
          <li>
            <a href="/career">Careers</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <button type="button" className="nav-btn px-4 py-2 rounded border-0">
          <a href="https://calendly.com/ayansayad2005/30min?month=2024-12">
            Book a Call
          </a>
        </button>
      </div>
    </>
  );
};

export default Navbar;
