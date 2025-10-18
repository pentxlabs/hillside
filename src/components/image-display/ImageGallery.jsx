import React, { useState } from 'react';
import Lightbox from './Lightbox';
import './ImageGallery.css';

const ImageGallery = ({ 
  images, 
  columns = 3,
  gap = 20,
  showCaptions = true,
  className = ''
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  if (!images || images.length === 0) {
    return (
      <div className="gallery-empty">
        <p>No images to display</p>
      </div>
    );
  }

  return (
    <>
      <div 
        className={`image-gallery ${className}`}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: `${gap}px`
        }}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openLightbox(index);
              }
            }}
            aria-label={`View ${image.alt || `image ${index + 1}`}`}
          >
            <div className="gallery-item-inner">
              <img 
                src={image.thumbnail || image.src} 
                alt={image.alt || `Gallery image ${index + 1}`}
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <div className="gallery-item-icon">
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </div>
                {showCaptions && (image.title || image.caption) && (
                  <div className="gallery-item-caption">
                    {image.title && <h4>{image.title}</h4>}
                    {image.caption && <p>{image.caption}</p>}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onIndexChange={setCurrentImageIndex}
        />
      )}
    </>
  );
};

export default ImageGallery;
