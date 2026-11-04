import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, BookOpen, Database, Globe, Wrench, Award } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import type { SkillCategory } from '@/data/skills';
import CertificateModal from '@/components/common/CertificateModal';

const iconMap: Record<string, React.ElementType> = {
  Code,
  BookOpen,
  Database,
  Globe,
  Wrench,
  Award,
};

// Book colors and heights for variety
const bookStyles = [
  { bg: 'linear-gradient(180deg, #063D2C 0%, #032B20 100%)', height: 300, accent: '#D5A64F' },
  { bg: 'linear-gradient(180deg, #F8F3E8 0%, #EBE0C8 100%)', height: 320, accent: '#8B6914' },
  { bg: 'linear-gradient(180deg, #047857 0%, #065F46 100%)', height: 290, accent: '#D5A64F' },
  { bg: 'linear-gradient(180deg, #FEF3C7 0%, #FDE68A 100%)', height: 310, accent: '#92400E' },
  { bg: 'linear-gradient(180deg, #064E3B 0%, #022C22 100%)', height: 295, accent: '#D5A64F' },
  { bg: 'linear-gradient(180deg, #FFFBEB 0%, #FEF3C7 100%)', height: 305, accent: '#78350F' },
];

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>(skillCategories[0]);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const getIconComponent = (iconName: string) => {
    return iconMap[iconName] || Code;
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-12 lg:py-16"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #003B2B 0%, #002A20 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
        {/* Heading */}
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ivory italic mb-3">
            My Skills
          </h2>
          <p className="text-lg text-ivory/70">Explore my technical toolkit</p>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold-champagne to-transparent rounded-full mx-auto mt-4" />
        </div>

        {/* Main Content: Bookshelf + Content Panel */}
        <div className="grid lg:grid-cols-[40%_60%] gap-8 lg:gap-12 items-center">

          {/* LEFT: Bookshelf */}
          <div className="relative">
            {/* Books Container */}
            <div className="flex gap-2 justify-center items-end pb-4 overflow-x-auto lg:overflow-visible hide-scrollbar">
              {skillCategories.map((category, index) => {
                const Icon = getIconComponent(category.icon);
                const isSelected = selectedCategory.id === category.id;
                const style = bookStyles[index];
                const isDark = index % 2 === 0;

                return (
                  <motion.button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className="relative flex-shrink-0 group cursor-pointer"
                    style={{ height: style.height }}
                    whileHover={{ y: isSelected ? 0 : -12, scale: isSelected ? 1 : 1.02 }}
                    animate={{
                      y: isSelected ? -20 : 0,
                      scale: isSelected ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {/* Book Spine */}
                    <div
                      className="relative w-16 md:w-20 h-full rounded-t-sm flex flex-col items-center justify-between py-6 px-2 border-r-2 border-l transition-all pointer-events-none"
                      style={{
                        background: style.bg,
                        borderRightColor: 'rgba(0, 0, 0, 0.3)',
                        borderLeftColor: 'rgba(255, 255, 255, 0.1)',
                        boxShadow: isSelected
                          ? `0 0 30px ${style.accent}80, inset 2px 0 8px rgba(0,0,0,0.3), inset -2px 0 8px rgba(255,255,255,0.1)`
                          : 'inset 2px 0 6px rgba(0,0,0,0.3), inset -2px 0 6px rgba(255,255,255,0.1), 2px 4px 8px rgba(0,0,0,0.4)',
                      }}
                    >
                      {/* Top decorative line */}
                      <div
                        className="w-full h-px"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${style.accent}, transparent)`,
                          opacity: 0.6,
                        }}
                      />

                      {/* Icon */}
                      <div className="my-2">
                        <Icon
                          size={24}
                          style={{ color: isSelected ? style.accent : isDark ? '#F8F3E8' : '#063D2C' }}
                        />
                      </div>

                      {/* Book Title - Rotated */}
                      <div
                        className="flex-1 flex items-center justify-center"
                        style={{
                          transform: 'rotate(-90deg)',
                          transformOrigin: 'center center',
                          width: style.height - 100,
                        }}
                      >
                        <span
                          className="text-xs md:text-sm font-bold tracking-wide whitespace-nowrap"
                          style={{
                            color: isSelected ? style.accent : isDark ? '#F8F3E8' : '#063D2C',
                            textShadow: isSelected ? `0 0 10px ${style.accent}60` : 'none',
                          }}
                        >
                          {category.title}
                        </span>
                      </div>

                      {/* Bottom decorative line */}
                      <div
                        className="w-full h-px"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${style.accent}, transparent)`,
                          opacity: 0.6,
                        }}
                      />

                      {/* Spine highlight */}
                      <div
                        className="absolute top-0 left-1 bottom-0 w-px"
                        style={{
                          background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.2), transparent)',
                        }}
                      />
                    </div>

                    {/* Book shadow */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-2 opacity-60"
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.4), transparent)',
                        transform: 'translateY(100%)',
                      }}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Wooden Shelf */}
            <div className="relative">
              {/* Main shelf */}
              <div
                className="h-6 rounded-sm"
                style={{
                  background: 'linear-gradient(180deg, #4A2C1A 0%, #3A1F0F 50%, #2A140A 100%)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                {/* Gold trim */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #D5A64F, transparent)',
                    opacity: 0.6,
                  }}
                />
              </div>

              {/* Shelf bracket */}
              <div
                className="absolute -bottom-2 left-4 w-8 h-3 rounded-b"
                style={{
                  background: 'linear-gradient(180deg, #3A1F0F 0%, #2A140A 100%)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
                }}
              />
              <div
                className="absolute -bottom-2 right-4 w-8 h-3 rounded-b"
                style={{
                  background: 'linear-gradient(180deg, #3A1F0F 0%, #2A140A 100%)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
                }}
              />
            </div>
          </div>

          {/* RIGHT: Content Panel */}
          <div
            className="relative rounded-2xl border-2 border-gold-champagne/50 shadow-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #F8F3E8 0%, #EBE0C8 50%, #F8F3E8 100%)',
              minHeight: '500px',
            }}
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-gold-champagne/40 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gold-champagne/40 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-gold-champagne/40 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-gold-champagne/40 rounded-br-2xl" />

            {/* Content */}
            <div className="relative z-10 p-8 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Category heading */}
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-forest-deep mb-3">
                      {selectedCategory.title}
                    </h3>
                    <p className="text-lg text-forest-deep/70">{selectedCategory.description}</p>
                  </div>

                  {/* Skills or Certificates */}
                  {selectedCategory.id === 'certificates' ? (
                    // Certificates grid
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedCategory.certificates?.map((cert, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedCertificate(cert)}
                          className="relative aspect-[4/3] rounded-lg border-2 border-gold-champagne/30 overflow-hidden hover:border-gold-champagne transition-all hover:scale-105 group"
                        >
                          <img
                            src={cert}
                            alt={`Certificate ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/20 transition-all flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 text-ivory font-semibold text-sm">
                              View
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    // Skills grid
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                      {selectedCategory.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex flex-col items-center gap-3 p-4 bg-ivory/50 backdrop-blur-sm rounded-xl border border-gold-champagne/20 hover:border-gold-champagne/50 hover:bg-ivory/70 transition-all group"
                        >
                          {/* Skill icon */}
                          <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-forest-deep/5 group-hover:bg-forest-deep/10 transition-all">
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-12 h-12 object-contain"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>

                          {/* Skill name */}
                          <span className="text-sm font-semibold text-forest-deep text-center">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={
          selectedCertificate
            ? {
                src: selectedCertificate,
                alt: 'Certificate',
                type: 'image',
              }
            : null
        }
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
};

export default Skills;
