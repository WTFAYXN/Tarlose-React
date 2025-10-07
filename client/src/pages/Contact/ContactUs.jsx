import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cta from "../../components/Cta/Cta";
import "./ContactUs.css";
import tarloseIcon from "./tarloseIcon.png";
import axios from "axios";
import ayan from "../../assets/founder/ayan.png"
import huzaifa from "../../assets/founder/huzaifa.png"
import hamdan from "../../assets/founder/hamdan.png"

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { firstName, lastName, email, subject, message };
    try {
      const res = await axios.post(`${API_URL}/api/contact`, data);
      if (res.status === 200) {
        alert("Message sent successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch {
      alert("Network error. Try again later.");
    }
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Tarlose</title>
        <meta
          name="description"
          content="Contact Tarlose for digital solutions, web development, and marketing expertise. Reach out to our team for collaboration and support."
        />
      </Helmet>
      <Navbar />

      <div className="min-h-screen w-full bg-[#0a0a0a] relative">
        {/* Cosmic Aurora */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
              radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 65%)
            `,
          }}
        />
        {/* Content */}
        
        <div className="container modern-contact-container my-5 position-relative z-10">
          <h2 className="my-4 pt-5 text-white contact-heading">Contact Us</h2>
          <p className="text-secondary sub-head mb-5">
            Digital solutions that take your brand from idea to impact faster,
            cleaner, and smarter.
          </p>

          <div className="row justify-content-center g-5 text-start contact-section">
            {/* Left Card */}
            <div className="col-lg-6">
              <div className="contact-card info-card">
                <div className="icon-box mb-3">
                  <img src={tarloseIcon} alt="Tarlose Logo" width="80" />
                </div>
                <h5 className="text-white">Our Mission</h5>
                <p className="text-secondary">
                  At Tarlose, we’re on a mission to strip away the agency smoke
                  and mirrors and replace it with straight talk, bulletproof
                  results, and zero guesswork. We partner with you like an
                  in-house team rolling up our sleeves to design, build, and
                  market with absolute transparency, clear communication, and
                  deliverables you can bank on. Whether you’re launching your
                  first MVP or scaling a funded startup, we treat your goals as
                  our own: no jargon, no ego, just honest expertise that moves the
                  needle.
                </p>

                <h5 className="mt-4 text-white">Get in Touch:</h5>
                <p className="text-secondary mb-1">
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
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col">
                      <label className="form-label text-white">
                        First Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control bg-dark text-white"
                        placeholder="Your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
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
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
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
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-white">Write Message</label>
                    <textarea
                      rows="4"
                      className="form-control bg-dark text-white border-0"
                      placeholder="Write your message here"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary rounded px-4 py-2 gradient-button"
                    disabled={loading}
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
            <div id="ceoCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h3 className="text-white mb-4">A Message from Our CEO</h3>
                  <p className="text-secondary fs-5 px-3 px-md-5">
                    “At Tarlose, our mission has always been simple to help businesses grow with design, strategy, and technology that actually work. Every project we take on is built on trust, clarity, and results.”
                  </p>
                  <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                    <img
                      src={ayan}
                      alt="Ayan Sayad"
                      className="rounded-circle"
                      width="20"
                      height="20"
                    />
                    <div className="text-start">
                      <h6 className="mb-0 text-white">Ayan Sayad</h6>
                      <small className="text-secondary">CEO, Tarlose</small>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <h3 className="text-white mb-4">A Message from Our CTO</h3>
                  <p className="text-secondary fs-5 px-3 px-md-5">
                    “We’re not just building websites or campaigns, we’re building partnerships. Tarlose stands for transparency, creativity, and the belief that good work speaks for itself.”
                  </p>
                  <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                    <img
                      src={huzaifa}
                      alt="Huzaifa Ansari"
                      className="rounded-circle"
                      width="20"
                      height="20"
                    />
                    <div className="text-start">
                      <h6 className="mb-0 text-white">Huzaifa Ansari</h6>
                      <small className="text-secondary">CTO & COO, Tarlose</small>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <h3 className="text-white mb-4">A Message from Our CMO</h3>
                  <p className="text-secondary fs-5 px-3 px-md-5">
                    “Tarlose started with a belief that businesses deserve better, better communication, better design, better results. And that’s what we strive to deliver every single day.”
                  </p>
                  <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                    <img
                      src={hamdan}
                      alt="Hamdan Shaikh"
                      className="rounded-circle"
                      width="20"
                      height="20"
                    />
                    <div className="text-start">
                      <h6 className="mb-0 text-white">Hamdan Shaikh</h6>
                      <small className="text-secondary">CMO, Tarlose</small>
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

          {/* Join the Future Section (Commented Out) */}
          {/* <div className="container my-5">
            <div className="future-hero d-flex align-items-center justify-content-between flex-column flex-md-row text-white">
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
              <div className="hero-image d-none d-md-block">
                <img
                  src="https://framerusercontent.com/images/MecLliNBqre50VslV9Cc8fZOqkY.png?scale-down-to=512"
                  alt="AI Demo"
                  className="img-fluid"
                  style={{ maxWidth: "300px" }}
                />
              </div>
            </div>
          </div> */}

          <Cta />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;