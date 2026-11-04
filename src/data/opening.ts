export interface OpeningImage {
  id: string;
  src: string;
  alt: string;
  // Position in viewport (percentage or px)
  position: {
    x: string;
    y: string;
  };
  // Size configuration
  size: {
    width: string;
    height: string;
  };
  // Rotation in degrees
  rotation: number;
  // Scale multiplier
  scale: number;
  // Z-index for layering
  zIndex: number;
  // Entry animation configuration
  animation: {
    delay: number; // seconds
    direction: 'top' | 'bottom' | 'left' | 'right' | 'center';
    distance: number; // pixels
  };
}

export const openingImages: OpeningImage[] = [
  {
    id: 'img-1',
    src: '/images/opening/image1.png',
    alt: 'Developer workspace',
    position: { x: '15%', y: '20%' },
    size: { width: '320px', height: '320px' },
    rotation: -8,
    scale: 1,
    zIndex: 3,
    animation: {
      delay: 0.3,
      direction: 'left',
      distance: 100,
    },
  },
  {
    id: 'img-2',
    src: '/images/opening/image2.png',
    alt: 'Learn Build Solve Grow',
    position: { x: '55%', y: '15%' },
    size: { width: '280px', height: '280px' },
    rotation: 5,
    scale: 0.95,
    zIndex: 2,
    animation: {
      delay: 0.6,
      direction: 'top',
      distance: 120,
    },
  },
  {
    id: 'img-3',
    src: '/images/opening/image3.png',
    alt: 'Speaking and presenting',
    position: { x: '50%', y: '50%' },
    size: { width: '380px', height: '380px' },
    rotation: 0,
    scale: 1.1,
    zIndex: 5,
    animation: {
      delay: 0.9,
      direction: 'center',
      distance: 0,
    },
  },
  {
    id: 'img-4',
    src: '/images/opening/image4.png',
    alt: 'Projects showcase',
    position: { x: '20%', y: '55%' },
    size: { width: '300px', height: '300px' },
    rotation: -5,
    scale: 0.98,
    zIndex: 4,
    animation: {
      delay: 1.2,
      direction: 'bottom',
      distance: 100,
    },
  },
  {
    id: 'img-5',
    src: '/images/opening/image5.png',
    alt: 'GitHub contributions',
    position: { x: '65%', y: '60%' },
    size: { width: '340px', height: '340px' },
    rotation: 7,
    scale: 1,
    zIndex: 1,
    animation: {
      delay: 1.5,
      direction: 'right',
      distance: 100,
    },
  },
];

// Animation timing configuration
export const openingConfig = {
  totalDuration: 5000, // 5 seconds
  holdDuration: 1200, // Hold final composition for 1.2s
  transitionDuration: 800, // Transition to hero duration
  particleCount: 12,
  enableParticles: true,
  enableGlowEffects: true,
};
