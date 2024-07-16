import React, { useState } from 'react';
import './RateMovieButton.css';

const RateMovieButton = () => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (index) => {
    setRating(index + 1);
    setSubmitted(false);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="rate-movie-button">
      <h2>Rate this Movie</h2>
      <div className="stars">
        {[...Array(5)].map((star, index) => (
          <span
            key={index}
            className={`star ${index < rating ? 'filled' : ''}`}
            onClick={() => handleStarClick(index)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit Rating</button>
      {submitted && <p>Thank you for your rating!</p>}
    </div>
  );
};

export default RateMovieButton;
