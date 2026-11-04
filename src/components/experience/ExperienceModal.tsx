import React, { useEffect } from 'react';
import { X, Calendar, Building, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ExperienceEntry } from '@/data/experience';

interface ExperienceModalProps {
  experience: ExperienceEntry | null;
  onClose: () => void;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ experience, onClose }) => {
  useEffect(() => {
    if (!experience) return;

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    // Handle Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [experience, onClose]);

  if (!experience) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        onClick={handleBackdropClick}
        style={{
          background: 'rgba(3, 43, 32, 0.85)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative bg-ivory rounded-2xl shadow-2xl border-2 border-gold-champagne/60 max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-forest-deep/80 backdrop-blur-sm border border-gold-champagne/40 flex items-center justify-center hover:bg-forest-deep transition-all hover:scale-110"
            aria-label="Close experience details"
          >
            <X size={20} className="text-gold-champagne" />
          </button>

          {/* Content */}
          <div className="p-6 md:p-10 max-h-[90vh] overflow-auto">
            {/* Header */}
            <div className="mb-6">
              <div className="inline-block px-4 py-1.5 bg-gold-champagne/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-forest-deep">{experience.year}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-deep mb-2">
                {experience.position}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-forest-deep/70">
                <div className="flex items-center gap-2">
                  <Building size={18} className="text-gold-champagne" />
                  <span className="text-lg font-semibold">{experience.organization}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-gold-champagne" />
                  <span className="text-base">{experience.dateRange}</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-gold-champagne/30 mb-6" />

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-serif font-bold text-forest-deep mb-3">Overview</h3>
              <p className="text-base text-forest-deep/80 leading-relaxed">
                {experience.description}
              </p>
            </div>

            {/* Responsibilities */}
            {experience.responsibilities && experience.responsibilities.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-forest-deep mb-3">
                  Key Responsibilities
                </h3>
                <ul className="space-y-2">
                  {experience.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gold-champagne mt-1.5 flex-shrink-0">•</span>
                      <span className="text-base text-forest-deep/80">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {experience.technologies && experience.technologies.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-forest-deep mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-forest-deep/5 border border-gold-champagne/30 rounded-full text-sm font-medium text-forest-deep"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Certificate */}
            {experience.certificate && (
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-forest-deep mb-3">
                  Certificate
                </h3>
                {experience.certificate.type === 'image' ? (
                  <img
                    src={experience.certificate.src}
                    alt={experience.certificate.alt}
                    className="w-full h-auto object-contain rounded-lg border-2 border-gold-champagne/30"
                    style={{ maxHeight: '400px' }}
                  />
                ) : (
                  <div className="space-y-4">
                    <iframe
                      src={experience.certificate.src}
                      title={experience.certificate.alt}
                      className="w-full rounded-lg border-2 border-gold-champagne/30"
                      style={{ height: '400px' }}
                    />
                    <a
                      href={experience.certificate.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-forest-deep text-ivory rounded-full font-medium hover:bg-forest-dark transition-all"
                    >
                      <ExternalLink size={18} />
                      <span>Open PDF in New Tab</span>
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Verification Link */}
            {experience.verificationLink && (
              <div>
                <a
                  href={experience.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold-champagne/20 border border-gold-champagne/50 text-forest-deep rounded-full font-medium hover:bg-gold-champagne/30 transition-all"
                >
                  <ExternalLink size={18} />
                  <span>Verify Experience</span>
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExperienceModal;
