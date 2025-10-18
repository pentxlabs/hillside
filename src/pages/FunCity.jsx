import React from 'react';
import { Star, Users, Clock, MapPin, Ticket, Gift, Camera, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const FunCity = () => {
  const attractions = [
    {
      icon: <Star className="attraction-icon" />,
      title: "Adventure Rides",
      description: "Thrilling roller coasters and exciting rides for adrenaline seekers.",
      features: ["High-speed Coasters", "Family Rides", "Water Slides", "Safety Certified"]
    },
    {
      icon: <Users className="attraction-icon" />,
      title: "Family Games",
      description: "Interactive games and activities perfect for families and children.",
      features: ["Arcade Games", "Mini Golf", "Laser Tag", "Virtual Reality"]
    },
    {
      icon: <Gift className="attraction-icon" />,
      title: "Entertainment Shows",
      description: "Live performances, magic shows, and cultural entertainment.",
      features: ["Live Performances", "Magic Shows", "Cultural Events", "Special Programs"]
    },
    {
      icon: <Utensils className="attraction-icon" />,
      title: "Food & Dining",
      description: "Delicious food courts with variety of cuisines and refreshments.",
      features: ["Multiple Cuisines", "Kids Menu", "Refreshments", "Special Dietary Options"]
    }
  ];

  const packages = [
    {
      name: "Family Day Pass",
      price: "$49",
      duration: "Full Day",
      features: ["All Rides Access", "Game Tokens", "Food Voucher", "Free Parking"]
    },
    {
      name: "Premium Experience",
      price: "$79",
      duration: "Full Day",
      features: ["VIP Access", "Skip Lines", "Complimentary Meals", "Photo Package"]
    },
    {
      name: "Group Package",
      price: "$39",
      duration: "Full Day",
      features: ["10+ People", "Group Discounts", "Dedicated Guide", "Special Activities"]
    }
  ];

  return (
    <div className="funcity">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content animate-fadeInDown">
            <h1>Fun City Entertainment</h1>
            <p className="delay-200">Where endless fun meets unforgettable memories for the whole family</p>
            <div className="hero-buttons animate-fadeInUp delay-400">
              <Link to="/contact" className="cta-button primary">
                Book Your Visit
              </Link>
              <a href="#attractions" className="cta-button secondary">
                Explore Attractions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="quick-info-section">
        <div className="container">
          <div className="info-grid stagger-animation">
            <div className="info-item">
              <Clock className="info-icon" />
              <h4>Operating Hours</h4>
              <p>Daily: 10:00 AM - 10:00 PM</p>
            </div>
            <div className="info-item">
              <MapPin className="info-icon" />
              <h4>Location</h4>
              <p>HillSide Entertainment Complex</p>
            </div>
            <div className="info-item">
              <Ticket className="info-icon" />
              <h4>Booking</h4>
              <p>Online & On-site Available</p>
            </div>
            <div className="info-item">
              <Camera className="info-icon" />
              <h4>Photo Services</h4>
              <p>Professional Photography</p>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="attractions-section" id="attractions">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2>Popular Attractions</h2>
            <p>Discover exciting activities and entertainment for all ages</p>
          </div>
          <div className="attractions-grid">
            {attractions.map((attraction, index) => (
              <div key={index} className="attraction-card hover-lift animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="attraction-header">
                  <div className="attraction-icon-wrapper">
                    {attraction.icon}
                  </div>
                  <h3>{attraction.title}</h3>
                </div>
                <p className="attraction-description">{attraction.description}</p>
                <ul className="attraction-features">
                  {attraction.features.map((feature, idx) => (
                    <li key={idx}>
                      <Star size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="packages-section">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2>Exciting Packages</h2>
            <p>Choose the perfect package for your Fun City experience</p>
          </div>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div key={index} className="package-card hover-lift animate-scaleIn" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <div className="price">
                    <span className="amount">{pkg.price}</span>
                    <span className="duration">/{pkg.duration}</span>
                  </div>
                </div>
                <ul className="package-features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <Star size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="package-btn">
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .funcity {
          min-height: 100vh;
        }

        .hero-section {
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
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
          background: white;
          color: #ff6b35;
        }

        .cta-button.primary:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
        }

        .cta-button.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-button.secondary:hover {
          background: white;
          color: #ff6b35;
        }

        .quick-info-section {
          background: #f8f9fa;
          padding: 60px 0;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .info-item {
          text-align: center;
          padding: 20px;
        }

        .info-icon {
          width: 40px;
          height: 40px;
          color: #ff6b35;
          margin-bottom: 15px;
        }

        .info-item h4 {
          font-size: 1.2rem;
          color: #1e3c72;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .info-item p {
          color: #666;
          font-size: 1rem;
        }

        .attractions-section {
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

        .attractions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 40px;
        }

        .attraction-card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .attraction-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .attraction-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .attraction-icon-wrapper {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .attraction-icon {
          color: white;
          width: 30px;
          height: 30px;
        }

        .attraction-header h3 {
          font-size: 1.5rem;
          color: #1e3c72;
          font-weight: 600;
          margin: 0;
        }

        .attraction-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 1.1rem;
        }

        .attraction-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .attraction-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: #333;
        }

        .attraction-features li svg {
          color: #22c55e;
        }

        .packages-section {
          background: #f8f9fa;
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
        }

        .package-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .package-header {
          margin-bottom: 30px;
        }

        .package-header h3 {
          font-size: 1.5rem;
          color: #1e3c72;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 5px;
        }

        .amount {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ff6b35;
        }

        .duration {
          font-size: 1rem;
          color: #666;
        }

        .package-features {
          list-style: none;
          padding: 0;
          margin-bottom: 30px;
          text-align: left;
        }

        .package-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: #333;
        }

        .package-features li svg {
          color: #22c55e;
        }

        .package-btn {
          background: #ff6b35;
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
          background: #e55a2b;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .attractions-grid {
            grid-template-columns: 1fr;
          }
          
          .attraction-header {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default FunCity;