import React from "react";
import "../styles/About.css";
import ProductList from "./ProductList";

const About = () => {
  return (
    <div className="about">
      <ProductList productPage />
      <div className="aboutRightSideDescription">
        <div className="about_rightSide">
          <div className="aboutRightSide_title">
            <p>About Our Company</p>
          </div>
          <div className="aboutRightSide_info">
            <p>
              Deep Industries, established in 2011 in industrial area of
              Ahmedabad (Guj) India. We are Happy to introduce our selves as a
              one of the leading manufacturer of NaOH Pellets, KOH Pellets, NaOH
              Powder, KOH Powder, Paraffin Wax Pellets etc. Deep Industries are
              now with the customers support and appreciation of the quality and
              service become a credible manufacturer and suppliers of the Sodium
              Hydroxide Pellets & Powder and Potassium Hydroxide Pellets &
              Powder & All grade of Paraffin Wax Pellets in India.
            </p>
            <img
              src="/images/aboutCompany.svg"
              className="aboutCompany_img"
              alt="Deep_Industries"
            />
          </div>
        </div>
        <div className="about_rightSide">
          <div className="aboutRightSide_title">
            <p>Why Us ?</p>
          </div>
          <div className="aboutRightSide_info">
            <p>
              We are producing quality assured Pellets & Powder with perfect
              size and shape with very good appearance. we are capable of
              developing products according to the specifications provided by
              our customers and clients. We are selecting best quality raw
              materials for pellets and Powder as per client's requirements.
            </p>
            <img
              src="/images/whyUs1.svg"
              className="whyUs_image"
              alt="Deep_Industries"
            />
          </div>
        </div>
        <div className="about_rightSide">
          <div className="aboutRightSide_title">
            <p>Our Vision</p>
          </div>
          <div className="aboutRightSide_info">
            <p>
              Our Vision is to become a quality manufacturer of sodium hydroxide
              Pellets and potassium hydroxide Pellets export company in India,
              by providing a range of international quality products at
              competitive prices through integration, research & development. We
              will achieve our vision by working closely with our partners.
            </p>
            <img
              src="/images/ourVision.svg"
              className="ourVision_img"
              alt="Vision"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
