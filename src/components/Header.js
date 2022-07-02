import React from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import BallotIcon from "@material-ui/icons/Ballot";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactsIcon from "@material-ui/icons/Contacts";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand header_logo" to="/">
            <img
              src="/images/headerLogo.svg"
              className="header_logoImg"
              alt="Deep Logo"
            />
            <p>Deep Industries</p>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link header_link"
                  activeClassName="header_activeClass"
                  exact
                  to="/"
                >
                  <HomeIcon />
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link header_link"
                  activeClassName="header_activeClass"
                  exact
                  to="/about"
                >
                  <DescriptionIcon />
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link header_link"
                  activeClassName="header_activeClass"
                  exact
                  to="/product"
                >
                  <BallotIcon />
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link header_link"
                  activeClassName="header_activeClass"
                  exact
                  to="/contact"
                >
                  <ContactsIcon />
                  Contact us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link header_link"
                  activeClassName="header_activeClass"
                  exact
                  to="/inquiry"
                >
                  <ContactSupportIcon />
                  Inquiry
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
