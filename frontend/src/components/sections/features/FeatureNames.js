import React from "react";

function FeatureNames({ title, icon, id, setActiveId }) {
  const handleFeatureNameClick = () => {
    setActiveId(id);
  };
  return (
    <div onClick={handleFeatureNameClick} className="feature-title">
      <div className="feature-titles-container__image">
        <img src={icon} alt="" />
      </div>
      <div className="feature-titles-container__title">{title}</div>
    </div>
  );
}

export default FeatureNames;
