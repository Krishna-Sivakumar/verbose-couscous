import './App.css';

/* MUI Component Imports */
import Avatar from '@mui/material/Avatar';

/* Icon Import */
import LockIcon from '@mui/icons-material/Lock';


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

export default function Breadcrumbs(props) {

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
