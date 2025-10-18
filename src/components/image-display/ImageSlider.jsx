import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import './ImageSlider.css';

const ImageSlider = ({ 
  images, 
  autoPlay = true, 
  interval = 5000,
  showDots = true,
  showArrows = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sliderRef = useRef(null);

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    if (images.length === 0) return;
    goToSlide((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, goToSlide]);

  const prevSlide = useCallback(() => {
    if (images.length === 0) return;
    goToSlide((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, goToSlide]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [isPlaying, interval, nextSlide, images.length]);

  // Touch/Swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, togglePlayPause]);

  if (!images || images.length === 0) {
    return (
      <div className="image-slider-empty">
        <p>No images to display</p>
      </div>
    );
  }

  return (
    <div 
      className={`image-slider ${className}`}
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Image Slider"
    >
      {/* Slider Container */}
      <div className="slider-container">
        <div 
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`slider-slide ${index === currentIndex ? 'active' : ''}`}
              aria-hidden={index !== currentIndex}
            >
              <img 
                src={image.src} 
                alt={image.alt || `Slide ${index + 1}`}
                loading="lazy"
              />
              {image.caption && (
                <div className="slide-caption">
                  {image.title && <h3>{image.title}</h3>}
                  <p>{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && images.length > 1 && (
        <>
          <button 
            className="slider-arrow slider-arrow-left"
            onClick={prevSlide}
            aria-label="Previous slide"
            disabled={isTransitioning}
          >
            <ChevronLeft size={30} />
          </button>
          <button 
            className="slider-arrow slider-arrow-right"
            onClick={nextSlide}
            aria-label="Next slide"
            disabled={isTransitioning}
          >
            <ChevronRight size={30} />
          </button>
        </>
      )}

      {/* Dots Indicators */}
      {showDots && images.length > 1 && (
        <div className="slider-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}

      {/* Play/Pause Button */}
      {autoPlay && images.length > 1 && (
        <button 
          className="slider-play-pause"
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause autoplay' : 'Play autoplay'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      )}

      {/* Slide Counter */}
      <div className="slider-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageSlider;
