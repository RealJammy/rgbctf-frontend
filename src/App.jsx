import React from 'react';

import clippy from 'clippyjs'
import Navbar from './components/Navbar'
import { ThemeProvider } from '@react95/core';



function App() {
  clippy.load('Clippy', function(agent){
    // do anything with the loaded agent
    agent.show();
});
clippy.load('Bonzi', function(agent){
  // do anything with the loaded agent
  agent.show();
});
  return (
    
    <ThemeProvider>   <Navbar/>
    </ThemeProvider>

  );
}

export default App;
