import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import technology from "../../assets/svgs/technology.svg";
import service from "../../assets/svgs/service.svg";
import industry from "../../assets/svgs/industry.svg";
import timeframe from "../../assets/svgs/timeframe.svg";
import some from "../../assets/some.png";

import "./Portfolio.css";

const Portfolio = () => {
    return (
        <>
            <Navbar />
            <div className="main-work-live-cont py-5">
                <div className="container">
                    <div className="heading_work_live row align-items-center">
                        <div className="txt_cont-work_live col-lg-6">
                            <h1 className="mb-4">Learning meets innovation: Your ultimate website for preparation.</h1>
                            <p className="lead">"Experience the perfect blend of learning and innovation with our feature-packed website. Create personalized questionnaires, access premium study materials, and stay updated with real-time notifications. Effortlessly share resources with URL-based links and unlock essential tools to streamline your preparation journey. Your ultimate destination for smarter, more effective learning."</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="assets/svg/work_live_img.svg" className="img_work_live img-fluid" alt="Work Live" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container cha_sol_cont py-5">
                <div className="row gy-4">
                    <div className="col-lg-5">
                        <div className="challenges h-100">
                            <div className="chall-card  h-100" >
                                <div className="card-body">
                                    <h5 className="card-title mb-3">Challenges</h5>
                                    <p className="card-text">Our first approach was to search the market for existing solutions
                                        in the hope of finding an app that could meet our unique requirements. But the
                                        search was in vain. The available solutions either did not have the features we
                                        envisioned or were not flexible enough to adapt to the specific needs of our event.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="solution h-100">
                            <div className="sol-card h-100" >
                                <div className="row g-0 h-100 align-items-center">
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title mb-3">Solution</h5>
                                            <p className="card-text">The result was the Golf Cup App, a comprehensive digital companion
                                                for our event attendees. From shuttle times to tee times, from dinner schedules to
                                                event updates, everything was just a tap away.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <img src="assets/svg/work_live_img.svg" className="img-fluid rounded-start" alt="Solution" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container work_icon_cont py-4">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                    <div className="col">
                        <div className="text-start h-100">
                            <img src={service} className="w-20 mb-4" alt="Service" />
                            <div className="card-body">
                                <h5 className="head_title mb-3 fs-6">SERVICE</h5>
                                <div className="card-text small">
                                    <p className="mb-1">User Research</p>
                                    <p className="mb-1">Concept & Wireframe</p>
                                    <p className="mb-1">UX/UI Design</p>
                                    <p className="mb-1">Prototype</p>
                                    <p className="mb-1">Development</p>
                                    <p className="mb-1">Go Live Strategy</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="text-center h-100">
                            <img src={technology} className="w-20 mb-4" alt="Technology" />
                            <div className="card-body">
                                <h5 className="head_title mb-3 fs-6">TECHNOLOGY</h5>
                                <div className="card-text small">
                                    <p className="mb-1">React.js</p>
                                    <p className="mb-1">MongoDB</p>
                                    <p className="mb-1">Node.js</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="text-center h-100">
                            <img src={industry} className="w-20 mb-4" alt="Industry" />
                            <div className="card-body">
                                <h5 className="head_title mb-3 fs-6">INDUSTRY</h5>
                                <div className="card-text small">
                                    <p className="mb-1">Education</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="text-end h-100">
                            <img src={timeframe} className="w-20 mb-4" alt="Timeframe" />
                            <div className="card-body">
                                <h5 className="head_title mb-3 fs-6">TIMEFRAME</h5>
                                <div className="card-text small">
                                    <p className="mb-1">20 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="key_function text-center my-5">The key functions at a glance</h2>

            <div className="container-fluid">
                <div className="row gy-5">
                    <div className="col-12">
                        <div className="d-flex flex-column flex-lg-row-reverse align-items-start gap-4">
                            <div className="text-cont text-fun_key_cont flex-grow-1">
                                <h3 className="mb-3">Schedule at a glance</h3>
                                <p>Our solution provides a clear and detailed schedule of the event so that attendees can make the
                                    most of every moment. With an intuitive user interface, we make planning easier and provide
                                    up-to-date information on sessions and speakers so that no valuable moment is wasted.</p>
                            </div>
                            <div className="fun_key_img_cont" style={{width: "50%"}}>
                                <img className="fun_key_img img-fluid" src={some} alt="Schedule" style={{maxHeight: "300px", objectFit: "cover"}} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-column flex-lg-row align-items-start gap-4">
                            <div className="text-cont text-fun_key_cont flex-grow-1">
                                <h3 className="mb-3">Schedule at a glance</h3>
                                <p>Our solution provides a clear and detailed schedule of the event so that attendees can make the
                                    most of every moment. With an intuitive user interface, we make planning easier and provide
                                    up-to-date information on sessions and speakers so that no valuable moment is wasted.</p>
                            </div>
                            <div className="fun_key_img_cont" style={{width: "50%"}}>
                                <img className="fun_key_img img-fluid" src={some} alt="Schedule" style={{maxHeight: "300px", objectFit: "cover"}} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-column flex-lg-row-reverse align-items-start gap-4">
                            <div className="text-cont text-fun_key_cont flex-grow-1">
                                <h3 className="mb-3">Schedule at a glance</h3>
                                <p>Our solution provides a clear and detailed schedule of the event so that attendees can make the
                                    most of every moment. With an intuitive user interface, we make planning easier and provide
                                    up-to-date information on sessions and speakers so that no valuable moment is wasted.</p>
                            </div>
                            <div className="fun_key_img_cont" style={{width: "50%"}}>
                                <img className="fun_key_img img-fluid" src={some} alt="Schedule" style={{maxHeight: "300px", objectFit: "cover"}} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-column flex-lg-row align-items-start gap-4">
                            <div className="text-cont text-fun_key_cont flex-grow-1">
                                <h3 className="mb-3">Schedule at a glance</h3>
                                <p>Our solution provides a clear and detailed schedule of the event so that attendees can make the
                                    most of every moment. With an intuitive user interface, we make planning easier and provide
                                    up-to-date information on sessions and speakers so that no valuable moment is wasted.</p>
                            </div>
                            <div className="fun_key_img_cont" style={{width: "50%"}}>
                                <img className="fun_key_img img-fluid" src={some} alt="Schedule" style={{maxHeight: "300px", objectFit: "cover"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 py-5">
                <div className="star_now text-center">
                    <div className="start_nowMain">
                        <p className="text-uppercase mb-3">START NOW</p>
                        <h2 className="startNow-h1 mx-auto mb-4" style={{maxWidth: "800px"}}>Transform Your Ideas Into Powerful Digital Solutions</h2>
                        <p className="startNow-p mx-auto mb-5" style={{maxWidth: "600px"}}>We specialize in creating innovative solutions that inspire and excite. Our team combines technical expertise with creative thinking to build products that users love and businesses rely on.</p>
                        <button type="button" className="nav-btn px-4 py-2 rounded-pill border-0">
                            <a href="tel:+91 8291617114" className="text-decoration-none">Book a Call</a>
                        </button>
                    </div>
                </div>
            </div>
           
            <Footer />
        </>
    );
};

export default Portfolio;