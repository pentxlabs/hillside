import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Hill Side</h3>
            <p>Your one-stop destination for vehicle services, entertainment, and hospitality.</p>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <Phone size={16} />
              <span>+1 234 567 8900</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>info@hillside.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>123 Hill Side Street, City, State</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <Facebook size={20} />
              <Twitter size={20} />
              <Instagram size={20} />
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Hill Side. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
