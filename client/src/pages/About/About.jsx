import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

const aboutData = {
  hero: {
    tagline: "We get it done.",
    title: "CONCEPTS DESIGNED TO MAKE AN IMPACT",
    titleHighlight: "DESIGNED",
  },
  company: {
    title: "ABOUT Tarlose",
    experience: {
      heading: "not old, just experienced.",
      description: [
        "We've been around since 2009, and we've seen the industry change and grow.",
        "We have collaborated on an impressive list of high-profile interactive projects through partnerships with some of the top advertising agencies and brands in the world. Our work has ranged from entertainment and consumer goods, to manufacturing, technology, and more.",
      ],
      cta: {
        text: "Book a Call",
        url: "https://calendly.com/ayansayad2005/30min?month=2024-12",
      },
    },
  },
  founders: {
    title: "A little about the",
    highlight: "FOUNDERS",
    list: [
      {
        name: "Ayan Khan",
        position: "Co-founder",
        description:
          "Lynn has over 15 years of experience in Online Marketing, Advertising and Creative Production...",
        image:
          "https://cdn-wp.thesportsrush.com/2024/06/635c8b75-untitled-design.jpg?format=auto&w=3840&q=75",
        alt: "Ayan",
      },
      {
        name: "Ayan Khan",
        position: "Co-founder",
        description:
          "Lynn has over 15 years of experience in Online Marketing, Advertising and Creative Production...",
        image:
          "https://cdn-wp.thesportsrush.com/2024/06/635c8b75-untitled-design.jpg?format=auto&w=3840&q=75",
        alt: "Ayan",
      },
      {
        name: "Ayan Khan",
        position: "Co-founder",
        description:
          "Lynn has over 15 years of experience in Online Marketing, Advertising and Creative Production...",
        image:
          "https://cdn-wp.thesportsrush.com/2024/06/635c8b75-untitled-design.jpg?format=auto&w=3840&q=75",
        alt: "Ayan",
      },
    ],
  },
};

const About = () => {
  useEffect(() => {
    gsap.to(".about-parent", {
      scrollTrigger: {
        trigger: ".about-founders",
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play reverse play reverse",
      },
      backgroundColor: "#ffffff",
      color: "#000000",
      duration: 0.8,
      ease: "power2.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
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
          <h5 className="text-uppercase">{aboutData.company.title}</h5>
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