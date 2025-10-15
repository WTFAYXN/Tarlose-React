import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./BasicGrid.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgb(13, 13, 13) !important',
  borderRadius: '12px !important',
  border: '1px solid rgba(255, 255, 255, 0.5) !important',
  color: '#fff !important',
  padding: theme.spacing(2.5),
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  height: 'min-content',
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'relative',
  '& h3': {
    color: '#fff',
    marginBottom: '10px',
  },
  '& p': {
    color: '#f8f8f8b1',
    fontSize: '16px',
    lineHeight: '1.5',
  },
}));

// Predefined SVG paths to be assigned to the services.
// You can add more paths here, and the component will cycle through them.
const SVG_PATHS = [
  "M200,36H56A20,20,0,0,0,36,56V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,80H140V60h56ZM116,60v56H60V60ZM60,140h56v56H60Zm80,56V140h56v56Z",
  "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z",
  "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a48,48,0,1,1-48-48A48.05,48.05,0,0,1,176,128Z",
  // Add more SVG path strings here if needed
];

const GridItemContent = ({ title, description, svgPath, isLarge }) => (
  <div className="left-basic-grid">
    <div className="svg-img">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        focusable="false"
        style={{
          userSelect: "none",
          width: "100%",
          height: "100%",
          display: "inline-block",
          fill: "rgb(255, 255, 255)",
          color: "rgb(26, 26, 26)",
          flexShrink: 0,
        }}
      >
        <g style={{ color: "rgb(26, 26, 26)", fontWeight: "bold" }}>
          <path d={svgPath}></path>
        </g>
      </svg>
    </div>
    <div className="left-basic-grid-content">
      <h3>{title}</h3>
      <p>{description}</p>
      {isLarge && (
        <a href="#" className="btn btn-outline-dark btn-lg shining-button">
          Get Started
        </a>
      )}
    </div>
  </div>
);

export default function BasicGrid({ services }) {
  // Use React.useMemo to dynamically create the gridData from props.
  // This is optimized to only run when the 'services' prop changes.
  const gridData = React.useMemo(() => {
    if (!services || !services.services) {
      return []; // Return empty array if data is not available
    }

    // Transform the incoming services array into the format needed by the grid
    return services.services.map((service, index) => ({
      id: index,
      title: service.title,
      description: service.description,
      // Apply the layout rule: 1st, 4th, 7th... items are large
      isLarge: index % 3 === 0,
      // Cycle through the available SVG icons
      svgPath: SVG_PATHS[index % SVG_PATHS.length],
    }));
  }, [services]); // Dependency array ensures this runs only when 'services' prop changes

  return (
    <Box sx={{ flexGrow: 1 }} className="container basic-grid-container">
      <div className="services-header d-flex flex-column text-center">
        <h2>{services.title}</h2>
        <p>{services.description}</p>
      </div>
      <Grid container spacing={2}>
        {/* Large grid item(s) */}
        {gridData
          .filter((item) => item.isLarge)
          .map((item) => (
            <Grid size={12} key={item.id}>
              <Item>
                <div className="large-basic-grid-container">
                  <div className="left-basic-grid">
                    <GridItemContent
                      title={item.title}
                      description={item.description}
                      svgPath={item.svgPath}
                      isLarge={item.isLarge}
                    />
                  </div>
                  <div className="right-basic-grid">
                    <div className="svg-container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        style={{
                          userSelect: "none",
                          width: "100%",
                          height: "100%",
                          display: "inline-block",
                          fill: "rgb(255, 255, 255)",
                          color: "rgb(26, 26, 26)",
                          flexShrink: 0,
                        }}
                      >
                        <g
                          style={{
                            color: "rgb(26, 26, 26)",
                            fontWeight: "bold",
                          }}
                        >
                          <path d={item.svgPath}></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
          ))}

        {/* Smaller grid items */}
        {gridData
          .filter((item) => !item.isLarge)
          .map((item) => (
            <Grid size={{ xs: 12, md: 6 }} key={item.id}>
              <Item>
                <GridItemContent
                  title={item.title}
                  description={item.description}
                  svgPath={item.svgPath}
                  isLarge={item.isLarge}
                />
              </Item>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

