import React from "react";
import Button from "../Button";
import brandImage from "../../assets/brandImage.png";
import "./Header.scss";
function Header() {
  return (
    <header className="header flex align-center justify-between">
      <div className="flex align-center header__brand-container">
        <img src={brandImage} alt="brand image" />
        <a href="#" className="header__brand-container__brand-name">
          WebWork
        </a>
      </div>
      <div>
        <button className="btn">get now</button>
      </div>
    </header>
  );
}

export default Header;
