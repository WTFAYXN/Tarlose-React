import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import technology from "../../assets/svgs/technology.svg";
import service from "../../assets/svgs/service.svg";
import industry from "../../assets/svgs/industry.svg";
import timeframe from "../../assets/svgs/timeframe.svg";
import some from "../../assets/some.png"

import "./Portfolio.css";

const Portfolio = () => {
    return (
        <>
            <Navbar />
            <div className="main-work-live-cont">
                <div className="container">
                    <div className="headding_work_live d-flex align-items-center">
                        <div className="txt_cont-work_live">
                            <h1>Learning meets innovation: Your ultimate website for preparation.</h1>
                            <p>"Experience the perfect blend of learning and innovation with our feature-packed website. Create personalized questionnaires, access premium study materials, and stay updated with real-time notifications. Effortlessly share resources with URL-based links and unlock essential tools to streamline your preparation journey. Your ultimate destination for smarter, more effective learning."</p>
                        </div>

                        <img src="assets/svg/work_live_img.svg" class="img_work_live" alt="" />
                    </div>
                </div>
            </div>

            <div className="container cha_sol_cont d-flex justify-content-between">
                <div className="challenges">
                    <div className="chall-card mb-3 d-block align-content-center" style={{ maxWidth: "540px", height: "100%" }}>
                        <div className="row g-0">
                            <div className="col">
                                <div className="card-body">
                                    <h5 className="card-title">Challenges</h5>
                                    <p className="card-text">Our first approach was to search the market for existing solutions
                                        in the hope of finding an app that could meet our unique requirements. But the
                                        search was in vain. The available solutions either did not have the features we
                                        envisioned or were not flexible enough to adapt to the specific needs of our event.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="solution">
                    <div className="sol-card mb-3 d-block align-content-center" style={{ maxWidth: "720px", height: "100%" }}>
                        <div className="row g-0 align-items-center">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Solution</h5>
                                    <p className="card-text">The result was the Golf Cup App, a comprehensive digital companion
                                        for our event attendees. From shuttle times to tee times, from dinner schedules to
                                        event updates, everything was just a tap away.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src="assets/svg/work_live_img.svg" className="img-fluid rounded-start" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
            
            <div className="container work_icon_cont">
                <div className="row align-content-center">


                    <div className="col">
                        <div className="" style={{ width: "18rem" }}>
                            <img src={service} className="w-25" alt="..." />
                            <div className="card-body">
                                <h5 className="head_title pt-4">SERVICE</h5>
                                <p className="card-text">
                                    <p>user research</p>
                                    <p>concept & wireframe</p>
                                    <p>UX/UI Design</p>
                                    <p>prototype</p>
                                    <p>Development</p>
                                    <p>Go Live Strategy</p>
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="col">
                        <div className="" style={{ width: "18rem" }}>
                            <img src={technology} className="w-25" alt="..." />
                            <div className="card-body">
                                <h5 className="head_title pt-4">TECHNOLOGY</h5>
                                <p className="card-text">
                                    <p>React.js</p>
                                    <p>Mongodb</p>
                                    <p>Node.js</p>
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="col">
                        <div className="" style={{ width: "18rem" }}>
                            <img src={industry} className="w-25" alt="..." />
                            <div className="card-body">
                                <h5 className="head_title pt-4">Industry</h5>
                                <p className="card-text">
                                    <p>React.js</p>
                                    <p>React.js</p>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="" style={{ width: "18rem" }}>
                            <img src={timeframe} className="w-25" alt="..." />
                            <div className="card-body">
                                <h5 className="head_title pt-4">Timeframe</h5>
                                <p className="card-text">
                                    <p>20 days</p>
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <h2 className="key_function text-center my-5">The key functions at a glance</h2>

            <div className="row row-cols-lg-1 gap-5 my-5">
                <div className="col d-flex">
                    <div className="text-cont text-fun_key_cont">
                        <h3>schedule at a glance</h3>
                        <p>Our solution provides a clear and detailed schedule of the event so that attendees can make the
                            most of every moment. With an intuitive user interface, we make planning easier and provide
                            up-to-date information on sessions and speakers so that no valuable moment is wasted.</p>
                    </div>
                    <div className="fun_key_img_cont">
                        <img className=".fun_key_img" src={some} alt="" />
                    </div>
                </div>
                <div className="col d-flex">
                    <div className="fun_key_img_cont">
                         <img className=".fun_key_img" src={some} alt="" />
                    </div>
                    <div className="text-cont text-fun_key_cont">
                        <h3>schedule at a glance</h3>
                        <p>Our solution provides a clear and detailed schedule of the event so that attendees can make the
                            most of every moment. With an intuitive user interface, we make planning easier and provide
                            up-to-date information on sessions and speakers so that no valuable moment is wasted.</p>
                    </div>
                </div>
                <div className="col d-flex">
                    <div className="text-cont text-fun_key_cont">
                        <h3>schedule at a glance</h3>
                        <p>Our solution provides a clear and detailed schedule of the event so that attendees can make the
                            most of every moment. With an intuitive user interface, we make planning easier and provide
                            up-to-date information on sessions and speakers so that no valuable moment is wasted.</p>
                    </div>
                    <div className="fun_key_img_cont">
                    <img className=".fun_key_img" src={some} alt="" />
                    </div>
                </div>
                <div className="col d-flex">
                    <div className="fun_key_img_cont">
                    <img className=".fun_key_img" src={some} alt="" />
                    </div>
                    <div className="text-cont text-fun_key_cont">
                        <h3>schedule at a glance</h3>
                        <p>Our solution provides a clear and detailed schedule of the event so that attendees can make the
                            most of every moment. With an intuitive user interface, we make planning easier and provide
                            up-to-date information on sessions and speakers so that no valuable moment is wasted.</p>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="star_now text-center">
                    <div className="my-4 start_nowMain" >

                    <p>START NOW</p>
                    <h4 className="startNow-h1 w-70 m-auto">Software development doesn't have to be complicated. At least not with us.</h4>
                    <p className="w-50 m-auto py-4 startNow-p">We work with ideas that inspire, excite and fascinate. Ideas that
                        challenge conventions and shape trends. With our impressive personal touch, we want to make
                        users fall in love with your brand.</p>
                    </div>
                    <button type="button" className="nav-btn px-4 py-2 rounded-pill border-0">
                        <a href="tel:+91 8291617114">Book a Call</a>
                    </button>
                </div>
            </div>
           
            <Footer />
        </>
    );
}

export default Portfolio;