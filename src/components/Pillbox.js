import React from "react";
import "../scss/components/_pillbox.scss";

function Pillbox({ type, text, size }) {
  return <div className={`pillbox ${type} ${size}`}>{text}</div>;
}

export default Pillbox;
