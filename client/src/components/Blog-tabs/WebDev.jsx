import React from "react";

import BlogTabsPages from "./BlogTabsPages";

const WebDev = ({ searchTerm }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className=""> Web Development</h2>
      <hr className="hr-blog"></hr>
      <BlogTabsPages category="Website Development" searchTerm={searchTerm} />
    </div>
  );
};

export default WebDev;
