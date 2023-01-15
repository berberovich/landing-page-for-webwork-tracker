import React from "react";
import MainSectionContent from "./MainSectionContent";
import MainSectionImage from "./MainSectionImage.js";
import "./MainSection.scss";

function MainSection() {
  return (
    <section className="main-section flex justify-between">
      <MainSectionContent />
      <MainSectionImage />
    </section>
  );
}

export default MainSection;
