import { Tooltip } from "@material-ui/core";
import React from "react";
import "../styles/Card.css";
import { NavLink } from "react-router-dom";

const Card = ({ title, description, location }) => {
  return (
    <div className="card">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="card_description">
        <p>{description}</p>
      </div>
      <Tooltip title="Know More About Product">
        <div className="button">
          <NavLink exact to={location}>
            More
          </NavLink>
        </div>
      </Tooltip>
    </div>
  );
};

export default Card;
