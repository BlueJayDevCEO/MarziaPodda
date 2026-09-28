
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IsThisForYou from './components/IsThisForYou';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import WhatToExpect from './components/WhatToExpect';
import Specialisms from './components/Specialisms';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Held from './components/Held';

const App: React.FC = () => {
  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';

  const [hash, setHash] = useState(() => window.location.hash);
  const showPrivacy = hash === '#privacy';

  useEffect(() => {
    const handleHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    // Wait for the selected view and fonts before positioning direct links.
    let cancelled = false;
    const positionSection = () => {
      if (cancelled) return;
      if (!hash || showPrivacy) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
      }
    };
    positionSection();
    void document.fonts.ready.then(positionSection);
    return () => { cancelled = true; };
  }, [hash, showPrivacy]);

  if (normalizedPath === '/held') {
    return <Held />;
  }

  if (showPrivacy) {
    return (
      <div className="site-shell flex flex-col min-h-screen">
        <Navbar onHomeClick={() => window.location.hash = ''} />
        <main className="flex-grow pt-24">
          <Privacy />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="site-shell flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <IsThisForYou />
        <HowItWorks />
        <Specialisms />
        <About />
        <WhatToExpect />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
