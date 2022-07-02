import React from "react";
import "../styles/Product5.css";
import ProductList from "./ProductList";
import { NavLink } from "react-router-dom";

const Product5 = () => {
  return (
    <div className="product5">
      <ProductList />
      <div className="product1_rightSide">
        <div className="title">
          <p>Paraffin Wax Pellets</p>
        </div>
        <div className="product1_info">
          <img
            src="	https://www.pellets.co.in/images/para_pellets.jpg"
            alt="product"
          />
          <p>
            We are manufacturer of different grade of fully refined Paraffin Wax
            Pellets.We are selecting standard paraffins with different melting
            points made from high quality waxes available from Indian and
            imported sources.
          </p>
        </div>

        <div className="product5_variety">
          <p>Paraffin Wax Pellets 56° - 58°</p>
          <p>Paraffin Wax Pellets 58° - 60°</p>
          <p>Paraffin Wax Pellets 60° - 62°</p>
          <p>Paraffin Wax with Ceresine Pellets</p>
        </div>
        <div className="inquiry_button_product5">
          <NavLink exact to="/inquiry">
            Inquiry
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Product5;
