import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <>
            <Navbar />
            <div className="main-work-live-cont">
                <div className="container">
                    <div className="headding_work_live d-flex align-items-center">
                        <div className="txt_cont-work_live">
                            <h1>Digital trifft Tradition: Unsere App für Golfturniere</h1>
                            <p>Golf, ein Sport mit reicher Tradition, stützt sich oft auf konventionelle Methoden für das
                                Eventmanagement. Für unseren ersten Charity-Golf-Cup an der malerischen Südküste Portugals
                                hatten wir jedoch eine Mischung aus Tradition und digitaler Innovation im Sinn. Als
                                Softwareunternehmen wollten wir unseren Teilnehmern ein unvergleichliches digitales Erlebnis
                                während des mehrtägigen Events bieten.</p>
                        </div>
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
                            <img src="assets/svg/service.svg" className="w-25" alt="..." />
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
                            <img src="assets/svg/service.svg" className="w-25" alt="..." />
                            <div className="card-body">
                                <h5 className="head_title pt-4">TECHNOLOGY</h5>
                                <p className="card-text">
                                    <p>React.js</p>
                                    <p>React.js</p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="" style={{ width: "18rem" }}>
                            <img src="assets/svg/service.svg" className="w-25" alt="..." />
                            <div className="card-body">
                                <h5 className="head_title pt-4">TECHNOLOGY</h5>
                                <p className="card-text">
                                    <p>React.js</p>
                                    <p>React.js</p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="" style={{ width: "18rem" }}>
                            <img src="assets/svg/service.svg" className="w-25" alt="..." />
                            <div className="card-body">
                                <h5 className="head_title pt-4">TECHNOLOGY</h5>
                                <p className="card-text">
                                    <p>React.js</p>
                                    <p>React.js</p>
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
                        <img className=".fun_key_img" src="assets/images/work_live.png" alt="" />
                    </div>
                </div>
                <div className="col d-flex">
                    <div className="fun_key_img_cont">
                        <img className=".fun_key_img" src="assets/images/work_live.png" alt="" />
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
                        <img className=".fun_key_img" src="assets/images/work_live.png" alt="" />
                    </div>
                </div>
                <div className="col d-flex">
                    <div className="fun_key_img_cont">
                        <img className=".fun_key_img" src="assets/images/work_live.png" alt="" />
                    </div>
                    <div className="text-cont text-fun_key_cont">
                        <h3>schedule at a glance</h3>
                        <p>Our solution provides a clear and detailed schedule of the event so that attendees can make the
                            most of every moment. With an intuitive user interface, we make planning easier and provide
                            up-to-date information on sessions and speakers so that no valuable moment is wasted.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="star_now text-center">
                    <p>START NOW</p>
                    <h4>Software development doesn't have to be complicated. At least not with us.</h4>
                    <p className="w-50 m-auto pb-4">We work with ideas that inspire, excite and fascinate. Ideas that
                        challenge conventions and shape trends. With our impressive personal touch, we want to make
                        users fall in love with your brand.</p>
                    <button type="button" className="nav-btn px-4 py-2 rounded border-0">
                        <a href="tel:+91 8291617114">Book a Call</a>
                    </button>
                </div>
            </div>
           
            <Footer />
        </>
    );
}

export default Portfolio;