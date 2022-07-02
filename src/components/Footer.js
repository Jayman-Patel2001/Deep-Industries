import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer_companyInfo">
        <p>Copyright © 2011-{date} </p>
        <NavLink exact to="/">
          Deep Industries
        </NavLink>
      </div>

      <div className="designer_info">
        <p>
          Designed with <span className="designer">♥</span> by
          <span className="designer_name"> Jayman</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
