import React from "react";
import BlogTabsPages from "./BlogTabsPages";

const DigitalMarketing = ({ searchTerm }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="my-5">Digital Marketing</h2>
      <BlogTabsPages category="Digital Marketing" searchTerm={searchTerm} />
    </div>              
  );
};

export default DigitalMarketing;
