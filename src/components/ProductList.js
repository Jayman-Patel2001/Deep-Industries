import React from "react";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import { NavLink } from "react-router-dom";
import "../styles/ProductList.css";

const ProductList = ({ productPage }) => {
  return (
    <div className="productList">
      <div className="product_title">Our Products</div>
      <div className="product_List">
        <NavLink
          className="product_info"
          activeClassName="productList_activeClass"
          exact
          to="/product/sodiumpellets"
        >
          <LabelImportantIcon className="product_icon" />
          <p>Sodium Hydroxide Pellets</p>
        </NavLink>
        <NavLink
          className="product_info"
          activeClassName="productList_activeClass"
          exact
          to="/product/potasspellets"
        >
          <LabelImportantIcon className="product_icon" />
          <p>Potassium Hydroxide Pellets</p>
        </NavLink>
        <NavLink
          className="product_info"
          activeClassName="productList_activeClass"
          exact
          to="/product/sodiumpowder"
        >
          <LabelImportantIcon className="product_icon" />
          <p>Sodium Hydroxide Powder</p>
        </NavLink>
        <NavLink
          className="product_info"
          activeClassName="productList_activeClass"
          exact
          to="/product/potasspowder"
        >
          <LabelImportantIcon className="product_icon" />
          <p>Potassium Hydroxide Powder</p>
        </NavLink>
        <NavLink
          className="product_info"
          activeClassName="productList_activeClass"
          exact
          to="/product/parawax"
        >
          <LabelImportantIcon className="product_icon" />
          <p>Paraffin Wax Pellets</p>
        </NavLink>
      </div>
      {productPage && (
        <div className="contactList">
          <div className="contact_title">Contact Details</div>
          <div className="telephoneNo">
            <div className="telephone_contact">
              <CallIcon className="contact_icon" />
              <p>Tel : +91 79 6545 3449</p>
            </div>
            <div className="telephone_contact">
              <CallIcon className="contact_icon" />
              <p>Mo : +91 99 0922 4482</p>
            </div>
            <div className="telephone_contact">
              <CallIcon className="contact_icon" />
              <p>Mo : +91 98 2423 4369</p>
            </div>
            <div className="email_list">
              <EmailIcon className="email_icon" />
              <a href="mailto:deepindustries11@rediffmail.com">
                deepindustries11@rediffmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
