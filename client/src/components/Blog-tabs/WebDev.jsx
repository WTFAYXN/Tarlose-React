import React from "react";

import "./Blog-tabs.css"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialCards = [
    {
        id: 1,
        image:
            "https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F41DDioOJGeFZaklYJ05xgL%2F8202aea917ceaa96afad06d753bfef0c%2FA_Practical_Approach_to_AI_Transparency.jpg?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=814&h=458&s=849f22f403a68a445ec45499acf7cae6",
        title: "Scaling Service",
        text: "Knowledge Base Maintenance: A Practical Framework",
    },
    {
        id: 2,
        image: "https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F41DDioOJGeFZaklYJ05xgL%2F8202aea917ceaa96afad06d753bfef0c%2FA_Practical_Approach_to_AI_Transparency.jpg?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=814&h=458&s=849f22f403a68a445ec45499acf7cae6",
        title: "Scaling Service",
        text: "This is a short card.",
    },
    {
        id: 3,
        image: "https://via.placeholder.com/300x200",
        title: "Scaling Service",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
    },
    {
        id: 4,
        image: "https://via.placeholder.com/300x200",
        title: "Scaling Service",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
];

function CardList({ cards, onCardClick }) {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
            {cards.map((card) => (
                <div className="col" key={card.id}>
                    <div
                        className="card glass-card h-100"
                        style={{ cursor: "pointer" }}
                        onClick={() => onCardClick(card.id)}
                        tabIndex={0}
                        role="button"
                    >
                        <img src={card.image} className="card-img-top" alt={`Card ${card.id}`} />
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

const WebDev = () => {
  const [cards] = useState(initialCards);
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/blog-details/${id}`);
  };

  return (
    <>
      <h2 className="my-5"> Web Development</h2>
      <CardList cards={cards} onCardClick={handleCardClick} />
    </>
  );
};

export default WebDev;
