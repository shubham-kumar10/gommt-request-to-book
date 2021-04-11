import React, { useState } from "react";
import "../scss/components/_ratings.scss";

function Rating({ rating, totalRatings }) {
  const ratingDescription = [
    "Poor",
    "Average",
    "Good",
    "Very Good",
    "Excellent",
  ];
  const ratingClass = ["bad", "medium", "good", "good", "excellent"];

  const index = Math.round(rating);
  const [ratingDesc] = useState(ratingDescription[index - 1]);
  return (
    <div>
      <span className="rating">
        <div className="rating__icon">MY</div>
        <div className={`rating__value ${ratingClass[index]}`}>
          {rating}/5 ({ratingDesc})
        </div>
      </span>
      <p className="rating__count">{totalRatings} ratings</p>
    </div>
  );
}

export default Rating;
