import './App.css';

import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import LinearProgressWithLabel from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

function Sidebar(props) {
  return (<Drawer
    variant="permanent"
    anchor="left"
    sx={{
      width: props.drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: props.drawerWidth,
        boxSizing: 'border-box',
      },
    }}
  >
    <div style={{ backgroundImage: 'url("nav-header.png")', backgroundSize: "cover", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h3 style={{ margin: "1em" }}>Functional Strength <br /> Training with Kara</h3>
      <LinearProgressWithLabel sx={{ width: "100%" }} variant="determinate" value="10%" />
    </div>
    <List>
      <ListItem button key="Dashboard">
        <ListItemIcon><HomeRoundedIcon /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button key="Modules">
        <ListItemIcon><LiveTvRoundedIcon /></ListItemIcon>
        <ListItemText primary="Modules" />
      </ListItem>
      <ListItem button key="Events">
        <ListItemIcon><MilitaryTechIcon /></ListItemIcon>
        <ListItemText primary="Events" />
      </ListItem>
      <ListItem button key="Meet Your Instructor">
        <ListItemIcon><EmojiEventsIcon /></ListItemIcon>
        <ListItemText primary="Events" />
      </ListItem>
      <ListItem>

      </ListItem>
    </List>
    <Divider />
  </Drawer>);
}

function App() {

  const courseItems = [
    {
      title: "EMOM",
      description: "Get those muscles moving with your first 15 minute warm-up. You got this!",
      completed: true,
      img: ""
    },
    {
      title: "Lower Body Power",
      description: "Get those muscles moving with your first 15 minute warm-up. You got this!",
      completed: true,
      img: ""
    },
    {
      title: "Rest & Recovery",
      description: "Get those muscles moving with your first 15 minute warm-up. You got this!",
      completed: true,
      img: ""
    },
    {
      title: "Tabata",
      description: "Get those muscles moving with your first 15 minute warm-up. You got this!",
      completed: true,
      img: ""
    },
    {
      title: "Rest Day",
      description: "Get those muscles moving with your first 15 minute warm-up. You got this!",
      completed: false,
      img: ""
    },
  ]

  const drawerWidth = 240;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ textAlign: "justify", flexGrow: 1, margin: 0 }}>
        <div style={{ height: "100%", backgroundImage: 'url("unsplash_h4i9G-de7Po.png")', backgroundSize: "cover", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ margin: "5em" }}>
            <h2>Week 1 | Form and Technique</h2>
            <p><em>The World's Fittest Woman Kara Saunders trains you for the next <br /> eight weeks to build strength, mobility and endurance in this series.</em></p>
            <Button>Resume</Button>
          </div>
        </div>
        <div>
          <Breadcrumbs aria-label="breadcrumb">
            <span>Week 1</span>
            <span>Week 2</span>
            <span>Week 3</span>
            <span>Week 4</span>
          </Breadcrumbs>
          <p><em>You and 50+ others are here</em></p>
        </div>
        <h1>💪🏻 Week 1 | Form and Technique</h1>
      </Box>
    </Box>
  );
}

export default App;
