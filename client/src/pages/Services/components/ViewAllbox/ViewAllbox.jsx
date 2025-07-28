import React from "react";
import "../ViewAllbox/viewAllbox.css";

const ViewAllbox = ({ title = "More Notion Templates", description = "Completely transform the way you work and live with premium Notion templates. These templates are complete systems with multiple pages inside.", buttonText = "View All Templates", buttonLink = "#", svgWidth = 69, svgHeight = 69 }) => {
  return (
    <>
      <div className="viewAllbox-container">
        <div className="viewallbox-left-container">
          <div className="viewbox-img" style={{ width: `${svgWidth}px`, height: `${svgHeight}px` }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} height={svgHeight} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <div className="viewbox-content">
            <h3>{title}</h3>
            <p className="m-0">{description}</p>
          </div>
        </div>

        <div className="view-btn-container">
          <a
            href={buttonLink}
            className="btn btn-dark btn-lg me-3 shining-button view-btn"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </>
  );
};

export default ViewAllbox;