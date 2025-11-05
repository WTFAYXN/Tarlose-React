import React, { useLayoutEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Careers.css";
import "../../index.css";
import Prompt from "../../components/Prompt/Prompt";
import { getPageMetadata } from "../../utils/seoHelpers";

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
  const pageMetadata = getPageMetadata('careers');
  
  useLayoutEffect(() => {
    // Example GSAP animation
    gsap.from(".card-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".card-title",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
        <link rel="canonical" href={pageMetadata.url} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageMetadata.url} />
        <meta property="og:title" content={pageMetadata.title} />
        <meta property="og:description" content={pageMetadata.description} />
        <meta property="og:image" content={pageMetadata.image} />
        <meta property="og:site_name" content="Tarlose" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tarlose" />
        <meta name="twitter:url" content={pageMetadata.url} />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        <meta name="twitter:image" content={pageMetadata.image} />
      </Helmet>
      <Navbar />
      <div className="card text-bg-dark mb-5">
        <img
          src="/tarlose-html/assets/images/image-2.png"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title">Welcome to Tarlose, where talent meets opportunity!</h5>

        </div>
      </div>

{/* 
      <hr className="hr-divider" /> */}

      {/* <!--Current Openings --> */}

      <div className="container">
        <h4>Current Openings</h4>
        <p>
          We are always on the lookout for talented individuals who are
          passionate about creating exceptional digital experiences. Whether
          you're a designer, engineer, project manager, or have skills that
          align with our agency's mission, we encourage you to explore our open
          positions.
        </p>

        <hr />

        <h3 className="mb-5">Design Job Openings</h3>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
          <div className="col">
            <div className="card card-banner p-5">
              <img
                src="assets/svg/Icon-(2).svg"
                className=""
                alt="..."
                width="20%"
              />
              <div className=" ">
                <h5 className="card-title sub-card-title">UI Designer</h5>
                <p className="card-text pb-5">
                  Bring your creativity and expertise to our team as a UI
                  Designer. Collaborate with cross-functional teams to design
                  visually stunning and user-friendly interfaces. Utilize your
                  skills in layout design, typography, and color theory to
                  create engaging digital experiences that leave a lasting
                  impression.
                </p>

                <div className="d-grid mx-auto">
                  <button className="btn-card rounded" type="button">
                    Apply now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-banner p-5">
              <img
                src="assets/svg/Icon-(2).svg"
                className=""
                alt="..."
                width="20%"
              />
              <div className="">
                <h5 className="card-title sub-card-title">UX Designer</h5>
                <p className="card-text pb-5">
                  Bring your creativity and expertise to our team as a UI
                  Designer. Collaborate with cross-functional teams to design
                  visually stunning and user-friendly interfaces. Utilize your
                  skills in layout design, typography, and color theory to
                  create engaging digital experiences that leave a lasting
                  impression.
                </p>

                <div className="d-grid mx-auto">
                  <button className="btn-card rounded" type="button">
                    Apply now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-banner p-5">
              <img
                src="assets/svg/Icon-(2).svg"
                className=""
                alt="..."
                width="20%"
              />
              <div className="">
                <h5 className="card-title sub-card-title">Design Head</h5>
                <p className="card-text pb-5">
                  Bring your creativity and expertise to our team as a UI
                  Designer. Collaborate with cross-functional teams to design
                  visually stunning and user-friendly interfaces. Utilize your
                  skills in layout design, typography, and color theory to
                  create engaging digital experiences that leave a lasting
                  impression.
                </p>

                <div className="d-grid mx-auto">
                  <button className="btn-card rounded" type="button">
                    Apply now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <hr className="hr-divider" />

      <Prompt />

      <Footer />
    </>
  );
};

export default Careers;