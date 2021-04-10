import React from "react";

function Header({ startIcon, endIcon }) {
  return (
    <div className="header">
      <nav>
        <i className="material-icons">arrow_back</i>
        <i className="material-icons">more_vert</i>
        <ul>
          <li>Login</li>
          <li>Signup</li>
          <li>Profile</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
