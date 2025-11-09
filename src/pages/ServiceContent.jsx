import React from "react";
import {
  CheckCircle,
  Star,
  Award,
  Clock,
  Shield,
  Car,
  Wrench,
  Droplets,
  Gauge,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  services,
  whyChooseUs,
  servicePackages,
} from "../config/serviceConfig";
import PageHero from "../components/PageHero";
import "./ServiceContent.css";

const ServiceContent = () => {
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [packagesRef, packagesVisible] = useScrollAnimation();
  const [whyChooseRef, whyChooseVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const iconMap = {
    Droplets,
    Car,
    Wrench,
    Gauge,
    Star,
    Clock,
    Shield,
    Award,
  };

  const servicesWithIcons = services.map((service) => ({
    ...service,
    icon: iconMap[service.iconName]
      ? React.createElement(iconMap[service.iconName], {
          className: "service-icon",
        })
      : null,
  }));

  const whyChooseUsWithIcons = whyChooseUs.map((feature) => ({
    ...feature,
    icon: iconMap[feature.iconName]
      ? React.createElement(iconMap[feature.iconName], {
          className: "feature-icon",
        })
      : null,
  }));

  return (
    <div className="service-page">
      <PageHero
        title="Service Station"
        subtitle="Professional automotive care and maintenance services"
        backgroundImage="https://res.cloudinary.com/dpcrbou1v/image/upload/v1762099439/IMG_8288_ilvtcv.jpg"
      />
      <section className="services-section" ref={servicesRef}>
        <div className="container">
          <div
            className={`section-header ${
              servicesVisible
                ? "scroll-fade-up scroll-animate-visible"
                : "scroll-fade-up"
            }`}
          >
            <h2>Our Premium Services</h2>
            <p>
              Comprehensive automotive care from oil changes to complete vehicle
              solutions
            </p>
          </div>
          <div className="services-grid">
            {servicesWithIcons.map((service, index) => (
              <div
                key={index}
                className={`service-card hover-lift ${
                  servicesVisible
                    ? "scroll-scale-in scroll-animate-visible"
                    : "scroll-scale-in"
                } scroll-animate-delay-${index + 1}`}
              >
                <div className="service-icon-wrapper">{service.icon}</div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link
                    to={`/contact?service=HillSide%20Express%20and%20Lube%20Service&specificService=${encodeURIComponent(
                      service.title
                    )}`}
                    className="service-link"
                  >
                    Book Service <CheckCircle size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="packages-section" ref={packagesRef}>
        <div className="container">
          <div
            className={`section-header ${
              packagesVisible
                ? "scroll-fade-up scroll-animate-visible"
                : "scroll-fade-up"
            }`}
          >
            <h2>Service Packages</h2>
            <p>Choose the right service package for your vehicle's needs</p>
          </div>
          <div className="packages-grid">
            {servicePackages.map((pkg, index) => (
              <div
                key={index}
                className={`package-card hover-lift ${
                  index === 1 ? "featured" : ""
                } ${
                  packagesVisible
                    ? "scroll-scale-in scroll-animate-visible"
                    : "scroll-scale-in"
                } scroll-animate-delay-${index + 1}`}
              >
                {index === 1 && (
                  <div className="featured-badge">Most Popular</div>
                )}
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
                <Link
                  to={`/contact?service=HillSide%20Express%20and%20Lube%20Service&specificService=${encodeURIComponent(
                    pkg.title
                  )}`}
                  className="service-link"
                >
                  Choose Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section" ref={whyChooseRef}>
        <div className="container">
          <div
            className={`section-header ${
              whyChooseVisible
                ? "scroll-fade-up scroll-animate-visible"
                : "scroll-fade-up"
            }`}
          >
            <h2>Why Choose HillSide</h2>
            <p>
              Discover what sets us apart and makes us the preferred choice for
              automotive excellence
            </p>
          </div>
          <div
            className={`features-grid ${
              whyChooseVisible
                ? "scroll-stagger-children scroll-animate-visible"
                : "scroll-stagger-children"
            }`}
          >
            {whyChooseUsWithIcons.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" ref={ctaRef}>
        <div className="container">
          <div
            className={`cta-content ${
              ctaVisible
                ? "scroll-blur-in scroll-animate-visible"
                : "scroll-blur-in"
            }`}
          >
            <h2>Ready to Service Your Vehicle?</h2>
            <p>
              Contact us today to schedule your automotive service appointment
            </p>
            <div className="cta-buttons">
              <Link
                to={`/contact?service=HillSide%20Express%20and%20Lube%20Service`}
                className="cta-button primary"
              >
                <Car size={18} />
                Schedule Service
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

export default ServiceContent;
