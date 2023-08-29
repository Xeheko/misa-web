import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "./Logo";

function Navbar() {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (document.documentElement.scrollTop >= 30) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    document.addEventListener("scroll", changeColor);
    return () => {
      document.removeEventListener("scroll", changeColor);
    };
  }, []);

  const handleClick = () => {
    const toggleCheckbox = document.querySelector(".toggle-menu");
    if (toggleCheckbox.checked) {
      toggleCheckbox.checked = false;
    }
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className={color ? "logo logo-bg" : "logo"}>
        <a href="#MainPage" onClick={handleClick}>
          <Logo />
        </a>
      </div>

      <div className={color ? "navigation navigation-bg" : "navigation"}>
        <input type="checkbox" className="toggle-menu" />
        <div className="hamburger"></div>
        <ul className="menu">
          <li>
            <a href="#MainPage" onClick={handleClick} id="navbarList">
              Úvod
            </a>
          </li>
          <li>
            <a href="#SecondPage" onClick={handleClick} id="navbarList">
              Služby
            </a>
          </li>
          <li>
            <a href="#PortfolioPage" onClick={handleClick} id="navbarList">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#AboutPage" onClick={handleClick} id="navbarList">
              O mně
            </a>
          </li>
          <li>
            <a href="#vlastPage" onClick={handleClick} id="navbarList">
              Co očekávat
            </a>
          </li>
          <li>
            <a href="#formPage" onClick={handleClick} id="navbarList">
              Kontakt
            </a>
          </li>
        </ul>
        <div className="move"></div>
      </div>
    </div>
  );
}

export default Navbar;
