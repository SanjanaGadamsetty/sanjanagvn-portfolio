import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { openingImages, openingConfig } from '@/data/opening';
import OpeningImage from './OpeningImage';
import GoldParticles from './GoldParticles';

interface OpeningAnimationProps {
  onComplete: () => void;
}

const SESSION_KEY = 'portfolio_opening_played';

const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [imagesLoaded, setImagesLoaded] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();
  const animationRef = React.useRef<number | null>(null);

  // Preload images
  React.useEffect(() => {
    const loadImages = async () => {
      const promises = openingImages.map((img) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.onload = resolve;
          image.onerror = reject;
          image.src = img.src;
        });
      });

      try {
        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Failed to load opening images:', error);
        // Skip animation if images fail to load
        handleSkip();
      }
    };

    loadImages();
  }, []);

  // Auto-complete animation after duration
  React.useEffect(() => {
    if (!imagesLoaded) return;

    const duration = shouldReduceMotion
      ? 500
      : openingConfig.totalDuration;

    animationRef.current = setTimeout(() => {
      handleComplete();
    }, duration);

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [imagesLoaded, shouldReduceMotion]);

  // Handle skip
  const handleSkip = React.useCallback(() => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    handleComplete();
  }, []);

  // Handle completion
  const handleComplete = React.useCallback(() => {
    setIsVisible(false);
    // Mark as played in session
    sessionStorage.setItem(SESSION_KEY, 'true');
    // Delay callback to allow exit animation
    setTimeout(() => {
      onComplete();
    }, 300);
  }, [onComplete]);

  // Keyboard support (Escape to skip)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSkip();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSkip]);

  // Get animation direction offset
  const getDirectionOffset = (direction: string, distance: number) => {
    switch (direction) {
      case 'top':
        return { x: 0, y: -distance };
      case 'bottom':
        return { x: 0, y: distance };
      case 'left':
        return { x: -distance, y: 0 };
      case 'right':
        return { x: distance, y: 0 };
      case 'center':
      default:
        return { x: 0, y: 0 };
    }
  };

  // Container variants for exit animation
  const containerVariants = {
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  if (!imagesLoaded) {
    return (
      <div className="fixed inset-0 bg-forest-dark z-[9999] flex items-center justify-center">
        <motion.div
          className="w-12 h-12 border-2 border-gold-champagne border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-forest-dark z-[9999] overflow-hidden"
          variants={containerVariants}
          initial="visible"
          animate="visible"
          exit="exit"
        >
          {/* Skip Button */}
          <motion.button
            onClick={handleSkip}
            className="absolute top-8 right-8 z-[10000] flex items-center gap-2 px-4 py-2 rounded-full border border-gold-champagne/30 text-gold-champagne hover:bg-gold-champagne/10 hover:border-gold-champagne transition-all backdrop-blur-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Skip intro"
          >
            <span className="text-sm font-medium">Skip Intro</span>
            <X size={16} />
          </motion.button>

          {/* Keyboard hint */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[10000] text-gold-champagne/60 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Press <kbd className="px-2 py-1 bg-forest-deep/50 rounded border border-gold-champagne/20">ESC</kbd> to skip
          </motion.div>

          {/* Gold Particles and Decorative Lines */}
          <GoldParticles
            count={openingConfig.particleCount}
            isActive={openingConfig.enableParticles && !shouldReduceMotion}
          />

          {/* Animated Images */}
          <div className="absolute inset-0 flex items-center justify-center">
            {openingImages.map((imageConfig) => (
              <OpeningImage
                key={imageConfig.id}
                imageConfig={imageConfig}
                getDirectionOffset={getDirectionOffset}
              />
            ))}
          </div>

          {/* Radial gradient overlay for depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, transparent 0%, rgba(3, 43, 32, 0.4) 70%)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningAnimation;

// Helper function to check if opening should play
export const shouldPlayOpening = (): boolean => {
  return !sessionStorage.getItem(SESSION_KEY);
};
