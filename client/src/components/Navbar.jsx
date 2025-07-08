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

  const megaMenuItems = [
  {
    topic: "Website Development",
    // description: "Create powerful online stores.",
    // icon: "🛒",
    subItems: [
      {
        title: "Ecommerce Development",
        description: "Create powerful online stores.",
        icon: "🛒",
        link: "#",
      },
      {
        title: "LMS",
        description: "Learning Management Systems for education.",
        icon: "📚",
        link: "#",
      },
      {
        title: "Coded",
        description: "Fully coded custom development.",
        icon: "💻",
        link: "#",
      },
      {
        title: "No-code",
        description: "No-code website development solutions.",
        icon: "⚙️",
        link: "#",
      },
    ],
  },
  {
    topic: "Graphic Design",
    subItems: [
      {
        title: "Social Posts",
        description: "Designs for social media platforms.",
        icon: "📱",
        link: "#",
      },
      {
        title: "Posters, Brochure",
        description: "Print-ready designs for marketing materials.",
        icon: "📰",
        link: "#",
      },
      {
        title: "Illustration",
        description: "Custom illustration designs.",
        icon: "🖌️",
        link: "#",
      },
      {
        title: "Pitch Decks",
        description: "Professional pitch deck designs.",
        icon: "📊",
        link: "#",
      },
    ],
  },
  {
    topic: "Digital Marketing",
    subItems: [
      {
        title: "Search Engine Optimization",
        description: "Improve search rankings with SEO.",
        icon: "🔍",
        link: "#",
      },
      {
        title: "Social Media Management",
        description: "Manage your social media channels.",
        icon: "📱",
        link: "#",
      },
      {
        title: "Search Engine Marketing",
        description: "Run ads to boost search visibility.",
        icon: "💰",
        link: "#",
      },
      {
        title: "Social Media Marketing",
        description: "Drive engagement through social media ads.",
        icon: "📢",
        link: "#",
      },
    ],
  },
];


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

            {/* Mega Menu */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu mega-menu-wrapper" aria-labelledby="navbarDropdown">
                <div className="d-flex flex-column">
                  {megaMenuItems.map((category, idx) => (
                    <div key={idx} className="dropdown-item">
                      <div className="d-flex align-items-start gap-2">
                        <div className="fs-4">{category.icon}</div>
                        <div>
                          <h6 className="mb-1">{category.topic}</h6>
                          <p className="mb-2 small">{category.description}</p>
                          <ul className="list-unstyled">
                            {category.subItems.map((item, subIdx) => (
                              <li key={subIdx} className="mb-2">
                                <a href={item.link} className="d-flex align-items-start text-white text-decoration-none">
                                  <span className="me-2">{item.icon}</span>
                                  <div>
                                    <strong>{item.title}</strong>
                                    <p className="small mb-0">{item.description}</p>
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
