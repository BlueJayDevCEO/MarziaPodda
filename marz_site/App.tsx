
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IsThisForYou from './components/IsThisForYou';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import WhatToExpect from './components/WhatToExpect';
import Specialisms from './components/Specialisms';
import Fees from './components/Fees';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './components/Privacy';

const App: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    // Handle hash routing for single page navigation
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        setShowPrivacy(true);
        window.scrollTo(0, 0);
      } else {
        setShowPrivacy(false);
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  if (showPrivacy) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar onHomeClick={() => window.location.hash = ''} />
        <main className="flex-grow pt-24">
          <Privacy />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <IsThisForYou />
        <About />
        <HowItWorks />
        <WhatToExpect />
        <Specialisms />
        <Fees />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
