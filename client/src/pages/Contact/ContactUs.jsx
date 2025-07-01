import React from "react";
import Navbar from "../../components/Navbar";
import "./ContactUs.css";
import { FlipWords } from "../../components/ui/flip-words";
import tarloseIcon from "./tarloseIcon.png"; 

const ContactUs = () => {
  const words = ["better", "cute", "beautiful", "modern"];
  return (
    <>
      <Navbar />
      <div className="container modern-contact-container my-5">
        <h2 className="mb-4 text-white contact-heading">Contact Us</h2>
        <p className="text-secondary sub-head mb-5">
           Digital solutions that take your brand from idea to impact faster, cleaner, and smarter.
        </p>

        <div className="row justify-content-center g-4 text-start contact-section ">
          {/* Left Card */}
          <div className="col-lg-6">
            <div className="contact-card info-card">
              <div className="icon-box mb-3">
                <img
                  src={tarloseIcon}
                  alt="Tarlose Logo"
                  width="80"
                />
              </div>
              <h5 className="text-white ">Our Mission</h5>
              <p className="text-secondary ">
                At Tarlose, we’re on a mission to strip away the agency smoke and mirrors and replace it with straight talk, bulletproof results, and zero guesswork. We partner with you like an in‑house team rolling up our sleeves to design, build, and market with absolute transparency, clear communication, and deliverables you can bank on. Whether you’re launching your first MVP or scaling a funded startup, we treat your goals as our own: no jargon, no ego, just honest expertise that moves the needle.
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

        {/* message section from CEO */}
        <div className="message-section ">
          <div className="message-image mb-5">
            <img
              src="https://framerusercontent.com/images/QT0FZzKWoPVDhBD0kmSv4UX5zU.png"
              alt=""
            />
          </div>

          <div className="flip-word mb-2 text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            A Message from Our
            <FlipWords words={words} /> <br />
          </div>
          <p className="text-secondary sub-message">
          A"At InnovaAI, our goal is to push the boundaries of AI technology to create solutions that simplify and enhance everyday tasks. We are passionate about innovation and dedicated to delivering exceptional value to our customers. Thank you for being part of our journey."
        </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
