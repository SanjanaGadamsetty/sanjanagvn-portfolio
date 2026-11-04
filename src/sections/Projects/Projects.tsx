import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrevious = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleDragEnd = (_event: any, info: PanInfo) => {
    if (info.offset.x > 100) {
      handlePrevious();
    } else if (info.offset.x < -100) {
      handleNext();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Get card position and style based on offset from active
  const getCardStyle = (index: number) => {
    const offset = index - activeIndex;
    const absOffset = Math.abs(offset);

    // Only show cards within range of ±1 from active
    if (absOffset > 1) {
      return { display: 'none' };
    }

    // Calculate x position: center at 0, offset by 80px per step
    let x = `calc(-50% + ${offset * 80}px)`;
    let scale = 1 - absOffset * 0.12;
    let opacity = 1 - absOffset * 0.4;
    let rotateZ = offset * 4;
    let rotateY = offset * -10;
    let z = -absOffset * 80;

    return {
      x,
      scale,
      opacity,
      rotateZ,
      rotateY,
      z,
      zIndex: 10 - absOffset,
    };
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-10 lg:py-14"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #F8F3E8 0%, #F8F3E8 10%, #F3E5C7 50%, #F8F3E8 90%, #F8F3E8 100%)',
      }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div
          className="absolute rounded-full opacity-12"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(213, 166, 79, 0.4) 0%, transparent 70%)',
            top: '10%',
            left: '-100px',
          }}
        />
        <div
          className="absolute rounded-full opacity-12"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(243, 213, 138, 0.4) 0%, transparent 70%)',
            bottom: '20%',
            right: '-80px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col items-center" style={{ zIndex: 10 }}>
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-deep italic mb-2">
            Featured Projects
          </h2>
          <p className="text-base text-forest-deep/70 mb-3">A collection of things I've built and explored</p>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold-champagne to-transparent rounded-full mx-auto" />
        </div>

        {/* Focus Slider Container */}
        <div className="relative w-full" style={{ height: '550px' }}>
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2"
            style={{
              width: '520px',
              maxWidth: '90vw',
              height: '100%',
              perspective: '2000px',
            }}
          >
            <AnimatePresence initial={false} custom={direction}>
            {projects.map((project, index) => {
              const style = getCardStyle(index);
              const isActive = index === activeIndex;

              if (style.display === 'none') return null;

              return (
                <motion.div
                  key={project.id}
                  custom={direction}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={style}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  drag={isActive ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={isActive ? handleDragEnd : undefined}
                  className="absolute left-1/2"
                  style={{
                    top: '15%',
                    transform: 'translateY(-50%)',
                    transformStyle: 'preserve-3d',
                    width: '100%',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  {/* Project Card */}
                  <div
                    className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-gold-champagne/40"
                    style={{
                      background: 'linear-gradient(135deg, #063D2C 0%, #032B20 100%)',
                    }}
                  >
                    {/* Project Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(to bottom, transparent 0%, rgba(3, 43, 32, 0.8) 100%)',
                        }}
                      />
                    </div>

                    {/* Project Info */}
                    <div className="p-5">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-ivory mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-ivory/80 mb-3 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 text-xs font-semibold bg-gold-champagne/20 text-gold-champagne rounded-full border border-gold-champagne/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-gold-champagne/20 border border-gold-champagne/50 text-gold-champagne rounded-full text-sm font-medium hover:bg-gold-champagne/30 transition-all"
                          >
                            <Github size={16} />
                            <span>GitHub</span>
                          </a>
                        )}
                        {project.liveWebsite && project.liveWebsite.trim() !== '' && (
                          <a
                            href={project.liveWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-ivory/10 border border-ivory/30 text-ivory rounded-full text-sm font-medium hover:bg-ivory/20 transition-all"
                          >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-20 w-11 h-11 rounded-full bg-forest-deep/80 backdrop-blur-sm border-2 border-gold-champagne/50 flex items-center justify-center hover:bg-forest-deep hover:scale-110 transition-all"
            aria-label="Previous project"
          >
            <ChevronLeft size={22} className="text-gold-champagne" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-20 w-11 h-11 rounded-full bg-forest-deep/80 backdrop-blur-sm border-2 border-gold-champagne/50 flex items-center justify-center hover:bg-forest-deep hover:scale-110 transition-all"
            aria-label="Next project"
          >
            <ChevronRight size={22} className="text-gold-champagne" />
          </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                background: index === activeIndex ? '#D5A64F' : 'rgba(213, 166, 79, 0.3)',
                transform: index === activeIndex ? 'scale(1.5)' : 'scale(1)',
              }}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Instructions */}
        <div className="text-center mt-4 text-forest-deep/60 text-sm">
          <p>Use arrow keys, swipe, or click buttons to navigate</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
