import React from 'react'
import {Link} from 'react-router-dom'
import './landing.css'
import logo from '../../assets/images/hermes2.png'
import LogoTexte from "./LogoTexte";
import Loader from "./Loader";



const Landing = () => {

        return (
          <div className="LandingPage">
            <div>
              <LogoTexte />
              <img className="landing_logo" src={logo} alt=" logo" />
            </div>
            <div className="create">
              <Link to="/register" style={{ textDecoration: "none" }}>
                <button type="button" id="createBtn">
                  {" "}
                  Créer un compte{" "}
                </button>
              </Link>
            </div>
            <div className="login">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button type="button" id="loginBtn">
                  {" "}
                  Se connecter{" "}
                </button>
              </Link>
            </div>
            <div>
              <Link to="/informations" style={{ textDecoration: "none" }}>
                <p id="invite"> Comment fonctionne l'application ? </p>
              </Link>
            </div>
          </div>
        );
    
}
export default Landing 