# Opening Pop Parade Animation

A cinematic, playful opening animation featuring five independently configurable images that pop in sequentially to create an attractive layered composition.

## Features

✅ **Sequential Pop-in Animation** - Images appear one by one with spring physics
✅ **Independent Image Configuration** - Each image has its own position, size, rotation, and scale
✅ **Responsive Design** - Automatically adjusts layout for mobile, tablet, and desktop
✅ **Skip Controls** - Button and keyboard shortcuts (ESC, Enter, Space)
✅ **Session Memory** - Only plays once per session (uses sessionStorage)
✅ **Reduced Motion Support** - Respects prefers-reduced-motion setting
✅ **Gold Decorative Elements** - Subtle particles and connecting lines
✅ **Smooth Transition** - Seamless fade into main portfolio content
✅ **Mobile Optimized** - Touch-friendly and properly sized for small screens

## Configuration

### Editing Images

Edit `src/data/opening.ts` to customize each image:

```typescript
{
  id: 'img-1',
  src: '/images/opening/image1.png',  // Image path
  alt: 'Developer workspace',          // Alt text
  position: { x: '15%', y: '20%' },   // Position in viewport
  size: { width: '320px', height: '320px' },  // Image dimensions
  rotation: -8,                        // Rotation in degrees
  scale: 1,                            // Scale multiplier
  zIndex: 3,                           // Layering (higher = on top)
  animation: {
    delay: 0.3,                        // Delay before appearing (seconds)
    direction: 'left',                 // Entry direction
    distance: 100,                     // Entry distance (pixels)
  },
}
```

### Animation Directions

- `'top'` - Enters from above
- `'bottom'` - Enters from below
- `'left'` - Enters from left
- `'right'` - Enters from right
- `'center'` - Pops in from center (no directional movement)

### Global Settings

Edit `openingConfig` in `src/data/opening.ts`:

```typescript
export const openingConfig = {
  totalDuration: 5000,        // Total animation time (ms)
  holdDuration: 1200,         // Hold final composition (ms)
  transitionDuration: 800,    // Transition to hero (ms)
  particleCount: 12,          // Number of floating particles
  enableParticles: true,      // Toggle gold particles
  enableGlowEffects: true,    // Toggle glow borders
};
```

## Replacing Images

1. Place your images in `public/images/opening/`
2. Update the `src` path in `src/data/opening.ts`
3. Adjust position, size, and rotation to your liking
4. Test on mobile, tablet, and desktop

## Mobile Optimization

The animation automatically adjusts for mobile devices:
- Images are repositioned to fit smaller screens
- Sizes are reduced proportionally
- Rotation angles are softened
- Spacing is optimized for vertical layouts

To customize mobile layout, edit `src/hooks/useOpeningLayout.ts`

## Keyboard Controls

- **ESC** - Skip intro
- **Enter** - Skip intro
- **Space** - Skip intro

## Disabling the Animation

To completely disable the opening animation:

In `src/App.tsx`, change:
```typescript
const [showOpening, setShowOpening] = useState(shouldPlayOpening());
```

To:
```typescript
const [showOpening, setShowOpening] = useState(false);
```

## Resetting Session Memory

The animation only plays once per browser session. To reset:
- Close and reopen the browser tab
- Open in an incognito/private window
- Clear sessionStorage in DevTools
- Run: `sessionStorage.removeItem('portfolio_opening_played')`

## File Structure

```
src/
├── components/animations/
│   ├── OpeningAnimation.tsx    # Main animation component
│   ├── OpeningImage.tsx        # Individual animated image
│   ├── GoldParticles.tsx       # Decorative particles and lines
│   └── README.md               # This file
├── data/
│   └── opening.ts              # Configuration and image data
└── hooks/
    └── useOpeningLayout.ts     # Responsive layout hook
```

## Animation Timing

Default sequence (~5 seconds total):
1. **0.0s** - Animation starts, background fades in
2. **0.3s** - Image 1 pops in from left
3. **0.6s** - Image 2 pops in from top
4. **0.9s** - Image 3 pops in (center, main focus)
5. **1.2s** - Image 4 pops in from bottom
6. **1.5s** - Image 5 pops in from right
7. **1.8s-2.4s** - Gold decorative lines appear
8. **3.5s** - Composition complete, hold
9. **4.7s** - Fade out begins
10. **5.0s** - Transition to hero section

## Tips for Best Results

1. **Use high-quality images** - Images are scaled and may show pixelation
2. **Consider composition** - Center image (img-3) should be the focal point
3. **Balance z-index** - Higher z-index = appears on top of other images
4. **Test delays** - Adjust animation.delay for smoother flow
5. **Watch rotation** - Extreme rotations can crop important content
6. **Check mobile** - Always test on actual mobile devices
7. **Optimize file size** - Compress images to reduce load time

## Troubleshooting

**Images not loading:**
- Verify image paths are correct in `src/data/opening.ts`
- Check that images exist in `public/images/opening/`
- Open browser console for error messages

**Animation too fast/slow:**
- Adjust `totalDuration` in `openingConfig`
- Modify individual `animation.delay` values

**Images overlap badly:**
- Adjust `position.x` and `position.y` values
- Change `zIndex` to reorder layers
- Modify `size` to make images smaller/larger

**Skip button not working:**
- Check browser console for JavaScript errors
- Verify `onComplete` callback in `App.tsx`

**Animation replays on every visit:**
- Check sessionStorage is enabled in browser
- Verify `SESSION_KEY` in OpeningAnimation.tsx
