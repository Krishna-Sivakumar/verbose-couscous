import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

ReactDOM.render(
  <ThemeProvider
    theme={createTheme({
      palette: {
        secondary: {
          main: "rgb(255,0,107;",
          mainGradient: "linear-gradient(180deg, rgba(255,0,107,1) 0%, rgba(165,0,243,1) 100%);"
        },
        "* .MuiListItem-root": {
          backgroundColor: "white"
        },
        mode: "dark"
      }
    })}
  >
    <App />,
  </ThemeProvider>,
  document.getElementById('root')
);
