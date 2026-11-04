import { useState, useEffect } from 'react';
import { Coffee } from 'lucide-react';
import GoldenCursor from './components/common/GoldenCursor';
// import OpeningAnimation, { shouldPlayOpening } from './components/animations/OpeningAnimation';
import Navigation from './components/layout/Navigation';
import GitLoader from './components/common/GitLoader';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Education from './sections/Education/Education';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Achievements from './sections/Achievements/Achievements';
import Certificates from './sections/Certificates/Certificates';
import Coding from './sections/Coding/Coding';
import Contact from './sections/Contact/Contact';

interface SectionWaveDividerProps {
  from: string;
  to: string;
}

const SectionWaveDivider = ({ from, to }: SectionWaveDividerProps) => (
  <div className="section-wave-divider" aria-hidden="true">
    <svg viewBox="0 0 1440 48" preserveAspectRatio="none">
      <path
        d="M0 0 H1440 V24 C1260 2 1140 2 960 24 S660 46 480 24 S180 2 0 24 Z"
        fill={from}
      />
      <path
        d="M0 24 C180 2 300 2 480 24 S780 46 960 24 S1260 2 1440 24 V48 H0 Z"
        fill={to}
      />
      <path
        className="section-wave-divider__line section-wave-divider__line--main"
        d="M0 24 C180 2 300 2 480 24 S780 46 960 24 S1260 2 1440 24"
      />
      <path
        className="section-wave-divider__line section-wave-divider__line--soft"
        d="M0 30 C180 8 300 8 480 30 S780 52 960 30 S1260 8 1440 30"
      />
    </svg>
  </div>
);

function App() {
  // TEMPORARILY DISABLE OPENING ANIMATION FOR HERO REPAIR
  // const [showOpening, setShowOpening] = useState(false);
  const [openingComplete] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // const handleOpeningComplete = () => {
  //   setShowOpening(false);
  //   setOpeningComplete(true);
  // };

  // Simulate initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app" style={{ scrollBehavior: 'smooth' }}>
      <GoldenCursor />
      {/* Opening Animation - TEMPORARILY DISABLED */}
      {/* {showOpening && <OpeningAnimation onComplete={handleOpeningComplete} />} */}

      {/* Git Branch Loader */}
      <GitLoader isLoading={isLoading} />

      {/* Main Content - Hidden until opening completes */}
      <div style={{ opacity: openingComplete ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }}>
        <Navigation />

        {/* All sections in order */}
        <main>
          <Hero />
          <SectionWaveDivider from="#032B20" to="#F8F3E8" />
          <About />
          <SectionWaveDivider from="#F8F3E8" to="#002A20" />
          <Education />
          <SectionWaveDivider from="#002A20" to="#F8F3E8" />
          <Experience />
          <SectionWaveDivider from="#F8F3E8" to="#003B2B" />
          <Skills />
          <SectionWaveDivider from="#002A20" to="#F8F3E8" />
          <Projects />
          <SectionWaveDivider from="#F8F3E8" to="#F8F3E8" />
          <Achievements />
          <SectionWaveDivider from="#F8F3E8" to="#003B2B" />
          <Certificates />
          <SectionWaveDivider from="#002A20" to="#F8F3E8" />
          <Coding />
          <SectionWaveDivider from="#F8F3E8" to="#003B2B" />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="bg-forest-dark border-t border-gold-champagne/20 py-6">
          <div className="content-wrapper px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-ivory/60">
                © {new Date().getFullYear()} Sanjana Gadamsetty. All rights reserved.
              </p>
              <p className="text-sm text-ivory/60 flex items-center gap-1.5">
                Made with <Coffee size={16} className="text-gold-champagne" /> and Curiosity
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
