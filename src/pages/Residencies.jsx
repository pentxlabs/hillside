import React from 'react';
import { Building, Shield, Car, Wifi, Trees, Star, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Residencies = () => {
  const propertyTypes = [
    {
      icon: <Building className="property-icon" />,
      title: "Modern Apartments",
      description: "Contemporary 1-3 bedroom apartments with premium finishes and city views.",
      features: ["1-3 Bedrooms", "City Views", "Modern Design", "Premium Finishes"],
      price: "From $150,000"
    },
    {
      icon: <Trees className="property-icon" />,
      title: "Garden Homes",
      description: "Spacious townhouses with private gardens and family-friendly layouts.",
      features: ["Private Gardens", "3-4 Bedrooms", "Family Layout", "Premium Location"],
      price: "From $250,000"
    },
    {
      icon: <Star className="property-icon" />,
      title: "Luxury Penthouses",
      description: "Exclusive penthouse units with panoramic views and premium amenities.",
      features: ["Panoramic Views", "Luxury Finishes", "Private Terrace", "Exclusive Access"],
      price: "From $500,000"
    }
  ];

  const communityFeatures = [
    {
      icon: <Shield className="feature-icon" />,
      title: "24/7 Security",
      description: "Advanced security systems with round-the-clock monitoring"
    },
    {
      icon: <Car className="feature-icon" />,
      title: "Covered Parking",
      description: "Secure underground parking with easy access"
    },
    {
      icon: <Wifi className="feature-icon" />,
      title: "High-Speed Internet",
      description: "Fiber optic internet infrastructure throughout"
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Community Center",
      description: "Modern recreational facilities and event spaces"
    }
  ];

  const neighborhoods = [
    {
      name: "HillSide Heights",
      description: "Premium hilltop location with stunning valley views",
      features: ["Mountain Views", "Quiet Environment", "Premium Schools"]
    },
    {
      name: "Central District",
      description: "Urban living with easy access to business centers",
      features: ["City Center", "Public Transport", "Shopping Malls"]
    },
    {
      name: "Garden Valley",
      description: "Family-friendly community with parks and recreation",
      features: ["Family Parks", "Schools", "Recreation Centers"]
    }
  ];

  return (
    <div className="residencies">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content animate-fadeInDown">
            <h1>Premium Residencies</h1>
            <p className="delay-200">Discover your perfect home in our exclusive residential communities</p>
            <div className="hero-buttons animate-fadeInUp delay-400">
              <Link to="/contact" className="cta-button primary">
                Schedule Tour
              </Link>
              <a href="#properties" className="cta-button secondary">
                View Properties
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid stagger-animation">
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <p>Premium Units</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <p>Prime Locations</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <p>Occupancy Rate</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <p>Security & Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="property-types-section" id="properties">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2>Property Collection</h2>
            <p>Choose from our diverse range of premium residential properties</p>
          </div>
          <div className="property-types-grid">
            {propertyTypes.map((property, index) => (
              <div key={index} className="property-card hover-lift animate-scaleIn" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="property-header">
                  <div className="property-icon-wrapper">
                    {property.icon}
                  </div>
                  <div className="property-info">
                    <h3>{property.title}</h3>
                    <div className="price">{property.price}</div>
                  </div>
                </div>
                <p className="property-description">{property.description}</p>
                <ul className="property-features">
                  {property.features.map((feature, idx) => (
                    <li key={idx}>
                      <Star size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="property-btn">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="community-section">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2>Community Features</h2>
            <p>Enjoy world-class amenities designed for modern living</p>
          </div>
          <div className="community-grid stagger-animation">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="community-card">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="neighborhoods-section">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2>Prime Neighborhoods</h2>
            <p>Strategic locations offering the best of urban and suburban living</p>
          </div>
          <div className="neighborhoods-grid">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="neighborhood-card hover-lift animate-fadeInUp" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="neighborhood-header">
                  <MapPin className="neighborhood-icon" />
                  <h3>{neighborhood.name}</h3>
                </div>
                <p>{neighborhood.description}</p>
                <ul className="neighborhood-features">
                  {neighborhood.features.map((feature, idx) => (
                    <li key={idx}>
                      <Star size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="investment-section">
        <div className="container">
          <div className="investment-content">
            <div className="investment-text">
              <h2>Smart Investment Choice</h2>
              <p>
                HillSide residencies represent more than just a home - they're a smart investment 
                in your future. Located in rapidly developing areas with strong growth potential.
              </p>
              <div className="investment-benefits">
                <div className="benefit-item">
                  <Star className="benefit-icon" />
                  <span>High ROI Potential</span>
                </div>
                <div className="benefit-item">
                  <Star className="benefit-icon" />
                  <span>Prime Locations</span>
                </div>
                <div className="benefit-item">
                  <Star className="benefit-icon" />
                  <span>Quality Construction</span>
                </div>
              </div>
              <Link to="/contact" className="investment-btn">
                Get Investment Guide
              </Link>
            </div>
            <div className="investment-image">
              <div className="image-placeholder">
                Investment Opportunity
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .residencies {
          min-height: 100vh;
        }

        .hero-section {
          background: linear-gradient(135deg, #2d5016 0%, #3d6b1b 100%);
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
          color: #2d5016;
        }

        .stats-section {
          background: #f8f9fa;
          padding: 60px 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          text-align: center;
        }

        .stat-item {
          padding: 20px;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: #2d5016;
          margin-bottom: 10px;
        }

        .stat-item p {
          color: #666;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .property-types-section {
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

        .property-types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .property-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .property-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .property-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .property-icon-wrapper {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #2d5016, #3d6b1b);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .property-icon {
          color: white;
          width: 30px;
          height: 30px;
        }

        .property-info h3 {
          font-size: 1.5rem;
          color: #1e3c72;
          font-weight: 600;
          margin: 0 0 5px 0;
        }

        .price {
          color: #2d5016;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .property-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 1.1rem;
        }

        .property-features {
          list-style: none;
          padding: 0;
          margin-bottom: 30px;
        }

        .property-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: #333;
        }

        .property-features li svg {
          color: #22c55e;
        }

        .property-btn {
          background: #2d5016;
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

        .property-btn:hover {
          background: #3d6b1b;
          transform: translateY(-2px);
        }

        .community-section {
          background: #f8f9fa;
          padding: 100px 0;
        }

        .community-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .community-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }

        .feature-icon-wrapper {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #ff6b35, #f7931e);
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

        .community-card h4 {
          font-size: 1.3rem;
          color: #1e3c72;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .community-card p {
          color: #666;
          line-height: 1.6;
        }

        .neighborhoods-section {
          padding: 100px 0;
        }

        .neighborhoods-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .neighborhood-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #f0f0f0;
        }

        .neighborhood-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .neighborhood-icon {
          color: #2d5016;
          width: 24px;
          height: 24px;
        }

        .neighborhood-header h3 {
          font-size: 1.4rem;
          color: #1e3c72;
          font-weight: 600;
          margin: 0;
        }

        .neighborhood-card p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .neighborhood-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .neighborhood-features li {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          color: #333;
          font-size: 0.95rem;
        }

        .neighborhood-features li svg {
          color: #22c55e;
        }

        .investment-section {
          background: #f8f9fa;
          padding: 100px 0;
        }

        .investment-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .investment-text h2 {
          font-size: 2.5rem;
          color: #1e3c72;
          margin-bottom: 30px;
          font-weight: 700;
        }

        .investment-text p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 30px;
          font-size: 1.1rem;
        }

        .investment-benefits {
          margin-bottom: 30px;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
          color: #333;
        }

        .benefit-icon {
          color: #2d5016;
          width: 20px;
          height: 20px;
        }

        .investment-btn {
          background: #2d5016;
          color: white;
          padding: 12px 30px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .investment-btn:hover {
          background: #3d6b1b;
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
          
          .property-types-grid {
            grid-template-columns: 1fr;
          }
          
          .investment-content {
            grid-template-columns: 1fr;
          }
          
          .property-header {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Residencies;