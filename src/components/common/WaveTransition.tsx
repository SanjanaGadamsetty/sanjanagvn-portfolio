import React from 'react';

interface WaveTransitionProps {
  direction?: 'top-to-bottom' | 'bottom-to-top';
  color?: string;
  className?: string;
}

const WaveTransition: React.FC<WaveTransitionProps> = ({
  direction = 'top-to-bottom',
  color = '#F8F3E8',
  className = '',
}) => {
  const isTopToBottom = direction === 'top-to-bottom';

  return (
    <div className={`${isTopToBottom ? '' : ''} ${className}`} style={{ lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        style={{
          transform: isTopToBottom ? 'none' : 'rotate(180deg)',
          display: 'block',
          height: 'auto',
          verticalAlign: 'bottom'
        }}
      >
        <path
          d="M0,64 C360,100 720,100 1080,64 C1260,46 1350,28 1440,28 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default WaveTransition;
