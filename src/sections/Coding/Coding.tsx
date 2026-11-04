import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, ExternalLink, Terminal } from 'lucide-react';
import { codingProfiles } from '@/data/codingProfiles';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Github,
  ExternalLink,
};

const Coding: React.FC = () => {
  const handleCardClick = (url?: string) => {
    if (url && url.trim() !== '') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="coding"
      className="relative overflow-hidden py-12 lg:py-16"
      style={{
        background: 'linear-gradient(180deg, #F8F3E8 0%, #F3E5C7 50%, #F8F3E8 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Terminal size={32} className="text-gold-champagne" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-deep italic">
              Coding Profiles
            </h2>
          </div>
          <p className="text-lg text-forest-deep/70 mb-4">Where I code, solve, and build</p>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold-champagne to-transparent rounded-full mx-auto" />
        </div>

        {/* Simple 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {codingProfiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProfileCard profile={profile} onCardClick={handleCardClick} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Profile Card Component
interface ProfileCardProps {
  profile: typeof codingProfiles[0];
  onCardClick: (url?: string) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onCardClick }) => {
  const Icon = iconMap[profile.icon] || Code2;
  const isDisabled = !profile.profileUrl || profile.profileUrl.trim() === '';

  return (
    <motion.button
      onClick={() => !isDisabled && onCardClick(profile.profileUrl)}
      onKeyDown={(e) => {
        if (!isDisabled && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onCardClick(profile.profileUrl);
        }
      }}
      disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      aria-label={`${profile.platform} profile${isDisabled ? ' - not configured' : ''}`}
      aria-disabled={isDisabled}
      className={`relative w-full h-full text-left p-6 rounded-xl transition-all group ${
        isDisabled
          ? 'cursor-not-allowed opacity-60'
          : 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-champagne focus:ring-offset-2 focus:ring-offset-ivory'
      }`}
      style={{
        background: 'linear-gradient(135deg, #063D2C 0%, #032B20 100%)',
        border: '2px solid rgba(213, 166, 79, 0.4)',
      }}
      whileHover={
        !isDisabled
          ? {
              y: -4,
              boxShadow: '0 10px 30px rgba(213, 166, 79, 0.25)',
            }
          : {}
      }
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
    >
      {/* Icon */}
      <motion.div className="mb-4 pointer-events-none" whileHover={!isDisabled ? { scale: 1.1 } : {}}>
        <Icon size={40} className="text-gold-champagne" />
      </motion.div>

      {/* Platform Name */}
      <h3 className="text-2xl font-serif font-bold text-ivory mb-2 pointer-events-none">{profile.platform}</h3>

      {/* Description */}
      <p className="text-sm text-ivory/80 mb-4 leading-relaxed pointer-events-none">{profile.description}</p>

      {/* Link indicator */}
      <div className="flex items-center gap-2 mt-auto pointer-events-none">
        {isDisabled ? (
          <span className="text-xs text-ivory/40 italic">URL not configured</span>
        ) : (
          <>
            <span className="text-xs font-semibold text-gold-champagne group-hover:underline">
              Visit Profile
            </span>
            <ExternalLink size={14} className="text-gold-champagne" />
          </>
        )}
      </div>
    </motion.button>
  );
};

export default Coding;
