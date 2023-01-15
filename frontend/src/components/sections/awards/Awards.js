import React from "react";
import AwardBox1 from "./AwardBox1";

function Awards() {
  return (
    <section className="awards-container">
      <AwardBox1
        titleFontSize={30}
        title="High Performer"
        season="String"
        year="2022"
      />{" "}
      <AwardBox1
        titleFontSize={22}
        title="High Performer"
        season="String"
        year="2022"
      />
      <AwardBox1
        titleFontSize={22}
        title="High Performer"
        season="String"
        year="2022"
      />
    </section>
  );
}

export default Awards;
