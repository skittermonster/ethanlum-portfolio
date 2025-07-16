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

// 1) Hook to drive our --vh CSS variable
function useFixMobileVh() {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        '--vh',
        `${window.innerHeight * 0.01}px`
      );
    };
    window.addEventListener('resize', setVh);
    setVh(); // initial call on mount
    return () => window.removeEventListener('resize', setVh);
  }, []);
}

const App = () => {
  // 2) initialize the hook
  useFixMobileVh();

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />

        {/* 3) fallback + dynamic height, plus safe-area bottom padding */}
        <div
          className="relative z-0 h-[100vh] h-screen-dynamic"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <StarsCanvas className="absolute inset-0" />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
