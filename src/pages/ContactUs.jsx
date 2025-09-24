import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="contact-icon" />,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      subInfo: "Mon-Fri: 9AM-6PM",
      action: "tel:+15551234567"
    },
    {
      icon: <Mail className="contact-icon" />,
      title: "Email Us",
      info: "info@hillside.com",
      subInfo: "We reply within 24 hours",
      action: "mailto:info@hillside.com"
    },
    {
      icon: <MapPin className="contact-icon" />,
      title: "Visit Us",
      info: "123 HillSide Avenue",
      subInfo: "City, State 12345",
      action: "#"
    },
    {
      icon: <MessageCircle className="contact-icon" />,
      title: "Live Chat",
      info: "Available 24/7",
      subInfo: "Instant support",
      action: "#"
    }
  ];

  return (
    <div className="contact-us">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Contact HillSide</h1>
            <p>Get in touch with us for inquiries, bookings, and exceptional service</p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods-section">
        <div className="container">
          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <a key={index} href={method.action} className="contact-method-card">
                <div className="contact-method-icon">
                  {method.icon}
                </div>
                <h3>{method.title}</h3>
                <p className="method-info">{method.info}</p>
                <p className="method-subinfo">{method.subInfo}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Let's Start a Conversation</h2>
              <p>
                We're here to help you with all your needs. Whether you're planning a wedding, 
                looking for luxury accommodations, or interested in our entertainment facilities, 
                our team is ready to assist you.
              </p>
              
              <div className="contact-details">
                <div className="detail-item">
                  <Clock className="detail-icon" />
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday - Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <MapPin className="detail-icon" />
                  <div>
                    <h4>Our Location</h4>
                    <p>123 HillSide Avenue</p>
                    <p>City, State 12345</p>
                  </div>
                </div>
              </div>

              <div className="response-time">
                <h4>Response Time</h4>
                <ul>
                  <li>Email inquiries: Within 24 hours</li>
                  <li>Phone calls: Immediate during business hours</li>
                  <li>Emergency support: Available 24/7</li>
                </ul>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Send Us a Message</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="wedding">Wedding Services</option>
                      <option value="villas">Luxury Villas</option>
                      <option value="funcity">Fun City</option>
                      <option value="residencies">Residencies</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    placeholder="Tell us about your requirements or questions..."
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-us {
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
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .hero-content p {
          font-size: 1.3rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-methods-section {
          padding: 80px 0;
          background: #f1f5f9;
        }

        .contact-methods-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .contact-method-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .contact-method-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
          color: inherit;
          text-decoration: none;
        }

        .contact-method-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #dc2626, #ef4444);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .contact-icon {
          color: white;
          width: 30px;
          height: 30px;
        }

        .contact-method-card h3 {
          font-size: 1.3rem;
          color: #1e40af;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .method-info {
          color: #333;
          font-weight: 600;
          margin-bottom: 5px;
          font-size: 1.1rem;
        }

        .method-subinfo {
          color: #666;
          font-size: 0.95rem;
        }

        .contact-form-section {
          padding: 100px 0;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .contact-info h2 {
          font-size: 2.5rem;
          color: #1e40af;
          margin-bottom: 30px;
          font-weight: 700;
        }

        .contact-info > p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 40px;
          font-size: 1.1rem;
        }

        .contact-details {
          margin-bottom: 40px;
        }

        .detail-item {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }

        .detail-icon {
          color: #dc2626;
          width: 24px;
          height: 24px;
          margin-top: 5px;
          flex-shrink: 0;
        }

        .detail-item h4 {
          color: #1e40af;
          font-size: 1.2rem;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .detail-item p {
          color: #666;
          margin-bottom: 3px;
        }

        .response-time h4 {
          color: #1e40af;
          font-size: 1.2rem;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .response-time ul {
          list-style: none;
          padding: 0;
        }

        .response-time li {
          color: #666;
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }

        .response-time li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #22c55e;
          font-weight: bold;
        }

        .contact-form-container {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid #f0f0f0;
        }

        .contact-form h3 {
          font-size: 1.8rem;
          color: #1e40af;
          margin-bottom: 30px;
          font-weight: 600;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #333;
          font-weight: 500;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #dc2626;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          transition: all 0.3s ease;
          width: 100%;
        }

        .submit-btn:hover {
          background: linear-gradient(135deg, #1d4ed8, #2563eb);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(30, 64, 175, 0.3);
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .contact-methods-grid {
            grid-template-columns: 1fr;
          }
          
          .detail-item {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
