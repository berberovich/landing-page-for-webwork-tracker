import React from "react";
import Button from "./Button";
import brandImage from "../assets/brandImage.png";
function Header() {
  return (
    <header>
      <div className="brand-container">
        <img src={brandImage} className="brand-image" alt="" />
        <span className="brand-name">WebWork</span>
      </div>
      <div className="btn-container">
        <Button text="get now" />
      </div>
    </header>
  );
}

export default Header;
