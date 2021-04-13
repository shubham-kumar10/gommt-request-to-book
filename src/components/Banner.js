import React from 'react';
import '../scss/components/_booking.scss';

function Banner({ heading, text, icon, type, bgcolor, textcolor }) {
  return (
    <div className={`banner ${type} bg-${bgcolor} color-${textcolor}`}>
      <h5>{heading}</h5>
      <p>
        <i className="material-icons">{icon}</i>
        {text}
      </p>
    </div>
  );
}

export default Banner;
