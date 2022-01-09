import './App.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

/* Custom Component Imports */
import ContentSection from './content';
import SidebarSection from './sidebar';

function StandardButton(props) {
  return (
    <div className="standard-button-wrapper">
      <Button className="standard-button" {...props} />
    </div>
  )
}

function Hero() {
  return (
    <div className="hero">
      <div>
        <h2>Week 1 | Form and Technique</h2>
        <p><em>The World's Fittest Woman Kara Saunders trains you for the next <br /> eight weeks to build strength, mobility and endurance in this series.</em></p>
        <StandardButton>Resume</StandardButton>
      </div>
    </div>
  );
}

function App() {

  const courseItems = [
    {
      title: "EMOM",
      description: "Get those muscles moving with your first 15 minute warm-up. You got this!",
      completed: true,
      img: "unsplash_tpivPdQgC20.png"
    },
    {
      title: "Lower Body Power",
      description: "Get those muscles moving with your first 15 minute warm-up. You got this!",
      completed: true,
      img: "unsplash_Nqeyae9jOd4.png"
    },
    {
      title: "Rest & Recovery",
      description: "Get those muscles moving with your first 15 minute warm-up. You got this!",
      completed: true,
      img: "unsplash_Pd5bbWoIUis.png"
    },
    {
      title: "Tabata",
      description: "Get those muscles moving with your first 15 minute warm-up. You got this!",
      completed: true,
      img: "unsplash_oP3BODek8Fc.png"
    },
    {
      title: "Rest Day",
      description: "Get those muscles moving with your first 15 minute warm-up. You got this!",
      completed: false,
      img: "stretching.jpg"
    },
  ]

  const drawerWidth = 280;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SidebarSection drawerWidth={drawerWidth} />
      <div style={{ flexGrow: 1 }}>
        <Hero />
        <ContentSection courseItems={courseItems} />
      </div>
    </Box>
  );
}

export default App;
