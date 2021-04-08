import React from "react";
import "../../scss/components/_ratings.module.scss";

function Rating() {
  return (
    <div>
      <span className="rating">
        <div className="rating__icon">my</div>
        <div className="rating__value good">4.5/5 (Very Good)</div>
      </span>
      <p className="rating__count">567 ratings</p>
    </div>
  );
}

export default Rating;
