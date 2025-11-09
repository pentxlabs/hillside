import React from 'react';
import './PageHero.css';

const PageHero = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="page-hero-overlay">
        <div className="page-hero-content">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
