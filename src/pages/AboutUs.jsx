// AboutUs.jsx

import React from 'react';
import { Award, Target, Heart, Star, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .hero-content p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .story-section {
          padding: 100px 0;
        }

        .story-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .story-text h2 {
          font-size: 2.5rem;
          color: #1e40af;
          margin-bottom: 30px;
          font-weight: 700;
        }

        .story-text p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 25px;
          font-size: 1.1rem;
        }

        .image-placeholder {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 600;
          color: #666;
          border: 2px dashed #dee2e6;
        }

        .mission-vision-section {
          background: #f1f5f9;
          padding: 80px 0;
        }

        .mission-vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .mission-card, .vision-card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          text-align: center;
          transition: all 0.3s ease;
        }

        .mission-card:hover, .vision-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .mv-icon {
          width: 60px;
          height: 60px;
          color: #dc2626;
          margin-bottom: 20px;
        }

        .mission-card h3, .vision-card h3 {
          font-size: 1.8rem;
          color: #1e40af;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .mission-card p, .vision-card p {
          color: #666;
          line-height: 1.8;
          font-size: 1.1rem;
        }

        .values-section {
          padding: 100px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #1e40af;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #666;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .value-card {
          text-align: center;
          padding: 30px 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }

        .value-icon-wrapper {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #dc2626, #ef4444);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
        }

        .value-icon {
          color: white;
          width: 40px;
          height: 40px;
        }

        .value-card h4 {
          font-size: 1.4rem;
          color: #1e40af;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .value-card p {
          color: #666;
          line-height: 1.6;
        }

        .achievements-section {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
          padding: 80px 0;
        }

        .achievements-section .section-header h2 {
          color: white;
        }

        .achievements-section .section-header p {
          color: rgba(255, 255, 255, 0.9);
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
          color: #dc2626;
        }

        .achievement-item p {
          font-size: 1.2rem;
          opacity: 0.9;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .story-content,
          .mission-vision-grid {
            grid-template-columns: 1fr;
          }
          
          .hero-content h1 {
            font-size: 2.2rem;
          }
          
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-header h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;