import React from 'react';
import { Camera, Music, Utensils, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Venue Decoration',
    description: 'Stunning and personalized decoration for your wedding venue.',
    features: ['Custom Themes', 'Floral Arrangements', 'Lighting Design'],
    icon: <Camera className="service-icon" />,
  },
  {
    title: 'Catering Services',
    description: 'Delicious catering options to satisfy every palate.',
    features: ['Buffet & Plated Options', 'Custom Menus', 'Tasting Sessions'],
    icon: <Utensils className="service-icon" />,
  },
  {
    title: 'Photography & Videography',
    description: 'Capture every moment with our professional photography and videography services.',
    features: ['Full-Day Coverage', 'Drone Photography', 'Photo Albums'],
    icon: <Camera className="service-icon" />,
  },
  {
    title: 'Music & Entertainment',
    description: 'Keep your guests entertained with our music and entertainment packages.',
    features: ['DJ Services', 'Live Bands', 'Photo Booths'],
    icon: <Music className="service-icon" />,
  },
  {
    title: 'Wedding Planning',
    description: 'Comprehensive wedding planning services to make your dream wedding a reality.',
    features: ['Budget Management', 'Timeline Creation', 'Vendor Coordination'],
    icon: <Users className="service-icon" />,
  },
];

const packages = [
  {
    name: 'Basic Package',
    price: '$999',
    duration: 'Per Day',
    features: ['Venue Decoration', 'Photography', 'Basic Catering'],
  },
  {
    name: 'Premium Package',
    price: '$1999',
    duration: 'Per Day',
    features: ['All Basic Features', 'Advanced Catering', 'Live Music', 'Photo Booth'],
  },
  {
    name: 'Luxury Package',
    price: '$2999',
    duration: 'Per Day',
    features: ['All Premium Features', 'Drone Photography', 'Gourmet Catering', 'Wedding Cake'],
  },
];

const WeddingHires = () => {
  return (
    <div className="wedding-hires">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content animate-fadeInDown">
            <h1>Wedding Services</h1>
            <p className="delay-200">Creating magical moments for your perfect wedding day</p>
            <div className="hero-buttons animate-fadeInUp delay-400">
              <Link to="/contact" className="cta-button primary">
                Plan Your Wedding
              </Link>
              <a href="#services" className="cta-button secondary">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid stagger-animation">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <p>Weddings Organized</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <p>Partner Vendors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2>Complete Wedding Services</h2>
            <p>Everything you need for your perfect wedding day, all in one place</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card hover-lift animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
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

      {/* Wedding Packages */}
      <section className="packages-section">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2>Wedding Packages</h2>
            <p>Choose the perfect package that matches your dream wedding vision</p>
          </div>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div key={index} className={`package-card hover-lift animate-scaleIn ${index === 1 ? 'featured' : ''}`} style={{animationDelay: `${index * 0.15}s`}}>
                {index === 1 && <div className="featured-badge">Most Popular</div>}
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
                  Choose Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Wedding Planning Process</h2>
            <p>A seamless journey from initial consultation to your perfect day</p>
          </div>
          <div className="process-steps">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Initial Consultation</h4>
                <p>We discuss your vision, preferences, and budget to understand your dream wedding.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Planning & Design</h4>
                <p>Our team creates a detailed plan and design concept tailored to your wishes.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Vendor Coordination</h4>
                <p>We coordinate with all vendors and manage every detail of your wedding.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Perfect Execution</h4>
                <p>On your special day, we ensure everything runs smoothly while you enjoy every moment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .wedding-hires {
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
          background: #dc2626;
          color: white;
        }

        .cta-button.primary:hover {
          background: #b91c1c;
          transform: translateY(-2px);
        }

        .cta-button.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-button.secondary:hover {
          background: white;
          color: #1e40af;
        }

        .stats-section {
          background: #f1f5f9;
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
          color: #1e40af;
          margin-bottom: 10px;
        }

        .stat-item p {
          color: #666;
          font-size: 1.1rem;
          font-weight: 500;
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
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .service-card:hover {
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
          font-size: 1.4rem;
          color: #1e40af;
          font-weight: 600;
          margin: 0;
        }

        .service-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
          font-size: 1rem;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          color: #333;
          font-size: 0.95rem;
        }

        .service-features li svg {
          color: #22c55e;
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
          border: 2px solid #1e40af;
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

        .package-header {
          margin-bottom: 30px;
        }

        .package-header h3 {
          font-size: 1.5rem;
          color: #1e40af;
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
          color: #dc2626;
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

        .process-section {
          padding: 100px 0;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .step-item {
          text-align: center;
          padding: 20px;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #dc2626, #ef4444);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 20px;
        }

        .step-content h4 {
          font-size: 1.3rem;
          color: #1e40af;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .step-content p {
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.2rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .service-header {
            flex-direction: column;
            text-align: center;
          }
          
          .process-steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default WeddingHires;