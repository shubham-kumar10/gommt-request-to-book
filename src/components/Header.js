import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ startIcon, endIcon }) {
  const [opened, setOpened] = useState(false);

  function toggle() {
    setOpened(!opened);
  }

  return (
    <nav className="header">
      <div className="header__home">
        <a href=".">
          <img
            className="logo"
            src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
            alt="MMT Logo"
          />
        </a>
        <button className="header__toggle" onClick={toggle}>
          <i className="material-icons md-28">more_vert</i>
        </button>
      </div>
      <ul className={"header__links " + (opened ? "opened" : "closed")}>
        <li className="header__link">
          <Link to="/signup?isHost=true">Becoming a host</Link>
        </li>

        <li className="header__link">
          <Link to="/signup?isHost=false">Sign Up</Link>
        </li>
        <li className="header__link">
          <Link to="/signin">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
