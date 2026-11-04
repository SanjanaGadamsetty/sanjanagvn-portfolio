import React from 'react';
import { motion } from 'framer-motion';

export interface AnimatedHeadingProps {
  text: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  gradient?: boolean;
  glow?: boolean;
  delay?: number;
  children?: React.ReactNode;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  level = 'h2',
  className = '',
  gradient = false,
  glow = false,
  delay = 0,
  children,
}) => {
  const Tag = level;

  const baseClasses = 'heading-display';
  const gradientClass = gradient ? 'gradient-text' : '';
  const glowClass = glow ? 'glow-text' : '';

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={headingVariants}
    >
      <Tag className={`${baseClasses} ${gradientClass} ${glowClass} ${className}`}>
        {children || text}
      </Tag>
    </motion.div>
  );
};

export default AnimatedHeading;
