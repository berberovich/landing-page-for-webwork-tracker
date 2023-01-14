import React from "react";
import { features } from "../../../constants";
import Feature from "./Feature";
function FeaturesContent() {
  return (
    <div className="features-content-container">
      {features.map((feature) => {
        const { id } = feature;
        return <Feature key={id} data={feature} />;
      })}
    </div>
  );
}

export default FeaturesContent;
