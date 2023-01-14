import React from "react";
import Button from "../Button";
import footerImg from "../../assets/footer/Group 1000001247.png";
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <span>Save 50% Now</span>
        <div className="btn-container">
          <Button text="get my discount" />
        </div>
      </div>
      <div className="footer-img">
        <img src={footerImg} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
