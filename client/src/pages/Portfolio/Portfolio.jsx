import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Portfolio.css";
import { getPageMetadata } from "../../utils/seoHelpers";

const processSteps = [
  {
    id: 1,
    icon: "💡",
    title: "The Goal:",
    description:
      "The primary goal of Fade is to offer creatives a sleek and sophisticated portfolio template, seamlessly combining modern design with powerful functionality. Crafted for designers, developers, and artists, Fade empowers users to showcase their work with style and ease.",
    link: "https://framerusercontent.com/images/3LfHMMTEGOx7yndv0RYuSGty0.png",
  },
  {
    id: 2,
    icon: "📄",
    title: "The Challenge:",
    description:
      "Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.",
    link: "https://framerusercontent.com/images/zzhg1ikeUdssIf2BI21yIuNaPM.png",

  },
  {
    id: 3,
    icon: "🚀",
    title: "The Result",
    description:
      "As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations.",
    link: "https://framerusercontent.com/images/TlQdm3FPd3GqXclSlI98h7fC6KY.png",

  },
];

const Portfolio = () => {
  const pageMetadata = getPageMetadata('portfolio');
  
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
      <section className="portfolio-section container" style={{ marginTop: "100px" }}>
        <div className="portfolio-container">
          <div className="portfolio-left-container">
            <h2 className="m-0 eco-sub">Fade</h2>
            <p className="m-0">
              Fade is a premium portfolio template designed to showcase work
              with elegance and precision, perfect for designers, developers,
              and creative professionals.
            </p>
            <button className="btn shining-button">
              <a href="https://calendly.com/ayansayad2005/30min?month=2024-12">
                Live Site Preview
              </a>
            </button>
            <div className="project-container">
              <div className="client">
                <p className="m-0">Client</p>
                <h6>Framer Template</h6>
              </div>
              <div className="Service-provider">
                <p className="m-0">Service Provided</p>
                <h6>Web Design, Web Development</h6>
              </div>
            </div>
          </div>

          <div className="portfolio-right-container">
            <div className="portfolio-right-container-image">
              <img
                src="https://framerusercontent.com/images/lpo2IfbEoH5pVlCclxyuFUYN7w.png"
                alt="Fade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="goal container">
        <div className="goal-process-steps">
          {processSteps.map((step, idx) => (
            <div key={step.id} className="goal-process-step">
              <div className="step-header">
                <span className="step-icon">{step.icon}</span>
                <h5>{step.title}</h5>
              </div>

              <p className="step-description">{step.description}</p>
              <div className="goal-process-img">
                <img src={step.link} alt="" />
              </div>

              {idx !== processSteps.length - 1 && (
                <hr className="step-line goal-step-line" />
              )}
              <span className="step-number">{step.id}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;
