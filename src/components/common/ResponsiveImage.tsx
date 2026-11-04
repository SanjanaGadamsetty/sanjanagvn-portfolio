import React from 'react';

export interface ResponsiveImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  fit?: 'cover' | 'contain';
  position?: string; // e.g., 'center', 'top', 'bottom', '50% 30%'
  aspectRatio?: string; // e.g., '16/9', '4/3', '1/1'
  zoom?: number; // scale factor, e.g., 1.2
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  fallbackSrc = '/images/placeholder.jpg',
  fit = 'cover',
  position = 'center',
  aspectRatio,
  zoom = 1,
  rounded = 'none',
  className = '',
  loading = 'lazy',
  onLoad,
  onError,
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
      onError?.();
    }
  };

  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
  };

  const containerStyle: React.CSSProperties = {
    aspectRatio: aspectRatio || 'auto',
    overflow: 'hidden',
  };

  const imageStyle: React.CSSProperties = {
    objectFit: fit,
    objectPosition: position,
    transform: zoom !== 1 ? `scale(${zoom})` : undefined,
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
    opacity: isLoaded ? 1 : 0,
  };

  return (
    <div
      className={`relative w-full h-full ${roundedClasses[rounded]} ${className}`}
      style={containerStyle}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-forest-deep animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gold-champagne border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full ${roundedClasses[rounded]}`}
        style={imageStyle}
      />
      {hasError && (
        <div className="absolute inset-0 bg-forest-deep flex items-center justify-center text-gold-champagne text-sm">
          Image not found
        </div>
      )}
    </div>
  );
};

export default ResponsiveImage;
