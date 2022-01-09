import './App.css';

/* MUI Component Import */
import Button from '@mui/material/Button';

export function StandardButton(props) {
  // regular button with a golden border
  return (
    <div className="standard-button-wrapper">
      <Button className="standard-button" {...props} />
    </div>
  )
}

export function RepeatButton(props) {
  // replay button with a play icon attached
  return (
    <Button className="repeat-button" {...props} />
  )
}