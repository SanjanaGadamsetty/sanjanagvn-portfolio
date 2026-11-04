import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { OpeningImage as OpeningImageType } from '@/data/opening';
import { useOpeningLayout } from '@/hooks/useOpeningLayout';
import { openingConfig } from '@/data/opening';

interface OpeningImageProps {
  imageConfig: OpeningImageType;
  getDirectionOffset: (direction: string, distance: number) => { x: number; y: number };
}

const OpeningImage: React.FC<OpeningImageProps> = ({ imageConfig, getDirectionOffset }) => {
  const shouldReduceMotion = useReducedMotion();
  const image = useOpeningLayout(imageConfig);

  const offset = getDirectionOffset(
    image.animation.direction,
    image.animation.distance
  );

  // Spring animation configuration
  const springConfig = {
    type: 'spring' as const,
    damping: shouldReduceMotion ? 100 : 15,
    stiffness: shouldReduceMotion ? 300 : 100,
    mass: 1,
  };

  return (
    <motion.div
      className="absolute"
      style={{
        left: image.position.x,
        top: image.position.y,
        width: image.size.width,
        height: image.size.height,
        zIndex: image.zIndex,
      }}
      initial={{
        opacity: 0,
        scale: shouldReduceMotion ? 1 : 0.5,
        rotate: shouldReduceMotion ? 0 : image.rotation - 15,
        x: shouldReduceMotion ? 0 : offset.x,
        y: shouldReduceMotion ? 0 : offset.y,
      }}
      animate={{
        opacity: 1,
        scale: image.scale,
        rotate: image.rotation,
        x: '-50%',
        y: '-50%',
      }}
      transition={{
        opacity: { duration: 0.4, delay: image.animation.delay },
        scale: shouldReduceMotion
          ? { duration: 0.3, delay: image.animation.delay }
          : { ...springConfig, delay: image.animation.delay },
        rotate: shouldReduceMotion
          ? { duration: 0.3, delay: image.animation.delay }
          : { ...springConfig, delay: image.animation.delay },
        x: shouldReduceMotion
          ? { duration: 0.3, delay: image.animation.delay }
          : { ...springConfig, delay: image.animation.delay },
        y: shouldReduceMotion
          ? { duration: 0.3, delay: image.animation.delay }
          : { ...springConfig, delay: image.animation.delay },
      }}
    >
      <motion.div
        className="w-full h-full rounded-xl overflow-hidden shadow-2xl"
        style={{
          boxShadow: openingConfig.enableGlowEffects
            ? '0 0 40px rgba(213, 166, 79, 0.3)'
            : undefined,
        }}
        whileHover={
          !shouldReduceMotion
            ? { scale: 1.05, rotate: image.rotation + 2 }
            : undefined
        }
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </motion.div>

      {/* Glow effect */}
      {openingConfig.enableGlowEffects && !shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-gold-champagne/30 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.3] }}
          transition={{
            duration: 1.5,
            delay: image.animation.delay + 0.5,
            ease: 'easeInOut',
          }}
        />
      )}
    </motion.div>
  );
};

export default OpeningImage;
