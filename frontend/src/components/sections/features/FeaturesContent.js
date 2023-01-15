import React, { useState } from "react";
import { features } from "../../../constants";
import Feature from "./Feature";
import FeaturesHeader from "./FeaturesHeader.js";
function FeaturesContent() {
  const [activeId, setActiveId] = useState(3);
  const targetFeature = features.find((feature) => feature.id === activeId);
  return (
    <div className="features__box">
      <div className="features__header flex items-center">
        {features.map((feature) => {
          const { id, title, icon } = feature;
          return (
            <FeaturesHeader
              setActiveId={setActiveId}
              feature={feature}
              activeId={activeId}
              key={id}
              id={id}
              icon={icon}
              title={title}
            />
          );
        })}
      </div>
      <Feature activeId={activeId} data={targetFeature} />
    </div>
  );
}

export default FeaturesContent;
