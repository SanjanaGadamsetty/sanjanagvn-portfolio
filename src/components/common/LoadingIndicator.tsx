import React from 'react';
import { motion } from 'framer-motion';

export interface LoadingIndicatorProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  size = 'md',
  text = 'Loading...',
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  // Git-inspired branch animation
  const branchVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse' as const,
      },
    },
  };

  const dotVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [0, 1, 1, 0],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        times: [0, 0.2, 0.8, 1],
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`relative ${sizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
        >
          {/* Branch lines */}
          <motion.path
            d="M 50 10 L 50 50"
            stroke="var(--color-gold-champagne)"
            strokeWidth="3"
            fill="none"
            variants={branchVariants}
            initial="initial"
            animate="animate"
          />
          <motion.path
            d="M 50 50 L 30 90"
            stroke="var(--color-gold-champagne)"
            strokeWidth="3"
            fill="none"
            variants={branchVariants}
            initial="initial"
            animate="animate"
            style={{ transitionDelay: '0.2s' }}
          />
          <motion.path
            d="M 50 50 L 70 90"
            stroke="var(--color-gold-champagne)"
            strokeWidth="3"
            fill="none"
            variants={branchVariants}
            initial="initial"
            animate="animate"
            style={{ transitionDelay: '0.4s' }}
          />

          {/* Commit dots */}
          <motion.circle
            cx="50"
            cy="10"
            r="4"
            fill="var(--color-gold-champagne)"
            variants={dotVariants}
            initial="initial"
            animate="animate"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="4"
            fill="var(--color-gold-champagne)"
            variants={dotVariants}
            initial="initial"
            animate="animate"
            style={{ transitionDelay: '0.3s' }}
          />
          <motion.circle
            cx="30"
            cy="90"
            r="4"
            fill="var(--color-gold-champagne)"
            variants={dotVariants}
            initial="initial"
            animate="animate"
            style={{ transitionDelay: '0.6s' }}
          />
          <motion.circle
            cx="70"
            cy="90"
            r="4"
            fill="var(--color-gold-champagne)"
            variants={dotVariants}
            initial="initial"
            animate="animate"
            style={{ transitionDelay: '0.9s' }}
          />
        </svg>
      </div>
      {text && (
        <motion.p
          className="text-sm text-gold-champagne font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default LoadingIndicator;
