import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              <i className="fas fa-tachometer-alt"></i>Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/docs" exact>
              <i className="far fa-address-book"></i>Docs
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/examples" exact>
              <i className="far fa-address-book"></i>Examples
            </NavLink>
          </li>
        </ul>
      </div>
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Framework
      </NavLink>
    </nav>
  );
};
export default Navbar;
