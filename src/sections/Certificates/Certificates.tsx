import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, FileText } from 'lucide-react';
import { certificates } from '@/data/certificates';
import type { Certificate } from '@/data/certificates';

const Certificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleOpenCertificate = (cert: Certificate) => {
    const index = certificates.findIndex((c) => c.id === cert.id);
    setSelectedIndex(index);
    setSelectedCertificate(cert);
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % certificates.length;
    setSelectedIndex(nextIndex);
    setSelectedCertificate(certificates[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = (selectedIndex - 1 + certificates.length) % certificates.length;
    setSelectedIndex(prevIndex);
    setSelectedCertificate(certificates[prevIndex]);
  };

  // Keyboard navigation in modal
  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCertificate(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCertificate, selectedIndex]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCertificate]);

  return (
    <section
      id="certificates"
      className="relative overflow-hidden py-12 lg:py-16"
      style={{
        background: 'linear-gradient(180deg, #003B2B 0%, #002A20 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-12" style={{ zIndex: 10 }}>
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <FileText size={32} className="text-gold-champagne" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ivory italic">
              Certificates
            </h2>
          </div>
          <p className="text-lg text-ivory/70 mb-4">A collection of my learning milestones</p>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold-champagne to-transparent rounded-full mx-auto" />
        </div>
      </div>

      {/* Single-line certificate marquee */}
      <div className="relative overflow-hidden py-4">
        <MarqueeTrack
          certificates={certificates}
          isPaused={prefersReducedMotion}
          onCertificateClick={handleOpenCertificate}
        />
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
            style={{
              background: 'rgba(3, 43, 32, 0.95)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative bg-ivory rounded-2xl shadow-2xl border-2 border-gold-champagne/60 max-w-5xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-forest-deep/80 backdrop-blur-sm border border-gold-champagne/40 flex items-center justify-center hover:bg-forest-deep transition-all hover:scale-110"
                aria-label="Close certificate"
              >
                <X size={20} className="text-gold-champagne" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-forest-deep/80 backdrop-blur-sm border border-gold-champagne/40 flex items-center justify-center hover:bg-forest-deep transition-all hover:scale-110"
                aria-label="Previous certificate"
              >
                <ChevronLeft size={20} className="text-gold-champagne" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-forest-deep/80 backdrop-blur-sm border border-gold-champagne/40 flex items-center justify-center hover:bg-forest-deep transition-all hover:scale-110"
                aria-label="Next certificate"
              >
                <ChevronRight size={20} className="text-gold-champagne" />
              </button>

              {/* Certificate Content */}
              <div className="p-6 md:p-10 max-h-[90vh] overflow-auto">
                {/* Certificate Image */}
                <div className="mb-6 rounded-xl overflow-hidden border-2 border-gold-champagne/30">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: '500px' }}
                  />
                </div>

                {/* Certificate Details */}
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-deep mb-2">
                    {selectedCertificate.title}
                  </h2>
                  <p className="text-xl text-forest-deep/70 mb-4">{selectedCertificate.issuer}</p>
                  <div className="flex flex-wrap gap-4 text-forest-deep/70 mb-4">
                    <span>Issued: {selectedCertificate.issueDate}</span>
                    {selectedCertificate.expiryDate && (
                      <span>Expires: {selectedCertificate.expiryDate}</span>
                    )}
                  </div>
                </div>

                {selectedCertificate.description && (
                  <p className="text-base text-forest-deep/80 leading-relaxed mb-4">
                    {selectedCertificate.description}
                  </p>
                )}

                {/* Skills */}
                {selectedCertificate.skills && selectedCertificate.skills.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-forest-deep mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-forest-deep/5 border border-gold-champagne/30 rounded-full text-sm font-medium text-forest-deep"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Credential URL */}
                {selectedCertificate.credentialUrl && (
                  <a
                    href={selectedCertificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold-champagne/20 border border-gold-champagne/50 text-forest-deep rounded-full font-medium hover:bg-gold-champagne/30 transition-all"
                  >
                    <ExternalLink size={18} />
                    <span>Verify Certificate</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Marquee Track Component
interface MarqueeTrackProps {
  certificates: Certificate[];
  isPaused: boolean;
  onCertificateClick: (cert: Certificate) => void;
}

const MarqueeTrack: React.FC<MarqueeTrackProps> = ({
  certificates,
  isPaused,
  onCertificateClick,
}) => {
  const infiniteCertificates = [...certificates, ...certificates];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex w-max gap-4"
        animate={isPaused ? undefined : { x: ['0%', '-50%'] }}
        transition={{ duration: 180, ease: 'linear', repeat: Infinity }}
      >
        {infiniteCertificates.map((cert, index) => {
          return (
            <motion.button
              key={`${cert.id}-${index}`}
              onClick={() => onCertificateClick(cert)}
              className="relative flex h-52 w-80 flex-shrink-0 rounded-xl overflow-hidden border-2 border-gold-champagne/40 hover:border-gold-champagne transition-all group"
              style={{
                aspectRatio: cert.displayAspectRatio || 1.4,
              }}
              whileHover={{ y: -8 }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className={`w-full h-full ${
                  cert.imageFit === 'contain' ? 'object-contain' : 'object-cover'
                }`}
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/80 transition-all flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 p-4"
              >
                <p className="text-ivory font-semibold text-center mb-2">{cert.title}</p>
                <p className="text-gold-champagne text-sm text-center">{cert.issuer}</p>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Certificates;
