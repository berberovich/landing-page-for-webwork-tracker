import React from "react";
import MainSection from "./MainSection";
import Plans from "./Plans";

function Main() {
  const plan1 = {
    id: 1,
    topRightPercentage: "50%",
    duration: "Monthly",
    previousPrice: "$4.99",
    newPrice: "$2.49",
    features: [
      { id: 1, content: "14-day Free Trial" },
      { id: 2, content: "Access to All Features" },
      { id: 3, content: "24/7 Support" },
    ],
    bottomRightText: "*for 6 months",
  };
  const plan2 = {
    id: 2,
    topRightPercentage: "18%+50%",
    duration: "Yearly",
    previousPrice: "$4.09",
    newPrice: "$2.05",
    features: [
      { id: 1, content: "14-day Free Trial" },
      { id: 2, content: "Access to All Features" },
      { id: 3, content: "24/7 Support" },
    ],
    bottomRightText: "",
  };
  return (
    <main>
      <MainSection />
      <Plans plansArr={[plan1, plan2]} />
    </main>
  );
}

export default Main;
