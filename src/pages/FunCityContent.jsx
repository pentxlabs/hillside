import React, { useState } from "react";
import { Star, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import ImageSlider from "../components/image-display/ImageSlider";
import PageHero from "../components/PageHero";
import { rentalItems, infoItems } from "../config/funcityConfig";
import "./FunCityContent.css";

const FunCityContent = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [infoRef, infoVisible] = useScrollAnimation();
  const [rentalsRef, rentalsVisible] = useScrollAnimation();

  return (
    <div className="funcity-content">
      <PageHero
        title="Fun City"
        subtitle="Entertainment and party rentals for unforgettable celebrations"
        backgroundImage="https://res.cloudinary.com/dpcrbou1v/image/upload/v1762072918/545560139_824953600694566_4101146743402634737_n_d402nm.jpg"
      />
      <section className="quick-info-section" ref={infoRef}>
        <div className="container">
          <div
            className={`info-grid ${
              infoVisible
                ? "scroll-stagger-children scroll-animate-visible"
                : "scroll-stagger-children"
            }`}
          >
            {infoItems.map((item, index) => {
              const IconComponent =
                item.icon === "Clock"
                  ? Clock
                  : item.icon === "MapPin"
                  ? MapPin
                  : Star;
              return (
                <div key={index} className="info-item">
                  <IconComponent className="info-icon" />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rentals-section" ref={rentalsRef}>
        <div className="container">
          <div
            className={`section-header ${
              rentalsVisible
                ? "scroll-fade-up scroll-animate-visible"
                : "scroll-fade-up"
            }`}
          >
            <h2>Available Rentals</h2>
            <p>Choose from our collection of bouncers and character costumes</p>
          </div>
          <div
            className={`rentals-grid ${
              rentalsVisible
                ? "scroll-stagger-children scroll-animate-visible"
                : "scroll-stagger-children"
            }`}
          >
            {rentalItems.map((item) => (
              <div key={item.id} className="rental-card hover-lift">
                <div className="rental-image-slider">
                  <div className="category-badge">{item.category}</div>
                  <ImageSlider
                    images={item.images}
                    autoPlay={true}
                    interval={3000}
                    showDots={true}
                    showArrows={false}
                  />
                </div>
                <div className="rental-content">
                  <h3>{item.name}</h3>
                  <p className="rental-description">{item.shortDescription}</p>
                  <div className="rental-price">
                    <span className="amount">{item.price}</span>
                    <span className="duration">{item.duration}</span>
                  </div>
                  <button
                    className="details-btn"
                    onClick={() => setSelectedItem(item)}
                  >
                    More Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedItem(null)}
            >
              <Star className="close-icon" />
            </button>
            <div className="modal-body">
              <div className="modal-image-section">
                <ImageSlider
                  images={selectedItem.images}
                  autoPlay={true}
                  interval={4000}
                  showDots={true}
                  showArrows={true}
                />
                <div className="modal-category">{selectedItem.category}</div>
              </div>
              <div className="modal-details">
                <h2>{selectedItem.name}</h2>
                <div className="modal-price">
                  <span className="price-amount">{selectedItem.price}</span>
                  <span className="price-duration">
                    {selectedItem.duration}
                  </span>
                </div>
                <div className="description-section">
                  <h3>Description</h3>
                  <p>{selectedItem.fullDescription}</p>
                </div>
                <div className="specifications-section">
                  <h3>Specifications</h3>
                  <div className="specs-grid">
                    {Object.entries(selectedItem.specifications).map(
                      ([key, value]) => (
                        <div key={key} className="spec-item">
                          <span className="spec-label">
                            {key.replace(/([A-Z])/g, " $1").trim()}:
                          </span>
                          <span className="spec-value">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="features-section">
                  <h3>Features</h3>
                  <ul className="modal-features-list">
                    {selectedItem.features.map((feature, idx) => (
                      <li key={idx}>
                        <Star size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="includes-section">
                  <h3>Rental Includes</h3>
                  <ul className="includes-list">
                    {selectedItem.includes.map((item, idx) => (
                      <li key={idx}>
                        <Star size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="modal-actions">
                  <Link
                    to={`/contact?service=Funcity&specificService=${encodeURIComponent(
                      selectedItem.name
                    )}`}
                    className="book-now-btn"
                  >
                    Book Now
                  </Link>
                  <button
                    className="close-modal-btn"
                    onClick={() => setSelectedItem(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FunCityContent;
