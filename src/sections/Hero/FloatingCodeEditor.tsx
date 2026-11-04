import React from 'react';
import { motion } from 'framer-motion';

const FloatingCodeEditor: React.FC = () => {
  const [currentLine, setCurrentLine] = React.useState(0);

  // Code lines to display with typing effect
  const codeLines = [
    { color: '#D5A64F', text: 'const' },
    { color: '#F8F3E8', text: ' developer = {' },
    { color: '#F3D58A', text: '  name: ' },
    { color: '#A8E6CF', text: '"Sanjana"' },
    { color: '#F8F3E8', text: ',' },
    { color: '#F3D58A', text: '  passion: ' },
    { color: '#A8E6CF', text: '"Building"' },
    { color: '#F8F3E8', text: '};' },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeLines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute top-[12%] left-[20%] w-96 bg-forest-deep/95 backdrop-blur-md rounded-xl border-2 border-gold-champagne/40 shadow-2xl overflow-hidden"
      initial={{ opacity: 0, x: -50, rotate: -8 }}
      animate={{
        opacity: 1,
        x: 0,
        rotate: -6,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay: 0.5 },
        x: { duration: 0.8, delay: 0.5 },
        rotate: { duration: 0.8, delay: 0.5 },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      style={{ boxShadow: '0 0 50px rgba(213, 166, 79, 0.4), inset 0 0 30px rgba(213, 166, 79, 0.1)' }}
    >
      {/* Window controls */}
      <div className="flex items-center gap-2 px-3 py-2 bg-forest-deep/50 border-b border-gold-champagne/10">
        <div className="w-3 h-3 rounded-full bg-red-500/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="ml-2 text-xs text-gold-champagne/60 font-mono">code.js</span>
      </div>

      {/* Code content */}
      <div className="p-6 font-mono text-base leading-relaxed">
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index <= currentLine ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
            style={{ color: line.color }}
          >
            {line.text}
          </motion.div>
        ))}
        {/* Blinking cursor */}
        <motion.span
          className="inline-block w-2 h-4 bg-gold-champagne ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};

export default FloatingCodeEditor;
