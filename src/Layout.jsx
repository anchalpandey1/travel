import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Destination from './components/Destination/Destination';

function Layout() {
  return (
    <div className="relative">
      <Navbar />

      <div className="mt-15">
        
        <Hero />
    <Destination/>
      </div>
    </div>
  );
}

export default Layout;
