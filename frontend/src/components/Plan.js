import React from "react";
import tick from "../assets/tick.png";
function Plan({ data }) {
  const {
    topRightPercentage,
    duration,
    previousPrice,
    newPrice,
    features,
    bottomRightText,
  } = data;
  return (
    <div className="plans-section__plan">
      <div className="duration">{duration}</div>
      <div className="price">
        <div className="previous-price">{previousPrice}</div>
        <div className="new-price">{newPrice}</div>
        <div className="peruser">per user/month</div>
      </div>
      <div className="features-container">
        {features.map((feature) => {
          const { id, content } = feature;
          return (
            <div key={id} className="features-container__feature">
              <img src={tick} alt="" />
              <span className="plan-content">{content}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Plan;
