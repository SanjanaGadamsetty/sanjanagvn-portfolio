import React from 'react';
import { motion } from 'framer-motion';

interface GitLoaderProps {
  isLoading: boolean;
}

const GitLoader: React.FC<GitLoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed bottom-8 right-8 z-50"
      style={{ width: '100px', height: '65px' }}
    >
      <svg width="100" height="65" viewBox="0 0 100 65" fill="none">
        {/* Branch lines */}
        <motion.line
          x1="20"
          y1="12"
          x2="50"
          y2="32"
          stroke="#D5A64F"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.line
          x1="50"
          y1="32"
          x2="80"
          y2="52"
          stroke="#D5A64F"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <motion.line
          x1="20"
          y1="12"
          x2="80"
          y2="12"
          stroke="#D5A64F"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />

        {/* Commit nodes */}
        <motion.circle
          cx="20"
          cy="12"
          r="6"
          fill="#063D2C"
          stroke="#D5A64F"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0 }}
        />
        <motion.circle
          cx="50"
          cy="32"
          r="6"
          fill="#063D2C"
          stroke="#D5A64F"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        />
        <motion.circle
          cx="80"
          cy="52"
          r="6"
          fill="#063D2C"
          stroke="#D5A64F"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        />
        <motion.circle
          cx="80"
          cy="12"
          r="6"
          fill="#063D2C"
          stroke="#D5A64F"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        />

        {/* Pulsing animation on last node */}
        <motion.circle
          cx="80"
          cy="52"
          r="6"
          fill="none"
          stroke="#D5A64F"
          strokeWidth="2"
          animate={{
            r: [6, 12, 6],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.8,
          }}
        />
      </svg>

      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xs text-gold-champagne text-center mt-1 font-mono"
      >
        Loading...
      </motion.p>
    </motion.div>
  );
};

export default GitLoader;
