import React from 'react';
import '../scss/components/_booking.scss';

function Banner({ heading, text, icon, type, bgcolor }) {
  return (
    <div className={`banner ${type} bg-${bgcolor}`}>
      <h6>{heading}</h6>
      <p>
        <i className="material-icons">{icon}</i>
        {text}
      </p>
    </div>
  );
}

export default Banner;
