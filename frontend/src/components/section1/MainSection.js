import React from "react";
import Button from "../Button";

import fiftypercentoff from "../../assets/fiftypercentoff.png";
import MainSectionContent from "./MainSectionContent";

function MainSection() {
  return (
    <section className="upmost-section">
      <MainSectionContent />
      <div className="upmost-section__sale-percent-image">
        <img src={fiftypercentoff} alt="50% sale" />
      </div>
    </section>
  );
}

export default MainSection;
