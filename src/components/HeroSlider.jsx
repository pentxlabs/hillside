import React from 'react';
import ImageSlider from './image-display/ImageSlider';
import './HeroSlider.css';

const HeroSlider = ({ 
  images, 
  title, 
  subtitle, 
  stats = [],
  buttons = [],
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  isService = false,
  isWedding = false,
  isFunCity = false,
  isVillas = false
}) => {
  return (
    <section className={`hero-section ${isService ? 'service-hero' : ''} ${isWedding ? 'wedding-hero' : ''} ${isFunCity ? 'funcity-hero' : ''} ${isVillas ? 'villas-hero' : ''}`}>
      <div className="hero-slider-wrapper">
        <ImageSlider
          images={images}
          autoPlay={autoPlay}
          interval={interval}
          showDots={showDots}
          showArrows={showArrows}
          className="hero-slider"
        />
        <div className="hero-overlay">
          <div className="hero-content animate-fadeInDown">
            <h1>{title}</h1>
            {subtitle && <p className="delay-200">{subtitle}</p>}
            {buttons.length > 0 && (
              <div className="hero-buttons stagger-animation">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    onClick={button.onClick}
                    className={`cta-button ${button.variant || 'primary'}`}
                  >
                    {button.label}
                    {button.icon}
                  </button>
                ))}
              </div>
            )}
            {stats.length > 0 && (
              <div className="hero-stats stagger-animation">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
