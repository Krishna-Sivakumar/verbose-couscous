import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

ReactDOM.render(
  <ThemeProvider
    theme={createTheme({
      palette: {
        "* .MuiListItem-root": {
          backgroundColor: "white"
        },
        mode: "dark",
        backgroundColor: "var(--background)"
      }
    })}
  >
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
