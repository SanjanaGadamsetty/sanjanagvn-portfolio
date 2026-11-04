import React from 'react';
import { motion } from 'framer-motion';

interface GoldParticlesProps {
  count?: number;
  isActive: boolean;
}

const GoldParticles: React.FC<GoldParticlesProps> = ({ count = 12, isActive }) => {
  const particles = React.useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 1.5,
      duration: Math.random() * 2 + 2,
    }));
  }, [count]);

  if (!isActive) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Decorative lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.line
          x1="10%"
          y1="20%"
          x2="40%"
          y2="30%"
          stroke="var(--color-gold-champagne)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        />
        <motion.line
          x1="60%"
          y1="25%"
          x2="85%"
          y2="35%"
          stroke="var(--color-gold-soft)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        />
        <motion.line
          x1="25%"
          y1="70%"
          x2="45%"
          y2="80%"
          stroke="var(--color-gold-champagne)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        />
        <motion.line
          x1="70%"
          y1="75%"
          x2="90%"
          y2="65%"
          stroke="var(--color-gold-soft)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
        />
      </svg>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gold-champagne"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            y: [0, -30, -60, -90],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default GoldParticles;
