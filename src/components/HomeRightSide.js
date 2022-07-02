import React from "react";
import { useHistory } from "react-router";
import "../styles/HomeRightSide.css";

const HomeRightSide = () => {
  const history = useHistory();
  return (
    <div className="homeRightSide">
      <div className="homeRightSide_title">welcome to deep industries</div>
      <div className="homeRightSide_description">
        <div className="homeRightSide_firstPara">
          <p>
            Deep Industries, established in 2011 in industrial area of Ahmedabad
            (Guj) India. We are Happy to introduce our selves as a one of the
            leading manufacturer of NaOH Pellets, KOH Pellets, NaOH Powder, KOH
            Powder, Paraffin Wax Pellets etc. Deep Industries are now with the
            customers support and appreciation of the quality and service become
            a credible manufacturer and suppliers of the Sodium Hydroxide
            Pellets & Powder and Potassium Hydroxide Pellets & Powder & All
            grade of Paraffin Wax Pellets in India.
          </p>
          <img src="/images/homeRightSide.jpg" alt="Deep Industries" />
        </div>
        <div className="homeRightSide_secondPara">
          <p>
            We are producing quality assured Pellets & Powder with perfect size
            and shape with very good appearance. we are capable of developing
            products according to the specifications provided by our customers
            and clients. We are selecting best quality raw materials for pellets
            and Powder as per client's requirements.Our Vision is to become a
            quality manufacturer of sodium hydroxide Pellets and potassium
            hydroxide Pellets export company in India...
            <span onClick={(e) => history.push("/about")}> Read More</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeRightSide;
