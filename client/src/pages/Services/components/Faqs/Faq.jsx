import React from "react";
import "./Faq.css";
import faqSvg from '../../../../assets/svgs/FAQs.svg';

const FAQ = ({ faqs = [] }) => {
  return (
    <div className="faq-parent-container container">
      <div className="faq-left-container">
        <div className="faq-heading-container">
          <h2>
            Frequently <span className="eco-sub">asked </span>
            questions
          </h2>
          <p>
            Got questions? Find quick answers here! If you need more details, feel free to get in touch anytime.
          </p>
          <div className="faq-svg">
            <img src={faqSvg} alt="" />
          </div>
        </div>
      </div>
      <div className="faq-right-container">
        <div className="accordion" id="accordionExample">
          {faqs.length === 0 && (
            <div className="accordion-item">
              <div className="accordion-header">
                <span>No FAQs available for this service.</span>
              </div>
            </div>
          )}
          {faqs.map((faq, idx) => (
            <div className="accordion-item" key={idx}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${idx}`}
                  aria-expanded="false"
                  aria-controls={`collapse${idx}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${idx}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
