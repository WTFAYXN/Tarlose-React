import React, { useState, useEffect } from "react";
import "./TestimonialSlider.css";

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([
    {
        id: 1,
        name: "Shruti Agarwal",
        image: "https://lh3.googleusercontent.com/a/ACg8ocLttRNbRtdSiOFHJ_zpvPunnHv3PC7y_U-Q3hLPga6SEcQwYg=s36-c-rp-mo-br100",
        rating: 5,
        content: "Tarlose has been an amazing team to work with. They are professional, responsive, and really focus on delivering quality work. The designs and solutions they provided were creative and exactly what I was looking for. Communication was smooth throughout, and the project was completed on time. Definitely a company I would recommend for software and design services."
      },
      {
        id: 2,
        name: "Ruhee Ansari",
        image: "https://lh3.googleusercontent.com/a/ACg8ocKDynALdnELlyL87ik41ffJmREJSqYLidXGqi0aAf_jkgU3Bw=s36-c-rp-mo-br100",
        rating: 4,
        content: "Great team to work with as they are professional, creative, and always deliver on time. Highly recommend Tarlose for web and app development!"
      },
      {
        id: 3,
        name: "Keshav Navale",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVybxTLWYOF_SUYDL3TiUi9ZNuTRuRIcm3QKAgUfXkW6IFbDvu71A=s36-c-rp-mo-br100",
        rating: 5,
        content: "Tarlose delivered an outstanding service on our software project. Their professionalism, technical expertise, and excellent communication resulted in a high-quality product that exceeded our expectations. We highly recommend them for their commitment to excellence and client satisfaction."
      },
      {
        id: 4,
        name: "Jahangir",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjVj3s5VRQSPKASaPL1ZgLxvT1HP_J0-FsVcCyOoTMt3LPAHu2K0IQ=s36-c-rp-mo-ba3-br100",
        rating: 5,
        content: "Working with them for our Wix website was a breeze! They were super easy to communicate with, nailed our vision, and delivered a website that we absolutely love. Highly recommend them for anyone needing top-notch website development!"
      },
      {
        id: 5,
        name: "Ayanti Gosh",
        image: "https://lh3.googleusercontent.com/a/ACg8ocIQFEZsOk7GRBn4AMykalxCfW7LvAax2goWnRT4w56D1IMCnQ=s36-c-rp-mo-br100",
        rating: 4,
        content: "Tarlose provided exceptional graphic design services. They were professional, creative, and efficient. Highly recommended."
      },
      {
        id: 6,
        name: "Utkarsh Tripathi",
        image: "https://yt3.ggpht.com/lsfX1DTx_LGJ1rHs5DTl-EHx--KBpTeSuitP4mxbkWZCvT26UYLceGWJFxOI1sOb9vfJGFwEvA=s120-c-k-c0x00ffffff-no-rj",
        rating: 5,
        content: "Their thumbnail design for my youtube channel was outstanding! They captured the essence of my content perfectly and delivered a visually appealing design that attracted more viewers. Highly recommend their services!"
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