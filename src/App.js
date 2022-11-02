import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ReviewSection from './components/ReviewSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Pricing from './components/Pricing';
import HowItWorks from "./components/HowItWorks"

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <About />
      <Pricing />
      <ReviewSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
