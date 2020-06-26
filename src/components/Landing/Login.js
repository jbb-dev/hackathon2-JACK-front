import React, { useState, useEffect} from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import logo from '../../assets/images/hermes2.png'
import Axios from 'axios'

const Login = () => {
  const [success, setSuccess] = useState(null)
  //post new user
  const [dataUser, setDataUser] = useState({
    user_lastname: '',
    user_firstname: '',
    user_birthdate: '',
    user_email: '',
    user_password: '',
    user_accept_CGV: 0
  })

  const [login, setLogin] = useState({
    login_email: '',
    login_password: ''
  })

  const getLog = (e) => {
    e.preventDefault()
    Axios
    .get('http://localhost:3001/user', login)
    .catch(err => console.error(err))
    .finally(setSuccess(true))
  }


  return (
    <div className="login_page">
      <img className="login_logo" src={logo} alt="logo" />
      <div className="login_forms">
        <form>
          <label>
            <input
              className="login_input_text"
              type="email"
              placeholder=" Adresse mail"
              required
              value={login.login_email}
              onChange={(e) => setLogin({...login, login_email: e.target.value})}
            />
          </label>
        </form>
        <form>
          <label>
            <input
              className="login_input_text"
              type="password"
              placeholder=" Mot de passe"
              required
              value={login.login_password}
              onChange={(e) => setLogin({...login, login_password: e.target.value})}

            />
          </label>
        </form>
        <p>Mot de passe oublié</p>
      </div>
      {login.login_password && login.login_email !== '' ? 
        <Link to="/home" style={{ textDecoration: "none" }}>
          <button className="login_button" onClick={(e)=> getLog(e)}>Se connecter</button>
        </Link> :
      <button className="login_button disabled" disabled='true'>Se connecter</button>  }
      <div>
        <p>Pas encore de compte ?</p>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <p className="login_low_text">S'inscrire</p>
        </Link>
      </div>
    </div>
  );
};
export default Login;
