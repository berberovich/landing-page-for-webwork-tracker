import React from "react";
import Plan from "./Plan";

function Plans(props) {
  const { plansArr } = props;
  return (
    <section className="plans-section">
      <p className="plans-section__paragraph">
        Benefit both ways - <i>monthly</i> or <i>yearly</i>
      </p>
      <div className="plans-section__plan-container">
        {plansArr.map((planObj) => {
          return <Plan key={planObj.id} data={planObj} />;
        })}
      </div>
    </section>
  );
}

export default Plans;
