import React from 'react';


import Navbar from './components/Navbar'
import { ThemeProvider } from '@react95/core';



function App() {
  return (
    <ThemeProvider>   <Navbar/>
    </ThemeProvider>

  );
}

export default App;
