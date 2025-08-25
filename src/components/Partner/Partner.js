import React from "react";
import "./Partner.scss";
import first from "../../assets/first.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import four from "../../assets/four.png";

const Partner = () => {
  return (
    <section className="partner">
      <div className="container">
        <p>Trusted by</p>
        <div className="partner-wrapper">
            
          <img src={first} alt="" />
          <img src={second} alt="" />
          <img src={third} alt="" />
          <img src={four} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Partner;
