import React from "react";

import "./BlogTabsPages.css"; 
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
        image: "https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F347DFpWKS9Y3rVy2vFRWZw%2Ff1230402b6aac8c49eeeefbd04583e0c%2FConversational_AI_for_Customer_Service__How_to_Get_it_Right.jpg?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=814&h=458&s=1def12590769bc171c49acc2487e1bc0",
        title: "Scaling Service",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
    },
    {
        id: 4,
        image: "https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F14A88JME0wYypHhKSICwhC%2F0988de938f1560399733fa4793d0c6be%2FCS_-_The_Taming__of_the_Queue-__14_Support_Queue_Management_Tips_1.jpg?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=814&h=458&s=2c963426f3e36eec45d71aee312ef253",
        title: "Scaling Service",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
        id: 5,
        image: "https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2FtzXQf5SGcSYat5I13wNq0%2Fb60f320719cd320d3a5adcb60ff9100e%2Fwork-from-home-customer-service.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=814&h=456&s=1009ab00f772b9c15842d4bc8c8329c6",
        title: "Scaling Service",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
        id: 6,
        image: "https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2FtzXQf5SGcSYat5I13wNq0%2Fb60f320719cd320d3a5adcb60ff9100e%2Fwork-from-home-customer-service.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=814&h=456&s=1009ab00f772b9c15842d4bc8c8329c6",
        title: "Scaling Service",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
        id: 7,
        image: "https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2FtzXQf5SGcSYat5I13wNq0%2Fb60f320719cd320d3a5adcb60ff9100e%2Fwork-from-home-customer-service.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=814&h=456&s=1009ab00f772b9c15842d4bc8c8329c6",
        title: "Scaling Service",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
        id: 8,
        image: "https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2FtzXQf5SGcSYat5I13wNq0%2Fb60f320719cd320d3a5adcb60ff9100e%2Fwork-from-home-customer-service.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=814&h=456&s=1009ab00f772b9c15842d4bc8c8329c6",
        title: "Scaling Service",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
        id: 9,
        image: "https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2FtzXQf5SGcSYat5I13wNq0%2Fb60f320719cd320d3a5adcb60ff9100e%2Fwork-from-home-customer-service.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=814&h=456&s=1009ab00f772b9c15842d4bc8c8329c6",
        title: "Scaling Service",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
        id: 10,
        image: "https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2FtzXQf5SGcSYat5I13wNq0%2Fb60f320719cd320d3a5adcb60ff9100e%2Fwork-from-home-customer-service.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=814&h=456&s=1009ab00f772b9c15842d4bc8c8329c6",
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
                            <h5 className="card-title card-title-blog">{card.title}</h5>
                            <p className="card-text text-capitalize">{card.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

const BlogTabsPages = () => {
  const [cards] = useState(initialCards);
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/blog-details/${id}`);
  };

  return (
    <>
      
      <CardList cards={cards} onCardClick={handleCardClick} />
    </>
  );
};

export default BlogTabsPages;
