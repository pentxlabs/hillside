import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageCarousel.css';

const ImageCarousel = ({ 
  images, 
  itemsToShow = 3,
  autoScroll = false,
  scrollInterval = 3000,
  showArrows = true,
  gap = 20,
  className = ''
}) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  // Responsive items to show
  const [responsiveItems, setResponsiveItems] = useState(itemsToShow);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setResponsiveItems(1);
      } else if (width < 1024) {
        setResponsiveItems(Math.min(2, itemsToShow));
      } else {
        setResponsiveItems(itemsToShow);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsToShow]);

  useEffect(() => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const calculatedWidth = (containerWidth - (gap * (responsiveItems - 1))) / responsiveItems;
      setItemWidth(calculatedWidth);
    }
  }, [responsiveItems, gap, images]);

  const maxPosition = Math.max(0, images.length - responsiveItems);

  const nextSlide = useCallback(() => {
    setCurrentPosition((prev) => {
      const newPos = prev + 1;
      return newPos > maxPosition ? 0 : newPos; // Loop back to start
    });
  }, [maxPosition]);

  const prevSlide = () => {
    setCurrentPosition((prev) => {
      const newPos = prev - 1;
      return newPos < 0 ? maxPosition : newPos; // Loop to end
    });
  };

  const goToSlide = (index) => {
    setCurrentPosition(index);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoScroll || images.length <= responsiveItems) return;

    const timer = setInterval(nextSlide, scrollInterval);
    return () => clearInterval(timer);
  }, [autoScroll, scrollInterval, images.length, responsiveItems, nextSlide]);

  if (!images || images.length === 0) {
    return (
      <div className="carousel-empty">
        <p>No images to display</p>
      </div>
    );
  }

  return (
    <div className={`image-carousel ${className}`} ref={carouselRef}>
      <div className="carousel-wrapper">
        {/* Previous Arrow */}
        {showArrows && images.length > responsiveItems && (
          <button 
            className="carousel-arrow carousel-arrow-left"
            onClick={prevSlide}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Carousel Track */}
        <div className="carousel-container">
          <div 
            className="carousel-track"
            ref={trackRef}
            style={{
              transform: `translateX(-${currentPosition * (itemWidth + gap)}px)`,
              gap: `${gap}px`
            }}
          >
            {images.map((image, index) => (
              <div 
                key={index} 
                className="carousel-item"
                style={{ width: `${itemWidth}px` }}
              >
                <div className="carousel-item-inner">
                  <img 
                    src={image.src} 
                    alt={image.alt || `Item ${index + 1}`}
                    loading="lazy"
                  />
                  {image.overlay && (
                    <div className="carousel-item-overlay">
                      {image.title && <h4>{image.title}</h4>}
                      {image.description && <p>{image.description}</p>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Arrow */}
        {showArrows && images.length > responsiveItems && (
          <button 
            className="carousel-arrow carousel-arrow-right"
            onClick={nextSlide}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Pagination Dots */}
      {images.length > responsiveItems && (
        <div className="carousel-pagination">
          {Array.from({ length: maxPosition + 1 }).map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentPosition ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
