import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ViewAllbox from '../ViewAllbox/ViewAllbox';
import './FullWidthGrid.css';

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

const gridData = [
  { size: { xs: 12, md: 8 }, svgPath: "M128,24C70.1,24,24,70.1,24,128s46.1,104,104,104s104-46.1,104-104S185.9,24,128,24z M160,144H96v-32h64V144z M160,96H96V64h64V96z" },
  { size: { xs: 12, md: 4 }, svgPath: "M184,88c-13.3,0-24,10.7-24,24s10.7,24,24,24s24-10.7,24-24S197.3,88,184,88z M72,88c-13.3,0-24,10.7-24,24s10.7,24,24,24s24-10.7,24-24S85.3,88,72,88z M128,160c-26.5,0-48-21.5-48-48s21.5-48,48-48s48,21.5,48,48S154.5,160,128,160z" },
  { size: { xs: 12, md: 4 }, svgPath: "M200,64H56c-4.4,0-8,3.6-8,8v112c0,4.4,3.6,8,8,8h144c4.4,0,8-3.6,8-8V72C208,67.6,204.4,64,200,64z M192,168H64V80h128V168z M88,96H72v16h16V96z M112,96H96v16h16V96z M136,96H120v16h16V96z" },
  { size: { xs: 12, md: 8 }, svgPath: "M200,64H56c-4.4,0-8,3.6-8,8v112c0,4.4,3.6,8,8,8h144c4.4,0,8-3.6,8-8V72C208,67.6,204.4,64,200,64z M184,168H72V80h112V168z M96,96H80v16h16V96z M120,96H104v16h16V96z" },
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

export default function FullWidthGrid({ features }) {
  return (
    <Box sx={{ flexGrow: 1 }} className="container basic-grid-container">
      <div className="services-header d-flex flex-column text-center">
        <h2>
          {features.title}
        </h2>
        <p>{features.description}</p>
      </div>
      <Grid container spacing={2}>
        {features.features && features.features.length > 0 &&
          features.features.map((item, idx) => {
            const grid = gridData[idx % gridData.length];
            return (
              <Grid size={grid.size} key={idx}>
                <Item>
                  <GridItemContent
                    title={item.title}
                    description={item.description}
                    svgPath={grid.svgPath}
                  />
                </Item>
              </Grid>
            );
          })}
      </Grid>
      {/* <ViewAllbox /> */}
    </Box>
  );
}