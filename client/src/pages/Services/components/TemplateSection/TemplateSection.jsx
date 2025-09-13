import React from "react";
import "./TemplateSection.css";
// import ViewAllbox from "../ViewAllbox/ViewAllbox";

const TemplateSection = ({ content }) => {
  // Use React.useMemo to dynamically create the template data from the content prop.
  // This is optimized to only re-run when the 'content' prop changes.
  const templates = React.useMemo(() => {
    // Return an empty array if content or points are not available, to prevent errors.
    if (!content || !content.points) {
      return [];
    }

    // Map over the incoming points array to create the data structure needed for the cards.
    return content.points.map((point, index) => ({
      id: index,
      // Use the title and description directly from the incoming data
      title: point.title,
      description: point.description,
      // Use a consistent placeholder image for design consistency, as it's not in the data
      image: "https://framerusercontent.com/images/US5AgZU6K6UjoTYD8lIQXtv2gg.jpg?scale-down-to=1024",
    }));
  }, [content]); // Dependency array: this logic re-runs only when the 'content' prop changes

  // Group templates into chunks of 3 to render them in rows
  const templateRows = React.useMemo(() => {
    const rows = [];
    if (!templates) return rows;
    for (let i = 0; i < templates.length; i += 3) {
      rows.push(templates.slice(i, i + 3));
    }
    return rows;
  }, [templates]);

  return (
    <>
      <div className="services-parent-container container">
        <div className="services-header d-flex flex-column text-center">
          {/* The main title and description are still pulled from the content prop */}
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>

        <div className="Template-content">
          {/* Map over each row of templates */}
          {templateRows.map((row, rowIndex) => (
            // Each row uses the Template-cards class to maintain styling
            <div key={rowIndex} className="Template-cards">
              {/* Map over each card within the current row */}
              {row.map((template) => (
                <div key={template.id} className="Template-card">
                  <div className="Template-card-img">
                    <img src={template.image} alt={template.title} />
                  </div>
                  <div className="top-selling-container">
                    {/* These elements are commented out as per your original code */}
                    {/* <p className="price m-0">{template.price}</p> */}
                    {/* <p className="top-sell m-0">{template.label}</p> */}
                  </div>
                  <h3 className="card-Template-heading m-0">{template.title}</h3>
                  <p className="card-Template-discription m-0">{template.description}</p>
                  {/* <a href={template.link} ... > ... </a> */}
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* <ViewAllbox /> */}
      </div>
    </>
  );
};

export default TemplateSection;

