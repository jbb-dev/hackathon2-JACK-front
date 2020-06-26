import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Landing/landing.css";
import logo from "../assets/images/hermes2.png";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header title="Accueil" />
      <div className="deconnexion_button_div">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            className="deconnexion_button"
            src="https://i.ibb.co/hfQ1cYb/Sans-titre.png"
            alt=""
          />
        </Link>
      </div>
      <div className="home_page">
        <img className="home_logo" src={logo} alt="logo" />
        <div className="home">
          <Link to="/DemandStep1" style={{ textDecoration: "none" }}>
            <button className="home_button">Créer une demande</button>
          </Link>

          <Link to="/documents" style={{ textDecoration: "none" }}>
            <button className="home_button">Mes demandes</button>
          </Link>

          <Link to="/Profile" style={{ textDecoration: "none" }}>
            <button className="home_button">Mon profil</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
