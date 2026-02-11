// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout & Helpers
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Page Imports
import Home from './pages/Home';
import Team from './pages/Team';
import Publications from './pages/Publications';

// Service Page Imports
import InjectionWells from './pages/InjectionWells';
import CaptureStorage from './pages/CaptureStorage';
import OilGas from './pages/OilGas';
import ISR from './pages/ISR';
import Mining from './pages/Mining';
import Safety from './pages/Safety';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* The Layout wraps all routes, giving them the Navbar & Footer */}
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="publications" element={<Publications />} />

          {/* Service Routes */}
          {/* You can choose to make these /services/mining or just /mining */}
          <Route path="injection-wells" element={<InjectionWells />} />
          <Route path="carbon-capture" element={<CaptureStorage />} />
          <Route path="oil-and-gas" element={<OilGas />} />
          <Route path="isr-uranium" element={<ISR />} />
          <Route path="mining" element={<Mining />} />
          <Route path="safety" element={<Safety />} />

        </Route>
      </Routes>
    </>
  );
};

export default App;