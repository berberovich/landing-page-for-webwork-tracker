import React from "react";
import ratingStars from "../../../assets/ratingStars.png";
import capterra from "../../../assets/capterra.png";
import crowd from "../../../assets/crowd.png";
import getApp from "../../../assets/getApp.png";
import Group3745 from "../../../assets/Group 3745.png";

function MainSectionContent() {
  return (
    <div className="main-section__content">
      <p>
        <span className="font-weight-700 yellow-font-color">CYBER MONDAY</span>{" "}
        means an even{" "}
        <span className="font-weight-700 yellow-font-color">BIGGER SALE</span>
      </p>
      <div className="main-section__content__quote">
        <small className="main-section__content__quote__short-width">
          Cyber Monday saves you money, WebWork saves you time.
        </small>
      </div>
      <button className="main-section__content__btn btn">save big now</button>

      <div className="flex items-center main-section__content__quote main-section__content__flex-gap">
        <img src={Group3745} alt="" />
        <small>14-day free trial | No credit card required</small>
      </div>

      <div className="flex items-center main-section__content__rating-stars">
        <img src={ratingStars} alt="rating stars" />
        <small>
          Reviews from <b>51k+</b> happy users below and beyond
        </small>
      </div>
      <div className="flex items-center main-section__content__company-names">
        <img src={capterra} alt="capterra" />
        <img src={crowd} alt="crowd" />
        <img src={getApp} alt="getApp" />
      </div>
    </div>
  );
}

export default MainSectionContent;
