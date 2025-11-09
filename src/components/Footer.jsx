import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Globe } from 'lucide-react';
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
              <span>077 755 1006</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>info@hillside.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>No 465 Beligaha Junction, Galle 80000</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Business Hours</h4>
            <div className="contact-item">
              <span>Mon - Thu, Sat - Sun: 7:30 AM - 5:30 PM</span>
            </div>
            <div className="contact-item">
              <span>Friday: Closed</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Hill Side. All rights reserved. | Developed by Pent X</p>
            <div className="footer-bottom-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://pentxlabs.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Website">
                <Globe size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;