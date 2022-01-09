import './App.css';

import Button from '@mui/material/Button';

export function StandardButton(props) {
  return (
    <div className="standard-button-wrapper">
      <Button className="standard-button" {...props} />
    </div>
  )
}

export function RepeatButton(props) {
  return (
    <Button className="repeat-button" {...props} />
  )
}