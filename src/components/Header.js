import React, { useState } from "react";

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
        <button className="toggle" onClick={toggle}>
          <i className="material-icons md-28">more_vert</i>
        </button>
      </div>
      <ul className={"header__links " + (opened ? "opened" : "closed")}>
        <li className="header__link">
          <a href=".">Becoming a host</a>
        </li>
        <li className="header__link">
          <a href=".">Help</a>
        </li>
        <li className="header__link">
          <a href=".">Sign up</a>
        </li>
        <li className="header__link">
          <a href=".">Log in</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
