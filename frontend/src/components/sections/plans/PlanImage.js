import React from "react";

function PlanImage({ imagePath }) {
  return (
    <div className="plan__content__top-right-image topright-image-container">
      <img src={imagePath} className="plan-top-right-image" alt="" />
    </div>
  );
}

export default PlanImage;
