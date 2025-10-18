import React from 'react';
import { useScrollProgress } from '../hooks/useAdvancedAnimations';
import './ScrollProgressBar.css';

const ScrollProgressBar = () => {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress-container">
      <div 
        className="scroll-progress-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
