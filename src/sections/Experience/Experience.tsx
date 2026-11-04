import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { experiences } from '@/data/experience';
import type { ExperienceEntry } from '@/data/experience';
import ExperienceModal from '@/components/experience/ExperienceModal';

const MILESTONE_SPACING = 300; // pixels between milestones
const AUTO_SCROLL_SPEED = 0.3; // pixels per frame

const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceEntry | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Create infinite loop array (triple the experiences for seamless loop)
  const infiniteExperiences = [...experiences, ...experiences, ...experiences];
  const totalWidth = experiences.length * MILESTONE_SPACING;

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    if (selectedExperience || isPaused || prefersReducedMotion) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    const animate = () => {
      const currentX = x.get();
      const newX = currentX - AUTO_SCROLL_SPEED;

      // Reset when we've scrolled through one set
      if (Math.abs(newX) >= totalWidth) {
        x.set(newX + totalWidth);
      } else {
        x.set(newX);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, selectedExperience, prefersReducedMotion, x, totalWidth]);

  const handleDragEnd = () => {
    const currentX = x.get();

    // Snap to prevent drift
    if (Math.abs(currentX) >= totalWidth) {
      x.set(currentX + totalWidth);
    }
  };

  const handleMilestoneClick = (exp: ExperienceEntry) => {
    setSelectedExperience(exp);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-12 lg:py-16"
      style={{
        background: 'linear-gradient(180deg, #F8F3E8 0%, #F3E5C7 50%, #F8F3E8 100%)',
      }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(213, 166, 79, 0.3) 0%, transparent 70%)',
            top: '10%',
            right: '-100px',
          }}
        />
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(243, 213, 138, 0.3) 0%, transparent 70%)',
            bottom: '20%',
            left: '-80px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Calendar size={28} className="text-gold-champagne" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-deep italic">
              Experience
            </h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold-champagne to-transparent rounded-full mx-auto" />
        </div>

        {/* Timeline Container */}
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          style={{ minHeight: '350px' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Timeline Track */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -totalWidth * 2, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            {/* Dotted horizontal path */}
            <svg
              className="absolute top-1/2 -translate-y-1/2"
              width={infiniteExperiences.length * MILESTONE_SPACING}
              height="4"
              style={{ zIndex: 1 }}
            >
              <defs>
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="11"
                  height="4"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1.5" cy="2" r="1.5" fill="#D9AD55" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="4"
                fill="url(#dots)"
              />
            </svg>

            {/* Experiences with milestones */}
            <div className="relative flex">
              {infiniteExperiences.map((exp, index) => {
                const isAbove = index % 2 === 0;

                return (
                  <div
                    key={`${exp.id}-${index}`}
                    className="relative flex-shrink-0"
                    style={{ width: MILESTONE_SPACING }}
                  >
                    {/* Milestone dot on the timeline */}
                    <button
                      onClick={() => handleMilestoneClick(exp)}
                      className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      style={{ zIndex: 3 }}
                      aria-label={`View ${exp.position} experience`}
                    >
                      {/* Outer glow on hover */}
                      <div className="absolute inset-0 rounded-full bg-gold-champagne/0 group-hover:bg-gold-champagne/30 transition-all blur-lg scale-150" />

                      {/* Outer circle - 22px */}
                      <div
                        className="relative w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all group-hover:scale-110"
                        style={{
                          borderColor: '#D9AD55',
                          background: 'rgba(3, 43, 32, 0.9)',
                          boxShadow: '0 0 12px rgba(217, 173, 85, 0.5), 0 0 20px rgba(217, 173, 85, 0.3)',
                        }}
                      >
                        {/* Inner circle - 10px */}
                        <div
                          className="w-[10px] h-[10px] rounded-full transition-all group-hover:scale-110"
                          style={{
                            background: '#F0C66E',
                            boxShadow: '0 0 8px rgba(240, 198, 110, 0.6)',
                          }}
                        />
                      </div>
                    </button>

                    {/* Vertical connector line */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-px"
                      style={{
                        height: '80px',
                        top: isAbove ? 'calc(50% - 91px)' : 'calc(50% + 11px)',
                        zIndex: 2,
                        background: 'linear-gradient(to bottom, rgba(217, 173, 85, 0.4), rgba(217, 173, 85, 0.6))',
                      }}
                    />

                    {/* Role label */}
                    <button
                      onClick={() => handleMilestoneClick(exp)}
                      className="group/label absolute left-1/2 -translate-x-1/2 cursor-pointer text-center"
                      style={{
                        [isAbove ? 'bottom' : 'top']: 'calc(50% + 95px)',
                        width: '200px',
                        zIndex: 4,
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-base md:text-lg font-bold text-forest-deep group-hover/label:text-gold-champagne transition-colors leading-tight mb-1">
                          {exp.position}
                        </p>
                        <p className="text-sm font-semibold" style={{ color: '#D9AD55' }}>
                          {exp.year}
                        </p>
                      </motion.div>
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Hint */}
        {!prefersReducedMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-12 text-forest-deep/60 text-sm"
          >
            <p>Hover to pause • Drag to explore • Click milestones to view details</p>
          </motion.div>
        )}
      </div>

      {/* Experience Modal */}
      <ExperienceModal experience={selectedExperience} onClose={handleCloseModal} />
    </section>
  );
};

export default Experience;
