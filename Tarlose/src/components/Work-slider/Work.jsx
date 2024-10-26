import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Work.css"; // Ensure you have the necessary CSS

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useLayoutEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 800px)": function() {
        gsap.to(".racesWrapper .races", {
          transform: "translateX(-220%)",
          scrollTrigger: {
            trigger: ".racesWrapper",
            scroller: "body",
            markers: true,
            start: "top 15%",
            end: "top -150%",
            scrub: 2,
            pin: true
          }
        });
      }
    });
  }, []);

    return(
        <>
        {/* <!-- gsap scroll-slider  -->

<!-- work section  -->
 */}


<div className="racesWrapper text-white" id="Work">
    <div className="races">
        <div className="work-cont">
            <h2 className="work-headding">We let <span>our work</span> speak for itself.</h2>
            <p className="work-para">Our experts develop customized native apps and software solutions with
                innovative
                technologies for your success.</p>
            <button className="btn btn-contact  px-5 py-2" type="button">Contact Us</button>
        </div>

        <div className="works-cards-cont my-5 d-grid g-5">
            <div className="row">
                <div className="sub-card-cont d-flex">

                    <a href="./work_live.html" className="card_link">
                    <div className="works-card-1 ">
                        <div className="cards-headding d-flex justify-content-between">
                            <div className="title-work-card">
                                <h3>My App</h3>
                                <h6 id="display-text">App | 2024</h6>
                            </div>

                            <p className="m-0">Case study</p>
                        </div>

                        <div className="work-img-cont">
                            <img src="assets/images/sample-card-img.avif" className="img-thumbnail" alt=""/>
                        </div>

                    </div>
                    </a>
                    <a href="./work_live.html" className="card_link">
                    <div className="works-card-1 ">
                        <div className="cards-headding d-flex justify-content-between">
                            <div className="title-work-card">
                                <h3>My App</h3>
                                <h6 id="display-text">App | 2024</h6>
                            </div>

                            <p className="m-0">Case study</p>
                        </div>

                        <div className="work-img-cont">
                            <img src="assets/images/sample-card-img.avif" className="img-thumbnail" alt=""/>
                        </div>

                    </div>
                    </a>
                    <a href="./work_live.html" className="card_link">
                    <div className="works-card-1 ">
                        <div className="cards-headding d-flex justify-content-between">
                            <div className="title-work-card">
                                <h3>My App</h3>
                                <h6 id="display-text">App | 2024</h6>
                            </div>

                            <p className="m-0">Case study</p>
                        </div>

                        <div className="work-img-cont">
                            <img src="assets/images/sample-card-img.avif" className="img-thumbnail" alt=""/>
                        </div>

                    </div>
                    </a>
                    <a href="./work_live.html" className="card_link">
                    <div className="works-card-1 ">
                        <div className="cards-headding d-flex justify-content-between">
                            <div className="title-work-card">
                                <h3>My App</h3>
                                <h6 id="display-text">App | 2024</h6>
                            </div>

                            <p className="m-0">Case study</p>
                        </div>

                        <div className="work-img-cont">
                            <img src="assets/images/sample-card-img.avif" className="img-thumbnail" alt=""/>
                        </div>

                    </div>
                    </a>
                    <a href="./work_live.html" className="card_link">
                    <div className="works-card-1 ">
                        <div className="cards-headding d-flex justify-content-between">
                            <div className="title-work-card">
                                <h3>My App</h3>
                                <h6 id="display-text">App | 2024</h6>
                            </div>

                            <p className="m-0">Case study</p>
                        </div>

                        <div className="work-img-cont">
                            <img src="assets/images/sample-card-img.avif" className="img-thumbnail" alt=""/>
                        </div>

                    </div>
                    </a>
                    <a href="./work_live.html" className="card_link">
                    <div className="works-card-1 ">
                        <div className="cards-headding d-flex justify-content-between">
                            <div className="title-work-card">
                                <h3>My App</h3>
                                <h6 id="display-text">App | 2024</h6>
                            </div>

                            <p className="m-0">Case study</p>
                        </div>

                        <div className="work-img-cont">
                            <img src="assets/images/sample-card-img.avif" className="img-thumbnail" alt=""/>
                        </div>

                    </div>
                    </a>
                    <a href="./work_live.html" className="card_link">
                    <div className="works-card-1 ">
                        <div className="cards-headding d-flex justify-content-between">
                            <div className="title-work-card">
                                <h3>My App</h3>
                                <h6 id="display-text">App | 2024</h6>
                            </div>

                            <p className="m-0">Case study</p>
                        </div>

                        <div className="work-img-cont">
                            <img src="assets/images/sample-card-img.avif" className="img-thumbnail" alt=""/>
                        </div>

                    </div>
                    </a>
                    
                </div>

            </div>


        </div>


    </div>
</div>
        </>
    )
}

export default Work;