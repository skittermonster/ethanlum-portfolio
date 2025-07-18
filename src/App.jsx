import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from './components';

// Hook to set --vh based on the *usable* viewport height on mobile
function useFixMobileVh() {
  useEffect(() => {
    

    const setVh = () => {
      // prefer the visualViewport height when available,
      // since window.innerHeight often doesn't change when browser chrome hides
      const height = window.visualViewport?.height ?? window.innerHeight;
      const vhUnit = height * 0.01;
      document.documentElement.style.setProperty('--vh', `${vhUnit}px`);
    };

    // run on mount
    setVh();

    // 1) standard resize (pinch‑zoom, orientation‑change)
    window.addEventListener('resize', setVh);

    // 2) dynamic viewport changes (hide/show UI chrome on scroll)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', setVh);
    }

    return () => {
      window.removeEventListener('resize', setVh);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', setVh);
      }
    };
  }, []);
}

const App = () => {
  // keep --vh in sync with the visible viewport height
  useFixMobileVh();

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        {/* Hero section uses dynamic vh */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen-dynamic">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Works />
        <Tech />
        <Experience />

        {/* Contact section also uses dynamic vh */}
        <div className="relative z-0 h-screen-dynamic">
          <StarsCanvas className="absolute inset-0" />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
