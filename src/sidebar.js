import './App.css';

/* MUI Component Imports */
import Divider from '@mui/material/Divider';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';

/* Icon Imports */
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

import { styled } from '@mui/material/styles';

export default function Sidebar(props) {

  const CourseProgressBar = styled(LinearProgress)(({ theme }) => ({
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#303234"
    },
    [`& .${linearProgressClasses.bar}`]: {
      background: "linear-gradient(180deg, rgba(255,0,107,1) 0%, rgba(165,0,243,1) 100%);",
    }
  }));

  return (
    <Drawer
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
      <div className="drawer-header">
        <p>Functional Strength <br /> Training with Kara</p>
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
    </Drawer>
  );
}
