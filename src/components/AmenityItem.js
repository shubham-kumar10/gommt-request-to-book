import React from 'react';

function AmenityItem({ id, icon, name }) {
  return (
    <li key={id}>
      <i className="material-icons">{icon}</i>
      {name}
    </li>
  );
}

export default AmenityItem;
