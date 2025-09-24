import React from 'react';
import { CheckCircle, Star, Award, Clock, Shield, Car, Wrench, Droplets, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

const Service = () => {
  const services = [
    {
      icon: <Droplets className="service-icon" />,
      title: "Express Oil Change",
      description: "Quick and professional oil change services with premium lubricants for optimal engine performance.",
      features: ["Premium Oil Brands", "15-Minute Service", "Filter Replacement", "Multi-Point Inspection"]
    },
    {
      icon: <Car className="service-icon" />,
      title: "Vehicle Maintenance",
      description: "Comprehensive vehicle maintenance services to keep your car running smoothly and efficiently.",
      features: ["Scheduled Maintenance", "Brake Service", "Tire Rotation", "Fluid Top-ups"]
    },
    {
      icon: <Wrench className="service-icon" />,
      title: "Auto Repair Services",
      description: "Expert automotive repair services with certified technicians and quality parts.",
      features: ["Engine Diagnostics", "Transmission Service", "Electrical Repairs", "AC Service"]
    },
    {
      icon: <Gauge className="service-icon" />,
      title: "Performance Upgrades",
      description: "Vehicle performance enhancement services to optimize your car's efficiency and power.",
      features: ["Engine Tuning", "Performance Filters", "Exhaust Systems", "ECU Remapping"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Star className="feature-icon" />,
      title: "Expert Technicians",
      description: "ASE-certified technicians with years of experience in automotive service."
    },
    {
      icon: <Clock className="feature-icon" />,
      title: "Quick Service",
      description: "Fast, efficient service to get you back on the road quickly."
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Quality Guarantee",
      description: "All services backed by our comprehensive warranty and satisfaction guarantee."
    },
    {
      icon: <Award className="feature-icon" />,
      title: "Premium Products",
      description: "We use only top-quality oils, filters, and parts from trusted brands."
    }
  ];

  const servicePackages = [
    {
      title: "Basic Oil Change",
      price: "$29.99",
      services: ["Conventional Oil", "Oil Filter", "Fluid Check", "Visual Inspection"]
    },
    {
      title: "Full Synthetic",
      price: "$49.99",
      services: ["Full Synthetic Oil", "Premium Filter", "21-Point Inspection", "Fluid Top-off"]
    },
    {
      title: "Complete Service",
      price: "$89.99",
      services: ["Full Synthetic Oil", "Air Filter", "Cabin Filter", "Brake Inspection", "Battery Test"]
    }
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>HillSide Express & Lube Services</h1>
            <p>Professional automotive services with quick, reliable, and quality care for your vehicle</p>
            <div className="hero-stats">
              <div className="stat-item">
                <strong>15 Min</strong>
                <span>Express Service</span>
              </div>
              <div className="stat-item">
                <strong>10,000+</strong>
                <span>Vehicles Serviced</span>
              </div>
              <div className="stat-item">
                <strong>100%</strong>
                <span>Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Automotive Services</h2>
            <p>Comprehensive vehicle care from oil changes to complete automotive solutions</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card-detailed">
                <div className="service-header">
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="service-cta">
                  Book Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="packages-section">
        <div className="container">
          <div className="section-header">
            <h2>Service Packages</h2>
            <p>Choose the right service package for your vehicle's needs</p>
          </div>
          <div className="packages-grid">
            {servicePackages.map((pkg, index) => (
              <div key={index} className={`package-card ${index === 1 ? 'featured' : ''}`}>
                {index === 1 && <div className="featured-badge">Most Popular</div>}
                <h3>{pkg.title}</h3>
                <div className="package-price">{pkg.price}</div>
                <ul className="package-services">
                  {pkg.services.map((service, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} />
                      {service}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="package-btn">
                  Choose Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose HillSide Express & Lube?</h2>
            <p>We're committed to providing the best automotive service experience</p>
          </div>
          <div className="features-grid">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="feature-card">
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

      <style jsx>{`
        .service-page {
          min-height: 100vh;
        }

        .hero-section {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
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

          .packages-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Service;