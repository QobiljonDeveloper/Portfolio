import React from "react";
import "./Services.scss";
import { Service } from "../../static";
const Services = () => {
  return (
    <section className="service">
      <div className="container">
        <p className="sub-title">Services</p>
        <p className="title">
          Design that solves problems, one product at a time.
        </p>
        <div className="service-wrapper">
          {Service?.map((item) => (
            <div key={item.id} className="service-card">
              <img src={item.img} alt="" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <ul>
                {item.options.map((items) => (
                  <li key={items.id}> {items.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
