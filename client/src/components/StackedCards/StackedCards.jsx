import React from "react";
import "./StackedCards.css";
import { CheckCircle, XCircle } from "lucide-react"; // Icons for Check & Cross

const StackedCards = () => {
  const cards = [
    {
      leftTitle: "Strategic Partnership",
      leftDesc:
        "We become your long-term partners, understanding your goals and optimizing for success at every step.",
      rightTitle: "Transactional Service",
      rightDesc:
        "Many agencies and freelancers deliver one-off projects, with limited investment in your ongoing growth.",
    },
    {
      leftTitle: "Transparent Processes",
      leftDesc:
        "Our workflow is crystal clear—regular updates, defined stages, and no unexpected costs.",
      rightTitle: "Hidden Complexity",
      rightDesc:
        "Some Agencies and freelancers often lack structured communication, causing delays and confusion.",
    },
    {
      leftTitle: "Full-Spectrum Expertise",
      leftDesc:
        "Our team covers design, development, and marketing, giving you unified results with seamless execution.",
      rightTitle: "Limited Skillsets",
      rightDesc:
        "Freelancers usually specialize in one area, requiring you to juggle multiple hires for a single project.",
    },
    {
      leftTitle: "Proactive Support",
      leftDesc:
        "We monitor, maintain, and proactively solve issues before they impact your business.",
      rightTitle: "Reactive Problem-Solving",
      rightDesc:
        "Support from others is often afterthought, slow to respond, or ends when the project is delivered.",
    },
  ];

  return (
    <>
      <div className="container my-5">
        <div className="stacked-heading-container">
          <div className="tag-container">
            <div className="tag">
              <span>•</span> Why choose Us
            </div>
          </div>

          <div className="stacked-content-container">
            <h2 className="m-0">
              Why Tarlose as <span className="eco-sub">Your Partner</span>
            </h2>
            {/* <p className="m-0">Why partner with Me for Design Excellence</p> */}
          </div>
        </div>

        <div className="stacked-cards-container">
          <ul id="cards">
            {cards.map((card, index) => (
              <li
                key={index}
                id={`card${index + 1}`}
                className="card stack-card"
                style={{ "--index": index + 1 }}
              >
                <div className="card-body">
                  <div className="d-flex parent-card w-full text-white">
                    {/* Left Column */}
                    <div className="card-main-content bg-[#181818] p-6 rounded-xl">
                      <div className="card-main-heading text-lg font-semibold">
                        <CheckCircle className="text-green-400" size={25} />
                        <h2>{card.leftTitle}</h2>
                      </div>
                      <p className=" text-sm">{card.leftDesc}</p>
                    </div>
                    <div className="vertical-devider"></div>
                    {/* Right Column */}
                    <div className="card-main-content bg-[#181818] p-6 rounded-xl">
                      <div className=" card-main-heading text-lg font-semibold">
                        <XCircle className="text-red-400" size={25} />
                        <h2>{card.rightTitle}</h2>
                      </div>
                      <p className=" text-sm">{card.rightDesc}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default StackedCards;
