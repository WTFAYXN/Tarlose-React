import React from "react";
import "./StackedCards.css";
import { CheckCircle, XCircle } from "lucide-react"; // Icons for Check & Cross

const StackedCards = () => {
  const cards = [
    {
      leftTitle: "Skilled Professional",
      leftDesc:
        "Gain access to top-tier talent with years of experience, ensuring flawless execution",
      rightTitle: "Amateur Designer",
      rightDesc:
        "Lack of experience may result in design inconsistencies and overlooked details",
    },
    // {
    //   leftTitle: "Future-Ready Designs",
    //   leftDesc:
    //     "Crafting modern, scalable designs that grow with your business and stay ahead of trends.",
    //   rightTitle: "Outdated Concepts",
    //   rightDesc:
    //     "Stale designs that don’t reflect current trends or your evolving brand narrative.",
    // },
    // {
    //   leftTitle: "Client-Centric Collaboration",
    //   leftDesc:
    //     "Your vision leads the way — I work closely with you to bring ideas to life with precision and creativity.",
    //   rightTitle: "Detached Communication",
    //   rightDesc:
    //     "Lack of collaboration and poor feedback loops can result in misaligned outcomes.",
    // },
  ];

  return (
    <>
      <div className="container my-5">
        <div className="stacked-heading-container">
          <div className="tag-container">
            <div className="tag">
              <span>•</span> Why choose me
            </div>
          </div>

          <div className="stacked-content-container">
            <h2 className="m-0">
              Why Me as <span>Design Partner</span>
            </h2>
            <p className="m-0">Why partner with Me for Design Excellence</p>
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
                        <CheckCircle className="text-green-400" size={20} />
                        {card.leftTitle}
                      </div>
                      <p className="text-gray-300 text-sm">{card.leftDesc}</p>
                    </div>
                    <div className="vertical-devider"></div>
                    {/* Right Column */}
                    <div className="card-main-content bg-[#181818] p-6 rounded-xl">
                      <div className=" card-main-heading text-lg font-semibold">
                        <XCircle className="text-red-400" size={20} />
                        {card.rightTitle}
                      </div>
                      <p className="text-gray-300 text-sm">{card.rightDesc}</p>
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
