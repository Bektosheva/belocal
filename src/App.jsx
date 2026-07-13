import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Regions from './components/Regions';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-accent-cream">
      <Navbar />
      <Hero />
      <Features />
      <Regions />
      <HowItWorks />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;