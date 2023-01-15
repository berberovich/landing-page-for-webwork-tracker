import React from "react";

function FeaturesHeader({ title, icon, id, setActiveId, activeId, feature }) {
  const handleFeatureNameClick = () => {
    setActiveId(id);
  };
  let classNameForFeatureName = "";

  if (feature.id === activeId) {
    classNameForFeatureName += " active";
  }
  return (
    <div
      onClick={handleFeatureNameClick}
      className="features__header__feature cursor-pointer"
    >
      <div className="features__header__feature__image">
        <img src={icon} alt="" />
      </div>
      <div className={classNameForFeatureName}>{title}</div>
    </div>
  );
}

export default FeaturesHeader;
