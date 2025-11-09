import {
  ArrowRight,
  Phone,
  Shield,
  Clock,
  Heart,
  Award,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import ImageSlider from "../components/image-display/ImageSlider";
import GoogleReviewsCarousel from "../components/GoogleReviewsCarousel";
import { services, features } from "../config/homeConfig";
import "./HomeContent.css";

const HomeContent = () => {
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [featuresRef, featuresVisible] = useScrollAnimation();
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const [reviewForm, setReviewForm] = useState({
    name: "",
    email: "",
    rating: 5,
    comment: "",
  });

  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleKeyDown = (e) => {
    // Prevent event propagation to avoid interference with scroll animations
    // Allow all default keyboard behavior including space
    e.stopPropagation();
  };

  const handleTextareaKeyDown = (e) => {
    // For textarea, we need to be extra careful with space key
    e.stopPropagation();
    // Ensure default behavior is not prevented
    if (e.key === " " || e.keyCode === 32) {
      e.stopPropagation();
    }
  };

  const handleRatingClick = (rating) => {
    setReviewForm((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    // Create a hidden iframe to submit the form without opening a new page
    const iframe = document.createElement("iframe");
    iframe.name = "hidden_iframe";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    // Create a form element to submit to Google Forms
    const form = document.createElement("form");
    form.method = "POST";
    form.action =
      "https://docs.google.com/forms/d/e/1FAIpQLScvyuID41oZHrz83Ktj18e_YQu8CYg8f9NjuNtLTYVfWo-sDQ/formResponse";
    form.target = "hidden_iframe";

    // Add form fields matching Google Form entry IDs from the actual form
    const nameInput = document.createElement("input");
    nameInput.type = "hidden";
    nameInput.name = "entry.1366980596"; // Name field
    nameInput.value = reviewForm.name;
    form.appendChild(nameInput);

    const emailInput = document.createElement("input");
    emailInput.type = "hidden";
    emailInput.name = "entry.1962085851"; // Email field
    emailInput.value = reviewForm.email;
    form.appendChild(emailInput);

    const ratingInput = document.createElement("input");
    ratingInput.type = "hidden";
    ratingInput.name = "entry.1692743323"; // Rating field
    ratingInput.value = reviewForm.rating;
    form.appendChild(ratingInput);

    const commentInput = document.createElement("input");
    commentInput.type = "hidden";
    commentInput.name = "entry.963216474"; // Review field
    commentInput.value = reviewForm.comment;
    form.appendChild(commentInput);

    // Submit the form
    document.body.appendChild(form);
    form.submit();

    // Clean up and show thank you message after a short delay
    setTimeout(() => {
      document.body.removeChild(form);
      document.body.removeChild(iframe);
    }, 1000);

    // Show thank you message and reset form
    alert("Thank you for your review! Your feedback has been submitted.");
    setReviewForm({
      name: "",
      email: "",
      rating: 5,
      comment: "",
    });
    setShowReviewForm(false);
  };

  const featuresWithIcons = [
    { icon: <Shield className="feature-icon" />, ...features[0] },
    { icon: <Clock className="feature-icon" />, ...features[1] },
    { icon: <Award className="feature-icon" />, ...features[2] },
    { icon: <Heart className="feature-icon" />, ...features[3] },
  ];

  return (
    <div className="home">
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
              Discover the exceptional services that make HillSide your ideal
              choice
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card ${
                  servicesVisible
                    ? "scroll-scale-in scroll-animate-visible"
                    : "scroll-scale-in"
                } scroll-animate-delay-${index + 1}`}
              >
                <div className="service-image-slider">
                  <ImageSlider
                    images={service.images}
                    autoPlay={true}
                    interval={4000}
                    showDots={true}
                    showArrows={false}
                  />
                </div>
                <div className="service-content">
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

      {/* About Preview */}
      <section className="about-preview" ref={aboutRef}>
        <div className="container">
          <div className="about-content">
            <div
              className={`about-text ${
                aboutVisible
                  ? "scroll-fade-left scroll-animate-visible"
                  : "scroll-fade-left"
              }`}
            >
              <h2>Excellence in Every Detail</h2>
              <p>
                For over a decade, HillSide has been synonymous with luxury,
                quality, and exceptional service. We pride ourselves on creating
                unforgettable experiences and providing world-class amenities
                that exceed expectations.
              </p>
              <p>
                Our commitment to excellence has made us the preferred choice
                for discerning clients who demand nothing but the best.
              </p>
              <Link to="/about" className="about-link">
                Learn About Us <ArrowRight size={16} />
              </Link>
            </div>
            <div
              className={`about-image ${
                aboutVisible
                  ? "scroll-fade-right scroll-animate-visible"
                  : "scroll-fade-right"
              }`}
            >
              <div className="about-placeholder">Professional Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" ref={featuresRef}>
        <div className="container">
          <div
            className={`section-header ${
              featuresVisible
                ? "scroll-fade-up scroll-animate-visible"
                : "scroll-fade-up"
            }`}
          >
            <h2>Why Choose HillSide</h2>
            <p>
              Discover what sets us apart and makes us the preferred choice for
              luxury experiences
            </p>
          </div>
          <div
            className={`features-grid ${
              featuresVisible
                ? "scroll-stagger-children scroll-animate-visible"
                : "scroll-stagger-children"
            }`}
          >
            {featuresWithIcons.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">{feature.icon}</div>
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
          <div
            className={`section-header ${
              testimonialsVisible
                ? "scroll-fade-up scroll-animate-visible"
                : "scroll-fade-up"
            }`}
          >
            <h2>What Our Clients Say</h2>
            <p>
              Real experiences from our valued customers who have chosen
              HillSide
            </p>
          </div>
          <div
            className={
              testimonialsVisible
                ? "scroll-scale-in scroll-animate-visible"
                : "scroll-scale-in"
            }
          >
            <GoogleReviewsCarousel />
          </div>

          {/* Write a Review Section */}
          <div className="write-review-section">
            {!showReviewForm ? (
              <button
                className="write-review-button"
                onClick={() => setShowReviewForm(true)}
              >
                Write a Review
              </button>
            ) : (
              <div className="review-form-container">
                <h3>Share Your Experience</h3>
                <form onSubmit={handleReviewSubmit} className="review-form">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={reviewForm.name}
                      onChange={handleReviewChange}
                      onKeyDown={handleKeyDown}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={reviewForm.email}
                      onChange={handleReviewChange}
                      onKeyDown={handleKeyDown}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label>Rating *</label>
                    <div className="star-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={32}
                          className={`star ${
                            star <= reviewForm.rating ? "filled" : ""
                          }`}
                          onClick={() => handleRatingClick(star)}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="comment">Your Review *</label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={reviewForm.comment}
                      onChange={handleReviewChange}
                      onKeyDown={handleTextareaKeyDown}
                      onKeyPress={(e) => e.stopPropagation()}
                      onKeyUp={(e) => e.stopPropagation()}
                      required
                      rows="5"
                      placeholder="Tell us about your experience with HillSide..."
                    />
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="submit-review-button">
                      Submit Review
                    </button>
                    <button
                      type="button"
                      className="cancel-review-button"
                      onClick={() => setShowReviewForm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" ref={ctaRef}>
        <div className="container">
          <div
            className={`cta-content ${
              ctaVisible
                ? "scroll-blur-in scroll-animate-visible"
                : "scroll-blur-in"
            }`}
          >
            <h2>Ready to Experience Excellence?</h2>
            <p>
              Contact us today to discover how HillSide can exceed your
              expectations
            </p>
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

export default HomeContent;
