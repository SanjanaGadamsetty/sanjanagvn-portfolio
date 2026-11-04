// Portrait configuration for precise cropping and positioning
export interface PortraitConfig {
  // Container dimensions
  containerHeight: {
    mobile: string;
    tablet: string;
    desktop: string;
  };

  // Image positioning (to crop out legs)
  imagePosition: {
    top: string;      // Shift image up to hide lower body
    left: string;     // Center horizontally
  };

  // Image scale (to make portrait larger)
  imageScale: number;

  // Visible area (what shows in the frame)
  visibleHeight: string; // Crop point - show only down to hands
}

export const portraitConfig: PortraitConfig = {
  containerHeight: {
    mobile: '420px',    // 65% of 650px hero
    tablet: '480px',    // 70% of 690px hero
    desktop: '520px',   // 70% of 750px hero
  },

  // Position image to show only upper body
  // Negative top value crops out the legs
  imagePosition: {
    top: '-25%',    // Shift image up to hide legs
    left: '50%',    // Center horizontally
  },

  // Scale up the visible portion
  imageScale: 1.4,

  // Height of visible cropped area
  visibleHeight: '100%',
};
