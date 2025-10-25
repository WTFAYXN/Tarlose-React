import React from "react";
import BlogTabsPages from "./BlogTabsPages";

const DigitalMarketing = ({ searchTerm }) => {
  return (
    <>
      <h2 className="my-5">Digital Marketing</h2>
      <BlogTabsPages category="Digital Marketing" searchTerm={searchTerm} />
    </>              
  );
};

export default DigitalMarketing;
