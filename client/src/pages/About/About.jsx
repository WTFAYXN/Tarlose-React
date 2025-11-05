import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import "./About.css";
import ayan from "../../assets/founder/ayan.png"
import huzaifa from "../../assets/founder/huzaifa.png"
import hamdan from "../../assets/founder/hamdan.png"
import tarloseLogo from "../../assets/Logos/favicon.ico.png"
import { getPageMetadata } from "../../utils/seoHelpers";
const aboutData = {
  hero: {
    tagline: "We make digital work for you.",
    title: "Built on Clarity. Powered by creativity.",
    titleHighlight: "Clarity.", 
  },
  company: {
    title: "ABOUT Tarlose",
    experience: {
      heading: "Young, Driven, and Unstoppable.",
      description: [
        "Tarlose was founded in 2024 by Ayan, Huzaifa and Hamdan.",
        "Our vision is simple: to digitalize businesses and empower startups with expert tech solutions, becoming the hands-on support and strategic partner today’s founders need, no in-house CTO required.",
      ],
      cta: {
        text: "Book a Call",
        url: "https://calendly.com/ayansayad2005/30min?month=2024-12",
      },
    },
  },
  founders: {
    title: "The Minds Behind Tarlose",
    // highlight: "Tarlose",
    list: [
      {
        name: "Ayan Sayad",
        position: "Co-founder",
        description:
          "Ayan is a developer, designer, and entrepreneur with a passion for building digital experiences that work. With hands-on expertise in website design, development, and strategy, he leads Tarlose with a client-first approach focused on transparency and results.",
        image:
          ayan,
        alt: "Ayan",
        email: "mailto:admin@tarlose.com",
        linkedin: "https://www.linkedin.com/in/ayansayad/"
      },
      {
        name: "Huzaifa Ansari",
        position: "Co-founder",
        description:
          "Huzaifa ensures everything at Tarlose runs like clockwork. From streamlining operations to overseeing project execution, he brings structure and efficiency to the team, making sure client goals are met with precision and reliability.",
        image:
          huzaifa,
        alt: "Huzaifa Ansari",
        email: "mailto:admin@tarlose.com",
        linkedin: "https://www.linkedin.com/in/huzaifaansari0/"
      },
      {
        name: "Hamdan Shaikh",
        position: "Co-founder",
        description:
          "Hamdan is the face of Tarlose at networking events and industry meetups, building relationships and bringing in new clients. With a talent for connecting with people and understanding business needs, he drives growth by turning conversations into long-term partnerships.",
        image:
          hamdan,
        alt: "Hamdan Shaikh",
        email: "mailto:admin@tarlose.com",
        linkedin: "https://www.linkedin.com/in/mohammed-hamdan-shaikh"
      },
    ],
  },
};

const About = () => {
  const pageMetadata = getPageMetadata('about');

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
      <Cursor />

      <div className="about-parent">
        {/* Hero Section */}
        <div className="about-hero container">
          <p>{aboutData.hero.tagline}</p>
          <h1>
            {aboutData.hero.title.split(aboutData.hero.titleHighlight)[0]}
            <span className="eco-sub">{aboutData.hero.titleHighlight}</span>
            {aboutData.hero.title.split(aboutData.hero.titleHighlight)[1]}
          </h1>
        </div>

        {/* Company Section */}
        <div className="about-tarlose container">
          <div className="left-about-container">
            <img src={tarloseLogo} />
          </div>
          <div className="about-experience-container">
            <h2 className="text-uppercase">{aboutData.company.experience.heading}</h2>
            {aboutData.company.experience.description.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
            <button type="button" className="nav-btn">
              <a href={aboutData.company.experience.cta.url}>
                {aboutData.company.experience.cta.text}
              </a>
            </button>
          </div>
        </div>

        {/* Founders Section */}
        <div className="about-founders container">
          <div className="about-title text-center">
            <p>{aboutData.founders.title}</p>
            <h2 className="text-uppercase eco-sub">{aboutData.founders.highlight}</h2>
          </div>

          {aboutData.founders.list.map((founder, index) => (
            <div
              className="founder-container"
              key={index}
              style={{
                flexDirection: index % 2 === 1 ? "row-reverse" : "row",
              }}
            >
              <div className="founder-img">
                <img src={founder.image} alt={founder.alt} />
              </div>
              <div className="founder-details">
                <h2 className="founder-name">{founder.name}</h2>
                <p className="founder-position">{founder.position}</p>
                <p className="founder-discription">{founder.description}</p>
                <ul className="founder-social">
                  <a href={founder.linkedin}>
                    <li> 
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                  </li>
                    </a>
                  <a href={founder.email}>
                    <li> 
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  </li>
                    </a>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;