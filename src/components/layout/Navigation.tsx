import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Coding', href: '#coding' },
  { label: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('hero');
  const { scrollY } = useScroll();

  // Background opacity based on scroll
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(3, 43, 32, 0)', 'rgba(3, 43, 32, 0.95)']
  );

  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ['rgba(213, 166, 79, 0)', 'rgba(213, 166, 79, 0.2)']
  );

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
      setActiveSection(id);
    }
  };

  // Track active section with IntersectionObserver
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = navLinks.map((link) => link.href.replace('#', ''));
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-fixed backdrop-blur-sm"
        style={{
          backgroundColor: navBackground,
          borderBottom: `1px solid`,
          borderColor: navBorder,
        }}
      >
        <div className="content-wrapper">
          <div className="flex items-center justify-between py-4 px-4 lg:px-0">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('#hero')}
              className="text-xl font-display font-bold text-gold-champagne hover:text-gold-soft transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SG
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`relative text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-gold-champagne'
                        : 'text-ivory hover:text-gold-soft'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-champagne"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gold-champagne hover:text-gold-soft transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={false}
        animate={{
          x: isOpen ? 0 : '100%',
        }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 right-0 bottom-0 w-64 bg-forest-dark border-l border-gold-champagne/20 z-modal md:hidden"
      >
        <div className="flex flex-col gap-2 p-6 mt-16">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-left py-3 px-4 rounded-lg transition-all ${
                  isActive
                    ? 'bg-gold-champagne/10 text-gold-champagne border border-gold-champagne/30'
                    : 'text-ivory hover:bg-forest-deep hover:text-gold-soft'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-modal-backdrop md:hidden"
        />
      )}
    </>
  );
};

export default Navigation;
