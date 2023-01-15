import React from "react";

function PlanImage({ imagePath }) {
  return (
    <div className="plans__plan__content__topright-image topright-image-container">
      <img src={imagePath} className="plan-top-right-image" alt="" />
    </div>
  );
}

export default PlanImage;
