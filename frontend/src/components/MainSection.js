import React from "react";
import Button from "./Button";
import ratingStars from "../assets/ratingStars.png";
import capterra from "../assets/capterra.png";
import crowd from "../assets/crowd.png";
import getApp from "../assets/getApp.png";
import fiftypercentoff from "../assets/fiftypercentoff.png";
import Group3745 from "../assets/Group 3745.png";
function MainSection() {
  return (
    <section className="main-content">
      <div>
        <p>
          <span>CYBER MONDAY</span> means an even <span>BIGGER SALE</span>
        </p>
        <small>Cyber Monday saves you money, WebWork saves you time.</small>
        <Button text="SAVE BIG NOW" />
        <img src={Group3745} alt="" />
        <small>14-day free trial | No credit card required</small>
        <div>
          <img src={ratingStars} alt="rating stars" />
          <small>
            Reviews from <b>51k+</b> happy users below and beyond
          </small>
        </div>
        <div className="company-names">
          <img src={capterra} alt="capterra" />
          <img src={crowd} alt="crowd" />
          <img src={getApp} alt="getApp" />
        </div>
      </div>
      <div className="sale-percent-image">
        <img src={fiftypercentoff} alt="50% sale" />
      </div>
    </section>
  );
}

export default MainSection;
