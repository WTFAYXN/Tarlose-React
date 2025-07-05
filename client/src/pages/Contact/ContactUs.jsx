import React from "react";
import Navbar from "../../components/Navbar";
import "./ContactUs.css";
import tarloseIcon from "./tarloseIcon.png";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="container modern-contact-container my-5">
        <h2 className="mb-4 text-white contact-heading">Contact Us</h2>
        <p className="text-secondary sub-head mb-5">
          Digital solutions that take your brand from idea to impact faster,
          cleaner, and smarter.
        </p>

        <div className="row justify-content-center g-5 text-start contact-section ">
          {/* Left Card */}
          <div className="col-lg-6">
            <div className="contact-card info-card">
              <div className="icon-box mb-3">
                <img src={tarloseIcon} alt="Tarlose Logo" width="80" />
              </div>
              <h5 className="text-white ">Our Mission</h5>
              <p className="text-secondary ">
                At Tarlose, we’re on a mission to strip away the agency smoke
                and mirrors and replace it with straight talk, bulletproof
                results, and zero guesswork. We partner with you like an
                in‑house team rolling up our sleeves to design, build, and
                market with absolute transparency, clear communication, and
                deliverables you can bank on. Whether you’re launching your
                first MVP or scaling a funded startup, we treat your goals as
                our own: no jargon, no ego, just honest expertise that moves the
                needle.
              </p>

              <h5 className="mt-4 text-white ">Get in Touch:</h5>
              <p className="text-secondary mb-1 ">
                <strong>Email:</strong> admin@tarlose.com
              </p>
              <p className="text-secondary mb-1">
                <strong>Phone:</strong> +91 8291617114
              </p>
              <p className="text-secondary">
                <strong>Address:</strong> Mumbai, India.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="col-lg-6">
            <div className="contact-card form-card">
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label text-white">
                      First Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-0"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="col">
                    <label className="form-label text-white">
                      Last Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-0"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label text-white">
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control bg-dark text-white border-0"
                    placeholder="youremail@gmail.com"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-white">
                    Subject <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-0"
                    placeholder="Write your subject"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label text-white">Write Message</label>
                  <textarea
                    rows="4"
                    className="form-control bg-dark text-white border-0"
                    placeholder="Write your message here"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary rounded px-4 py-2 gradient-button"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Message from CEO Section */}
        <div className="message-section text-center">
          <div className="message-image mb-4">
            <img
              src="https://framerusercontent.com/images/QT0FZzKWoPVDhBD0kmSv4UX5zU.png"
              alt="InnovaAI Logo"
              style={{ width: "60px", height: "60px" }}
            />
          </div>

          {/* Bootstrap Carousel */}
          <div
            id="ceoCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h3 className="text-white mb-4">A Message from Our CEO</h3>

                <p className="text-secondary fs-5 px-3 px-md-5">
                  “At InnovaAI, our goal is to push the boundaries of AI
                  technology to create solutions that simplify and enhance
                  everyday tasks. We are passionate about innovation and
                  dedicated to delivering exceptional value to our customers.
                  Thank you for being part of our journey.”
                </p>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="CEO"
                    className="rounded-circle"
                    width="20"
                    height="20"
                  />
                  <div className="text-start">
                    <h6 className="mb-0 text-white">Jane Doe</h6>
                    <small className="text-secondary">CEO, InnovaAI</small>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <h3 className="text-white mb-4">A Message from Our CTO</h3>

                <p className="text-secondary fs-5 px-3 px-md-5">
                  “We believe in creating digital ecosystems that drive results.
                  Our mission is to support startups and enterprises in crafting
                  tech-driven strategies with measurable success.”
                </p>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="CTO"
                    className="rounded-circle"
                    width="20"
                    height="20"
                  />
                  <div className="text-start">
                    <h6 className="mb-0 text-white">Sarah Lee</h6>
                    <small className="text-secondary">CTO, Tarlose</small>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <h3 className="text-white mb-4">A Message from Our CEO</h3>

                <p className="text-secondary fs-5 px-3 px-md-5">
                  “We believe in creating digital ecosystems that drive results.
                  Our mission is to support startups and enterprises in crafting
                  tech-driven strategies with measurable success.”
                </p>
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="CTO"
                    className="rounded-circle"
                    width="20"
                    height="20"
                  />
                  <div className="text-start">
                    <h6 className="mb-0 text-white">Sarah Lee</h6>
                    <small className="text-secondary">CTO, Tarlose</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#ceoCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#ceoCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        {/* Join the Future Section */}
        <div className="container my-5">
          <div className="future-hero  d-flex align-items-center justify-content-between flex-column flex-md-row text-white ">
            {/* Text & Button Section */}
            <div className="hero-content text-center text-md-start">
              <h2 className="future-heading mb-3">
                Join the Future of Music Production Today
              </h2>
              <p className="text-secondary m-0">
                Start Your Journey with and Revolutionize Your Creative Process
              </p>
              <button
                type="button"
                className="nav-btn px-4 py-2 rounded border-0"
              >
                <a href="https://calendly.com/ayansayad2005/30min?month=2024-12">
                  Book a Call
                </a>
              </button>
            </div>

            {/* Right-side Image */}
            <div className="hero-image d-none d-md-block">
              <img
                src="https://framerusercontent.com/images/MecLliNBqre50VslV9Cc8fZOqkY.png?scale-down-to=512"
                alt="AI Demo"
                className="img-fluid"
                style={{ maxWidth: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
