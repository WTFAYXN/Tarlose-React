import React from 'react';
import './DesignProcess.css';

const processSteps = [
  {
    id: 1,
    icon: '💡',
    title: 'Define Your Vision',
    description:
      'Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.',
  },
  {
    id: 2,
    icon: '📄',
    title: 'Submit Your Request',
    description:
      'Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.',
  },
  {
    id: 3,
    icon: '🚀',
    title: 'Project Delivered',
    description:
      'As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations.',
  },
];

const DesignProcess = () => {
  return (
    <div className="Design-process-container container d-flex">
      <div className="left-design-container">
        <div className='design-img-container'>
            <img
          src="https://framerusercontent.com/images/djbcRHCD89IflJ1okJAa1J65cuM.png"
          alt="Design Process"
          className="design-img"
        />

        </div>
        
      </div>

      <div className="right-design-container">
        <div className="tag-container">
            <div className='tag'>
                <span>•</span> Design Process
            </div>
          
        </div>
        <h2 className="process-heading eco-sub">Process</h2>
        <p className="process-description">
          Crafting bold visuals that inspire and elevate brands with thought process.
        </p>
        <div className="button-group">
          <button className="btn shining-button"><a href="https://calendly.com/ayansayad2005/30min?month=2024-12">
              Book a Free Call
            </a></button>
          <button className="btn shining-button">See Projects</button>
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
