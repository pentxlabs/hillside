import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Car, Star } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import PageHero from "../components/PageHero";
import { vehicles, stats, processSteps } from "../config/weddingHiresConfig";
import "./WeddingHiresContent.css";

const iconMap = {
  Car,
};

const vehiclesWithIcons = vehicles.map((vehicle) => ({
  ...vehicle,
  icon: iconMap[vehicle.iconName]
    ? React.createElement(iconMap[vehicle.iconName], {
        className: "service-icon",
      })
    : null,
}));

const VehicleProduct = ({ vehicle }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="vehicle-product">
      {/* Left Side - Details */}
      <div className="vehicle-details">
        <div className="service-icon-wrapper">{vehicle.icon}</div>
        <h3>{vehicle.title}</h3>
        <p className="vehicle-description">{vehicle.description}</p>

        <div className="vehicle-price">{vehicle.price}</div>

        <div className="vehicle-features">
          <h4>Features</h4>
          <ul>
            {vehicle.features.map((feature, idx) => (
              <li key={idx}>
                <Star size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to={`/contact?service=Wedding%20Hires&specificService=${encodeURIComponent(
            vehicle.title
          )}`}
          className="btn-primary"
        >
          Book Now
        </Link>
      </div>

      {/* Right Side - Images */}
      <div className="vehicle-images">
        <div className="main-image">
          <img src={vehicle.images[selectedImage]} alt={vehicle.title} />
        </div>
        <div className="thumbnail-images">
          {vehicle.images.map((image, idx) => (
            <div
              key={idx}
              className={`thumbnail ${selectedImage === idx ? "active" : ""}`}
              onClick={() => setSelectedImage(idx)}
            >
              <img src={image} alt={`${vehicle.title} ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WeddingHiresContent = () => {
  const [statsRef, statsVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [processRef, processVisible] = useScrollAnimation();

  return (
    <div className="wedding-hires-content">
      <PageHero
        title="Wedding Hires"
        subtitle="Luxury wedding vehicles to make your special day unforgettable"
        backgroundImage="https://res.cloudinary.com/dpcrbou1v/image/upload/v1761476267/car1_k15w2c.png"
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

      <section className="services-section" ref={servicesRef}>
        <div className="container">
          <div
            className={`section-header ${
              servicesVisible
                ? "scroll-fade-up scroll-animate-visible"
                : "scroll-fade-up"
            }`}
          >
            <h2>Premium Wedding Vehicles</h2>
            <p>
              Choose from our fleet of luxury vehicles to make your wedding day
              unforgettable
            </p>
          </div>
          <div
            className={`vehicle-product-grid ${
              servicesVisible
                ? "scroll-fade-up scroll-animate-visible"
                : "scroll-fade-up"
            }`}
          >
            {vehiclesWithIcons.map((vehicle, index) => (
              <VehicleProduct key={index} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      <section className="process-section" ref={processRef}>
        <div className="container">
          <div
            className={`section-header ${
              processVisible
                ? "scroll-fade-up scroll-animate-visible"
                : "scroll-fade-up"
            }`}
          >
            <h2>Our Vehicle Hire Process</h2>
            <p>
              A simple and seamless process to book your perfect wedding vehicle
            </p>
          </div>
          <div
            className={`process-steps ${
              processVisible
                ? "scroll-stagger-children scroll-animate-visible"
                : "scroll-stagger-children"
            }`}
          >
            {processSteps.map((process, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{process.step}</div>
                <div className="step-content">
                  <h4>{process.title}</h4>
                  <p>{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingHiresContent;
