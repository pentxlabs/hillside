import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { DUMMY_REVIEWS } from "../config/googleReviewsConfig";
import "./GoogleReviewsCarousel.css";

const GoogleReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = DUMMY_REVIEWS;

  useEffect(() => {
    // TODO: Fetch actual Google Reviews when API is configured
    // fetchGoogleReviews();
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setCurrentIndex(index);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <div className="reviews-carousel">
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={prevReview}>
          <ChevronLeft size={24} />
        </button>

        <div className="review-card">
          <div className="review-header">
            <img
              src={reviews[currentIndex].profile_photo_url}
              alt={reviews[currentIndex].author_name}
              className="reviewer-photo"
            />
            <div className="reviewer-info">
              <h4>{reviews[currentIndex].author_name}</h4>
              <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < reviews[currentIndex].rating ? "#fbbf24" : "none"}
                    color="#fbbf24"
                  />
                ))}
              </div>
              <span className="review-date">
                {formatDate(reviews[currentIndex].time)}
              </span>
            </div>
          </div>
          <p className="review-text">"{reviews[currentIndex].text}"</p>
        </div>

        <button className="carousel-btn next" onClick={nextReview}>
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="carousel-dots">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToReview(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GoogleReviewsCarousel;
