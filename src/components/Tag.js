import React from "react";
import "../scss/components/_tag.scss";

function Tag({ startIcon, endIcon, text, color, type, size }) {
  return (
    <div className={`tag ${type} ${size} ${color}`}>
      <span className={`material-icons ${size}`}>{startIcon}</span>
      {text}
      <span className={`material-icons ${size}`}>{endIcon}</span>
    </div>
  );
}

export default Tag;
