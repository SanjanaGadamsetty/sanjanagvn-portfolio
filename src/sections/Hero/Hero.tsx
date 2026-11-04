import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-forest-dark flex items-center overflow-hidden"
      style={{ paddingTop: '80px', paddingBottom: '0' }}
    >
      {/* LAYER A: Background */}
      <div className="absolute inset-0 tech-grid-pattern opacity-20" />

      {/* LAYER B: Main Content */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 pb-32">
        <div className="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center min-h-[calc(100vh-200px)]">

          {/* LEFT CONTENT - 45% - NO ANIMATION, ALWAYS VISIBLE */}
          <div className="space-y-6 lg:space-y-7 text-center lg:text-left">

            {/* Badge - ALWAYS VISIBLE */}
            <div>
              <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-gold-champagne/40 bg-gold-champagne/8 backdrop-blur-sm">
                <span className="text-xs font-semibold tracking-wider text-gold-champagne uppercase">
                  Developer
                </span>
              </div>
            </div>

            {/* Heading - ALWAYS VISIBLE */}
            <div>
              <h1 className="heading-display text-ivory">
                <span className="block text-4xl sm:text-5xl lg:text-6xl mb-2">Hi, I'm</span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold">
                  <span className="gradient-text">Sanjana</span>
                  <br />
                  <span className="gradient-text">Gadamsetty</span>
                </span>
                {/* Short decorative underline - ALWAYS VISIBLE */}
                <div
                  className="h-1.5 bg-gradient-to-r from-gold-champagne via-gold-soft to-transparent rounded-full mt-4"
                  style={{ width: '60%', maxWidth: '320px' }}
                />
              </h1>
            </div>

            {/* Description - ALWAYS VISIBLE */}
            <p className="text-base md:text-lg text-ivory/85 leading-relaxed max-w-lg mx-auto lg:mx-0">
              I build projects, solve problems, and create digital experiences that leave a lasting impact. My passion lies in crafting innovative solutions that blend creativity and technology seamlessly.
            </p>

            {/* CTA Buttons - ALWAYS VISIBLE */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="button-primary inline-flex items-center justify-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10 transition-all font-medium"
              >
                About Me
              </button>
            </div>

          </div>

          {/* RIGHT VISUAL COMPOSITION - 55% */}
          <div className="relative h-[550px] md:h-[650px] lg:h-[700px] hidden lg:block">

            {/* Single positioned container for cohesive composition */}
            <div className="absolute inset-0">

              {/* Golden Halo - Behind portrait - z-2 */}
              <div
                className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2"
                style={{ zIndex: 2 }}
              >
                {/* Main bright circle */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: '500px',
                    height: '500px',
                    border: '5px solid rgba(213, 166, 79, 0.8)',
                    background: 'radial-gradient(circle, rgba(213, 166, 79, 0.25) 0%, rgba(213, 166, 79, 0.15) 50%, transparent 70%)',
                    boxShadow: '0 0 120px rgba(213, 166, 79, 0.7), inset 0 0 100px rgba(213, 166, 79, 0.25)',
                  }}
                />
              </div>

              {/* PORTRAIT - VERY LARGE, TOP EXTENDS BEYOND CONTAINER - z-6 */}
              <div
                className="absolute"
                style={{
                  zIndex: 6,
                  top: '-5%',
                  left: '50%',
                  transform: 'translateX(-50%) scale(2.2)',
                  transformOrigin: 'top center',
                }}
              >
                {/* Gold silhouette glow */}
                <div
                  className="absolute inset-0 blur-3xl opacity-50"
                  style={{
                    background: 'radial-gradient(circle, rgba(213, 166, 79, 0.7) 0%, transparent 70%)',
                  }}
                />
                {/* Portrait image - VERY LARGE */}
                <img
                  src="/images/hero/portrait-cropped.png"
                  alt="Sanjana Gadamsetty"
                  className="relative"
                  style={{
                    width: '400px',
                    height: 'auto',
                    filter: 'drop-shadow(0 0 50px rgba(213, 166, 79, 0.6)) drop-shadow(0 0 3px rgba(213, 166, 79, 0.9))',
                  }}
                />
              </div>

              {/* Terminal - Right side of portrait - z-3 */}
              <div
                className="absolute top-[28%] right-[8%] w-[240px] bg-forest-deep/98 backdrop-blur-md rounded-xl border-2 border-gold-champagne/50 shadow-2xl overflow-hidden"
                style={{
                  zIndex: 3,
                  transform: 'rotate(8deg)',
                  boxShadow: '0 0 50px rgba(213, 166, 79, 0.4)',
                }}
              >
                {/* Terminal header with dots */}
                <div className="flex items-center gap-2 px-3 py-2 bg-forest-deep/50 border-b border-gold-champagne/20">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Terminal content - abstract code lines */}
                <div className="p-4 space-y-2">
                  {/* Line 1 */}
                  <div className="flex items-center gap-2">
                    <span className="text-gold-champagne text-xs font-mono">$</span>
                    <div className="h-2 bg-gold-champagne/80 rounded" style={{ width: '60%' }} />
                  </div>

                  {/* Line 2 */}
                  <div className="flex items-center gap-2">
                    <span className="text-gold-champagne text-xs font-mono">{'>'}</span>
                    <div className="h-2 bg-gold-soft/70 rounded" style={{ width: '75%' }} />
                  </div>

                  {/* Line 3 */}
                  <div className="flex items-center gap-2">
                    <span className="text-gold-champagne text-xs font-mono">{'>'}</span>
                    <div className="h-2 bg-gold-champagne/60 rounded" style={{ width: '50%' }} />
                  </div>

                  {/* Line 4 */}
                  <div className="flex items-center gap-2">
                    <span className="text-gold-champagne text-xs font-mono">$</span>
                    <div className="h-2 bg-gold-soft/80 rounded" style={{ width: '65%' }} />
                  </div>

                  {/* Line 5 */}
                  <div className="flex items-center gap-2">
                    <span className="text-gold-champagne text-xs font-mono">{'>'}</span>
                    <div className="h-2 bg-gold-champagne/70 rounded" style={{ width: '80%' }} />
                  </div>

                  {/* Line 6 */}
                  <div className="flex items-center gap-2">
                    <span className="text-gold-champagne text-xs font-mono">$</span>
                    <div className="h-2 bg-gold-soft/60 rounded" style={{ width: '45%' }} />
                  </div>

                  {/* Line 7 */}
                  <div className="flex items-center gap-2">
                    <span className="text-gold-champagne text-xs font-mono">{'>'}</span>
                    <div className="h-2 bg-gold-champagne/50 rounded" style={{ width: '35%' }} />
                  </div>
                </div>
              </div>

              {/* Laptop - Bottom foreground at wave level - z-7 (in front of portrait) */}
              <div
                className="absolute left-[5%]"
                style={{ zIndex: 7, bottom: '-20%' }}
              >
                <img
                  src="/images/hero/laptop.png"
                  alt="Laptop illustration"
                  style={{
                    width: '360px',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Mobile: Show portrait only */}
          <div className="lg:hidden flex justify-center">
            <div className="relative w-64 h-80">
              <div className="absolute inset-0 blur-2xl opacity-40" style={{ background: 'radial-gradient(circle, rgba(213, 166, 79, 0.5) 0%, transparent 70%)' }} />
              <img
                src="/images/hero/portrait-cropped.png"
                alt="Sanjana Gadamsetty"
                className="relative h-full w-full object-contain"
                style={{ filter: 'drop-shadow(0 0 30px rgba(213, 166, 79, 0.4))' }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Golden flow lines near wave - z-19 */}
      <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 19 }}>
        <svg
          width="100%"
          height="200"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="absolute bottom-0"
        >
          <defs>
            {/* Gold gradient for lines */}
            <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D5A64F" stopOpacity="0"/>
              <stop offset="50%" stopColor="#F3D58A" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#D5A64F" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F3D58A" stopOpacity="0"/>
              <stop offset="50%" stopColor="#D5A64F" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#F3D58A" stopOpacity="0"/>
            </linearGradient>
            {/* Glow filter */}
            <filter id="lineGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Flowing line 1 */}
          <path
            d="M 0 80 Q 360 60, 720 80 T 1440 80"
            stroke="url(#flowGradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.7"
            filter="url(#lineGlow)"
          />

          {/* Flowing line 2 */}
          <path
            d="M 0 100 Q 360 120, 720 100 T 1440 100"
            stroke="url(#flowGradient2)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
            filter="url(#lineGlow)"
          />

          {/* Flowing line 3 */}
          <path
            d="M 0 130 Q 360 110, 720 130 T 1440 130"
            stroke="url(#flowGradient1)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
            filter="url(#lineGlow)"
          />

          {/* Flowing line 4 - subtle */}
          <path
            d="M 0 150 Q 360 170, 720 150 T 1440 150"
            stroke="url(#flowGradient2)"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
            filter="url(#lineGlow)"
          />

          {/* Small decorative dots along the lines */}
          <circle cx="360" cy="60" r="2" fill="#F3D58A" opacity="0.6" filter="url(#lineGlow)"/>
          <circle cx="720" cy="80" r="2" fill="#D5A64F" opacity="0.5" filter="url(#lineGlow)"/>
          <circle cx="1080" cy="60" r="2" fill="#F3D58A" opacity="0.6" filter="url(#lineGlow)"/>

          <circle cx="360" cy="120" r="1.5" fill="#D5A64F" opacity="0.5" filter="url(#lineGlow)"/>
          <circle cx="1080" cy="120" r="1.5" fill="#F3D58A" opacity="0.4" filter="url(#lineGlow)"/>
        </svg>
      </div>

    </section>
  );
};

export default Hero;
