import React from "react";
import yamal from "../../assets/yamal.png";
import smybol from "../../assets/smybol.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "./Testimonials.scss";
const Testimonials = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <p className="sub-title-testimonial">Testimonials</p>
        <p className="title-testimonial">Word on the street</p>
        <div className="testimonial-wrapper">
          <div className="testimonial-left">
            <img src={yamal} alt="" />
          </div>
          <div className="testimonial-right">
            <img src={smybol} alt="" />
            <p className="right-text">
              Jade helped us build a software so intuitive that it didn't need a
              walkthrough. He solved complex problems with brilliant design.
            </p>

            <div className="testimonial-texts">
              <div className="testimonial-texts__left">
                <p>John Frankin</p>
                <p>Founder, Double Bunch</p>
              </div>
              <div className="testimonial-texts__right">
                <button>
                  <ArrowLeft className="icons" />
                </button>
                <button>
                  <ArrowRight className="icons" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
