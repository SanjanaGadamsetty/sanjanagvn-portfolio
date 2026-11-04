# Hero Section

The most important section of the portfolio - a premium, cinematic introduction featuring a sophisticated layout with interactive elements.

## Components

### Main Components

- **Hero.tsx** - Main hero section component with layout and orchestration
- **GoldenHalo.tsx** - Animated golden circle background effect
- **FloatingCodeEditor.tsx** - Animated code window with typing effect
- **TechInterestsPanel.tsx** - Floating panel showing technical interests
- **DecorativeBrackets.tsx** - Code bracket decorations `</>`

### Shared Components

- **SocialIcons.tsx** - Social media icon links (in `components/common/`)
- **WaveTransition.tsx** - Elegant wave transition to next section (in `components/common/`)

## Layout

### Desktop (1024px+)
- **Left Side (50%)**:
  - Small badge label: "SOFTWARE DEVELOPER | TECH EDUCATOR"
  - Large animated heading with golden name highlight
  - Gold underline animation
  - Introduction paragraph
  - Two CTA buttons (Explore My Work, About Me)
  - Social media icons
  
- **Right Side (50%)**:
  - Portrait image with golden halo
  - Floating code editor (top-left)
  - Tech interests panel (right)
  - Decorative code brackets
  - Laptop illustration
  - Golden particles

### Mobile (<768px)
- Single column layout
- Portrait centered with reduced decorative elements
- Text centered
- Buttons stacked vertically
- Simplified animations

## Features

✅ **Animated Name Highlight** - Gradient text with flowing animation  
✅ **Golden Underline** - Smooth width animation on name  
✅ **Typing Code Effect** - Code editor with animated typing  
✅ **Floating Elements** - Subtle up/down float animations  
✅ **Golden Halo** - Pulsing glow behind portrait  
✅ **Tech Grid Background** - Subtle grid pattern  
✅ **Gold Particles** - Floating particle effects  
✅ **Wave Transition** - Smooth transition to next section  
✅ **Smooth Scrolling** - CTAs scroll to respective sections  
✅ **Responsive Layout** - Optimized for all screen sizes  

## Animations

### Timeline (on page load after opening animation):
1. **0.0s** - Tech grid and particles fade in
2. **0.2s** - Label badge appears
3. **0.3s** - Heading "Hi, I'm" fades in
4. **0.4s** - Right side container starts
5. **0.5s** - Name with gradient animation + intro text
6. **0.5s** - Golden halo begins expanding
7. **0.5s** - Code editor floats in from left
8. **0.6s** - Portrait fades in with glow
9. **0.6s** - CTA buttons appear
10. **0.7s** - Tech interests panel floats in from right
11. **0.8s** - Name underline draws + social icons appear
12. **0.9s+** - Tech interests populate sequentially
13. **Continuous** - Float animations, particles, glow pulse

### Hover Effects
- **CTA Buttons**: Scale + arrow animation
- **Social Icons**: Scale + rotate
- **Portrait**: Subtle scale increase
- **Tech Interest Items**: Slide right + background highlight

## Configuration

### Portrait

Replace in `public/images/hero/portrait.png`:
- Recommended: Transparent background PNG
- Size: ~800px height recommended
- Position: Will be positioned at bottom-center

### Text Content

Edit `src/sections/Hero/Hero.tsx`:

```typescript
// Label text
"Software Developer | Tech Educator"

// Introduction
"I build projects, solve problems, and create tech content to make learning
and programming simpler for everyone."
```

### Colors

