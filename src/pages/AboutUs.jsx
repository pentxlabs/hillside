// AboutUs.jsx

import React from 'react';
import { Award, Target, Heart, Star, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './AboutUs.css';

const AboutUs = () => {
  // Scroll animation hooks
  const [storyRef, storyVisible] = useScrollAnimation();
  const [missionRef, missionVisible] = useScrollAnimation();
  const [valuesRef, valuesVisible] = useScrollAnimation();
  const [achievementsRef, achievementsVisible] = useScrollAnimation();

  const values = [
    {
      icon: <Award className="value-icon" />,
      title: "Excellence",
      description: "We strive for excellence in every service we provide, maintaining the highest standards."
    },
    {
      icon: <Heart className="value-icon" />,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do. Their satisfaction is our priority."
    },
    {
      icon: <Target className="value-icon" />,
      title: "Reliability",
      description: "You can count on us to deliver consistent, dependable service every time."
    },
    {
      icon: <TrendingUp className="value-icon" />,
      title: "Innovation",
      description: "We continuously innovate to bring you the latest and best in hospitality services."
    }
  ];

  const achievements = [
    { number: "10+", label: "Years of Excellence" },
    { number: "500+", label: "Satisfied Clients" },
    { number: "50+", label: "Premium Properties" },
    { number: "98%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content animate-fadeInDown">
            <h1>About HillSide</h1>
            <p className="delay-200">Excellence in hospitality and premium services since 2014</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section" ref={storyRef}>
        <div className="container">
          <div className="story-content">
            <div className={`story-text ${storyVisible ? 'scroll-fade-left scroll-animate-visible' : 'scroll-fade-left'}`}>
              <h2>Our Story</h2>
              <p>
                Founded in 2014, HillSide began with a simple vision: to create exceptional experiences 
                that exceed expectations. What started as a small hospitality venture has grown into a 
                premier destination for luxury accommodations, entertainment, and professional services.
              </p>
              <p>
                Over the years, we've expanded our offerings to include luxury villas, comprehensive 
                wedding services, entertainment facilities, and premium residential properties. Our 
                commitment to excellence has earned us the trust of hundreds of satisfied clients.
              </p>
              <p>
                Today, HillSide stands as a testament to what passion, dedication, and unwavering 
                commitment to quality can achieve. We continue to innovate and evolve, always with 
                our customers' needs at the forefront.
              </p>
            </div>
            <div className={`story-image ${storyVisible ? 'scroll-fade-right scroll-animate-visible' : 'scroll-fade-right'}`}>
              <div className="image-placeholder">
                Our Journey of Excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section" ref={missionRef}>
        <div className="container">
          <div className="mission-vision-grid">
            <div className={`mission-card hover-lift ${missionVisible ? 'scroll-scale-in scroll-animate-visible' : 'scroll-scale-in'}`}>
              <Target className="mv-icon" />
              <h3>Our Mission</h3>
              <p>
                To provide exceptional hospitality services and create unforgettable experiences 
                that bring joy, comfort, and satisfaction to our clients while maintaining the 
                highest standards of quality and professionalism.
              </p>
            </div>
            <div className={`vision-card hover-lift ${missionVisible ? 'scroll-scale-in scroll-animate-visible' : 'scroll-scale-in'} scroll-animate-delay-2`}>
              <Star className="mv-icon" />
              <h3>Our Vision</h3>
              <p>
                To be the leading hospitality and lifestyle service provider, recognized for our 
                innovation, excellence, and commitment to creating extraordinary experiences that 
                enrich people's lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section" ref={valuesRef}>
        <div className="container">
          <div className={`section-header ${valuesVisible ? 'scroll-fade-up scroll-animate-visible' : 'scroll-fade-up'}`}>
            <h2>Our Core Values</h2>
            <p>The principles that guide us in everything we do</p>
          </div>
          <div className={`values-grid ${valuesVisible ? 'scroll-stagger-children scroll-animate-visible' : 'scroll-stagger-children'}`}>
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon-wrapper">
                  {value.icon}
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section" ref={achievementsRef}>
        <div className="container">
          <div className={`section-header ${achievementsVisible ? 'scroll-fade-up scroll-animate-visible' : 'scroll-fade-up'}`}>
            <h2>Our Achievements</h2>
            <p>Numbers that reflect our commitment to excellence</p>
          </div>
          <div className={`achievements-grid ${achievementsVisible ? 'scroll-stagger-children scroll-animate-visible' : 'scroll-stagger-children'}`}>
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <h3>{achievement.number}</h3>
                <p>{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-us {
          min-height: 100vh;
          font-family: Georgia, "Times New Roman", serif;
          background-color: #fdfcfb;
          color: #3a3a3a;
        }

        .hero-section {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #e8e8e8;
          padding: 120px 24px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-bottom: 3px solid #c9a962;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(45deg, rgba(201, 169, 98, 0.03) 25%, transparent 25%, transparent 75%, rgba(201, 169, 98, 0.03) 75%, rgba(201, 169, 98, 0.03)), linear-gradient(45deg, rgba(201, 169, 98, 0.03) 25%, transparent 25%, transparent 75%, rgba(201, 169, 98, 0.03) 75%, rgba(201, 169, 98, 0.03));
          background-size: 60px 60px;
          background-position: 0 0, 30px 30px;
          opacity: 0.4;
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 400;
          margin-bottom: 20px;
          letter-spacing: 0.05em;
          color: #c9a962;
          text-shadow: 0 2px 20px rgba(201, 169, 98, 0.3);
          font-family: Georgia, "Times New Roman", serif;
        }

        .hero-content p {
          font-size: 1.125rem;
          color: #e8e8e8;
          font-weight: 300;
          letter-spacing: 0.02em;
          line-height: 1.8;
        }

        .story-section {
          padding: 100px 0;
          background: #ffffff;
        }

        .story-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .story-text h2 {
          font-size: 2.75rem;
          color: #1a1a2e;
          margin-bottom: 30px;
          font-weight: 400;
          letter-spacing: 0.03em;
          line-height: 1.2;
          font-family: Georgia, "Times New Roman", serif;
        }

        .story-text p {
          color: #5a5a5a;
          line-height: 1.9;
          margin-bottom: 25px;
          font-size: 1.0625rem;
          font-family: Georgia, "Times New Roman", serif;
        }

        .image-placeholder {
          width: 100%;
          height: 400px;
          background: #ffffff;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a2e;
          border: 2px dashed #c9a962;
          font-family: Georgia, "Times New Roman", serif;
        }

        .mission-vision-section {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          padding: 90px 0;
          border-top: 3px solid #c9a962;
          border-bottom: 3px solid #c9a962;
        }

        .mission-vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .mission-card, .vision-card {
          background: #fdfcfb;
          padding: 48px 40px;
          border-radius: 4px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          border: 1px solid #e8e4dc;
          transition: all 0.4s ease;
        }

        .mission-card:hover, .vision-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(201, 169, 98, 0.15);
          border-color: #c9a962;
        }

        .mv-icon {
          width: 64px;
          height: 64px;
          color: #c9a962;
          margin: 0 auto 24px;
          stroke-width: 2;
        }

        .mission-card h3, .vision-card h3 {
          font-size: 1.8rem;
          color: #1a1a2e;
          margin-bottom: 20px;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          font-family: Georgia, "Times New Roman", serif;
        }

        .mission-card p, .vision-card p {
          color: #5a5a5a;
          line-height: 1.9;
          font-size: 1.0625rem;
          font-family: Georgia, "Times New Roman", serif;
        }

        .values-section {
          padding: 100px 0;
          background: #ffffff;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.8rem;
          color: #1a1a2e;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #5a5a5a;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .value-card {
          text-align: center;
          padding: 30px 20px;
        }

        .value-icon-wrapper {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          border: 2px solid #c9a962;
        }

        .value-icon {
          color: #c9a962;
          width: 40px;
          height: 40px;
        }

        .value-card h4 {
          font-size: 1.4rem;
          color: #1a1a2e;
          margin-bottom: 15px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .value-card p {
          color: #5a5a5a;
          line-height: 1.7;
          font-size: 1rem;
        }

        .achievements-section {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #e8e8e8;
          padding: 90px 0;
          border-top: 3px solid #c9a962;
        }

        .achievements-section .section-header h2 {
          color: #c9a962;
        }

        .achievements-section .section-header p {
          color: #e8e8e8;
          font-weight: 300;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          text-align: center;
        }

        .achievement-item h3 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #c9a962;
        }

        .achievement-item p {
          font-size: 1.2rem;
          color: #e8e8e8;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .story-content,
          .mission-vision-grid {
            grid-template-columns: 1fr;
          }
          
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .story-text h2 {
            font-size: 2.2rem;
          }

          .mission-card, .vision-card {
            padding: 36px 28px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;