import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./BasicGrid.css";

// Styled component for the grid items
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

// Sample data for dynamic grid items
const gridData = [
  {
    id: 1,
    title: "Versatile",
    description:
      "Pre-built templates designed to suit a variety of needs, from personal organization to team collaboration.",
    isLarge: true,
    svgPath:
      "M200,36H56A20,20,0,0,0,36,56V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,80H140V60h56ZM116,60v56H60V60ZM60,140h56v56H60Zm80,56V140h56v56Z",
  },
  {
    id: 2,
    title: "Beginner-Friendly",
    description:
      "Tools and templates to enhance team productivity and seamless collaboration.",
    isLarge: false,
    svgPath:
      "M200,36H56A20,20,0,0,0,36,56V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,80H140V60h56ZM116,60v56H60V60ZM60,140h56v56H60Zm80,56V140h56v56Z",
  },
  {
    id: 3,
    title: "Fully Customizable",
    description:
      "Easily adapt templates to fit your unique workflow and preferences.",
    isLarge: false,
    svgPath:
      "M200,36H56A20,20,0,0,0,36,56V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,80H140V60h56ZM116,60v56H60V60ZM60,140h56v56H60Zm80,56V140h56v56Z",
  },
];

// Component to render individual grid item content
const GridItemContent = ({ title, description, svgPath }) => (
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
      <a href="#" className="btn btn-outline-dark btn-lg shining-button">
        Get Started
      </a>
    </div>
  </div>
);

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} className="container basic-grid-container">
      <div className="services-header d-flex flex-column text-center">
        <h2>
          Everything You Need, <span className="eco-sub">All in One Place</span>
        </h2>
        <p>Explore versatile templates crafted for any purpose.</p>
      </div>
      <Grid container spacing={2}>
        {/* Large grid item */}
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
                        <g style={{ color: "rgb(26, 26, 26)", fontWeight: "bold" }}>
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
                />
              </Item>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}