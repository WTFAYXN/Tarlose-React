import React from 'react'
import Navbar from '../../components/Navbar'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="container modern-blog-container my-5">
        <h2 className='mb-4 text-white'>Contact Us</h2>
        <p className='text-secondary sub-head mb-5'>
          Advance financial planning using FinPlanAI. Effortlessly analyze, manage, and grow your investments.
        </p>

        <div className="row contact-section shadow-lg rounded-4 p-4">
          {/* Left Card */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-start">
            <div className="info-card p-4 rounded-4 h-100">
              <div className="icon-box mb-3">
                <img src="https://img.icons8.com/ios-filled/50/artificial-intelligence.png" alt="AI Icon" width="40" />
              </div>
              <h5 className='text-white '>Our Mission</h5>
              <p className='text-secondary '>
                At InnovaAI, our mission is to revolutionize the way people interact with technology by harnessing the
                power of artificial intelligence. We strive to create innovative solutions that enhance productivity,
                streamline workflows, and empower users to achieve their goals with ease and efficiency.
              </p>

              <h5 className='mt-4 text-white '>Get in Touch:</h5>
              <p className='text-secondary mb-1 '><strong>Email:</strong> contact@innovaai.com</p>
              <p className='text-secondary mb-1'><strong>Phone:</strong> +1 (123) 456-7890</p>
              <p className='text-secondary'><strong>Address:</strong> 123 Innovation Drive, Tech City, TC 12345</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6 text-start">
            <div className="form-card p-4 rounded-4 h-100">
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <label className='form-label text-white'>First Name *</label>
                    <input type="text" className="form-control bg-dark text-white border-0" placeholder="Your first name" />
                  </div>
                  <div className="col">
                    <label className='form-label text-white'>Last Name *</label>
                    <input type="text" className="form-control bg-dark text-white border-0" placeholder="Your last name" />
                  </div>
                </div>

                <div className="mb-3">
                  <label className='form-label text-white'>Email *</label>
                  <input type="email" className="form-control bg-dark text-white border-0" placeholder="youremail@gmail.com" />
                </div>

                <div className="mb-3">
                  <label className='form-label text-white'>Subject *</label>
                  <input type="text" className="form-control bg-dark text-white border-0" placeholder="Write your subject" />
                </div>

                <div className="mb-4">
                  <label className='form-label text-white'>Write Message</label>
                  <textarea rows="4" className="form-control bg-dark text-white border-0" placeholder="Write your message here"></textarea>
                </div>

                <button type="submit" className="btn btn-primary rounded-pill px-4 py-2 gradient-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
