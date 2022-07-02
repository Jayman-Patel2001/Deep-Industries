import React from "react";
import "../styles/Product.css";
import ProductList from "./ProductList";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { NavLink } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <ProductList productPage />
      <div className="product_rightSide">
        <div className="productRightSide_title">
          <p>About Our Products</p>
        </div>
        <div className="productRightSide_info">
          <div className="productInfo_description">
            <div className="productPara_info">
              <p className="product_firstPara">
                We are producing quality assured sodium hydroxide pellets and
                potassium hydroxide pellets with perfect size and shape with
                very good appearance. we are capable of developing products
                according to the specifications provided by our customers and
                clients.
              </p>
              <p className="product_secondPara">
                We are selecting best quality raw materials for sodium hydroxide
                pellets and potassium hydroxide pellets as per client's
                requirements. We comply with all applicable safety, health and
                environmental laws and regulations. Our valued customers include
                multinational companies. Given below our Product Range.
              </p>
            </div>
            <img src="/images/aboutProduct.svg" alt="product" />
          </div>
          <div className="product_rightSideProductInfo">
            <NavLink
              className="product_rightSideinfo"
              exact
              to="/product/sodiumpellets"
            >
              <LabelImportantIcon className="product_rightSideicon" />
              <p>Sodium Hydroxide Pellets</p>
            </NavLink>
            <NavLink
              className="product_rightSideinfo"
              exact
              to="/product/potasspellets"
            >
              <LabelImportantIcon className="product_rightSideicon" />
              <p>Potassium Hydroxide Pellets</p>
            </NavLink>
            <NavLink
              className="product_rightSideinfo"
              exact
              to="/product/sodiumpowder" 
            >
              <LabelImportantIcon className="product_rightSideicon" />
              <p>Sodium Hydroxide Powder</p>
            </NavLink>
            <NavLink
              className="product_rightSideinfo"
              exact
              to="/product/potasspowder"
            >
              <LabelImportantIcon className="product_rightSideicon" />
              <p>Potassium Hydroxide Powder</p>
            </NavLink>
            <NavLink
              className="product_rightSideinfo"
              exact
              to="/product/parawax"
            >
              <LabelImportantIcon className="product_rightSideicon" />
              <p>Paraffin Wax Pellets</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
