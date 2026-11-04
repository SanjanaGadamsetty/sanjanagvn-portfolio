import { useEffect, useRef, useState, type CSSProperties } from 'react';
import './GoldenCursor.css';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  angle: number;
  distance: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  color: string;
  shape: 'dot' | 'diamond';
}

const sparkleColors = ['#D5A64F', '#F3D58A', '#FFF4D6'];

const GoldenCursor = () => {
  const haloRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const positionRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const sparkleIdRef = useRef(0);
  const timeoutRefs = useRef<number[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!pointerQuery.matches || motionQuery.matches) {
      return;
    }

    document.documentElement.classList.add('golden-cursor-enabled');

    const animate = () => {
      const current = positionRef.current;
      const target = targetRef.current;
      current.x += (target.x - current.x) * 0.22;
      current.y += (target.y - current.y) * 0.22;

      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      const interactiveTarget = (event.target as Element | null)?.closest(
        'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      setIsHovering(Boolean(interactiveTarget));
    };

    const handlePointerLeave = () => {
      targetRef.current = { x: -100, y: -100 };
      setIsHovering(false);
    };

    const handleClick = (event: MouseEvent) => {
      const count = 12;
      const newSparkles: Sparkle[] = Array.from({ length: count }, (_, index) => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 10 + Math.random() * 28;

        return {
          id: sparkleIdRef.current++,
          x: event.clientX,
          y: event.clientY,
          size: 2 + Math.random() * 3,
          angle: Math.random() * 360,
          distance,
          duration: 700 + Math.random() * 500,
          delay: Math.random() * 80,
          driftX: Math.cos(angle) * distance,
          driftY: Math.sin(angle) * distance,
          color: sparkleColors[index % sparkleColors.length],
          shape: Math.random() > 0.55 ? 'diamond' : 'dot',
        };
      });

      setSparkles((current) => [...current, ...newSparkles]);
      const timeoutId = window.setTimeout(() => {
        const ids = new Set(newSparkles.map((sparkle) => sparkle.id));
        setSparkles((current) => current.filter((sparkle) => !ids.has(sparkle.id)));
        timeoutRefs.current = timeoutRefs.current.filter((id) => id !== timeoutId);
      }, 1300);
      timeoutRefs.current.push(timeoutId);
    };

    frameRef.current = window.requestAnimationFrame(animate);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('click', handleClick);

    return () => {
      document.documentElement.classList.remove('golden-cursor-enabled');
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('click', handleClick);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      timeoutRefs.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
      timeoutRefs.current = [];
    };
  }, []);

  return (
    <>
      <div
        ref={haloRef}
        className={`golden-cursor ${isHovering ? 'golden-cursor--interactive' : ''}`}
        aria-hidden="true"
      >
        <span className="golden-cursor__glow" />
        <span className="golden-cursor__ring" />
        <span className="golden-cursor__dot" />
      </div>

      <div className="golden-sparkles" aria-hidden="true">
        {sparkles.map((sparkle) => (
          <span
            key={sparkle.id}
            className={`golden-sparkle golden-sparkle--${sparkle.shape}`}
            style={
              {
                left: sparkle.x,
                top: sparkle.y,
                width: sparkle.size,
                height: sparkle.size,
                backgroundColor: sparkle.color,
                '--sparkle-angle': `${sparkle.angle}deg`,
                '--sparkle-distance': `${sparkle.distance}px`,
                '--sparkle-x': `${sparkle.driftX}px`,
                '--sparkle-y': `${sparkle.driftY}px`,
                '--sparkle-duration': `${sparkle.duration}ms`,
                '--sparkle-delay': `${sparkle.delay}ms`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </>
  );
};

export default GoldenCursor;
