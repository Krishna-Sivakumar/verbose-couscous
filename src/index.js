import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

ReactDOM.render(
  <ThemeProvider
    theme={createTheme({
      palette: {
        mode: "dark"
      }
    })}
  >
    <App />,
  </ThemeProvider>,
  document.getElementById('root')
);
