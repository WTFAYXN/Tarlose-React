import React, { useLayoutEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import "../../index.css";

const About = () =>{
    return(
        <>
        <Navbar />
         <h1 class="text-center text-white mb-5">About Us </h1>

<div class="container">
    <h3 class="headding-para">The perfect starting point for any</h3>

    <div class="text-scroller-cont">
        <div class="sub-text-cont">
            <p class="m-0 slide-txt">Lorem ipsum</p>
            <p class="m-0 slide-txt"> ipsum</p>
            <p class="m-0 slide-txt">Lorem</p>
            <p class="m-0 slide-txt">Tarlose</p>
            <p class="m-0 slide-txt">Animation</p>
        </div>

    </div>

    <p class="sub-head-para">The world's most advanced UI kit for Figma. Meticulously crafted with 100% Auto
        Layout 5.0, variables, smart variants, and WCAG accessibility.</p>

    <div class="row row-cols-lg-4 row-cols-md-2 row-cols-1 my-5">
        <div class="col">
            <h5 class="txt-count">900+</h5>
            <p class="para-parent">Global styles + variables</p>
            <p class="para-sub">Super smart global color, typography and effects styles + variables!</p>
        </div>
        <div class="col">
            <h5 class="txt-count">900+</h5>
            <p class="para-parent">Global styles + variables</p>
            <p class="para-sub">Super smart global color, typography and effects styles + variables!</p>
        </div>
        <div class="col">
            <h5 class="txt-count">900+</h5>
            <p class="para-parent">Global styles + variables</p>
            <p class="para-sub">Super smart global color, typography and effects styles + variables!</p>
        </div>
        <div class="col">
            <h5 class="txt-count">900+</h5>
            <p class="para-parent">Global styles + variables</p>
            <p class="para-sub">Super smart global color, typography and effects styles + variables!</p>
        </div>

    </div>
</div>

<Footer/>
        </>
    )
}

export default About;