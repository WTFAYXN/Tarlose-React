import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import "./about.css";


const aboutData = {
  hero: {
    tagline: "We get it done.",
    title: "Driven by Purpose. Built for Impact.",
    titleHighlight: "Purpose", 
  },
  company: {
    title: "ABOUT Tarlose",
    experience: {
      heading: "Young, Driven, and Unstoppable.",
      description: [
        "Tarlose was founded in 2024 by Ayan, Huzaifa and Hamdan.",
        "Our vision is simple: to digitalize businesses and empower startups with expert tech solutions, becoming the hands-on support and strategic partner today’s founders need—no in-house CTO required.",
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
          "https://cdn-wp.thesportsrush.com/2024/06/635c8b75-untitled-design.jpg?format=auto&w=3840&q=75",
        alt: "Ayan",
      },
      {
        name: "Huzaifa Ansari",
        position: "Co-founder",
        description:
          "Huzaifa ensures everything at Tarlose runs like clockwork. From streamlining operations to overseeing project execution, he brings structure and efficiency to the team, making sure client goals are met with precision and reliability.",
        image:
          "https://cdn-wp.thesportsrush.com/2024/06/635c8b75-untitled-design.jpg?format=auto&w=3840&q=75",
        alt: "Ayan",
      },
      {
        name: "Hamdan Shaikh",
        position: "Co-founder",
        description:
          "Hamdan is the face of Tarlose at networking events and industry meetups, building relationships and bringing in new clients. With a talent for connecting with people and understanding business needs, he drives growth by turning conversations into long-term partnerships.",
        image:
          "https://cdn-wp.thesportsrush.com/2024/06/635c8b75-untitled-design.jpg?format=auto&w=3840&q=75",
        alt: "Ayan",
      },
    ],
  },
};

const About = () => {

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