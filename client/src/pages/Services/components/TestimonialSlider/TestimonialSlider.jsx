import React, { useState, useEffect } from "react";
import "./TestimonialSlider.css";

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([
    {
        id: 1,
        name: "Sarah",
        image: "https://framerusercontent.com/images/lN1CfuAulx1IJ6VQhc4Pbe1sXSA.png",
        rating: 5,
        content: "These templates have transformed my workflow! Highly recommend them to everyone."
      },
      {
        id: 2,
        name: "Michael",
        image: "https://framerusercontent.com/images/lN1CfuAulx1IJ6VQhc4Pbe1sXSA.png",
        rating: 4,
        content: "Great design and easy to customize. My team loves using it daily."
      },
      {
        id: 3,
        name: "Emily",
        image: "https://framerusercontent.com/images/lN1CfuAulx1IJ6VQhc4Pbe1sXSA.png",
        rating: 5,
        content: "The best tool for productivity I've ever used. Saves me so much time!"
      },
      {
        id: 4,
        name: "David",
        image: "https://framerusercontent.com/images/lN1CfuAulx1IJ6VQhc4Pbe1sXSA.png",
        rating: 5,
        content: "Incredible support and features. My projects are more organized now."
      },
      {
        id: 5,
        name: "Lisa",
        image: "https://framerusercontent.com/images/lN1CfuAulx1IJ6VQhc4Pbe1sXSA.png",
        rating: 4,
        content: "A game changer for my business. Easy to use and very effective."
      },
      {
        id: 6,
        name: "James",
        image: "https://framerusercontent.com/images/lN1CfuAulx1IJ6VQhc4Pbe1sXSA.png",
        rating: 5,
        content: "Templates are top-notch! My productivity has soared since I started using them."
      },
      {
        id: 7,
        name: "Rachel",
        image: "https://framerusercontent.com/images/lN1CfuAulx1IJ6VQhc4Pbe1sXSA.png",
        rating: 4,
        content: "Very user-friendly and visually appealing. Great value for money!"
      },
      {
        id: 8,
        name: "Thomas",
        image: "https://framerusercontent.com/images/lN1CfuAulx1IJ6VQhc4Pbe1sXSA.png",
        rating: 5,
        content: "This has streamlined our team’s collaboration like never before."
      },
      {
        id: 9,
        name: "Anna",
        image: "https://framerusercontent.com/images/lN1CfuAulx1IJ6VQhc4Pbe1sXSA.png",
        rating: 5,
        content: "Absolutely love the flexibility these templates offer. A must-have tool!"
      },
      {
        id: 10,
        name: "Chris",
        image: "https://framerusercontent.com/images/lN1CfuAulx1IJ6VQhc4Pbe1sXSA.png",
        rating: 4,
        content: "Excellent product with a lot of potential. Looking forward to updates!"
      }
  ]);

  return (
    <>
      <div className="vertical-slider-parent-container">
        <div className="services-header d-flex flex-column text-center">
          <h2>
            See What Our <span className="eco-sub">Happy Users Say</span>
          </h2>
          <p>
            Over 50,000+ users have improved their productivity with our templates.
          </p>
        </div>

        <div className="vertical-slider-container container">
          <div className="vertical-slider-up">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="vertical-slide">
                <div className="vertical-slide-heading-container">
                  <div className="vertical-slide-img">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>

                  <div className="slider-heading">
                    <h5>{testimonial.name}</h5>
                    <div className="Testimonial-rating">
                      <p className="m-0">{testimonial.rating}</p>
                      {Array.from({ length: testimonial.rating }, (_, i) => (
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
                      ))}
                    </div>
                  </div>
                </div>

                <div className="vertical-slide-content">
                  <p>{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="vertical-slider-down">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id + testimonials.length} className="vertical-slide">
                <div className="vertical-slide-heading-container">
                  <div className="vertical-slide-img">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>

                  <div className="slider-heading">
                    <h5>{testimonial.name}</h5>
                    <div className="Testimonial-rating">
                      <p className="m-0">{testimonial.rating}</p>
                      {Array.from({ length: testimonial.rating }, (_, i) => (
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
                      ))}
                    </div>
                  </div>
                </div>

                <div className="vertical-slide-content">
                  <p>{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="vertical-slider-up">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id + (testimonials.length * 2)} className="vertical-slide">
                <div className="vertical-slide-heading-container">
                  <div className="vertical-slide-img">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>

                  <div className="slider-heading">
                    <h5>{testimonial.name}</h5>
                    <div className="Testimonial-rating">
                      <p className="m-0">{testimonial.rating}</p>
                      {Array.from({ length: testimonial.rating }, (_, i) => (
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
                      ))}
                    </div>
                  </div>
                </div>

                <div className="vertical-slide-content">
                  <p>{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;