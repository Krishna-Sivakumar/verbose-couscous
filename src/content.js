import './App.css'

/* MUI Component Imports */
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

/* Icon Imports */
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

/* Custom Component Imports */
import { StandardButton, RepeatButton } from './button';
import Breadcrumbs from './breadcrumbs';

const VideoProgressBar = styled(LinearProgress)(({ theme }) => ({
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#303234"
  },
  [`& .${linearProgressClasses.bar}`]: {
    background: "linear-gradient(180deg, rgba(255,0,107,1) 0%, rgba(165,0,243,1) 100%);",
  }
}))

function VideoCard(props) {
  // Represents a list item in the list of course videos

  function VideoThumbnail(props) {
    // Represents a video thumbnail within a VideoCard

    return (
      <div style={{ marginRight: "2em", display: "flex", flexDirection: "column" }}>
        <div className="video-thumbnail-container">
          <img className="video-thumbnail" alt="thumbnail" src={props.img} />
          <span className="video-icon">
            {
              (props.completed) ?
                <CheckCircleIcon color="success" fontSize="large" /> :
                <PlayArrowIcon />
            }
          </span>
          <span className="video-time">40:08</span>
        </div>
        <VideoProgressBar variant="determinate" value={(props.completed) ? 100 : 50} />
      </div>
    );
  }

  return (
    <ListItem className="video-card-list-item">
      <VideoThumbnail completed={props.completed} img={props.img} />
      <ListItemText style={{ maxWidth: "20em" }}>
        <b>Day {props.index} | {props.title}</b> <br /> {props.description}
      </ListItemText>
      {
        (props.completed) ?
          <RepeatButton startIcon={<PlayArrowIcon />}>Watch Again</RepeatButton> :
          <StandardButton>Resume</StandardButton>
      }
    </ListItem>
  );
}

function Participants(props) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "1em" }}>
      <AvatarGroup max={3} className="watching-group">
        <Avatar style={{ width: "1.5em", height: "1.5em" }} src="stretching.jpg" />
        <Avatar style={{ width: "1.5em", height: "1.5em" }} src="stretching.jpg" />
        <Avatar style={{ width: "1.5em", height: "1.5em" }} src="stretching.jpg" />
      </AvatarGroup>
      <span style={{ marginLeft: "1em" }}><em>You and 50+ others are here</em></span>
    </div>
  );
}

export default function ContentSection(props) {
  return (
    <Box component="main" sx={{ textAlign: "justify", margin: "4em", display: "block" }}>

      <Breadcrumbs />

      <Participants />

      <h1>💪🏻 Week 1 | Form and Technique</h1>

      <List>
        {props.courseItems.map((card, index) => (
          <VideoCard key={index + 1} index={index + 1} {...card} />
        ))}
      </List>

    </Box>
  );
}