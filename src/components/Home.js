import React from "react";
import "../styles/Home.css";
import Card from "./Card";
import HomeRightSide from "./HomeRightSide";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div className="home">
      <div className="img_container">
        <img src="/images/homeImg.jpg" className="homeImg" alt="home image" />
        <div className="description">
          <p className="desc_title">Need Chemicals ?</p>
          <p className="desc_info">
            We are manufacturer of of NaOH Pellets, NaOH Powder, KOH Pellets,
            KOH Powder, Paraffin Wax Pellets.
            <br />
            <br /> We are producing quality assured Pellets & Powder with
            perfect size and shape with very good appearance.
          </p>
        </div>
      </div>
      <div className="cards">
        <Card
          title="Sodium Hydroxide Pellets & Powder"
          description="NaOH Pellets & Powder Chemical Manufacturer"
          location="/product/sodiumpellets"
        />
        <Card
          title="Potassium Hydroxide Pellets & Powder"
          description="KOH Pellets & Powder Chemical Manufacturer"
          location="/product/potasspellets"
        />
        <Card
          title="Paraffin Wax Pellets"
          description="We are Specialist Chemical Manufacturer Like Paraffin Wax"
          location="/product/parawax"
        />
      </div>

      <div className="home_companyInfo">
        <ProductList productPage />
        <HomeRightSide />
      </div>
    </div>
  );
};

export default Home;
