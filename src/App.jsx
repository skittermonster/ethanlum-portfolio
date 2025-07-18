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

// 1) Hook to set --vh based on window.innerHeight
function useFixMobileVh() {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        '--vh',
        `${window.innerHeight * 0.01}px`
      );
    };
    window.addEventListener('resize', setVh);
    setVh(); // set on mount
    return () => window.removeEventListener('resize', setVh);
  }, []);
}

const App = () => {
  // 2) call it here
  useFixMobileVh();

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen-dynamic">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Works />
        <Tech />
        <Experience />
        {/* 3) add h-screen-dynamic here */}
        <div className="relative z-0 h-screen-dynamic">
          <StarsCanvas className="absolute inset-0" />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
