import React from "react";
import "./Footer.scss";
import { ReactComponent as Logo } from "../../assets/Vector.svg";

import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-title">Ready to make something kickass?</p>
        <p className="footer-subTitle">
          <span>Let's get on a call.</span>
        </p>

        <div className="footer-wrapper">
          <div className="footer-logo">
            <Logo className="logo" />

            <p>4353 Delaware Avenue, San Francisco, USA</p>
            <p className="mail">
              <Mail size={18} />
              hi@thefolio.com
            </p>
          </div>

          <div className="footer-navigations">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Dribbble</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Experience</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© All rights reserved. Sumit Hegde · Powered by Webflow</p>
          <div className="links">
            <a href="#">Image License Info</a>
            <a href="#">Instructions</a>
            <a href="#">Changelog</a>
            <a href="#">Style Guide</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
