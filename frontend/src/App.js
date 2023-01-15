import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Awards from "./components/sections/awards/Awards";
import CompanyLogos from "./components/sections/companyLogos/CompanyLogos";
import Features from "./components/sections/features/Features";
import Plans from "./components/sections/plans/Plans";
import MainSection from "./components/sections/mainSection/MainSection";
import { plan1, plan2 } from "./constants";

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <Plans plansArr={[plan1, plan2]} />
      <Awards />
      <Features />
      <CompanyLogos />
      <Footer />
    </>
  );
}

export default App;
