import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin, Github, BookOpen, Twitter, Mail, Instagram, Send } from 'lucide-react';
import { contactLinks } from '@/data/contacts';

const iconMap: Record<string, React.ElementType> = {
  Linkedin,
  Github,
  BookOpen,
  Twitter,
  Mail,
  Instagram,
};

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [emailDialogMessage, setEmailDialogMessage] = useState<string | null>(null);

  const handleContactClick = async (contact: (typeof contactLinks)[number]) => {
    if (contact.type === 'email') {
      const email = contact.url.replace(/^mailto:/, '');

      try {
        await navigator.clipboard.writeText(email);
        setEmailDialogMessage('Email copied to clipboard.');
      } catch {
        setEmailDialogMessage(`Unable to copy automatically. Email: ${email}`);
      }

      return;
    }

    window.open(contact.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden py-12 lg:py-16"
      style={{
        background: 'linear-gradient(180deg, #003B2B 0%, #002A20 100%)',
      }}
    >
      {/* Ambient glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(213, 166, 79, 0.3) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Send size={32} className="text-gold-champagne" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ivory italic">
              Let's Connect
            </h2>
          </div>
          <p className="text-lg text-ivory/70">
            Find me across the web, for collaborations, discussions, or just to say hi!
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold-champagne to-transparent rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Social Media Icons */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {contactLinks.map((contact, index) => {
            const Icon = iconMap[contact.icon] || Mail;

            return (
              <motion.button
                key={contact.id}
                onClick={() => void handleContactClick(contact)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group cursor-pointer relative"
                aria-label={`Connect on ${contact.platform}`}
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all relative"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6, 61, 44, 0.9) 0%, rgba(3, 43, 32, 0.95) 100%)',
                    border: '2px solid rgba(213, 166, 79, 0.4)',
                    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <Icon size={32} className="text-gold-champagne" />

                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(213, 166, 79, 0.3), transparent 70%)',
                      boxShadow: '0 0 30px rgba(213, 166, 79, 0.6)',
                    }}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {emailDialogMessage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-forest-deep/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="email-dialog-title"
        >
          <div className="w-full max-w-md rounded-2xl border-2 border-gold-champagne/60 bg-ivory p-7 text-center shadow-2xl">
            <Mail size={34} className="mx-auto mb-4 text-gold-champagne" />
            <h2 id="email-dialog-title" className="mb-2 font-serif text-2xl font-bold text-forest-deep">
              Email
            </h2>
            <p className="mb-6 text-forest-deep/75">{emailDialogMessage}</p>
            <button
              type="button"
              onClick={() => setEmailDialogMessage(null)}
              className="rounded-full border border-gold-champagne bg-gold-champagne/20 px-6 py-2 font-medium text-forest-deep transition-colors hover:bg-gold-champagne/40"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};


export default Contact;
