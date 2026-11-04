import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { socialLinks } from '@/data/portfolio';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  variant?: 'default' | 'large';
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  className = '',
  iconSize = 20,
  variant = 'default',
}) => {
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ElementType> = {
      github: Github,
      linkedin: Linkedin,
      twitter: Twitter,
      mail: Mail,
    };
    return icons[iconName.toLowerCase()] || Github;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((social) => {
        const Icon = getIcon(social.icon);
        return (
          <motion.a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center justify-center rounded-full border transition-all duration-300
              ${
                variant === 'large'
                  ? 'w-12 h-12 border-gold-champagne/30 hover:border-gold-champagne hover:bg-gold-champagne/10'
                  : 'w-10 h-10 border-gold-champagne/30 hover:border-gold-champagne hover:bg-gold-champagne/10'
              }
            `}
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            aria-label={social.platform}
          >
            <Icon size={iconSize} className="text-gold-champagne" />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default SocialIcons;
