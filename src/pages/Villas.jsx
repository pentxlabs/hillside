import React from 'react';
import { Home, Wifi, Car, Utensils, Shield, Star, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Villas = () => {
  const [typesRef, typesVisible] = useScrollAnimation();
  const [amenitiesRef, amenitiesVisible] = useScrollAnimation();

  const villaTypes = [
    {
      icon: <Home className="villa-icon" />,
      title: "Executive Villa",
      description: "Spacious 3-bedroom villa with modern amenities and private garden.",
      features: ["3 Bedrooms", "Private Pool", "Garden Area", "Modern Kitchen"],
      price: "From $200/night"
    },
    {
      icon: <Star className="villa-icon" />,
      title: "Luxury Suite Villa",
      description: "Premium 4-bedroom villa with stunning views and premium facilities.",
      features: ["4 Bedrooms", "Infinity Pool", "Mountain Views", "Butler Service"],
      price: "From $350/night"
    },
    {
      icon: <Users className="villa-icon" />,
      title: "Family Villa",
      description: "Perfect for large families with multiple bedrooms and entertainment areas.",
      features: ["5 Bedrooms", "Play Area", "BBQ Deck", "Family Room"],
      price: "From $280/night"
    }
  ];

  const amenities = [
    {
      icon: <Wifi className="amenity-icon" />,
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet throughout the villa"
    },
    {
      icon: <Car className="amenity-icon" />,
      title: "Private Parking",
      description: "Secure parking spaces for multiple vehicles"
    },
    {
      icon: <Utensils className="amenity-icon" />,
      title: "Fully Equipped Kitchen",
      description: "Modern kitchen with all appliances and cookware"
    },
    {
      icon: <Shield className="amenity-icon" />,
      title: "24/7 Security",
      description: "Round-the-clock security and concierge service"
    }
  ];

  return (
    <div className="villas">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content animate-fadeInDown">
            <h1>Luxury Villas</h1>
            <p className="delay-200">Experience unparalleled comfort in our premium villa collection</p>
            <div className="hero-buttons animate-fadeInUp delay-400">
              <Link to="/contact" className="cta-button primary">
                Book Your Stay
              </Link>
              <a href="#villas" className="cta-button secondary">
                View Villas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="features-overview">
        <div className="container">
          <div className="features-grid stagger-animation">
            <div className="feature-item">
              <div className="feature-number">50+</div>
              <p>Premium Villas</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">24/7</div>
              <p>Concierge Service</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">100%</div>
              <p>Privacy Guaranteed</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">5★</div>
              <p>Luxury Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Types */}
      <section className="villa-types-section" id="villas" ref={typesRef}>
        <div className="container">
          <div className={`section-header ${typesVisible ? 'scroll-fade-up scroll-animate-visible' : 'scroll-fade-up'}`}>
            <h2>Villa Collection</h2>
            <p>Choose from our exclusive range of luxury villas designed for comfort and elegance</p>
          </div>
          <div className={`villa-types-grid ${typesVisible ? 'scroll-stagger-children scroll-animate-visible' : 'scroll-stagger-children'}`}>
            {villaTypes.map((villa, index) => (
              <div key={index} className="villa-card hover-lift">
                <div className="villa-header">
                  <div className="villa-icon-wrapper">
                    {villa.icon}
                  </div>
                  <div className="villa-info">
                    <h3>{villa.title}</h3>
                    <div className="price">{villa.price}</div>
                  </div>
                </div>
                <p className="villa-description">{villa.description}</p>
                <ul className="villa-features">
                  {villa.features.map((feature, idx) => (
                    <li key={idx}>
                      <Star size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="villa-btn">
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="amenities-section" ref={amenitiesRef}>
        <div className="container">
          <div className={`section-header ${amenitiesVisible ? 'scroll-fade-up scroll-animate-visible' : 'scroll-fade-up'}`}>
            <h2>Premium Amenities</h2>
            <p>Every villa comes equipped with world-class amenities for your comfort</p>
          </div>
          <div className={`amenities-grid ${amenitiesVisible ? 'scroll-stagger-children scroll-animate-visible' : 'scroll-stagger-children'}`}>
            {amenities.map((amenity, index) => (
              <div key={index} className="amenity-card">
                <div className="amenity-icon-wrapper">
                  {amenity.icon}
                </div>
                <h4>{amenity.title}</h4>
                <p>{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="location-section">
        <div className="container">
          <div className="location-content">
            <div className="location-text">
              <h2>Prime Location</h2>
              <p>
                Our villas are strategically located in the most desirable areas, offering 
                stunning views and easy access to local attractions, dining, and entertainment.
              </p>
              <div className="location-features">
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>City Center - 5 minutes</span>
                </div>
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>Airport - 15 minutes</span>
                </div>
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>Beach - 10 minutes</span>
                </div>
              </div>
              <Link to="/contact" className="location-btn">
                Get Directions
              </Link>
            </div>
            <div className="location-image">
              <div className="image-placeholder">
                Premium Villa Locations
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .villas {
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-content h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .hero-content p {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 700px;
          margin: 0 auto 40px;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          margin-top: 40px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-item strong {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #dc2626;
          margin-bottom: 5px;
        }

        .stat-item span {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .services-section {
          padding: 100px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #1e40af;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 40px;
        }

        .service-card-detailed {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .service-card-detailed:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .service-icon-wrapper {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #dc2626, #ef4444);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-icon {
          color: white;
          width: 30px;
          height: 30px;
        }

        .service-header h3 {
          font-size: 1.5rem;
          color: #1e40af;
          font-weight: 600;
          margin: 0;
        }

        .service-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 1.1rem;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin-bottom: 30px;
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: #333;
        }

        .service-features li svg {
          color: #22c55e;
        }

        .service-cta {
          background: #dc2626;
          color: white;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .service-cta:hover {
          background: #b91c1c;
          transform: translateX(5px);
        }

        .packages-section {
          background: #f1f5f9;
          padding: 100px 0;
        }

        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .package-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          border: 1px solid #e5e7eb;
        }

        .package-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .package-card.featured {
          border: 2px solid #dc2626;
          transform: scale(1.05);
        }

        .featured-badge {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: #dc2626;
          color: white;
          padding: 5px 20px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .package-card h3 {
          font-size: 1.5rem;
          color: #1e40af;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .package-price {
          font-size: 2.5rem;
          font-weight: 700;
          color: #dc2626;
          margin-bottom: 25px;
        }

        .package-services {
          list-style: none;
          padding: 0;
          margin-bottom: 30px;
          text-align: left;
        }

        .package-services li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: #333;
        }

        .package-services li svg {
          color: #22c55e;
        }

        .package-btn {
          background: #1e40af;
          color: white;
          padding: 12px 30px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
          transition: all 0.3s ease;
          width: 100%;
        }

        .package-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        .why-choose-section {
          padding: 100px 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .feature-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e5e7eb;
        }

        .feature-icon-wrapper {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .feature-icon {
          color: white;
          width: 30px;
          height: 30px;
        }

        .feature-card h4 {
          font-size: 1.3rem;
          color: #1e40af;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .feature-card p {
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .hero-content h1 {
            font-size: 2.2rem;
          }
          
          .service-header {
            flex-direction: column;
            text-align: center;
          }

          .hero-stats {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Villas;