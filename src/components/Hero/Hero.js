import React from "react";
import heroImg from "../../assets/hero.png";
import { ArrowRight } from "lucide-react";
import "./Hero.scss";

const Hero = () => {
  return (
      <section className="hero">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-left">
              <h2>
                <span>I design products</span> that delight and inspire people.
              </h2>
              <p>
                Hi! I’m Jake, a product designer based in Berlin. I create
                user-friendly interfaces for fast-growing startups.
              </p>
              <div className="hero-left__buttons">
                <button>Book a call</button>
                <button className="flex">
                  Download CV <ArrowRight />
                </button>
              </div>
            </div>
            <div className="hero-right">
              <img src={heroImg} alt="" />    
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
