import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Will Smith",
      company: "Harper Education",
      rating: 5,
      review:
        "The designs exceeded our expectations! Every element felt purposeful, creating a seamless and visually stunning brand identity",
      image:
        "https://framerusercontent.com/images/eFraHAe16muHsBuOQT8J7PtnM.png",
    },
    {
      name: "Ikta Sollork",
      company: "PARAL CEO",
      rating: 5.0,
      review:
        "The designs exceeded our expectations! Every element felt purposeful, creating a seamless and visually stunning brand identity",
      image:
        "https://framerusercontent.com/images/54tqpXnovhmg1DaaTUMYucwnE.png?scale-down-to=1024",
    },
    {
      name: "Liloch",
      company: "AIO Founder",
      rating: 4,
      review:
        "The designs exceeded our expectations! Every element felt purposeful, creating a seamless and visually stunning brand identity",
      image:
        "https://framerusercontent.com/images/8vljaI1ESGZN8BSOxNQ8nHJdCw.png",
    },
  ];

  const stats = [
    {
      value: "100+",
      description: "Happy clients",
    },
    {
      value: "$250m",
      description: "revenue added",
    },
    {
      value: "4.8",
      description: "Average Rating",
    },
  ];

  return (
    <>
      <div className="container my-5">
        <div className="Testimonial-container">
          <div className="Testimonial-left-container">
            {/* heading container */}
            <div className="Testimonial-left-content-container">
              <div className="Testimonial-heading-container">
                <div className="tag-container">
                  <div className="tag">
                    <span>•</span> Testimonials
                  </div>
                </div>
                <div className="Testimonial-content-container">
                  <h2 className="m-0">
                    Clients <span className="eco-sub">LOVE US</span>
                  </h2>
                  <p className="m-0">
                    Trusted by 100+ Happy clients, adding $250M+ in revenue.{" "}
                  </p>
                </div>
              </div>
              {/* content container */}
              <div className="Testimonial-content-container">
                <div className="parent-box d-flex gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="box">
                      <h2 className="p-0 m-0">{stat.value}</h2>
                      <p>{stat.description}</p>
                    </div>
                  ))}
                </div>
                <hr className="Testimonial-divider" />
                <div className="button-group Testimonial-btn">
                  <button className="btn shining-button">
                    <a href="https://calendly.com/ayansayad2005/30min?month=2024-12" target="_blank">
                      Book a Free Call
                    </a>
                  </button>
                  <button
                    className="btn shining-button"
                    onClick={() => {
                      console.log("Button clicked");
                      document.getElementById("work-section").scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    See Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Testimonial-right-container">
            <div className="Testimonial-cards">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="Testimonial-card">
                  <div className="Testimonial-card-heading-container">
                    <div className="Testimonial-img-container">
                      <img
                        src={testimonial.image}
                        alt=""
                        className="Testimonial-img"
                      />
                    </div>
                    <div className="Testimonial-card-heading">
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.company}</p>
                    </div>
                  </div>

                  <hr className="Testimonial-card-divider" />

                  <div className="Testimonial-card-content">
                    <div className="Testimonial-rating">
                      <p className="m-0">{testimonial.rating}</p>
                      {[...Array(Math.floor(testimonial.rating))].map(
                        (_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="var(--token-c858731e-e94e-456c-870f-c18178498e78, rgb(255, 215, 0))"
                            width="18px"
                            height="18px"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                          </svg>
                        )
                      )}
                      {testimonial.rating % 1 !== 0 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="var(--token-c858731e-e94e-456c-870f-c18178498e78, rgb(255, 215, 0))"
                          width="18px"
                          height="18px"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                      )}
                    </div>

                    <div className="Testimonial-review">
                      <p>{testimonial.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
