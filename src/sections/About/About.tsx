import React from 'react';
import { ArrowRight } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/common/StaggerContainer';

const About: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative text-forest-deep py-12 lg:py-16 overflow-hidden" style={{ backgroundColor: '#F8F3E8' }}>
      {/* Ivory-Gold Background Gradient - z-0 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #F8F3E8 0%, #F8F3E8 10%, #F3E5C7 50%, #F8F3E8 90%, #F8F3E8 100%)',
          zIndex: 0,
        }}
      />

      {/* Subtle gold accent shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div
          className="absolute rounded-full opacity-15"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(213, 166, 79, 0.4) 0%, transparent 70%)',
            top: '10%',
            right: '-50px',
          }}
        />
        <div
          className="absolute rounded-full opacity-15"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(243, 213, 138, 0.4) 0%, transparent 70%)',
            bottom: '10%',
            left: '-50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[42%_58%] gap-12 lg:gap-16 items-center">

          {/* LEFT: Text Content (42%) */}
          <StaggerContainer className="space-y-6">
            {/* Label */}
            <StaggerItem>
              <div className="inline-block">
                <span className="text-xs font-bold tracking-widest uppercase text-forest-dark">
                  
                </span>
              </div>
            </StaggerItem>

            {/* Heading */}
            <StaggerItem>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-forest-deep leading-tight">
                  A Little
                  <br />
                  <span className="italic">About Me</span>
                </h2>
                {/* Gold underline */}
                <div className="mt-4 h-1 w-32 bg-gradient-to-r from-gold-champagne to-gold-soft rounded-full" />
              </div>
            </StaggerItem>

            {/* Description */}
            <StaggerItem>
              <p className="text-base md:text-lg text-forest-deep/80 leading-relaxed max-w-lg">
                Hey, I'm Sanjana - a curious developer, AI & Data Science student, and creative thinker who loves turning ideas into meaningful digital experiences.

I enjoy exploring the world of technology, from solving algorithmic challenges and building web applications to experimenting with data, AI, and emerging tools. I'm constantly learning, building, and pushing myself beyond what I already know.
              </p>
            </StaggerItem>

            {/* Button */}
            <StaggerItem>
              <div className="pt-4">
                <button
                  onClick={() => scrollToSection('experience')}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-forest-deep text-ivory rounded-full font-medium hover:bg-forest-dark transition-all duration-300 hover:gap-3"
                >
                  <span>My Journey</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* RIGHT: Workspace Illustration (58%) */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <img
              src="/images/about/workspace-illustration.png"
              alt="Cozy coding workspace with laptop, books, plant, and checklist"
              className="w-full max-w-[600px] h-auto"
              style={{
                objectFit: 'contain',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
