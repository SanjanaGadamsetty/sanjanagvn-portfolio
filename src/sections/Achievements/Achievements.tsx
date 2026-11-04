import React, { useState, useEffect } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, FileText, Award } from 'lucide-react';
import { achievements } from '@/data/achievements';
import CertificateModal from '@/components/common/CertificateModal';

const Achievements: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? achievements.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === achievements.length - 1 ? 0 : prev + 1));
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

  // Calculate card style based on position in the wheel
  const getCardStyle = (index: number) => {
    const offset = index - activeIndex;
    const absOffset = Math.abs(offset);

    // Normalize offset for circular navigation
    let normalizedOffset = offset;
    if (absOffset > achievements.length / 2) {
      normalizedOffset = offset > 0 ? offset - achievements.length : offset + achievements.length;
    }

    const absNormalizedOffset = Math.abs(normalizedOffset);

    // Only show cards within ±1 position (center + 2 side cards)
    if (absNormalizedOffset > 1) {
      return { display: 'none' };
    }

    // Center card (offset = 0)
    if (normalizedOffset === 0) {
      return {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotateY: 0,
        rotateZ: 0,
        zIndex: 10,
      };
    }

    // Left card (offset = -1)
    if (normalizedOffset === -1) {
      return {
        x: -380,
        y: -60,
        scale: 0.55,
        opacity: 0.8,
        rotateY: 15,
        rotateZ: -3,
        zIndex: 5,
      };
    }

    // Right card (offset = 1)
    if (normalizedOffset === 1) {
      return {
        x: 380,
        y: 60,
        scale: 0.55,
        opacity: 0.8,
        rotateY: -15,
        rotateZ: 3,
        zIndex: 5,
      };
    }

    return { display: 'none' };
  };

  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-12 lg:py-16"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #F8F3E8 0%, #F3E5C7 50%, #F8F3E8 100%)',
      }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(6, 61, 44, 0.3) 0%, transparent 70%)',
            top: '15%',
            left: '-150px',
          }}
        />
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(213, 166, 79, 0.3) 0%, transparent 70%)',
            bottom: '10%',
            right: '-120px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Award size={32} className="text-gold-champagne" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-deep italic">
              Achievements
            </h2>
          </div>
          <p className="text-lg text-forest-deep/70 mb-4">Milestones worth remembering</p>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold-champagne to-transparent rounded-full mx-auto" />
        </div>

        {/* Wheel Carousel */}
        <div className="relative" style={{ minHeight: '650px' }}>
          {/* Perspective container */}
          <div
            className="relative mx-auto"
            style={{
              width: '100%',
              maxWidth: '1100px',
              height: '600px',
              perspective: '2000px',
              perspectiveOrigin: 'center center',
            }}
          >
            {/* Carousel track */}
            <div className="relative w-full h-full flex items-center justify-center">
              {achievements.map((achievement, index) => {
                const style = getCardStyle(index);
                const isActive = index === activeIndex;

                if (style.display === 'none') return null;

                return (
                  <motion.div
                    key={achievement.id}
                    animate={style}
                    transition={{
                      duration: 0.7,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    drag={isActive ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={isActive ? handleDragEnd : undefined}
                    className="absolute"
                    style={{
                      transformStyle: 'preserve-3d',
                      width: '500px',
                      maxWidth: '90vw',
                      left: '50%',
                      top: '50%',
                      marginLeft: '-250px',
                      marginTop: '-275px',
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                  >
                    {/* Achievement Card */}
                    <div
                      className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-champagne/50"
                      style={{
                        background: 'linear-gradient(135deg, #063D2C 0%, #032B20 100%)',
                      }}
                    >
                      {/* Achievement Image */}
                      <div className="relative h-72 overflow-hidden">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: 'linear-gradient(to bottom, transparent 0%, rgba(3, 43, 32, 0.85) 100%)',
                          }}
                        />
                      </div>

                      {/* Achievement Info */}
                      <div className="p-6">
                        <div className="inline-block px-3 py-1 bg-gold-champagne/20 rounded-full mb-3">
                          <span className="text-xs font-semibold text-gold-champagne">
                            {achievement.date}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-ivory mb-3">
                          {achievement.title}
                        </h3>

                        <p className="text-sm text-ivory/80 leading-relaxed mb-4 line-clamp-3">
                          {achievement.description}
                        </p>

                        {/* Certificate button */}
                        {achievement.certificate && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCertificate(achievement.certificate!);
                            }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-champagne/20 border border-gold-champagne/50 text-gold-champagne rounded-full text-sm font-medium hover:bg-gold-champagne/30 transition-all"
                          >
                            <FileText size={16} />
                            <span>View Certificate</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 lg:left-0 top-1/2 -translate-y-1/2 lg:-translate-x-16 z-20 w-12 h-12 rounded-full bg-forest-deep/90 backdrop-blur-sm border-2 border-gold-champagne/60 flex items-center justify-center hover:bg-forest-deep hover:scale-110 transition-all shadow-lg"
              aria-label="Previous achievement"
            >
              <ChevronLeft size={24} className="text-gold-champagne" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 lg:right-0 top-1/2 -translate-y-1/2 lg:translate-x-16 z-20 w-12 h-12 rounded-full bg-forest-deep/90 backdrop-blur-sm border-2 border-gold-champagne/60 flex items-center justify-center hover:bg-forest-deep hover:scale-110 transition-all shadow-lg"
              aria-label="Next achievement"
            >
              <ChevronRight size={24} className="text-gold-champagne" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-2 justify-center mt-10">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                }}
                className="w-2.5 h-2.5 rounded-full transition-all"
                style={{
                  background: index === activeIndex ? '#D5A64F' : 'rgba(6, 61, 44, 0.3)',
                  transform: index === activeIndex ? 'scale(1.5)' : 'scale(1)',
                }}
                aria-label={`Go to achievement ${index + 1}`}
              />
            ))}
          </div>

          {/* Instructions */}
          <div className="text-center mt-6 text-forest-deep/60 text-sm">
            <p>Use arrow keys, swipe, or click buttons to explore achievements</p>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={
          selectedCertificate
            ? {
                src: selectedCertificate,
                alt: 'Achievement Certificate',
                type: 'image',
              }
            : null
        }
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
};

export default Achievements;
