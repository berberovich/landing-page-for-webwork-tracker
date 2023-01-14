import React from "react";
import logo1 from "../../../assets/companyLogos/Logo 10.png";
import logo2 from "../../../assets/companyLogos/Logo 11.png";
import logo3 from "../../../assets/companyLogos/Logo 12.png";
import logo4 from "../../../assets/companyLogos/Logo 13.png";
import logo5 from "../../../assets/companyLogos/Logo 14.png";
import logo6 from "../../../assets/companyLogos/Logo 15.png";
import logo7 from "../../../assets/companyLogos/Logo 16.png";
import logo8 from "../../../assets/companyLogos/Logo 17.png";
import logo9 from "../../../assets/companyLogos/Logo 18.png";
function CompanyLogos() {
  const logos = [logo1, logo6, logo7, logo8, logo9, logo4, logo2, logo3, logo5];
  return (
    <section className="company-logos-container">
      <p className="company-logos-container__paragraph">
        Trusted by 1000+ Companies
      </p>
      <div className="company-logos">
        {logos.map((logo) => (
          <img src={logo} className="company-logos-img" />
        ))}
      </div>
    </section>
  );
}

export default CompanyLogos;
