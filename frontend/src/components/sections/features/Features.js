import React from "react";
import FeaturesContent from "./FeaturesContent";
import FeaturesTitle from "./FeaturesTitle";
import "./Features.scss";
function Features() {
  return (
    <section className="features">
      <FeaturesTitle />
      <FeaturesContent />
    </section>
  );
}

export default Features;
