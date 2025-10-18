import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for animating numbers (counter effect)
 * @param {number} end - Target number
 * @param {number} duration - Animation duration in ms
 * @param {boolean} isVisible - Trigger for animation
 * @returns {number} Current animated value
 */
export const useCountAnimation = (end, duration = 2000, isVisible = false) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;

    hasAnimated.current = true;
    let startTime;
    const startValue = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);

      setCount(currentValue);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return count;
};

/**
 * Custom hook for parallax scroll effect
 * @param {number} speed - Parallax speed (0-1)
 * @returns {Object} Ref and transform style
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;

      // Calculate parallax offset only when element is in view
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + rect.height) {
        const offset = (scrolled - elementTop + windowHeight) * speed;
        setOffset(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    ref,
    style: {
      transform: `translateY(${offset}px)`
    }
  };
};

/**
 * Custom hook for scroll progress indicator
 * @returns {number} Scroll progress percentage (0-100)
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      const progress = (scrolled / documentHeight) * 100;
      setProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};
