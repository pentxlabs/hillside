import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import { useLocation } from "react-router-dom";
import "./ContactUs.css";

const ContactUs = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    specificService: "",
    message: "",
  });

  const [serviceOptions, setServiceOptions] = useState({
    "HillSide Express and Lube Service": [
      "Oil Change",
      "Vehicle Service",
      "Vehicle Wash",
      "Other Maintenance",
    ],
    Funcity: [
      "Kids Play Area",
      "Party Booking",
      "Group Events",
      "Special Occasions",
    ],
    Villas: [
      "Villa Booking",
      "Long-term Stay",
      "Event Hosting",
      "Corporate Retreat",
    ],
    "Wedding Hires": [
      "Full Wedding Package",
      "Venue Only",
      "Decoration Services",
      "Photography Services",
    ],
  });

  useEffect(() => {
    // Get the service and specificService from URL parameters
    const params = new URLSearchParams(location.search);
    const serviceFromUrl = params.get("service");
    const specificServiceFromUrl = params.get("specificService");

    if (serviceFromUrl || specificServiceFromUrl) {
      if (specificServiceFromUrl && serviceFromUrl) {
        // Update service options if necessary
        setServiceOptions((prevOptions) => {
          if (!prevOptions[serviceFromUrl]) {
            // If the service category doesn't exist, create it
            return {
              ...prevOptions,
              [serviceFromUrl]: [specificServiceFromUrl],
            };
          } else if (
            !prevOptions[serviceFromUrl].includes(specificServiceFromUrl)
          ) {
            // If the service category exists but doesn't include this specific service
            return {
              ...prevOptions,
              [serviceFromUrl]: [
                ...prevOptions[serviceFromUrl],
                specificServiceFromUrl,
              ],
            };
          }
          return prevOptions;
        });
      }

      // Update form data with URL parameters
      setFormData((prev) => ({
        ...prev,
        service: serviceFromUrl || prev.service,
        specificService: specificServiceFromUrl || prev.specificService,
      }));
    }
  }, [location]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formUrl =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdfW3aZzjdnCFNnXADSKUZ96iOJJpRqKWdANoHORs7ZehYW1A/formResponse";

    const formBody = new URLSearchParams({
      "entry.1127918301": formData.name,
      "entry.1773654162": formData.email,
      "entry.1403325638": formData.phone,
      "entry.911440879": formData.service,
      "entry.2145647845": formData.specificService, // Add new entry ID for specific service
      "entry.1632061870": formData.message,
    });

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      alert(
        "Thank you for your message! We will get back to you within 24 hours."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        specificService: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error submitting your message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with us for inquiries and bookings"
        backgroundImage="https://res.cloudinary.com/dpcrbou1v/image/upload/v1762701632/Gemini_Generated_Image_z4h5b7z4h5b7z4h5_j99xtu.png"
      />

      {/* Contact Methods */}
      {/* <section className="contact-methods-section">
        <div className="methods-container">
          <div className="methods-grid">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a key={index} href={method.action} className="method-card">
                  <div className="method-icon-wrapper">
                    <IconComponent size={28} color="#ffffffff" strokeWidth={2} />
                  </div>
                  <h3 className="method-title">{method.title}</h3>
                  <p className="method-info">{method.info}</p>
                  <p className="method-subinfo">{method.subInfo}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Contact Form & Info */}
      <section className="contact-form-section">
        <div className="form-info-container">
          <div className="form-info-grid">
            {/* Contact Info */}
            <div className="contact-info-side">
              <h2 className="info-title">Connect With Excellence</h2>
              <p className="info-description">
                Experience the pinnacle of luxury and service. Whether planning
                an elegant wedding, seeking premium villas, or exploring
                exclusive amenities, our distinguished team awaits to craft your
                perfect experience.
              </p>

              <div className="info-details">
                {/* <div className="info-item">
                  <div className="info-icon-wrapper">
                    <Clock size={24} color="#ffffffff" strokeWidth={2} />
                  </div>
                  {/* <div className="info-text">
                    <h4 className="info-heading">Hours of Operation</h4>
                    <p className="info-line">
                      Monday - Thursday: 7:30 AM - 5:30 PM
                    </p>
                    <p className="info-line">
                      Saturday - Sunday: 7:30 AM - 5:30 PM
                    </p>
                    <p className="info-line">Friday: Closed</p>
                  </div> */}
                {/* </div>  */}
                {/* 
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <MapPin size={24} color="#ffffffff" strokeWidth={2} />
                  </div>
                  <div className="info-text">
                    <h4 className="info-heading">Our Address</h4>
                    <p className="info-line">No 465 Beligaha Junction</p>
                    <p className="info-line">Galle 80000</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <h3 className="form-title">Inquire Today</h3>
              <p className="form-subtitle">
                Complete the form and receive our prompt, personalized response
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Service of Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select a service</option>
                      <option value="HillSide Express and Lube Service">
                        HillSide Express and Lube Service
                      </option>
                      <option value="Funcity">Funcity</option>
                      <option value="Villas">Villas</option>
                      <option value="Wedding Hires">Wedding Hires</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Specific Service</label>
                    <select
                      name="specificService"
                      value={formData.specificService}
                      onChange={handleChange}
                      className="form-select"
                      disabled={!formData.service}
                    >
                      <option value="">Select specific service</option>
                      {formData.service &&
                        serviceOptions[formData.service]?.map(
                          (option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          )
                        )}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Share your requirements and preferences..."
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`form-submit-btn ${
                    isSubmitting ? "submitting" : ""
                  }`}
                >
                  <Send size={18} strokeWidth={2.5} />
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="find-us-section">
        <div className="find-us-container">
          <div className="find-us-grid">
            {/* Find Us Content */}
            <div className="find-us-content">
              <h2 className="find-us-title">Find Us</h2>
              <p className="find-us-description">
                Visit us at our location in Galle
              </p>

              <div className="find-us-details">
                <div className="find-us-item">
                  <div className="find-us-icon-wrapper">
                    <MapPin size={24} color="#ffffffff" strokeWidth={2} />
                  </div>
                  <div className="find-us-text">
                    <h4 className="find-us-heading">Our Address</h4>
                    <p className="find-us-line">No 465 Beligaha Junction</p>
                    <p className="find-us-line">Galle 80000</p>
                  </div>
                </div>

                <div className="find-us-item">
                  <div className="find-us-icon-wrapper">
                    <Clock size={24} color="#ffffffff" strokeWidth={2} />
                  </div>
                  <div className="find-us-text">
                    <h4 className="find-us-heading">Hours of Operation</h4>
                    <p className="find-us-line">
                      Monday - Thursday: 7:30 AM - 5:30 PM
                    </p>
                    <p className="find-us-line">
                      Saturday - Sunday: 7:30 AM - 5:30 PM
                    </p>
                    <p className="find-us-line">Friday: Closed</p>
                  </div>
                </div>

                <div className="find-us-item">
                  <div className="find-us-icon-wrapper">
                    <Phone size={24} color="#ffffffff" strokeWidth={2} />
                  </div>
                  <div className="find-us-text">
                    <h4 className="find-us-heading">Contact</h4>
                    <p className="find-us-line">077 755 1006</p>
                    <p className="find-us-line">info@hillside.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126961.40580011068!2d80.13530275076!3d6.057120682358456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173dbb790b09b%3A0x4a0fd748a11e98ba!2sHillside%20Express%20Lube%20%26%20Clean%20Park%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1761205510029!5m2!1sen!2slk"
                width="100%"
                height="100%"
                className="map-iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hillside Location Map"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
