import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./FullWidthGrid.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const gridData = [
  {
    id: 1,
    title: "Task Management Made Simple",
    description: "Master organizing your to-dos and projects with efficient task management techniques in Notion.",
    size: { xs: 12, md: 7 },
    svgPath: "M128,24C70.1,24,24,70.1,24,128s46.1,104,104,104s104-46.1,104-104S185.9,24,128,24z M160,144H96v-32h64V144z M160,96H96V64h64V96z", // Simplified task icon
  },
  {
    id: 2,
    title: "Collaboration Tips",
    description: "Learn how to use Notion for team projects, task assignments, and seamless communication.",
    size: { xs: 12, md: 5 },
    svgPath: "M184,88c-13.3,0-24,10.7-24,24s10.7,24,24,24s24-10.7,24-24S197.3,88,184,88z M72,88c-13.3,0-24,10.7-24,24s10.7,24,24,24s24-10.7,24-24S85.3,88,72,88z M128,160c-26.5,0-48-21.5-48-48s21.5-48,48-48s48,21.5,48,48S154.5,160,128,160z", // Simplified collaboration icon
  },
  {
    id: 3,
    title: "Template Mastery",
    description: "Discover how to create and customize templates for various workflows, saving time and effort.",
    size: { xs: 12, md: 5 },
    svgPath: "M200,64H56c-4.4,0-8,3.6-8,8v112c0,4.4,3.6,8,8,8h144c4.4,0,8-3.6,8-8V72C208,67.6,204.4,64,200,64z M192,168H64V80h128V168z M88,96H72v16h16V96z M112,96H96v16h16V96z M136,96H120v16h16V96z", // Simplified template icon
  },
  {
    id: 4,
    title: "Data Visualization",
    description: "Unlock the power of databases and charts to visualize your data effectively in Notion.",
    size: { xs: 12, md: 7 },
    svgPath: "M200,64H56c-4.4,0-8,3.6-8,8v112c0,4.4,3.6,8,8,8h144c4.4,0,8-3.6,8-8V72C208,67.6,204.4,64,200,64z M184,168H72V80h112V168z M96,96H80v16h16V96z M120,96H104v16h16V96z", 
  },
];

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
      
    </div>
  </div>
);

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} className="container basic-grid-container">
      <div className="services-header d-flex flex-column text-center">
        <h2>
          Master Notion <span className="eco-sub">Effortlessly</span>
        </h2>
        <p>Get the most out of Notion with simple, actionable guides designed to help you start using Notion like a pro.</p>
      </div>
      <Grid container spacing={2}>
        {gridData.map((item) => (
          <Grid size={item.size} key={item.id}>
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