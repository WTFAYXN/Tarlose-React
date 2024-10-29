import React from "react";
import "./Navbar.css";
import logo from "../assets/Logos/Tarlose.svg";


const Navbar =() => { 
    return (
        <>
         <nav className="navbar navbar-expand-lg p-0">
            <div className="container">
                <a className="navbar-brand p-0" href="/">
                    <img src={logo} alt="Tarlose" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-pills mx-auto mb-2 mb-lg-0" id="navList">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Service">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Work">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="About.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/career">Careers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Blog.html">Blogs</a>
                        </li>
                    </ul>
                    <button type="button" className="nav-btn px-4 py-2 rounded border-0">
                        <a href="tel:+91 8291617114">Book a Call</a>
                    </button>
                </div>
            </div>
        </nav>
        </>
    )
 }

 export default Navbar;