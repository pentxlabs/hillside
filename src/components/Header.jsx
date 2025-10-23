import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    // Smooth scroll to top when link is clicked
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Car size={32} />
          <span>Hill Side</span>
        </div>
        <div className="nav-wrapper">
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={handleLinkClick} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/service" onClick={handleLinkClick} className={location.pathname === '/service' ? 'active' : ''}>Service</Link>
            <Link to="/funcity" onClick={handleLinkClick} className={location.pathname === '/funcity' ? 'active' : ''}>Fun City</Link>
            <Link to="/villas" onClick={handleLinkClick} className={location.pathname === '/villas' ? 'active' : ''}>Villas</Link>
            <Link to="/wedding-hires" onClick={handleLinkClick} className={location.pathname === '/wedding-hires' ? 'active' : ''}>Wedding Hires</Link>
            <Link to="/residencies" onClick={handleLinkClick} className={location.pathname === '/residencies' ? 'active' : ''}>Residencies</Link>
            <Link to="/about" onClick={handleLinkClick} className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
            <Link to="/contact" onClick={handleLinkClick} className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
          </nav>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
