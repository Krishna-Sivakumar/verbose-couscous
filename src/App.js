import './App.css';

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import LinearProgressWithLabel, { linearProgressClasses } from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LockIcon from '@mui/icons-material/Lock';
import { styled } from '@mui/material/styles';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function StandardButton(props) {
  return (
    <div className="standard-button-wrapper">
      <Button className="standard-button" {...props} />
    </div>
  )
}

function RepeatButton(props) {
  return (
    <Button className="repeat-button" {...props} />
  )
}

function Sidebar(props) {

  const CourseProgressBar = styled(LinearProgressWithLabel)(({ theme }) => ({
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#303234"
    },
    [`& .${linearProgressClasses.bar}`]: {
      background: "linear-gradient(180deg, rgba(255,0,107,1) 0%, rgba(165,0,243,1) 100%);",
    }
  }));

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
    className="sidebar"
  >
    <div style={{ backgroundImage: 'url("nav-header.png")', backgroundSize: "cover", padding: "1em" }}>
      <h3>Functional Strength <br /> Training with Kara</h3>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "fit-content" }}>
        <CourseProgressBar sx={{ width: "80%" }} variant="determinate" value={50} />
        <span style={{ color: "var(--disabled)" }}>50%</span>
      </div>
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
        <ListItemText primary="Meet Your Instructor" />
      </ListItem>
      <ListItem>

      </ListItem>
    </List>
    <Divider />
  </Drawer>);
}

function Content(props) {

  const VideoProgressBar = styled(LinearProgressWithLabel)(({ theme }) => ({
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#303234"
    },
    [`& .${linearProgressClasses.bar}`]: {
      background: "linear-gradient(180deg, rgba(255,0,107,1) 0%, rgba(165,0,243,1) 100%);",
    }
  }))

  function VideoThumbnail(props) {
    return (
      <div style={{ marginRight: "2em", display: "flex", flexDirection: "column" }}>
        <div className="video-thumbnail-container">
          <img className="video-thumbnail" src="stretching.jpg" alt="thumbnail" />
          <span class="video-icon">
            {
              (props.completed) ?
                <CheckCircleIcon color="success" fontSize="large" /> :
                <PlayArrowIcon />
            }
          </span>
          <span class="video-time">40:08</span>
        </div>
        <VideoProgressBar variant="determinate" value={50} />
      </div>
    );
  }

  function VideoCard(props) {
    return (
      <ListItem className="video-card-list-item">
        <VideoThumbnail completed={props.completed} />
        <ListItemText style={{ maxWidth: "20em" }}>
          <b>Day {props.index} | {props.title}</b> <br /> {props.description}
        </ListItemText>
        {(props.completed) ? <RepeatButton startIcon={<PlayArrowIcon />}>Watch Again</RepeatButton> : <StandardButton>Resume</StandardButton>}
      </ListItem>
    );
  }

  return (
    <Box component="main" sx={{ textAlign: "justify", margin: "4em" }}>
      <div>
        <div className="breadcrumb-container">
          <div className="breadcrumb-border">
            <span type="primary" className="breadcrumb-item">
              Week 1
              <Avatar src="stretching.jpg" style={{ marginLeft: "1em", width: "1em", height: "1em" }} />
            </span>
          </div>
          <div className="breadcrumb-border">
            <span className="breadcrumb-item">
              Week 2
              <LockIcon style={{ margin: "0.10em" }} fontSize="inherit" />
            </span>
          </div>
          <div className="breadcrumb-border">
            <span className="breadcrumb-item">
              Week 3
              <LockIcon style={{ margin: "0.10em" }} fontSize="inherit" />
            </span>
          </div>
          <div className="breadcrumb-border">
            <span className="breadcrumb-item">
              Week 4
              <LockIcon style={{ margin: "0.10em" }} fontSize="inherit" />
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: "1em" }}>
          <AvatarGroup max={3} className="watching-group">
            <Avatar style={{ width: "1.5em", height: "1.5em" }} src="stretching.jpg" />
            <Avatar style={{ width: "1.5em", height: "1.5em" }} src="stretching.jpg" />
            <Avatar style={{ width: "1.5em", height: "1.5em" }} src="stretching.jpg" />
          </AvatarGroup>
          <span style={{ marginLeft: "1em" }}><em>You and 50+ others are here</em></span>
        </div>
      </div>
      <h1>💪🏻 Week 1 | Form and Technique</h1>
      <List>
        {props.courseItems.map((card, index) => (
          <VideoCard index={index + 1} {...card} />
        ))}
      </List>
    </Box>
  );
}

function Hero() {
  return (
    <div style={{ height: "27em", backgroundImage: 'url("unsplash_h4i9G-de7Po.png")', backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
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

  const drawerWidth = 280;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar drawerWidth={drawerWidth} />
      <div style={{ flexGrow: 1 }}>
        <Hero />
        <Content courseItems={courseItems} />
      </div>
    </Box>
  );
}

export default App;
