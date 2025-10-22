import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import CoreMissions from './components/CoreMissions';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-primary text-secondary font-body antialiased">
      <Header />
      <main className="relative">
        <Hero />
        <div className="relative z-20">
          <About />
          <Mission />
          <CoreMissions />
          <Testimonial />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
