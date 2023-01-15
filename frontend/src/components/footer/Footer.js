import React from "react";
import footerImg from "../../assets/footer/Group 1000001247.png";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="footer flex justify-between">
      <div className="footer__content">
        <span className="footer__content__span">Save 50% Now</span>
        <div className="footer__btn-container">
          <button className="btn">get my discount</button>
        </div>
      </div>
      <div>
        <img src={footerImg} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
