import React from "react";
import PlanFeatures from "./PlanFeatures";
import PlanImage from "./PlanImage";
function Plan({ data }) {
  return (
    <div className="plan__content">
      <PlanImage imagePath={data.topRightImagePath} />
      <div className="plan__content__duration">{data.duration}</div>
      <div className="plan__content__prices">
        <div className="plan__content__prices__previous-price">
          {data.previousPrice}
        </div>
        <div className="plan__content__prices__new-price">{data.newPrice}</div>
        <div className="plan__content__prices__text">per user/month</div>
      </div>
      <PlanFeatures features={data.features} />

      <div>
        <button className="plan__content__btn btn">get your deal</button>
      </div>
      <span className="plan__content__bottom-right-text bottom-right-text">
        {data.bottomRightText}
      </span>
    </div>
  );
}

export default Plan;
