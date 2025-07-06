import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WhatsNew from './WhatsNew';
import WebDev from './WebDev';
import GraphicDesign from './GraphicDesign';
import DigitalMarketing from './DigitalMarketing';
import TechTools from './TechTools';
import { FaSearch } from "react-icons/fa";


const BlogTabsNav = () => {
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem("blogActiveTab") || "whats-new");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    localStorage.setItem("blogActiveTab", tab);
    setActiveTab(tab);
    navigate("/blogs");
  };

  return (
   <div className="modern-blog-container" style={{ marginTop: "100px" }}>
        <div className="blog-tabs-container ">
            <div className="blog-tabs container">
              <nav className="nav-menu">
                <ul>
                  <li>
                    <a
                      href="#"
                      className={activeTab === "whats-new" ? "active" : ""}
                      onClick={e => { e.preventDefault(); handleTabClick("whats-new"); }}
                      style={{
                        color: activeTab === "whats-new" ? "#007bff" : "#333",
                        fontWeight:
                          activeTab === "whats-new" ? "bold" : "normal",
                      }}
                    >
                      What's New
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={
                        activeTab === "website-development" ? "active" : ""
                      }
                      onClick={e => { e.preventDefault(); handleTabClick("website-development"); }}
                      style={{
                        color:
                          activeTab === "website-development" ? "#007bff" : "#333",
                        fontWeight:
                          activeTab === "website-development" ? "bold" : "normal",
                      }}
                    >
                      Website Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={activeTab === "graphic-design" ? "active" : ""}
                      onClick={e => { e.preventDefault(); handleTabClick("graphic-design"); }}
                      style={{
                        color:
                          activeTab === "graphic-design" ? "#007bff" : "#333",
                        fontWeight:
                          activeTab === "graphic-design" ? "bold" : "normal",
                      }}
                    >
                      Graphic Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={activeTab === "digital-marketing" ? "active" : ""}
                      onClick={e => { e.preventDefault(); handleTabClick("digital-marketing"); }}
                      style={{
                        color:
                          activeTab === "digital-marketing" ? "#007bff" : "#333",
                        fontWeight:
                          activeTab === "digital-marketing" ? "bold" : "normal",
                      }}
                    >
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={activeTab === "tech-tools" ? "active" : ""}
                      onClick={e => { e.preventDefault(); handleTabClick("tech-tools"); }}
                      style={{
                        color: activeTab === "tech-tools" ? "#007bff" : "#333",
                        fontWeight: activeTab === "tech-tools" ? "bold" : "normal",
                      }}
                    >
                      Tech Tools
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="modern-search-container">
                <div className="search-icon">
                  <FaSearch />
                </div>
              </div>
            </div>
          </div>
        
      </div>
  )
}

export default BlogTabsNav