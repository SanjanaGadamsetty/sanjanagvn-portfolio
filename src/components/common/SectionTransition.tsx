import React from 'react';
import { useSectionTransition } from '@/hooks/useSectionTransition';

interface SectionTransitionProps {
  sectionId: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({
  sectionId,
  children,
  className = '',
  style = {},
}) => {
  const { opacity } = useSectionTransition(sectionId);

  return (
    <div
      className={className}
      style={{
        ...style,
        opacity,
        transition: 'opacity 0.8s ease-in-out',
        willChange: 'opacity',
      }}
    >
      {children}
    </div>
  );
};

export default SectionTransition;
