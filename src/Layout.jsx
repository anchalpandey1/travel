import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Destination from './components/Destination/Destination';
import Month from './components/Month/Month';
import Plan from './components/Plan/Plan';

function Layout() {
  return (
    <div className="relative">
      <Navbar />

      <div className="mt-15">
        
        <Hero />
    <Destination/>
    <Month/>
    <Plan/>
    
      </div>
    </div>
  );
}

export default Layout;
