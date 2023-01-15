import React from "react";
import Button from "../../Button";
import ratingStars from "../../../assets/ratingStars.png";
import capterra from "../../../assets/capterra.png";
import crowd from "../../../assets/crowd.png";
import getApp from "../../../assets/getApp.png";
import fiftypercentoff from "../../../assets/fiftypercentoff.png";
import Group3745 from "../../../assets/Group 3745.png";

function MainSectionContent() {
  return (
    <div className="upmost-section__content">
      <p className="upmost-section__content__paragraph">
        <span className="yellow-fontcolor">CYBER MONDAY</span> means an even{" "}
        <span className="yellow-fontcolor">BIGGER SALE</span>
      </p>
      <div className="upmost-section__content__quote short">
        <small>Cyber Monday saves you money, WebWork saves you time.</small>
      </div>
      <Button text="SAVE BIG NOW" />

      <div className="upmost-section__content__quote flex">
        <img src={Group3745} alt="" />
        <small>14-day free trial | No credit card required</small>
      </div>

      <div className="upmost-section__content__rating-stars">
        <img src={ratingStars} alt="rating stars" />
        <small>
          Reviews from <b>51k+</b> happy users below and beyond
        </small>
      </div>
      <div className="upmost-section__content__company-names">
        <img src={capterra} alt="capterra" />
        <img src={crowd} alt="crowd" />
        <img src={getApp} alt="getApp" />
      </div>
    </div>
  );
}

export default MainSectionContent;