Golden halo and effects use:
- `var(--color-gold-champagne)` - Primary gold (#D5A64F)
- `var(--color-gold-soft)` - Soft gold (#F3D58A)
- Background: `var(--color-forest-dark)` (#032B20)

### Tech Interests

Edit `src/sections/Hero/TechInterestsPanel.tsx`:

```typescript
const techInterests: TechInterest[] = [
  { icon: Code2, label: 'Development' },
  { icon: Lightbulb, label: 'DSA & Problem Solving' },
  { icon: BookOpen, label: 'Teaching & Sharing' },
  { icon: Rocket, label: 'AI Learning & Building' },
];
```

### Code Editor Content

Edit `src/sections/Hero/FloatingCodeEditor.tsx`:

```typescript
const codeLines = [
  { color: '#D5A64F', text: 'const' },
  { color: '#F8F3E8', text: ' developer = {' },
  // ... customize your code lines
];
```

### Social Links

Edit `src/data/portfolio.ts`:

```typescript
export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github'
  },
  // ... add more social links
];
```

## CTA Button Functionality

Both buttons use smooth scrolling:

```typescript
// Explore My Work → scrolls to #projects
scrollToSection('projects')

// About Me → scrolls to #about
scrollToSection('about')
```

Ensure these section IDs exist in your other components.

## Responsive Breakpoints

- **Mobile**: < 768px
  - Single column
  - Centered layout
  - Reduced portrait height
  - Hidden decorative elements (code editor, tech panel)
  
- **Tablet**: 768px - 1024px
  - Two column grid
  - Reduced spacing
  - All elements visible
  
- **Desktop**: 1024px+
  - Full two-column layout
  - All decorative elements
  - Maximum spacing and sizing

## Customization Tips

### Adjust Portrait Size
In `Hero.tsx`:
```typescript
className="h-[450px] md:h-[550px] lg:h-[650px]"
// Modify these values
```

### Change Golden Halo Size
In `GoldenHalo.tsx`:
```typescript
className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]"
// Adjust dimensions
```

### Modify Animation Delays
In `Hero.tsx`, change `transition={{ delay: X }}` values:
```typescript
transition={{ delay: 0.3 }} // Make it appear earlier/later
```

### Disable Floating Elements
Set `display: none` or remove components:
```typescript
<div className="hidden">
  <FloatingCodeEditor />
  <TechInterestsPanel />
</div>
```

### Change Wave Color
In `Hero.tsx`:
```typescript
<WaveTransition color="var(--color-ivory)" />
// Or use any CSS color value
```

## Accessibility

✅ Semantic HTML headings  
✅ Alt text on portrait image  
✅ ARIA labels on social icons  
✅ Keyboard accessible buttons  
✅ Focus states on interactive elements  
✅ Respects reduced motion preferences (motion variants should be added if needed)  

## Performance Notes

- Portrait image optimized (80KB PNG)
- Animations use GPU-accelerated transforms
- Decorative elements hidden on mobile to reduce complexity
- Lazy animation triggers with viewport detection

## Dependencies

- `framer-motion` - All animations
- `lucide-react` - Icons (ArrowRight, social icons, tech panel icons)
- Custom CSS variables from `globals.css`

## File Structure

```
src/sections/Hero/
├── Hero.tsx                    # Main component
├── GoldenHalo.tsx             # Background halo effect
├── FloatingCodeEditor.tsx     # Animated code window
├── TechInterestsPanel.tsx     # Tech interests list
├── DecorativeBrackets.tsx     # Code bracket decorations
└── README.md                  # This file

public/images/hero/
└── portrait.png               # Your portrait image
```

## Testing Checklist

- [ ] Portrait loads correctly
- [ ] Name gradient animates smoothly
- [ ] Golden underline draws from left to right
- [ ] Code editor typing animation works
- [ ] Tech interests panel floats and populates
- [ ] CTA buttons scroll to correct sections
- [ ] Social icons link to correct URLs
- [ ] Golden halo pulses subtly
- [ ] Wave transition appears at bottom
- [ ] Mobile layout is centered and readable
- [ ] All animations complete without errors
- [ ] Hover effects work on all interactive elements

## Troubleshooting

**Portrait not showing:**
- Check file exists at `public/images/hero/portrait.png`
- Verify path in Hero.tsx is correct
- Check browser console for 404 errors

**Animations not working:**
- Verify framer-motion is installed
- Check browser console for errors
- Test with `npm run dev` not production build

**Social icons not linking:**
- Update URLs in `src/data/portfolio.ts`
- Verify social links array is populated

**Layout broken on mobile:**
- Test at actual mobile width (< 768px)
- Check responsive classes are not overridden
- Verify grid breakpoints in Hero.tsx

**Scroll not working:**
- Ensure target sections have correct IDs
- Verify smooth scroll is enabled
- Check for JavaScript errors in console
