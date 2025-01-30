import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/style/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <i className="fa-brands fa-github"></i>
      <NavLink to="/">© 2025 GitHub, Inc. </NavLink>
      <NavLink to="/">Terms </NavLink>
      <NavLink to="/">Privacy </NavLink>
      <NavLink to="/">Security </NavLink>
      <NavLink to="/">Status </NavLink>
      <NavLink to="/">Docs</NavLink>
      <NavLink to="/">Contact </NavLink>
      <NavLink to="/">Manage cookies </NavLink>
      <NavLink to="/">Do not share my personal information </NavLink>
    </div>
  );
}

export default Footer;
