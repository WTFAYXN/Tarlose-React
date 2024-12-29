import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Work.css"; // Ensure you have the necessary CSS
import WorkSlider from "../../Data/WorkSlider";
import { useNavigate } from "react-router-dom";
// import image from "../../assets/Work/Cyberkalki.png";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 800px)": function () {
          const racesElement = document.querySelector(".races");
          const racesWidth = racesElement.scrollWidth;

          // Horizontal scroll animation
          gsap.to(".races", {
            x: `-${racesWidth - window.innerWidth}px`,
            scrollTrigger: {
              trigger: ".racesWrapper",
              start: "top 10%",
              end: () => `+=${racesWidth * 0.8}px`,
              scrub: 2,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              // markers: true,
            },
          });
        }
      });
    });

    // Clean up ScrollTrigger instances on component unmount
    return () => ctx.revert();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="racesWrapper text-white" id="Work">
        <div className="races">
          <div className="work-cont">
            <h2 className="work-heading">
              We let <span>our work</span> speak for itself.
            </h2>
            <p className="work-para">
              Our experts develop customized native apps and software solutions
              with innovative technologies for your success.
            </p>
            <button className="btn btn-contact px-5 py-2" type="button">
              Contact Us
            </button>
          </div>

          <div className="works-cards-cont my-5 d-grid g-5">
            <div className="row">
              <div className="sub-card-cont d-flex">
                {WorkSlider.map((item) => (
                  <a href={item.url} className="card_link" key={item.id}>
                    <div className={item.class}>
                      <div className="cards-heading d-flex justify-content-between">
                        <div className="title-work-card">
                          <h3>{item.Name}</h3>
                          <h6 id="display-text">{item.category}</h6>
                        </div>
                        <p className="m-0">Case study</p>
                      </div>
                      <div className="work-img-cont">
                        <img
                          src={item.image}
                          className="rounded img-fluid"
                          alt={item.Name}
                        />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;