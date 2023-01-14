import React from "react";
import { plan1, plan2 } from "../constants";
import MainSection from "./sections/upper/MainSection.js";
import Plans from "./sections/plans/Plans.js";
import Features from "./sections/features/Features.js";
import CompanyLogos from "./sections/companyLogos/CompanyLogos";
import Footer from "./footer/Footer";

function Main() {
  return (
    <main>
      <MainSection />
      <Plans plansArr={[plan1, plan2]} />
      <Features />
      <CompanyLogos />
      <Footer />
    </main>
  );
}

export default Main;
