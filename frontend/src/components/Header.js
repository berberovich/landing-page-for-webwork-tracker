import React from "react";
import Button from "./Button";
import brandImage from "../assets/brandImage.png";
function Header() {
  return (
    <header>
      <div className="brand-container">
        <img src={brandImage} className="brand-image" alt="" />
        <a href="#" className="brand-name">
          Web<span className="littlebold">Work</span>
        </a>
      </div>
      <div className="btn-container">
        <Button text="get now" />
      </div>
    </header>
  );
}

export default Header;
