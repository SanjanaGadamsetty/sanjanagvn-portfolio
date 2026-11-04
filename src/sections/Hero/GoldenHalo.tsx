import React from 'react';
import { motion } from 'framer-motion';

const GoldenHalo: React.FC = () => {
  return (
    <div className="relative w-[500px] h-[500px] md:w-[650px] md:h-[650px] lg:w-[800px] lg:h-[800px] pointer-events-none">
      {/* Main large golden circle - Much bigger */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(213, 166, 79, 0.2) 0%, rgba(213, 166, 79, 0.1) 50%, transparent 75%)',
          border: '3px solid rgba(213, 166, 79, 0.4)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Pulsing glow effect - Larger */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(243, 213, 138, 0.15) 0%, transparent 65%)',
          transform: 'scale(1.05)',
        }}
        animate={{
          scale: [1.05, 1.1, 1.05],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle rotating ring - Larger */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: '2px dashed rgba(213, 166, 79, 0.3)',
          transform: 'scale(1.08)',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Inner accent circle */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: '2px solid rgba(243, 213, 138, 0.25)',
          transform: 'scale(0.92)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />

      {/* Outer decorative ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: '1px solid rgba(213, 166, 79, 0.2)',
          transform: 'scale(1.12)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </div>
  );
};

export default GoldenHalo;
