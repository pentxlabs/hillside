import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Car size={32} />
          <span>Hill Side</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/service" onClick={() => setIsMenuOpen(false)}>Service</Link>
          <Link to="/funcity" onClick={() => setIsMenuOpen(false)}>Fun City</Link>
          <Link to="/villas" onClick={() => setIsMenuOpen(false)}>Villas</Link>
          <Link to="/wedding-hires" onClick={() => setIsMenuOpen(false)}>Wedding Hires</Link>
          <Link to="/residencies" onClick={() => setIsMenuOpen(false)}>Residencies</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
