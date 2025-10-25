import React from 'react'
import BlogTabsPages from './BlogTabsPages';
            
const TechTools = ({ searchTerm }) => {
  return (
    <>
      <h2 className="my-5">Tech Tools</h2>
      <BlogTabsPages category="Tech Tools" searchTerm={searchTerm} />
    </>
  );
};

export default TechTools;
