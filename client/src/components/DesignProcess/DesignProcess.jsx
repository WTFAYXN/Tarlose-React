// import React from 'react';
import './DesignProcess.css';
import Process from '../../assets/homeProcess.jpg';
const processSteps = [
  {
    id: 1,
    // icon: '💡',
    title: 'Discover & Define',
    description: "We start every project by listening to your goals, analyzing your challenges, and mapping out a clear strategy. Whether it's building a website, crafting visuals, or planning your marketing, our team guides you through a focused discovery session to align on expectations, brand, and deliverables.",
  },
  {
    id: 2,
    // icon: '📄',
    title: 'Design & Build',
    description: "With a solid plan in place, we move into design and development. You get transparent updates as our designers, developers, and marketers craft solutions—from prototypes and wireframes to final builds and campaigns. Every step ensures your brand shines and your digital assets work seamlessly.",
  },
  {
    id: 3,
    // icon: '🚀',
    title: 'Launch & Optimize',
    description:
      "Once everything's tested and approved, we launch your website, design assets, or campaigns into the market. Our work isn’t done—ongoing analysis and support help you adapt, grow, and maximize results. We're here to refine, scale, and ensure lasting impact.",
  },
];

const DesignProcess = () => {
  return (
    <div className="Design-process-container container d-flex">
      <div className="left-design-container">
        <div className='design-img-container'>
          <img
            src={Process}
            alt="Design Process"
            className="design-img"
          />

        </div>

      </div>

      <div className="right-design-container">
        <div className="tag-container">
          <div className='tag'>
            <span>•</span> Our Process
          </div>

        </div>
        <h2 className="process-heading eco-sub">How We Delive Results</h2>
        <p className="process-description">
          Our proven process keeps your project efficient, creative, and on track. From deep discovery to seamless execution, we focus on clarity and collaboration. Bringing your ideas to life across web development, graphic design, and digital marketing.
        </p>
        <div className="button-group">
          <button className="btn shining-button"><a href="https://calendly.com/ayansayad2005/30min?month=2024-12" target="_blank">
            Schedule A Call
          </a></button>
          <button
            className="btn shining-button trans-btn "
            onClick={() => {
              console.log("Button clicked");
              document.getElementById("work-section").scrollIntoView({ behavior: "smooth" });
            }}
          >
            See Projects
          </button>
        </div>

        <hr className='design-hr my-4' />

        <div className="process-steps">
          {processSteps.map((step) => (
            <div key={step.id} className="process-step">
              <div className="step-header">
                <span className="step-icon">{step.icon}</span>
                <h5>{step.title}</h5>

              </div><hr className="step-line m-0" />
              <p className="step-description">{step.description}</p>
              <span className="step-number">{step.id}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignProcess;
