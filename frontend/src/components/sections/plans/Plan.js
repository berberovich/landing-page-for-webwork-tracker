import React from "react";
import tick from "../../../assets/tick.png";
import Button from "../../Button.js";
function Plan({ data }) {
  const {
    topRightImagePath,
    duration,
    previousPrice,
    newPrice,
    features,
    bottomRightText,
  } = data;
  return (
    <div className="plans-section__plan">
      <div className="topright-image-container">
        <img src={topRightImagePath} className="plan-top-right-image" alt="" />
      </div>
      <div className="duration">{duration}</div>
      <div className="price">
        <div className="previous-price">{previousPrice}</div>
        <div className="new-price">{newPrice}</div>
        <div className="peruser">per user/month</div>
      </div>
      <ul className="features-container">
        {features.map((feature) => {
          const { id, content } = feature;
          return (
            <li key={id} className="features-container__feature">
              <img src={tick} alt="" />
              <span className="plan-content">{content}</span>
            </li>
          );
        })}
      </ul>
      <div className="btn-container">
        <Button text="get your deal" />
      </div>
      <span className="bottom-right-text">{bottomRightText}</span>
    </div>
  );
}

export default Plan;
