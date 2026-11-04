import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Certificate } from '@/data/experience';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    if (!certificate) return;

    // Prevent background scrolling when modal is open
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
  }, [certificate, onClose]);

  if (!certificate) return null;

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
          className="relative bg-ivory rounded-2xl shadow-2xl border-2 border-gold-champagne/60 max-w-5xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-forest-deep/80 backdrop-blur-sm border border-gold-champagne/40 flex items-center justify-center hover:bg-forest-deep transition-all hover:scale-110"
            aria-label="Close certificate preview"
          >
            <X size={20} className="text-gold-champagne" />
          </button>

          {/* Certificate content */}
          <div className="p-6 md:p-8 max-h-[90vh] overflow-auto">
            {certificate.type === 'image' ? (
              <img
                src={certificate.src}
                alt={certificate.alt}
                className="w-full h-auto object-contain rounded-lg"
                style={{ maxHeight: '75vh' }}
              />
            ) : (
              <div className="space-y-4">
                <iframe
                  src={certificate.src}
                  title={certificate.alt}
                  className="w-full rounded-lg border border-gold-champagne/20"
                  style={{ height: '70vh', minHeight: '500px' }}
                />
                <a
                  href={certificate.src}
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CertificateModal;
