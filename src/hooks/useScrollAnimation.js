import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-based animations using Intersection Observer
 * @param {Object} options - Intersection Observer options
 * @returns {Array} [ref, isVisible] - Element ref and visibility state
 */
export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
      triggerOnce: true,
      ...options
    };

    // Add a small delay to ensure scroll position is settled
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (defaultOptions.triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!defaultOptions.triggerOnce) {
            setIsVisible(false);
          }
        });
      }, {
        threshold: defaultOptions.threshold,
        rootMargin: defaultOptions.rootMargin
      });

      if (element) {
        observer.observe(element);
      }

      // Store observer for cleanup
      element._observer = observer;
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      if (element && element._observer) {
        element._observer.unobserve(element);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [elementRef, isVisible];
};

/**
 * Get scroll animation class based on visibility
 * @param {boolean} isVisible - Visibility state
 * @param {string} animationClass - Animation class to apply
 * @returns {string} CSS class name
 */
export const getScrollAnimationClass = (isVisible, animationClass = 'animate-fadeInUp') => {
  return isVisible ? `${animationClass} scroll-animate-visible` : 'scroll-animate-hidden';
};
