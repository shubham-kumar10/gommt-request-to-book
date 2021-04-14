import React from 'react';
import '../scss/components/_pillbox.scss';

function Pillbox({ type, text, size, bgcolor }) {
  return (
    <div className={`pillbox color-${type} ${size} bg-${bgcolor}`}>{text}</div>
  );
}

export default Pillbox;
