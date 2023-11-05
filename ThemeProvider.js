import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css'; // Import global styles
import theme from './theme'; // Import the Material-UI theme
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
