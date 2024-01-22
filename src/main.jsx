import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Spiritual from './Spiritual.jsx';
import Nature from './Nature.jsx';
import Adventure from './Adventure.jsx';
import PopularDestination from './PopularDestination.jsx';
import WildLife from './WildLife.jsx';
import Cultural from './Cultural.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
          <Route path="/Spiritual" element={<Spiritual />}/>
          <Route path="/Nature" element={<Nature />}/>
          <Route path="/Adventure" element={<Adventure />}/>
          <Route path="/PopularDestination" element={<PopularDestination />}/>
          <Route path="/WildLife" element={<WildLife />}/>
          <Route path="/Cultural" element={<Cultural />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
