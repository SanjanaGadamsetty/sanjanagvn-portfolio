import React from 'react';
import { motion } from 'framer-motion';

interface DecorativeBracketsProps {
  position?: 'top-right' | 'bottom-left' | 'center';
  size?: 'sm' | 'md' | 'lg';
}

const DecorativeBrackets: React.FC<DecorativeBracketsProps> = ({
  position = 'top-right',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
  };

  const positionClasses = {
    'top-right': 'top-[15%] right-[20%]',
    'bottom-left': 'bottom-[20%] left-[15%]',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} font-mono font-bold text-gold-champagne/40 ${sizeClasses[size]}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <motion.span
        animate={{
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="inline-block"
      >
        {'</>'}
      </motion.span>
    </motion.div>
  );
};

export default DecorativeBrackets;
