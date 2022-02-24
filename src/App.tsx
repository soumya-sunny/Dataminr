import React from 'react';
import './App.css';
import Account from './components/pages/Account';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
      
        <Account />
      </div>
    </ThemeProvider>
  );
}

export default App;
