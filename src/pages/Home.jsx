import React from 'react';
import { ArrowRight, Star, Users, Award, MapPin, Phone, Shield, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Home.css';

const Home = () => {
  // Scroll animation hooks for different sections
  const [statsRef, statsVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [featuresRef, featuresVisible] = useScrollAnimation();
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

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

  const features = [
    {
      icon: <Shield className="feature-icon" />,
      title: "Trusted & Secure",
      description: "All our properties and services are fully verified and secure for your peace of mind."
    },
    {
      icon: <Clock className="feature-icon" />,
      title: "24/7 Availability",
      description: "Round-the-clock customer support and service assistance whenever you need us."
    },
    {
      icon: <Award className="feature-icon" />,
      title: "Award Winning",
      description: "Recognized for excellence in hospitality and customer service across the industry."
    },
    {
      icon: <Heart className="feature-icon" />,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We go above and beyond to ensure excellence."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Villa Guest",
      rating: 5,
      comment: "Outstanding service and breathtaking property! The attention to detail and hospitality exceeded all our expectations. Highly recommend!"
    },
    {
      name: "Michael Chen",
      role: "Wedding Client",
      rating: 5,
      comment: "Our wedding day was perfect thanks to the HillSide team. They handled everything professionally and made our special day unforgettable."
    },
    {
      name: "Emily Roberts",
      role: "Fun City Visitor",
      rating: 5,
      comment: "Amazing family experience! The kids had a blast and the facilities were top-notch. We'll definitely be coming back."
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="animate-fadeInDown">Welcome to HillSide</h1>
          <p className="animate-fadeInUp delay-200">Your premier destination for luxury living, entertainment, and exceptional service</p>
          <div className="hero-buttons animate-fadeInUp delay-400">
            <Link to="/service" className="cta-button primary">
              Explore Services <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hero-image animate-fadeInRight delay-300">
          <div className="hero-placeholder">
            Premium Lifestyle Awaits
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className={`stats-grid ${statsVisible ? 'scroll-stagger-children scroll-animate-visible' : 'scroll-stagger-children'}`}>
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
      <section className="services-section" ref={servicesRef}>
        <div className="container">
          <div className={`section-header ${servicesVisible ? 'scroll-fade-up scroll-animate-visible' : 'scroll-fade-up'}`}>
            <h2>Our Premium Services</h2>
            <p>Discover the exceptional services that make HillSide your ideal choice</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`service-card hover-lift ${servicesVisible ? 'scroll-scale-in scroll-animate-visible' : 'scroll-scale-in'} scroll-animate-delay-${index + 1}`}
              >
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
      <section className="about-preview" ref={aboutRef}>
        <div className="container">
          <div className="about-content">
            <div className={`about-text ${aboutVisible ? 'scroll-fade-left scroll-animate-visible' : 'scroll-fade-left'}`}>
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
            <div className={`about-image ${aboutVisible ? 'scroll-fade-right scroll-animate-visible' : 'scroll-fade-right'}`}>
              <div className="about-placeholder">
                Professional Excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" ref={featuresRef}>
        <div className="container">
          <div className={`section-header ${featuresVisible ? 'scroll-fade-up scroll-animate-visible' : 'scroll-fade-up'}`}>
            <h2>Why Choose HillSide</h2>
            <p>Discover what sets us apart and makes us the preferred choice for luxury experiences</p>
          </div>
          <div className={`features-grid ${featuresVisible ? 'scroll-stagger-children scroll-animate-visible' : 'scroll-stagger-children'}`}>
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" ref={testimonialsRef}>
        <div className="container">
          <div className={`section-header ${testimonialsVisible ? 'scroll-fade-up scroll-animate-visible' : 'scroll-fade-up'}`}>
            <h2>What Our Clients Say</h2>
            <p>Real experiences from our valued customers who have chosen HillSide</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`testimonial-card hover-lift ${testimonialsVisible ? 'scroll-scale-in scroll-animate-visible' : 'scroll-scale-in'} scroll-animate-delay-${index + 1}`}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="star-icon" fill="#fbbf24" color="#fbbf24" size={20} />
                  ))}
                </div>
                <p className="testimonial-comment">"{testimonial.comment}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" ref={ctaRef}>
        <div className="container">
          <div className={`cta-content ${ctaVisible ? 'scroll-blur-in scroll-animate-visible' : 'scroll-blur-in'}`}>
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
