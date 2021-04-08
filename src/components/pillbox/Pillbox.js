import React from "react";
import "./pillbox.module.scss";

function Pillbox({ type, text, size }) {
  return <div className={`pillbox ${type} ${size}`}>{text}</div>;
}

export default Pillbox;
