import React from 'react';
import { Building, Shield, Car, Wifi, Trees, Star, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ResidenciesContent.css';

const ResidenciesContent = () => {
  const [statsRef, statsVisible] = useScrollAnimation();
  const [propertyRef, propertyVisible] = useScrollAnimation();
  const [communityRef, communityVisible] = useScrollAnimation();
  const [neighborhoodRef, neighborhoodVisible] = useScrollAnimation();
  const [investmentRef, investmentVisible] = useScrollAnimation();
  const propertyTypes = [
    { icon: <Building className="property-icon" />, title: "Modern Apartments", description: "Contemporary 1-3 bedroom apartments with premium finishes and city views.", features: ["1-3 Bedrooms", "City Views", "Modern Design", "Premium Finishes"], price: "From $150,000" },
    { icon: <Trees className="property-icon" />, title: "Garden Homes", description: "Spacious townhouses with private gardens and family-friendly layouts.", features: ["Private Gardens", "3-4 Bedrooms", "Family Layout", "Premium Location"], price: "From $250,000" },
    { icon: <Star className="property-icon" />, title: "Luxury Penthouses", description: "Exclusive penthouse units with panoramic views and premium amenities.", features: ["Panoramic Views", "Luxury Finishes", "Private Terrace", "Exclusive Access"], price: "From $500,000" }
  ];

  const communityFeatures = [
    { icon: <Shield className="feature-icon" />, title: "24/7 Security", description: "Advanced security systems with round-the-clock monitoring" },
    { icon: <Car className="feature-icon" />, title: "Covered Parking", description: "Secure underground parking with easy access" },
    { icon: <Wifi className="feature-icon" />, title: "High-Speed Internet", description: "Fiber optic internet infrastructure throughout" },
    { icon: <Users className="feature-icon" />, title: "Community Center", description: "Modern recreational facilities and event spaces" }
  ];

  const neighborhoods = [
    { name: "HillSide Heights", description: "Premium hilltop location with stunning valley views", features: ["Mountain Views", "Quiet Environment", "Premium Schools"] },
    { name: "Central District", description: "Urban living with easy access to business centers", features: ["City Center", "Public Transport", "Shopping Malls"] },
    { name: "Garden Valley", description: "Family-friendly community with parks and recreation", features: ["Family Parks", "Schools", "Recreation Centers"] }
  ];

  return (
    <div className="residencies-content">
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className={`stats-grid ${statsVisible ? 'scroll-stagger-children scroll-animate-visible' : 'scroll-stagger-children'}`}>
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

      <section className="property-types-section" ref={propertyRef}>
        <div className="container">
          <div className={`section-header ${propertyVisible ? 'scroll-fade-up scroll-animate-visible' : 'scroll-fade-up'}`}>
            <h2>Property Collection</h2>
            <p>Choose from our diverse range of premium residential properties</p>
          </div>
          <div className={`property-types-grid ${propertyVisible ? 'scroll-stagger-children scroll-animate-visible' : 'scroll-stagger-children'}`}>
            {propertyTypes.map((property, index) => (
              <div key={index} className="property-card hover-lift">
                <div className="property-header">
                  <div className="property-icon-wrapper">{property.icon}</div>
                  <div className="property-info">
                    <h3>{property.title}</h3>
                    <div className="price">{property.price}</div>
                  </div>
                </div>
                <p className="property-description">{property.description}</p>
                <ul className="property-features">
                  {property.features.map((feature, idx) => (
                    <li key={idx}><Star size={16} />{feature}</li>
                  ))}
                </ul>
                <Link to="/contact" className="property-btn">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="community-section" ref={communityRef}>
        <div className="container">
          <div className={`section-header ${communityVisible ? 'scroll-fade-up scroll-animate-visible' : 'scroll-fade-up'}`}>
            <h2>Community Features</h2>
            <p>Enjoy world-class amenities designed for modern living</p>
          </div>
          <div className={`community-grid ${communityVisible ? 'scroll-stagger-children scroll-animate-visible' : 'scroll-stagger-children'}`}>
            {communityFeatures.map((feature, index) => (
              <div key={index} className="community-card">
                <div className="feature-icon-wrapper">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="neighborhoods-section" ref={neighborhoodRef}>
        <div className="container">
          <div className={`section-header ${neighborhoodVisible ? 'scroll-fade-up scroll-animate-visible' : 'scroll-fade-up'}`}>
            <h2>Prime Neighborhoods</h2>
            <p>Strategic locations offering the best of urban and suburban living</p>
          </div>
          <div className={`neighborhoods-grid ${neighborhoodVisible ? 'scroll-stagger-children scroll-animate-visible' : 'scroll-stagger-children'}`}>
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="neighborhood-card hover-lift">
                <div className="neighborhood-header">
                  <MapPin className="neighborhood-icon" />
                  <h3>{neighborhood.name}</h3>
                </div>
                <p>{neighborhood.description}</p>
                <ul className="neighborhood-features">
                  {neighborhood.features.map((feature, idx) => (
                    <li key={idx}><Star size={14} />{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="investment-section" ref={investmentRef}>
        <div className="container">
          <div className="investment-content">
            <div className={`investment-text ${investmentVisible ? 'scroll-fade-left scroll-animate-visible' : 'scroll-fade-left'}`}>
              <h2>Smart Investment Choice</h2>
              <p>HillSide residencies represent more than just a home - they're a smart investment in your future. Located in rapidly developing areas with strong growth potential.</p>
              <div className="investment-benefits">
                <div className="benefit-item"><Star className="benefit-icon" /><span>High ROI Potential</span></div>
                <div className="benefit-item"><Star className="benefit-icon" /><span>Prime Locations</span></div>
                <div className="benefit-item"><Star className="benefit-icon" /><span>Quality Construction</span></div>
              </div>
              <Link to="/contact" className="investment-btn">Get Investment Guide</Link>
            </div>
            <div className={`investment-image ${investmentVisible ? 'scroll-fade-right scroll-animate-visible' : 'scroll-fade-right'}`}>
              <div className="image-placeholder">Investment Opportunity</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidenciesContent;
