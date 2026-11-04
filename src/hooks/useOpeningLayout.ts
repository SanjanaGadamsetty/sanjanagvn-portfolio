import { useState, useEffect } from 'react';
import { OpeningImage } from '@/data/opening';

interface ResponsiveLayout {
  position: { x: string; y: string };
  size: { width: string; height: string };
  rotation: number;
  scale: number;
}

export const useOpeningLayout = (image: OpeningImage): OpeningImage => {
  const [layout, setLayout] = useState<OpeningImage>(image);

  useEffect(() => {
    const updateLayout = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

      if (isMobile) {
        // Mobile: Stack images more centered and smaller
        const mobileLayouts: Record<string, ResponsiveLayout> = {
          'img-1': {
            position: { x: '25%', y: '15%' },
            size: { width: '180px', height: '180px' },
            rotation: -6,
            scale: 0.9,
          },
          'img-2': {
            position: { x: '70%', y: '20%' },
            size: { width: '160px', height: '160px' },
            rotation: 4,
            scale: 0.85,
          },
          'img-3': {
            position: { x: '50%', y: '45%' },
            size: { width: '220px', height: '220px' },
            rotation: 0,
            scale: 1,
          },
          'img-4': {
            position: { x: '30%', y: '70%' },
            size: { width: '170px', height: '170px' },
            rotation: -4,
            scale: 0.88,
          },
          'img-5': {
            position: { x: '75%', y: '75%' },
            size: { width: '190px', height: '190px' },
            rotation: 5,
            scale: 0.9,
          },
        };

        const mobileLayout = mobileLayouts[image.id];
        if (mobileLayout) {
          setLayout({ ...image, ...mobileLayout });
        }
      } else if (isTablet) {
        // Tablet: Slightly reduced from desktop
        setLayout({
          ...image,
          size: {
            width: `${parseInt(image.size.width) * 0.8}px`,
            height: `${parseInt(image.size.height) * 0.8}px`,
          },
          scale: image.scale * 0.9,
        });
      } else {
        // Desktop: Use original layout
        setLayout(image);
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [image]);

  return layout;
};
