import React from "react";
import MainSection from "./MainSection";

function Main() {
  const plan1 = {
    topRightPercentage: "50%",
    duration: "Monthly",
    previousPrice: "$4.99",
    newPrice: "$2.49",
    features: ["14-day Free Trial", "Access to All Features 24/7", "Support"],
    bottomRightText: "*for 6 months",
  };
  const plan2 = {
    topRightPercentage: "18%+50%",
    duration: "Yearly",
    previousPrice: "$4.09",
    newPrice: "$2.05",
    features: ["14-day Free Trial", "Access to All Features 24/7", "Support"],
    bottomRightText: "",
  };
  return (
    <main>
      <MainSection />
    </main>
  );
}

export default Main;
