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
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      subInfo: "Mon-Fri: 9AM-6PM",
      action: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "info@hillside.com",
      subInfo: "We reply within 24 hours",
      action: "mailto:info@hillside.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 HillSide Avenue",
      subInfo: "City, State 12345",
      action: "#"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      info: "Available 24/7",
      subInfo: "Instant support",
      action: "#"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'Georgia, "Times New Roman", serif',
      backgroundColor: '#fdfcfb',
      color: '#3a3a3a'
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '100px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '3px solid #c9a962'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(45deg, rgba(201, 169, 98, 0.03) 25%, transparent 25%, transparent 75%, rgba(201, 169, 98, 0.03) 75%, rgba(201, 169, 98, 0.03)), linear-gradient(45deg, rgba(201, 169, 98, 0.03) 25%, transparent 25%, transparent 75%, rgba(201, 169, 98, 0.03) 75%, rgba(201, 169, 98, 0.03))',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px',
          opacity: 0.4,
          pointerEvents: 'none'
        }}></div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '400',
            marginBottom: '20px',
            letterSpacing: '0.05em',
            color: '#c9a962',
            textShadow: '0 2px 20px rgba(201, 169, 98, 0.3)',
            fontFamily: 'Georgia, "Times New Roman", serif'
          }}>
            HILLSIDE
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: '#e8e8e8',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.8',
            fontWeight: '300',
            letterSpacing: '0.02em'
          }}>
            Premier destination for luxury weddings, villas, and exclusive experiences
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section style={{
        padding: '90px 24px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px'
          }}>
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={index}
                  href={method.action}
                  style={{
                    backgroundColor: '#fdfcfb',
                    padding: '48px 32px',
                    borderRadius: '4px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    color: 'inherit',
                    border: '1px solid #e8e4dc',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    display: 'block',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(201, 169, 98, 0.15)';
                    e.currentTarget.style.borderColor = '#c9a962';
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                    e.currentTarget.style.borderColor = '#e8e4dc';
                    e.currentTarget.style.backgroundColor = '#fdfcfb';
                  }}
                >
                  <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#1a1a2e',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 28px',
                    border: '2px solid #c9a962'
                  }}>
                    <IconComponent size={28} color="#c9a962" strokeWidth={2} />
                  </div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    color: '#1a1a2e',
                    marginBottom: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                    fontFamily: 'Georgia, "Times New Roman", serif'
                  }}>
                    {method.title}
                  </h3>
                  <p style={{
                    color: '#3a3a3a',
                    fontWeight: '400',
                    marginBottom: '6px',
                    fontSize: '1rem',
                    fontFamily: 'Georgia, "Times New Roman", serif'
                  }}>
                    {method.info}
                  </p>
                  <p style={{
                    color: '#8a8a8a',
                    fontSize: '0.875rem',
                    fontStyle: 'italic'
                  }}>
                    {method.subInfo}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section style={{
        padding: '90px 24px',
        backgroundColor: '#fdfcfb'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 1024 ? '1fr 1.2fr' : '1fr',
            gap: '80px',
            alignItems: 'start'
          }}>
            {/* Contact Info */}
            <div>
              <h2 style={{
                fontSize: '2.75rem',
                color: '#1a1a2e',
                marginBottom: '24px',
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.2',
                fontFamily: 'Georgia, "Times New Roman", serif'
              }}>
                Connect With Excellence
              </h2>
              <p style={{
                color: '#5a5a5a',
                lineHeight: '1.9',
                marginBottom: '56px',
                fontSize: '1.0625rem',
                fontFamily: 'Georgia, "Times New Roman", serif'
              }}>
                Experience the pinnacle of luxury and service. Whether planning an elegant wedding, seeking premium villas, or exploring exclusive amenities, our distinguished team awaits to craft your perfect experience.
              </p>
              
              <div style={{ marginBottom: '56px' }}>
                <div style={{
                  display: 'flex',
                  gap: '24px',
                  marginBottom: '40px'
                }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    backgroundColor: '#1a1a2e',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '2px solid #c9a962'
                  }}>
                    <Clock size={24} color="#c9a962" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{
                      color: '#1a1a2e',
                      fontSize: '1.0625rem',
                      marginBottom: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      fontFamily: 'Georgia, "Times New Roman", serif'
                    }}>
                      Hours of Operation
                    </h4>
                    <p style={{ color: '#6a6a6a', marginBottom: '6px', fontSize: '0.9375rem', lineHeight: '1.7' }}>
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p style={{ color: '#6a6a6a', fontSize: '0.9375rem', lineHeight: '1.7' }}>
                      Saturday - Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '24px'
                }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    backgroundColor: '#1a1a2e',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '2px solid #c9a962'
                  }}>
                    <MapPin size={24} color="#c9a962" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{
                      color: '#1a1a2e',
                      fontSize: '1.0625rem',
                      marginBottom: '12px',
                      fontWeight: '600',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      fontFamily: 'Georgia, "Times New Roman", serif'
                    }}>
                      Our Address
                    </h4>
                    <p style={{ color: '#6a6a6a', marginBottom: '6px', fontSize: '0.9375rem', lineHeight: '1.7' }}>
                      123 HillSide Avenue
                    </p>
                    <p style={{ color: '#6a6a6a', fontSize: '0.9375rem', lineHeight: '1.7' }}>
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #c9a962',
                borderRadius: '4px',
                padding: '36px',
                boxShadow: '0 4px 16px rgba(201, 169, 98, 0.08)'
              }}>
                <h4 style={{
                  color: '#1a1a2e',
                  fontSize: '1.0625rem',
                  marginBottom: '24px',
                  fontWeight: '600',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}>
                  Service Commitment
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Email inquiries: 24-hour response guarantee',
                    'Telephone: Immediate personal attention',
                    'Concierge: Round-the-clock availability'
                  ].map((item, idx) => (
                    <li key={idx} style={{
                      color: '#5a5a5a',
                      marginBottom: idx < 2 ? '16px' : '0',
                      paddingLeft: '28px',
                      position: 'relative',
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      fontFamily: 'Georgia, "Times New Roman", serif'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#c9a962',
                        fontWeight: '700',
                        fontSize: '1.125rem'
                      }}>◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div style={{
              backgroundColor: '#ffffff',
              padding: '56px',
              borderRadius: '4px',
              border: '1px solid #e8e4dc',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)'
            }}>
              <h3 style={{
                fontSize: '2rem',
                color: '#1a1a2e',
                marginBottom: '16px',
                fontWeight: '400',
                letterSpacing: '0.03em',
                fontFamily: 'Georgia, "Times New Roman", serif'
              }}>
                Inquire Today
              </h3>
              <p style={{
                color: '#8a8a8a',
                marginBottom: '40px',
                fontSize: '0.9375rem',
                fontStyle: 'italic'
              }}>
                Complete the form and receive our prompt, personalized response
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
                  gap: '24px'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '10px',
                      color: '#3a3a3a',
                      fontWeight: '500',
                      fontSize: '0.875rem',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      fontFamily: 'Georgia, "Times New Roman", serif'
                    }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        border: '1px solid #d8d4cc',
                        borderRadius: '2px',
                        fontSize: '0.9375rem',
                        transition: 'all 0.3s ease',
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        color: '#3a3a3a',
                        backgroundColor: '#fdfcfb',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#c9a962';
                        e.target.style.backgroundColor = '#ffffff';
                        e.target.style.boxShadow = '0 0 0 2px rgba(201, 169, 98, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d8d4cc';
                        e.target.style.backgroundColor = '#fdfcfb';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '10px',
                      color: '#3a3a3a',
                      fontWeight: '500',
                      fontSize: '0.875rem',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      fontFamily: 'Georgia, "Times New Roman", serif'
                    }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        border: '1px solid #d8d4cc',
                        borderRadius: '2px',
                        fontSize: '0.9375rem',
                        transition: 'all 0.3s ease',
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        color: '#3a3a3a',
                        backgroundColor: '#fdfcfb',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#c9a962';
                        e.target.style.backgroundColor = '#ffffff';
                        e.target.style.boxShadow = '0 0 0 2px rgba(201, 169, 98, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d8d4cc';
                        e.target.style.backgroundColor = '#fdfcfb';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
                  gap: '24px'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '10px',
                      color: '#3a3a3a',
                      fontWeight: '500',
                      fontSize: '0.875rem',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      fontFamily: 'Georgia, "Times New Roman", serif'
                    }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone"
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        border: '1px solid #d8d4cc',
                        borderRadius: '2px',
                        fontSize: '0.9375rem',
                        transition: 'all 0.3s ease',
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        color: '#3a3a3a',
                        backgroundColor: '#fdfcfb',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#c9a962';
                        e.target.style.backgroundColor = '#ffffff';
                        e.target.style.boxShadow = '0 0 0 2px rgba(201, 169, 98, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d8d4cc';
                        e.target.style.backgroundColor = '#fdfcfb';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '10px',
                      color: '#3a3a3a',
                      fontWeight: '500',
                      fontSize: '0.875rem',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      fontFamily: 'Georgia, "Times New Roman", serif'
                    }}>
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        border: '1px solid #d8d4cc',
                        borderRadius: '2px',
                        fontSize: '0.9375rem',
                        transition: 'all 0.3s ease',
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        color: '#3a3a3a',
                        backgroundColor: '#fdfcfb',
                        outline: 'none',
                        cursor: 'pointer',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#c9a962';
                        e.target.style.backgroundColor = '#ffffff';
                        e.target.style.boxShadow = '0 0 0 2px rgba(201, 169, 98, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d8d4cc';
                        e.target.style.backgroundColor = '#fdfcfb';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <option value="">Select a service</option>
                      <option value="wedding">Luxury Weddings & Events</option>
                      <option value="villas">Premium Villa Rentals</option>
                      <option value="funcity">Family Entertainment</option>
                      <option value="residencies">Exclusive Residencies</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '10px',
                    color: '#3a3a3a',
                    fontWeight: '500',
                    fontSize: '0.875rem',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    fontFamily: 'Georgia, "Times New Roman", serif'
                  }}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    placeholder="Share your requirements and preferences..."
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: '1px solid #d8d4cc',
                      borderRadius: '2px',
                      fontSize: '0.9375rem',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      color: '#3a3a3a',
                      backgroundColor: '#fdfcfb',
                      resize: 'vertical',
                      minHeight: '140px',
                      outline: 'none',
                      lineHeight: '1.7',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#c9a962';
                      e.target.style.backgroundColor = '#ffffff';
                      e.target.style.boxShadow = '0 0 0 2px rgba(201, 169, 98, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d8d4cc';
                      e.target.style.backgroundColor = '#fdfcfb';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <button 
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: '#1a1a2e',
                    color: '#c9a962',
                    padding: '18px 40px',
                    border: '2px solid #c9a962',
                    borderRadius: '2px',
                    fontSize: '0.9375rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    marginTop: '12px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontFamily: 'Georgia, "Times New Roman", serif'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#c9a962';
                    e.currentTarget.style.color = '#1a1a2e';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(201, 169, 98, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1a1a2e';
                    e.currentTarget.style.color = '#c9a962';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Send size={18} strokeWidth={2.5} />
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;