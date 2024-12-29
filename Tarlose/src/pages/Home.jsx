import React, { useRef, useEffect, useLayoutEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import "../index.css";
import "./home.css";
import "./responsive.css"
import { Helmet } from "react-helmet";
import HeroVideo from "../assets/videos-audio/universe.mp4";
import TarloseTheme from "../assets/videos-audio/tarlose-theme-sound.mp3";
import gsap from "gsap";
import cardBg from "../assets/svgs/cardbg.svg";
import WebDev from "../assets/svgs/WebsiteDevelopment.svg";
import GraphicDesign from "../assets/svgs/Design.svg";
import Marketing from "../assets/svgs/Marketing.svg";

import Platforms from "../components/Platforms/Platforms";

import Expertise from "../assets/svgs/Expertise.svg";
import Client from "../assets/svgs/Client-Centric.svg";
import Partnership from "../assets/svgs/Partnership.svg";
import Results from "../assets/svgs/Results.svg";
import Work from "../components/Work-slider/Work";
import ThreeRowSlider from "../components/ImageSlider/ ThreeRowSlider";
import FAQ from "../components/Faqs/Faq";
import Prompt from "../components/Prompt/Prompt";
import MarqueeLogo from "../components/Marquee-company/MarqueeLogo";
import Community from "../components/Community/Community";


const Home = () => {
    const trackRef = useRef(null);
    const controlBtnRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        const controlBtn = controlBtnRef.current;

        const playPause = () => {
            if (track.paused) {
                track.play();
                controlBtn.className = "pause";
            } else {
                track.pause();
                controlBtn.className = "play";
            }
        };

        const handleTrackEnded = () => {
            controlBtn.className = "play";
        };

        controlBtn.addEventListener("click", playPause);
        track.addEventListener("ended", handleTrackEnded);

        // Cleanup event listeners on component unmount
        return () => {
            controlBtn.removeEventListener("click", playPause);
            track.removeEventListener("ended", handleTrackEnded);
        };
    }, []);

    useLayoutEffect(() => {
        const headingAnimation = gsap.context(() => {
            gsap.from("#home h1", {
                y: 100,
                opacity: 0,
                delay: 0.5,
                duration: 0.9,
                stagger: 0.3
            });

            gsap.from("#home .content-home", {
                y: 100,
                opacity: 0,
                delay: 1.5,
                duration: 0.9,
                stagger: 0.3
            });

            gsap.from("#btn-fade", {
                y: 100,
                opacity: 0,
                delay: 1.7,
                duration: 0.9,
                stagger: 0.3
            });
        });

        // Cleanup GSAP context on component unmount
        return () => headingAnimation.revert();
    }, []);

    return (
        <>

        {/* Seo */}
                <Helmet>
                    <title>Tarlose - Digital Solutions for Modern Businesses</title>
                    <meta name="description" content="Tarlose delivers innovative digital solutions through expert design, development and strategic services. Transform your business with our cutting-edge technology and creative expertise." />
                    <meta name="keywords" content="digital solutions, web development, app development, UI/UX design, digital transformation, Tarlose, business technology" />
                    <link rel="canonical" href="https://www.tarlose.com/" />
                    
                    {/* Open Graph Tags */}
                    <meta property="og:title" content="Tarlose - Digital Solutions for Modern Businesses" />
                    <meta property="og:description" content="Transform your business with cutting-edge digital solutions from Tarlose. Expert design, development and strategic services tailored for modern enterprises." />
                    <meta property="og:url" content="https://www.tarlose.com/" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://www.tarlose.com/og-image.jpg" />
                    <meta property="og:site_name" content="Tarlose" />
                    
                    {/* Twitter Card Tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@tarlose" />
                    <meta name="twitter:title" content="Tarlose - Digital Solutions for Modern Businesses" />
                    <meta name="twitter:description" content="Transform your business with cutting-edge digital solutions from Tarlose. Expert design, development and strategic services tailored for modern enterprises." />
                    <meta name="twitter:image" content="https://www.tarlose.com/twitter-card.jpg" />
                    
                    {/* Structured Data */}
                    <script type="application/ld+json">
                        {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Tarlose",
                            "url": "https://www.tarlose.com",
                            "description": "Tarlose delivers innovative digital solutions through expert design, development and strategic services. Transform your business with our cutting-edge technology and creative expertise.",
                            "sameAs": [
                                "https://twitter.com/tarlose",
                                "https://www.linkedin.com/company/tarlose",
                                "https://www.youtube.com/@Tarlose"
                            ]
                        }
                        `}
                    </script>
                </Helmet>
            <Cursor />
            <Navbar />

                        {/* SEO   */}



            {/* Page start     */}
            <div className="container hero" id="home">
                <video autoPlay loop muted>
                    <source src="https://res.cloudinary.com/dkqdf4oif/video/upload/v1730887637/fsodpf0v1bay95vefvel.mp4" type="video/mp4" />
                </video>

                <audio id="track" ref={trackRef}>
                    <source src={TarloseTheme} type="audio/mpeg" />
                </audio>

                <div id="player-container">
                    <div id="play-pause" className="play" ref={controlBtnRef}>
                        Play
                    </div>
                </div>

                <h1 className="text-white text-center main-heading-text">
                    Design. Develop. Dominate.
                </h1>
                <div className="content-home d-flex justify-content-center align-items-center my-5 ">
                    <div className="sub-home-cont d-flex align-items-center rounded flex-wrap">
                        <p>for</p>
                        <p>
                            <span>Startups</span>
                        </p>
                        <p>,</p>
                        <p>
                            <span>Agencies</span>
                        </p>
                        <p>,</p>
                        <p>
                            <span>SMBs</span>
                        </p>
                        <p>and</p>
                        <p>
                            <span>Social Good</span>
                        </p>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <div id="btn-fade">
                        <a href="#Work">
                            <button className="btn btn-work px-3 py-2" type="button">
                                Our Works
                            </button>
                        </a>
                        <a href="tel: 91+8291617114">
                            <button className="btn btn-contact px-3 py-2" type="button">
                                Contact Us
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className=" container marquee-title-cont">
                <p className="m-0 marquee-title rounded-5 ">Trusted By 50+ Companies</p>
            </div>
            {/* 
            <!-- scroller section  -->

            <!-- companies logo  --> */}

            <MarqueeLogo />

            {/* Services  */}

            <div className="container" id="Service">
                <h5 className="text-center text-white">Our services</h5>
                <h3 className="text-center mb-5 text-white heading-ser-para text-capitalize">
                   {/* More than just code a
                    comprehensive digital
                    solution for your digital needs */}
                    Bringing your vision to life
                </h3>

                <section className="cards-scroll">
                    <div className="card-row">


                        <div className="card">
                            <div className="card__body">
                                <img src={cardBg} alt="" className="card_img" />
                                <div className="overlay-img"></div>
                                <div className="card__content card-img-overlay">

                                    <div className="card-para-cont">
                                        <h4 className="num-card">1</h4>
                                        <h4 className="card-heading">Website Development</h4>
                                        <p>We use innovative solutions to create and/or improve <br /> customized
                                            software.</p>
                                        <button className="btn btn-contact px-3 py-2 " type="button">Contact Us</button>
                                        <button className="btn btn-portfolio px-3 py-2" type="button">View Portfolio</button>
                                    </div>



                                    <div className="img-wrapper">
                                        <img src={WebDev} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="card__body">
                                <img src={cardBg} alt="" className="card_img" />
                                <div className="overlay-img"></div>
                                <div className="card__content card-img-overlay">

                                    <div className="card-para-cont">
                                        <h4 className="num-card m-0">2</h4>
                                        <h4 className="card-heading py-3">Graphic <br /> Design</h4>
                                        <p>We use innovative solutions to create and/or improve <br /> customized
                                            software.</p>
                                        <button className="btn btn-contact px-3 py-2 " type="button">Contact Us</button>
                                        <button className="btn btn-portfolio px-3 py-2" type="button">View Portfolio</button>
                                    </div>



                                    <div className="img-wrapper">
                                        <img src={GraphicDesign} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="card__body">
                                <img src={cardBg} alt="" className="card_img" />
                                <div className="overlay-img"></div>
                                <div className="card__content card-img-overlay">

                                    <div className="card-para-cont">
                                        <h4 className="num-card">3</h4>
                                        <h4 className="card-heading py-3">Marketing</h4>
                                        <p>We use innovative solutions to create and/or improve <br /> customized
                                            software.</p>
                                        <button className="btn btn-contact px-3 py-2 " type="button">Contact Us</button>
                                        <button className="btn btn-portfolio px-3 py-2" type="button">View Portfolio</button>
                                    </div>



                                    <div className="img-wrapper">
                                        <img src={Marketing} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>
                </section>
            </div>

            <Platforms />


            {/* Why choose us */}



            <div className="card text-bg-dark position-relative overflow-hidden">
                <img 
                    src="./assets/images/image-2.png" 
                    className="card-img" 
                    alt="Tarlose team collaboration" 
                    loading="lazy"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
                    <h2 className="card-title display-4 mb-4 fw-bold">Why Choose Tarlose?</h2>
                    <p className="card-text fs-5 mx-auto" style={{maxWidth: "800px"}}>
                        Experience excellence in digital craftsmanship through our innovative solutions, 
                        expert team, and proven track record of delivering transformative results that 
                        help businesses thrive in the digital age.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4 text-white">

                    <div className="col p-0 m-0 exp-col">
                        <div className="exp-card">
                            <div className="d-flex align-items-center gap-4">
                                <img src={Expertise} alt="" />
                                <h6>Expertise</h6>
                            </div>
                            <p className="my-5">Our team consists of highly skilled professionals who have a deep
                                understanding
                                of
                                the
                                digital
                                landscape. We stay updated with the latest industry trends and best practices to deliver
                                cutting-edge solutions.</p>
                        </div>
                    </div>
                    <div className="col  p-0 m-0 exp-col">
                        <div className="exp-card ">
                            <div className="d-flex align-items-center gap-4">
                                <img src={Client} alt="" />
                                <h6>Client-Centric Approach</h6>
                            </div>
                            <p className="my-5">Our team consists of highly skilled professionals who have a deep
                                understanding
                                of
                                the
                                digital
                                landscape. We stay updated with the latest industry trends and best practices to deliver
                                cutting-edge solutions.</p>
                        </div>
                    </div>
                    <div className="col p-0 m-0 exp-col">
                        <div className="exp-card">
                            <div className="d-flex align-items-center gap-4">
                                <img src={Results} alt="" />
                                <h6>Results-Driven Solutions</h6>
                            </div>
                            <p className="my-5">Our team consists of highly skilled professionals who have a deep
                                understanding
                                of
                                the
                                digital
                                landscape. We stay updated with the latest industry trends and best practices to deliver
                                cutting-edge solutions.</p>
                        </div>
                    </div>
                    <div className="col p-0 m-0 exp-col">
                        <div className="exp-card">
                            <div className="d-flex align-items-center gap-4">
                                <img src={Partnership} alt="" />
                                <h6>Collaborative Partnership</h6>
                            </div>
                            <p className="my-5">Our team consists of highly skilled professionals who have a deep
                                understanding
                                of
                                the
                                digital
                                landscape. We stay updated with the latest industry trends and best practices to deliver
                                cutting-edge solutions.</p>
                        </div>
                    </div>

                </div>
            </div>


            <Work />







            {/* <!-- About Us  --> */}

            <div className="card text-bg-dark">
                <img src="./assets/images/image-2.png" className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                     <h2 className="card-title display-4 mb-4 fw-bold">What our Clients say About us</h2>
                   <p className="card-text fs-5 mx-auto text-center" style={{maxWidth: "800px"}}>At Tarlose, we take pride in delivering exceptional digital products and
                        services
                        that drive success for our clients. Here's what some of our satisfied clients have to say about
                        their experience working with us</p>
                </div>
            </div>
            {/* 
                        <!-- testimonials design  --> */}


            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                    <div className="col p-0">
                        <div className="test-col">
                            <div className="text-white">
                                <h5>Tarlose Revolutionized Our Digital Strategy</h5>
                                <p>The team delivered an exceptional e-commerce platform that exceeded our expectations. The intuitive design and seamless functionality have significantly improved our customer engagement and conversion rates. Their attention to detail and technical expertise made all the difference.</p>
                            </div>
                            <div className="testi-cont d-flex text-white">
                                <div className="test-name d-flex rounded">
                                    <img src="https://i.pravatar.cc/150?img=12" alt="Sarah Wilson" style={{width: "60px", height: "60px", borderRadius: "50%"}} />
                                    <div className="test-sub-cont">
                                        <h6>Sarah Wilson</h6>
                                        <p>Director of Digital Innovation</p>
                                    </div>
                                    <button className="test-btn">Open Website</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col p-0">
                        <div className="test-col">
                            <div className="text-white">
                                <h5>Outstanding Web Development & Design Services</h5>
                                <p>Working with Tarlose was a game-changer for our business. They transformed our outdated website into a modern, responsive platform that perfectly represents our brand. Their collaborative approach and innovative solutions helped us achieve remarkable results.</p>
                            </div>
                            <div className="testi-cont d-flex text-white">
                                <div className="test-name d-flex rounded">
                                    <img src="https://i.pravatar.cc/150?img=67" alt="Michael Chen" style={{width: "60px", height: "60px", borderRadius: "50%"}} />
                                    <div className="test-sub-cont">
                                        <h6>Michael Chen</h6>
                                        <p>Founder & CEO, TechVision</p>
                                    </div>
                                    <button className="test-btn">Open Website</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* <ThreeRowSlider /> */}



            {/* <!-- FAQ  --> */}

            {/* <Prompt /> */}
            <Community />
            <FAQ />
            <Footer />

        </>
    );
};

export default Home;