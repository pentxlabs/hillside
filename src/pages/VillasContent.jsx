import React, { useState } from "react";
import {
  Home,
  Wifi,
  Car,
  Utensils,
  Shield,
  Star,
  Users,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import PageHero from "../components/PageHero";
import {
  villas,
  stats,
  amenities,
  locationFeatures,
} from "../config/villasConfig";
import "./VillasContent.css";

const iconMap = {
  Home,
  Star,
  Users,
  Wifi,
  Car,
  Utensils,
  Shield,
};

const villasWithIcons = villas.map((villa) => ({
  ...villa,
  icon: iconMap[villa.iconName]
    ? React.createElement(iconMap[villa.iconName], { className: "villa-icon" })
    : null,
}));

const amenitiesWithIcons = amenities.map((amenity) => ({
  ...amenity,
  icon: iconMap[amenity.iconName]
    ? React.createElement(iconMap[amenity.iconName], {
        className: "amenity-icon",
      })
    : null,
}));

const VillaProduct = ({ villa }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="villa-product">
      <div className="villa-details">
        <div className="villa-icon-wrapper">{villa.icon}</div>
        <h3>{villa.title}</h3>
        <p className="villa-description">{villa.description}</p>
        <div className="villa-price">{villa.price}</div>
        <div className="villa-features">
          <h4>Features</h4>
          <ul>
            {villa.features.map((feature, idx) => (
              <li key={idx}>
                <Star size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link
          to={`/contact?service=Villas&specificService=${encodeURIComponent(
            villa.title
          )}`}
          className="btn-primary"
        >
          Book Now
        </Link>
      </div>
      <div className="villa-images">
        <div className="main-image">
          <img src={villa.images[selectedImage]} alt={villa.title} />
        </div>
        <div className="thumbnail-images">
          {villa.images.map((image, idx) => (
            <div
              key={idx}
              className={`thumbnail ${selectedImage === idx ? "active" : ""}`}
              onClick={() => setSelectedImage(idx)}
            >
              <img src={image} alt={`${villa.title} ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const VillasContent = () => {
  const [statsRef, statsVisible] = useScrollAnimation();
  const [villasRef, villasVisible] = useScrollAnimation();
  const [amenitiesRef, amenitiesVisible] = useScrollAnimation();

  return (
    <div className="villas-content">
      <PageHero
        title="Luxury Villas"
        subtitle="Premium villa rentals for your perfect getaway"
        backgroundImage="https://res.cloudinary.com/dpcrbou1v/image/upload/v1762076616/unnamed_tianfm.webp"
      />
      {/* <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className={`stats-grid ${statsVisible ? 'scroll-stagger-children scroll-animate-visible' : 'scroll-stagger-children'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="villas-section" ref={villasRef}>
        <div className="container">
          <div
            className={`section-header ${
              villasVisible
                ? "scroll-fade-up scroll-animate-visible"
                : "scroll-fade-up"
            }`}
          >
            <h2>Premium Villa Collection</h2>
            <p>
              Choose from our exclusive range of luxury villas designed for
              comfort and elegance
            </p>
          </div>
          <div
            className={`villa-product-grid ${
              villasVisible
                ? "scroll-fade-up scroll-animate-visible"
                : "scroll-fade-up"
            }`}
          >
            {villasWithIcons.map((villa, index) => (
              <VillaProduct key={index} villa={villa} />
            ))}
          </div>
        </div>
      </section>

      <section className="amenities-section" ref={amenitiesRef}>
        <div className="container">
          <div
            className={`section-header ${
              amenitiesVisible
                ? "scroll-fade-up scroll-animate-visible"
                : "scroll-fade-up"
            }`}
          >
            <h2>Premium Amenities</h2>
            <p>
              Every villa comes equipped with world-class amenities for your
              comfort
            </p>
          </div>
          <div
            className={`amenities-grid ${
              amenitiesVisible
                ? "scroll-stagger-children scroll-animate-visible"
                : "scroll-stagger-children"
            }`}
          >
            {amenitiesWithIcons.map((amenity, index) => (
              <div key={index} className="amenity-card">
                <div className="amenity-icon-wrapper">{amenity.icon}</div>
                <h4>{amenity.title}</h4>
                <p>{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="container">
          <div className="location-content">
            <div className="location-text">
              <h2>Prime Location</h2>
              <p>
                Our villas are strategically located in the most desirable
                areas, offering stunning views and easy access to local
                attractions, dining, and entertainment.
              </p>
              <div className="location-features">
                {locationFeatures.map((feature, index) => (
                  <div key={index} className="location-item">
                    <MapPin className="location-icon" />
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
              <Link
                to={`/contact?service=Villas&specificService=Location%20Inquiry`}
                className="location-btn"
              >
                Get Directions
              </Link>
            </div>
            <div className="location-image">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126959.14487661584!2d80.16315485084245!3d6.066728572643713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ae17180d0f8c24b%3A0x327400606887d1dd!2sRoyal%20Mannar%20City%2C%20The%20Aroma%20Club%2C%2032-33%20Godaduwa%20Rd%2C%20Galle%2080000!3m2!1d6.0666835!2d80.2455657!5e0!3m2!1sen!2slk!4v1762096795328!5m2!1sen!2slk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Villa Location Map"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VillasContent;
