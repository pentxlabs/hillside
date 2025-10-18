import React, { useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from 'lucide-react';
import './Lightbox.css';

const Lightbox = ({ images, currentIndex, onClose, onIndexChange }) => {
  const [zoom, setZoom] = React.useState(1);
  const imageRef = useRef(null);

  const goToNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      onIndexChange(currentIndex + 1);
      setZoom(1);
    }
  }, [currentIndex, images.length, onIndexChange]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      onIndexChange(currentIndex - 1);
      setZoom(1);
    }
  }, [currentIndex, onIndexChange]);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.5, 1));
  };

  const handleDownload = () => {
    const image = images[currentIndex];
    const link = document.createElement('a');
    link.href = image.src;
    link.download = image.alt || `image-${currentIndex + 1}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-' || e.key === '_') handleZoomOut();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onClose, goToNext, goToPrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const currentImage = images[currentIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="lightbox-header">
          <div className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </div>
          <div className="lightbox-controls">
            <button 
              className="lightbox-btn"
              onClick={handleZoomOut}
              aria-label="Zoom out"
              disabled={zoom <= 1}
            >
              <ZoomOut size={20} />
            </button>
            <button 
              className="lightbox-btn"
              onClick={handleZoomIn}
              aria-label="Zoom in"
              disabled={zoom >= 3}
            >
              <ZoomIn size={20} />
            </button>
            <button 
              className="lightbox-btn"
              onClick={handleDownload}
              aria-label="Download image"
            >
              <Download size={20} />
            </button>
            <button 
              className="lightbox-btn lightbox-close"
              onClick={onClose}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="lightbox-content">
          <div 
            className="lightbox-image-wrapper"
            style={{ transform: `scale(${zoom})` }}
            ref={imageRef}
          >
            <img 
              src={currentImage.src} 
              alt={currentImage.alt || `Image ${currentIndex + 1}`}
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button 
            className="lightbox-nav lightbox-nav-prev"
            onClick={goToPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button 
            className="lightbox-nav lightbox-nav-next"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
        )}

        {/* Caption */}
        {(currentImage.title || currentImage.caption) && (
          <div className="lightbox-caption">
            {currentImage.title && <h3>{currentImage.title}</h3>}
            {currentImage.caption && <p>{currentImage.caption}</p>}
          </div>
        )}

        {/* Thumbnails */}
        <div className="lightbox-thumbnails">
          {images.map((image, index) => (
            <div
              key={index}
              className={`lightbox-thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                onIndexChange(index);
                setZoom(1);
              }}
              role="button"
              tabIndex={0}
              aria-label={`Go to image ${index + 1}`}
            >
              <img 
                src={image.thumbnail || image.src} 
                alt={`Thumbnail ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
