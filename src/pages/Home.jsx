import React from 'react';
import { ArrowRight, Star, Users, Award, MapPin, Phone, Shield, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ImageSlider from '../components/image-display/ImageSlider';
import './Home.css';

const Home = () => {
  // Scroll animation hooks for different sections
  const [statsRef, statsVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [featuresRef, featuresVisible] = useScrollAnimation();
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

  // Hero slider images
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80',
      alt: 'Luxury Villa with Pool',
      title: 'Luxury Villas',
      description: 'Experience unparalleled luxury in our premium villas'
    },
    {
      url: 'https://images.unsplash.com/photo-1519167758481-83f29da8fd2a?w=1920&q=80',
      alt: 'Wedding Celebration',
      title: 'Wedding Services',
      description: 'Make your special day unforgettable'
    },
    {
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1920&q=80',
      alt: 'Fun City Entertainment',
      title: 'Fun City',
      description: 'Family entertainment at its finest'
    },
    {
      url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
      alt: 'Premium Residencies',
      title: 'Residencies',
      description: 'Exclusive living spaces in prime locations'
    }
  ];

  // Service-specific images
  const villaImages = [
    {
      url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      alt: 'Modern Villa Exterior',
      title: 'Modern Architecture'
    },
    {
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      alt: 'Luxury Villa Interior',
      title: 'Luxury Interiors'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      alt: 'Villa Pool Area',
      title: 'Private Pool'
    }
  ];

  const weddingImages = [
    {
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
      alt: 'Wedding Venue',
      title: 'Beautiful Venues'
    },
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
      alt: 'Wedding Decoration',
      title: 'Elegant Decor'
    },
    {
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
      alt: 'Wedding Ceremony',
      title: 'Perfect Ceremonies'
    }
  ];

  const funCityImages = [
    {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      alt: 'Fun City Rides',
      title: 'Exciting Rides'
    },
    {
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80',
      alt: 'Family Entertainment',
      title: 'Family Fun'
    },
    {
      url: 'https://images.unsplash.com/photo-1556103255-4443dbae8e5a?w=800&q=80',
      alt: 'Fun City Activities',
      title: 'Fun Activities'
    }
  ];

  const residencyImages = [
    {
      url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      alt: 'Premium Residency',
      title: 'Prime Location'
    },
    {
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      alt: 'Modern Residence',
      title: 'Modern Living'
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      alt: 'Luxury Apartment',
      title: 'Luxury Spaces'
    }
  ];

  const services = [
    {
      icon: <Award className="service-icon" />,
      title: "Luxury Villas",
      description: "Premium villa rentals with world-class amenities and breathtaking views.",
      link: "/villas",
      images: villaImages
    },
    {
      icon: <Users className="service-icon" />,
      title: "Wedding Services",
      description: "Complete wedding planning and hire services for your perfect day.",
      link: "/wedding-hires",
      images: weddingImages
    },
    {
      icon: <Star className="service-icon" />,
      title: "Fun City Entertainment",
      description: "Family entertainment destination with rides, games, and activities.",
      link: "/funcity",
      images: funCityImages
    },
    {
      icon: <MapPin className="service-icon" />,
      title: "Premium Residencies",
      description: "Exclusive residential properties in prime locations.",
      link: "/residencies",
      images: residencyImages
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
      {/* Hero Section with Image Slider */}
      <section className="hero-section">
        <div className="hero-slider-wrapper">
          <ImageSlider 
            images={heroImages} 
            autoPlay={true} 
            interval={5000}
            showDots={true}
            showArrows={true}
            className="hero-slider"
          />
          <div className="hero-overlay">
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
                <div className="service-image-slider">
                  <ImageSlider 
                    images={service.images} 
                    autoPlay={true} 
                    interval={4000}
                    showDots={true}
                    showArrows={false}
                    className="service-slider"
                  />
                </div>
                <div className="service-content">
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={service.link} className="service-link">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
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
