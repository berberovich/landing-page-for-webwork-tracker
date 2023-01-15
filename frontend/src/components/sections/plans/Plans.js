import React from "react";
import Plan from "./Plan";
import "./Plans.scss";
function Plans(props) {
  const { plansArr } = props;
  return (
    <section className="plans">
      <p className="plans__title text-center">
        Benefit both ways - <i>monthly</i> or <i>yearly</i>
      </p>
      <div className="plan flex">
        {plansArr.map((planObj) => {
          return <Plan key={planObj.id} data={planObj} />;
        })}
      </div>
    </section>
  );
}

export default Plans;
