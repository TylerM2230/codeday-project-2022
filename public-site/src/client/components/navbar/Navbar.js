import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo mb-0 h1" to="/" exact>
        onsed
      </NavLink>
      <div className={`nav-menu ${show ? "" : "hidden"}`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/docs" exact>
              Docs
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/examples" exact>
              Examples
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={`hamburg-icon`}>
        <Hamburger
          rounded
          onToggle={(toggled) => {
            if (toggled) {
              setShow(true);
            } else {
              setShow(false);
            }
          }}
        />
      </div>
    </nav>
  );
};
export default Navbar;
