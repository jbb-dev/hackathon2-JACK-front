import React, { useState, useEffect} from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import logo from '../../assets/images/hermes2.png'
import Axios from 'axios'

const Login = () => {
  const [success, setSuccess] = useState(null)
  //post new user
  const [dataUser, setDataUser] = useState({
    lastname: '',
    firstname: '',
    birthdate: '',
    email: '',
    password: '',
    accept_CGV: 0
  })

  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  const getLog = (e) => {
    e.preventDefault()
    Axios
    .get('http://localhost:3001/users', login)
    .catch(err => console.error(err))
    .finally(setSuccess(true))
  }


  return (
    <div className="login_page">
      <img className="login_logo" src={logo} alt="logo" />
      <div className="login_forms">
        <form noValidate onSubmit={testLogin}>
          <label>
            <input
              className="login_input_text"
              type="email"
              placeholder=" Adresse mail"
              required
              value={email}
                  onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </form>
        <form noValidate onSubmit={testLogin}>
          <label>
            <input
              className="login_input_text"
              type="password"
              placeholder=" Mot de passe"
              required
              value={password}
                  onChange={(e) => setPassword(e.target.value)}

            />
          </label>
        </form>
        <p>Mot de passe oublié</p>
      </div>
      {login.password && login.email !== '' ? 
        <Link to="/home" style={{ textDecoration: "none" }}>
          <button className="login_button" type="submit">Se connecter</button>
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
