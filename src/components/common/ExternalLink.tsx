import React from 'react';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

export interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  openInNewTab?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  className = '',
  showIcon = false,
  openInNewTab = true,
  disabled = false,
  ariaLabel,
}) => {
  if (disabled || !href) {
    return (
      <span className={`opacity-50 cursor-not-allowed ${className}`}>
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target={openInNewTab ? '_blank' : '_self'}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-1 transition-colors duration-300 ${className}`}
      aria-label={ariaLabel || `Link to ${href}`}
    >
      {children}
      {showIcon && <ExternalLinkIcon className="w-4 h-4" />}
    </a>
  );
};

export default ExternalLink;
