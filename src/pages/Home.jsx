import React from 'react';
import { ArrowRight, Star, Users, Award, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: <Award className="service-icon" />,
      title: "Luxury Villas",
      description: "Premium villa rentals with world-class amenities and breathtaking views.",
      link: "/villas"
    },
    {
      icon: <Users className="service-icon" />,
      title: "Wedding Services",
      description: "Complete wedding planning and hire services for your perfect day.",
      link: "/wedding-hires"
    },
    {
      icon: <Star className="service-icon" />,
      title: "Fun City Entertainment",
      description: "Family entertainment destination with rides, games, and activities.",
      link: "/funcity"
    },
    {
      icon: <MapPin className="service-icon" />,
      title: "Premium Residencies",
      description: "Exclusive residential properties in prime locations.",
      link: "/residencies"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "50+", label: "Properties" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to HillSide</h1>
          <p>Your premier destination for luxury living, entertainment, and exceptional service</p>
          <div className="hero-buttons">
            <Link to="/service" className="cta-button primary">
              Explore Services <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            Premium Lifestyle Awaits
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Premium Services</h2>
            <p>Discover the exceptional services that make HillSide your ideal choice</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Excellence in Every Detail</h2>
              <p>
                For over a decade, HillSide has been synonymous with luxury, quality, and exceptional service. 
                We pride ourselves on creating unforgettable experiences and providing world-class amenities 
                that exceed expectations.
              </p>
              <p>
                Our commitment to excellence has made us the preferred choice for discerning clients 
                who demand nothing but the best.
              </p>
              <Link to="/about" className="about-link">
                Learn About Us <ArrowRight size={16} />
              </Link>
            </div>
            <div className="about-image">
              <div className="about-placeholder">
                Professional Excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Excellence?</h2>
            <p>Contact us today to discover how HillSide can exceed your expectations</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                Get In Touch
              </Link>
              <a href="tel:+1234567890" className="cta-button secondary">
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
