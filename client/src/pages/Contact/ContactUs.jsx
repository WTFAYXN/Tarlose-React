import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cta from "../../components/Cta/Cta";
import "./ContactUs.css";
import tarloseIcon from "./tarloseIcon.png";
import axios from "axios";

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
        <meta name="description" content="Contact Tarlose for digital solutions, web development, and marketing expertise. Reach out to our team for collaboration and support." />
      </Helmet>
      <Navbar />
      <div className="container modern-contact-container my-5">
        {/* ...rest of your code... */}
        {/* (No changes needed below this line) */}
        <h2 className="my-4 pt-5 text-white contact-heading ">Contact Us</h2>
        <p className="text-secondary sub-head mb-5">
          Digital solutions that take your brand from idea to impact faster,
          cleaner, and smarter.
        </p>
        {/* ...rest of your code... */}
        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
