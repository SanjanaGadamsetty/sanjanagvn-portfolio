import { useEffect, useState, useRef } from 'react';

interface SectionVisibility {
  isVisible: boolean;
  opacity: number;
  shouldRender: boolean;
}

export const useSectionTransition = (sectionId: string): SectionVisibility => {
  const [visibility, setVisibility] = useState<SectionVisibility>({
    isVisible: true,
    opacity: 1,
    shouldRender: true,
  });

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Intersection Observer for visibility detection
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const rect = entry.boundingClientRect;
        const windowHeight = window.innerHeight;

        // Calculate opacity based on position in viewport
        let calculatedOpacity = 1;

        if (entry.isIntersecting) {
          // Element is in viewport
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = windowHeight / 2;

          // Distance from viewport center
          const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
          const maxDistance = windowHeight * 0.8; // More generous range

          // Calculate opacity: 1 at center, fades as it moves away
          calculatedOpacity = Math.max(0.1, 1 - (distanceFromCenter / maxDistance));
        } else {
          // Not in viewport
          calculatedOpacity = 0.1;
        }

        setVisibility({
          isVisible: entry.isIntersecting,
          opacity: calculatedOpacity,
          shouldRender: true, // Always render for smooth transitions
        });
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, observerOptions);
    observerRef.current.observe(element);

    // Also listen to scroll for smoother opacity updates
    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
      const maxDistance = windowHeight * 0.8;

      let calculatedOpacity = 1;
      const isInView = rect.top < windowHeight && rect.bottom > 0;

      if (isInView) {
        calculatedOpacity = Math.max(0.1, Math.min(1, 1 - (distanceFromCenter / maxDistance)));
      } else {
        calculatedOpacity = 0.1;
      }

      setVisibility({
        isVisible: isInView,
        opacity: calculatedOpacity,
        shouldRender: true, // Always render
      });
    };

    // Throttle scroll handler
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', scrollListener);
    };
  }, [sectionId]);

  return visibility;
};
