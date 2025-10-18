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

        .hero-section {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
          padding: 120px 0 80px;
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .hero-content p {
          font-size: 1.3rem;
          opacity: 0.9;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .cta-button {
          padding: 15px 30px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .cta-button.primary {
          background: #ff6b35;
          color: white;
        }

        .cta-button.primary:hover {
          background: #e55a2b;
          transform: translateY(-2px);
        }

        .cta-button.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-button.secondary:hover {
          background: white;
          color: #1e3c72;
        }

        .features-overview {
          background: #f8f9fa;
          padding: 60px 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          text-align: center;
        }

        .feature-item {
          padding: 20px;
        }

        .feature-number {
          font-size: 3rem;
          font-weight: 700;
          color: #ff6b35;
          margin-bottom: 10px;
        }

        .feature-item p {
          color: #666;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .villa-types-section {
          padding: 100px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.8rem;
          color: #1e3c72;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .villa-types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .villa-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .villa-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .villa-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .villa-icon-wrapper {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .villa-icon {
          color: white;
          width: 30px;
          height: 30px;
        }

        .villa-info h3 {
          font-size: 1.5rem;
          color: #1e3c72;
          font-weight: 600;
          margin: 0 0 5px 0;
        }

        .price {
          color: #ff6b35;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .villa-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 1.1rem;
        }

        .villa-features {
          list-style: none;
          padding: 0;
          margin-bottom: 30px;
        }

        .villa-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: #333;
        }

        .villa-features li svg {
          color: #22c55e;
        }

        .villa-btn {
          background: #ff6b35;
          color: white;
          padding: 12px 30px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
          transition: all 0.3s ease;
          width: 100%;
          text-align: center;
        }

        .villa-btn:hover {
          background: #e55a2b;
          transform: translateY(-2px);
        }

        .amenities-section {
          background: #f8f9fa;
          padding: 100px 0;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .amenity-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }

        .amenity-icon-wrapper {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .amenity-icon {
          color: white;
          width: 30px;
          height: 30px;
        }

        .amenity-card h4 {
          font-size: 1.3rem;
          color: #1e3c72;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .amenity-card p {
          color: #666;
          line-height: 1.6;
        }

        .location-section {
          padding: 100px 0;
        }

        .location-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .location-text h2 {
          font-size: 2.5rem;
          color: #1e3c72;
          margin-bottom: 30px;
          font-weight: 700;
        }

        .location-text p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 30px;
          font-size: 1.1rem;
        }

        .location-features {
          margin-bottom: 30px;
        }

        .location-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
          color: #333;
        }

        .location-icon {
          color: #ff6b35;
          width: 20px;
          height: 20px;
        }

        .location-btn {
          background: #1e3c72;
          color: white;
          padding: 12px 30px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .location-btn:hover {
          background: #2a5298;
          transform: translateY(-2px);
        }

        .image-placeholder {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 600;
          color: #666;
          border: 2px dashed #dee2e6;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .villa-types-grid {
            grid-template-columns: 1fr;
          }
          
          .location-content {
            grid-template-columns: 1fr;
          }
          
          .villa-header {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Villas;