import { ArrowRight } from "lucide-react";
import React from "react";
import logo from "../../assets/Vector.svg";
import "./Header.scss"
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="" />
          </div>
          <ul className="navbar-lists">
            <li className="navbar-lists__list">
              <a href="#">About</a>
            </li>
            <li className="navbar-lists__list">
              <a href="#">Services</a>
            </li>
            <li className="navbar-lists__list">
              <a href="#">Projects</a>
            </li>
            <li className="navbar-lists__list">
              <a href="#">Blog</a>
            </li>
            <li className="navbar-lists__list">
              <a href="#">Book a call</a>
              <ArrowRight />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
