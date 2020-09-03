import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper brown darken-3 px1">
      <NavLink to="/about" className="brand-logo">
        Planktonics Team
      </NavLink>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/chat">Team chat</NavLink>
        </li>
        <li>
          <NavLink to="/getstarted">Get started</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Sign In</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <div className="dropdown">
            <div className="dropbtn">EN</div>
            <div className="dropdown-content">
              <NavLink to="/">RU</NavLink>
              <NavLink to="/">EN</NavLink>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);
