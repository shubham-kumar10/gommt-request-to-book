import React from "react";
import "../scss/components/_booking.scss";

function Banner({ text, icon, type, bgcolor }) {
  return (
    <div className={`banner ${type} bg-${bgcolor}`}>
      <p>
        <i className="material-icons">{icon}</i>
        {text}
      </p>
    </div>
  );
}

export default Banner;
