import './App.css'

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { StandardButton, RepeatButton } from './button';

export default function Content(props) {
  const VideoProgressBar = styled(LinearProgress)(({ theme }) => ({
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#303234"
    },
    [`& .${linearProgressClasses.bar}`]: {
      background: "linear-gradient(180deg, rgba(255,0,107,1) 0%, rgba(165,0,243,1) 100%);",
    }
  }))

  function VideoCard(props) {

    function VideoThumbnail(props) {
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

  function Breadcrumbs(props) {

    function BreadcrumbItem(props) {
      if (props.type && props.type === "primary") {
        return (
          <span type="primary" className="breadcrumb-item">
            {props.children}
          </span>
        );
      }

      return (
        <div className="breadcrumb-border">
          <span className="breadcrumb-item">
            {props.children}
          </span>
        </div>
      )
    }

    return (
      <div className="breadcrumb-container">
        <BreadcrumbItem type="primary">
          Week 1
          <Avatar src="stretching.jpg" style={{ marginLeft: "1em", width: "1em", height: "1em" }} />
        </BreadcrumbItem>
        <BreadcrumbItem>
          Week 2
          <LockIcon className="lock-icon" color="grey" fontSize="inherit" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          Week 3
          <LockIcon className="lock-icon" color="grey" fontSize="inherit" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          Week 4
          <LockIcon className="lock-icon" color="grey" fontSize="inherit" />
        </BreadcrumbItem>
      </div>
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