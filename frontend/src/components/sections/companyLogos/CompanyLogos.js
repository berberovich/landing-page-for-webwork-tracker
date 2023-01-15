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
import "./CompanyLogos.scss";
function CompanyLogos() {
  const logos = [logo1, logo6, logo7, logo8, logo9, logo4, logo2, logo3, logo5];
  return (
    <section className="logos text-center">
      <p className="logos__content">Trusted by 1000+ Companies</p>
      <div>
        {logos.map((logo) => (
          <img src={logo} className="logos__image" />
        ))}
      </div>
    </section>
  );
}

export default CompanyLogos;
