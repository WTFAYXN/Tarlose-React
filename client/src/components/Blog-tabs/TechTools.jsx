import React from 'react'
import BlogTabsPages from './BlogTabsPages';
            
const TechTools = ({ searchTerm }) => {
  return (
    <div className='container mx-auto p-4'>
      <h2 className="my-5">Tech Tools</h2>
      <BlogTabsPages category="Tech Tools" searchTerm={searchTerm} />
   </div>
  );
};

export default TechTools;
