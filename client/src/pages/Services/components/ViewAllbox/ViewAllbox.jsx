import React from "react";

import "../ViewAllbox/viewAllbox.css";

const ViewAllbox = () => {
  return (
    <>
      <div className="viewAllbox-container">
        <div className="viewallbox-left-container">
          <div className="viewbox-img">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1274/1274860.png"
              alt=""
            />
          </div>
          <div className="viewbox-content">
            <h3>More Notion Templates</h3>
            <p className="m-0">
              Completely transform the way you work and live with premium Notion
              templates. These templates are complete systems with multiple
              pages inside.
            </p>
          </div>
        </div>

        <div>
          <a
            href="#"
            className="btn btn-dark btn-lg me-3 shining-button view-btn"
          >
            View All Templates
          </a>
        </div>
      </div>
    </>
  );
};

export default ViewAllbox;
