import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, BookOpen, Rocket } from 'lucide-react';

interface TechInterest {
  icon: React.ElementType;
  label: string;
}

const techInterests: TechInterest[] = [
  { icon: Code2, label: 'Development' },
  { icon: Lightbulb, label: 'DSA & Problem Solving' },
  { icon: BookOpen, label: 'Teaching & Sharing' },
  { icon: Rocket, label: 'AI Learning & Building' },
];

const TechInterestsPanel: React.FC = () => {
  return (
    <motion.div
      className="absolute top-[32%] right-[8%] w-72 bg-forest-deep/95 backdrop-blur-md rounded-xl border-2 border-gold-champagne/40 shadow-2xl overflow-hidden"
      initial={{ opacity: 0, x: 50, rotate: 5 }}
      animate={{
        opacity: 1,
        x: 0,
        rotate: 4,
        y: [0, 12, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay: 0.7 },
        x: { duration: 0.8, delay: 0.7 },
        rotate: { duration: 0.8, delay: 0.7 },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      style={{ boxShadow: '0 0 50px rgba(213, 166, 79, 0.4), inset 0 0 30px rgba(213, 166, 79, 0.1)' }}
    >
      <div className="p-6 space-y-4">
        {techInterests.map((interest, index) => (
          <motion.div
            key={interest.label}
            className="flex items-center gap-3 p-3 rounded-lg bg-forest-dark/60 border border-gold-champagne/20 hover:border-gold-champagne/40 transition-all"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            whileHover={{ x: 5, backgroundColor: 'rgba(213, 166, 79, 0.08)' }}
          >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gold-champagne/15 border border-gold-champagne/40">
              <interest.icon size={18} className="text-gold-champagne" />
            </div>
            <span className="text-sm text-ivory/95 font-medium leading-tight">
              {interest.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechInterestsPanel;
