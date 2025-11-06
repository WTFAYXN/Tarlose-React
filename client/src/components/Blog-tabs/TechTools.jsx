import React from 'react'
import BlogTabsPages from './BlogTabsPages';
            
const TechTools = ({ searchTerm }) => {
  return (
    <div className='container mx-auto p-4'>
      <h2 className="">Tech Tools</h2>
      <hr className="hr-blog"></hr>

      <BlogTabsPages category="Tech Tools" searchTerm={searchTerm} />
   </div>
  );
};

export default TechTools;
