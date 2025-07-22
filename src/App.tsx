import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Vision from './components/Vision';
import CoreValues from './components/CoreValues';
import Milestones from './components/Milestones';
import TargetSectors from './components/TargetSectors';
import FlagshipProject from './components/FlagshipProject';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Vision />
      <CoreValues />
      <Milestones />
      <TargetSectors />
      <Team />
      <FlagshipProject />
      <Contact />
    </div>
  );
}

export default App;