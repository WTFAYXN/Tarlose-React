import React from "react";

import BlogTabsPages from "./BlogTabsPages";

const WebDev = ({ searchTerm }) => {
  return (
    <div>
      <h2 className="my-5"> Web Development</h2>
      <BlogTabsPages category="Website Development" searchTerm={searchTerm} />
    </div>
  );
};

export default WebDev;
