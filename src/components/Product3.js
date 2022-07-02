import React from "react";
import "../styles/Product3.css";
import ProductList from "./ProductList";
import { Scrollbars } from "react-custom-scrollbars";
import Table1 from "./Table1";
import { NavLink } from "react-router-dom";

const Product3 = () => {
  return (
    <div className="product3">
      <ProductList />
      <Scrollbars style={{ width: 900, height: 599 }}>
        <div className="product1_rightSide">
          <div className="title">
            <p>Sodium Hydroxide Powder</p>
          </div>
          <div className="product1_info">
            <img
              src="	https://www.pellets.co.in/images/NaOH-Powder.jpg"
              alt="product"
            />
            <p>
              We are capable of developing products according to the
              specifications provided by our customers and clients. We are
              selecting best quality raw materials for Sodium Hydroxide Powder
              and Potassium Hydroxide Powder as per client's requirements.
            </p>
          </div>

          {/* Table Part */}

          <div className="product3_table">
            <div className="mainTitle">
              CAUSTIC SODA POWDER CAS NO: 1310-73-2 NaOH: MW: 40.00
            </div>
            <div className="title1">Product Identification</div>
            <Table1
              row11="Description"
              row12="White, hygroscopic powder"
              row21="Identify"
              row22="pH: not less than 11.0, Na: Passes test"
              row31="Test solution (10% w/v; water)"
              row32="The solution is clear and colourless"
              row41="Assay (NaOH)"
              row42="NLT 96.0 %"
              row51="Carbonate (as Na2C03)"
              row52="NMT 2.0 %"
              row61="Chloride (Cl)"
              row62="NMT 0.02 %"
              row71="PARTICLE SIZE(By Sieve Analysis)"
              row72="Not less than 80%  pass thro’ 1000 micron"
            />
            <div className="productInquiry_button">
              <NavLink exact to="/inquiry">
                Inquiry
              </NavLink>
            </div>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default Product3;
