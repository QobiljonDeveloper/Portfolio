import React, { useState } from "react";
import logo from "../../assets/Vector.svg";
import "./Header.scss";
import { ArrowRight, Menu, X } from "lucide-react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="logo" />
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
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </div>
        </nav>
      </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Book a call</a>
            <ArrowRight />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
