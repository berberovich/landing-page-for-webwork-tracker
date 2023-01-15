import React from "react";

function FeatureNames({ title, icon, id, setActiveId, activeId, feature }) {
  const handleFeatureNameClick = () => {
    setActiveId(id);
  };
  let className = "feature-titles-container__title";

  if (feature.id === activeId) {
    className += " active";
  }
  return (
    <div onClick={handleFeatureNameClick} className="feature-title">
      <div className="feature-titles-container__image">
        <img src={icon} alt="" />
      </div>
      <div className={className}>{title}</div>
    </div>
  );
}

export default FeatureNames;
