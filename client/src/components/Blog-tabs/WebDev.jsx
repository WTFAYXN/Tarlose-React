import React from "react";

import "./Blog-tabs.css"; 


const WebDev = () => {
  return (
    <>
      <h2 className="my-5"> Web Development</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
        <div className="col">
          <div className="card glass-card h-100">
            <img
              src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F41DDioOJGeFZaklYJ05xgL%2F8202aea917ceaa96afad06d753bfef0c%2FA_Practical_Approach_to_AI_Transparency.jpg?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=814&h=458&s=849f22f403a68a445ec45499acf7cae6"
              className="card-img-top"
              alt="Card 1"
            />
            <div className="card-body">
              <h5
                className="card-title"
              >
                Scaling Service
              </h5>
              <p className="card-text text-capitalize">
                Knowledge Base Maintenance: A Practical Framework
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card glass-card h-100">
            <img
              src="https://via.placeholder.com/300x200"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  fontSize:
                    "var(--font-size--XS, clamp(0.75rem, calc(0.156vw + 0.594rem), 0.84375rem))",
                }}
              >
                Scaling Service
              </h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card glass-card h-100">
            <img
              src="https://via.placeholder.com/300x200"
              className="card-img-top"
              alt="Card 3"
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  fontSize:
                    "var(--font-size--XS, clamp(0.75rem, calc(0.156vw + 0.594rem), 0.84375rem))",
                }}
              >
                Scaling Service
              </h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card glass-card h-100">
            <img
              src="https://via.placeholder.com/300x200"
              className="card-img-top"
              alt="Card 4"
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  fontSize:
                    "var(--font-size--XS, clamp(0.75rem, calc(0.156vw + 0.594rem), 0.84375rem))",
                }}
              >
                Scaling Service
              </h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default WebDev;
