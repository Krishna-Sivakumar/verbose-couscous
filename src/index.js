import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

ReactDOM.render(
  <ThemeProvider
    theme={createTheme({
      palette: {
        "* .MuiListItem-root": {
          backgroundColor: "white"
        },
        mode: "dark",
        backgroundColor: "#020005"
      }
    })}
  >
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
