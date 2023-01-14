import React from "react";
import { plan1, plan2 } from "../constants";
import MainSection from "./section1/MainSection";
import Plans from "./Plans";
import Features from "./Features";

function Main() {
  return (
    <main>
      <MainSection />
      <Plans plansArr={[plan1, plan2]} />
      <Features />
    </main>
  );
}

export default Main;
