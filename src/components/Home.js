import React, { useState, useEffect} from "react";

import { Link } from "react-router-dom";
import "./Landing/landing.css"
import logo from '../assets/images/hermes2.png'
import Axios from 'axios'

const Home = () => {
  return (
    <div className="home_page">
        <div className="deconnexion_button_div">
            <Link to="/" style={{ textDecoration: "none" }}>
                <button className="deconnexion_button">Déconnexion</button>
            </Link> 
        </div>
      <img className="home_logo" src={logo} alt="logo" />
      <div className="home">
        
        <Link to="/home" style={{ textDecoration: "none" }}>
          <button className="home_button">Créer une demande</button>
        </Link> 

        <Link to="/demands" style={{ textDecoration: "none" }}>
          <button className="home_button">Mes demandes</button>
        </Link> 

        <Link to="/Profile" style={{ textDecoration: "none" }}>
          <button className="home_button">Mon profil</button>
        </Link> 
      
      </div>
    </div>
  );
};
export default Home;
