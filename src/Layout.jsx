import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Destination from './components/Destination/Destination';
import Month from './components/Month/Month';
import Plan from './components/Plan/Plan';
import Room from './components/Room/Room';
import Hotel from './components/Hotel/Hotel';
import Team from './components/Team/Team';

function Layout() {
  return (
    <div className="relative">
      <Navbar />

      <div className="mt-15">
        
        <Hero />
    <Destination/>
    <Month/>
    <Plan/>
    <Room/>
    <Hotel/>
    <Team/>
    
      </div>
    </div>
  );
}

export default Layout;
