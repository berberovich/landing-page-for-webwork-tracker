import React from "react";
import tick from "../../../assets/tick.png";

function PlanFeatures({ features }) {
  return (
    <ul>
      {features.map((feature) => {
        const { id, content } = feature;
        return (
          <li key={id} className="plan__feature">
            <img src={tick} alt="" />
            <span className="plan__feature__content">{content}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default PlanFeatures;
