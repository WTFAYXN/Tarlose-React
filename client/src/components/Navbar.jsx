import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/Logos/tarloseNavLogo.svg";
import  { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

// svgs icons for mega tab items 
import ecom from "../assets/svgs/ecom.svg";
import coded from "../assets/svgs/code.svg";
import lms from "../assets/svgs/lms.svg";
import nocode from "../assets/svgs/no-code.svg";
import posts from "../assets/svgs/social-posts.svg";
import poster from "../assets/svgs/poster.svg";
import illustration from "../assets/svgs/illustration.svg";
import decks from "../assets/svgs/pitch-deck.svg";

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
        svg:ecom,
        link: "/services",
      },
      {
        title: "LMS",
        description: "Learning Management Systems for education.",
        svg: lms,
        link: "/services",
      },
      {
        title: "Coded",
        description: "Fully coded custom development.",
        svg: coded,
        link: "/services",
      },
      {
        title: "No-code",
        description: "No-code website development solutions.",
        svg: nocode,
        link: "/services",
      },
    ],
  },
  {
    topic: "Graphic Design",
    subItems: [
      {
        title: "Social Posts",
        description: "Designs for social media platforms.",
        svg: posts,
        link: "/services",
      },
      {
        title: "Posters, Brochure",
        description: "Print-ready designs for marketing materials.",
        svg: poster,
        link: "/services",
      },
      {
        title: "Illustration",
        description: "Custom illustration designs.",
        svg: illustration,
        link: "/services",
      },
      {
        title: "Pitch Decks",
        description: "Professional pitch deck designs.",
        svg: decks,
        link: "/services",
      },
    ],
  },
  {
    topic: "Digital Marketing",
    subItems: [
      {
        title: "Search Engine Optimization",
        description: "Improve search rankings with SEO.",
        svg: "🔍",
        link: "/services",
      },
      {
        title: "Social Media Management",
        description: "Manage your social media channels.",
        svg: "📱",
        link: "/services",
      },
      {
        title: "Search Engine Marketing",
        description: "Run ads to boost search visibility.",
        svg: "💰",
        link: "/services",
      },
      {
        title: "Social Media Marketing",
        description: "Drive engagement through social media ads.",
        svg: "📢",
        link: "/services",
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
                <div className="d-flex flex-column ">
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
                                <Link to={item.link} className="d-flex align-items-start text-white text-decoration-none">
                                  {item.svg && (
                                    <img src={item.svg} alt={item.title + " icon"} style={{ width: 30, height: 30, marginRight: 10 }} />
                                  )}
                                  <div>
                                    <strong>{item.title}</strong>
                                    <p className="small mb-0">{item.description}</p>
                                  </div>
                                </Link>
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
              <a className="nav-link" href="/about">
                About
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
            <a href="https://calendly.com/ayansayad2005/30min?month=2024-12" target="_blank">
              Book a Call
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
