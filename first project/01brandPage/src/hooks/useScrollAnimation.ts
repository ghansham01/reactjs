import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('has-animated')) {
            entry.target.classList.add('animate-in', 'has-animated');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    if (elementRef.current) {
      // Check if element hasn't been animated yet
      if (!elementRef.current.classList.contains('has-animated')) {
        observer.observe(elementRef.current);
      }
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return elementRef;
}