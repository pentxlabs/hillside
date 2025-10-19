import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable automatic scroll restoration by browser
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Smooth scroll to top with a small delay to ensure animations work
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Ensure we're at the top after a short delay (for animation triggers)
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timeoutId);
    
  }, [pathname]);

  return null;
};

export default ScrollToTop;
