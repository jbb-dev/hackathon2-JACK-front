import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <Link to="/home">
          <button type="button" className="save-button">
            Sauvegarder
          </button>
        </Link>
        <Link to={props.path}>
          <button type="button" className="next-button">
            Etape suivante
          </button>
        </Link>
        <div className="step">{props.stepText}</div>
      </div>
    </>
  );
};

export default Footer;
