import React, {useState, useEffect, useContext} from 'react';
import "./landing.css";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Axios from 'axios';
import logo from '../../assets/images/hermes2.png'

const Register = () => {

  // Check if subscribe successfull or not
  const [success, setSuccess] = useState(null)
  //post new user
  const [dataUser, setDataUser] = useState({
    lastname : '',
    firstname : '',
    birthdate : '',
    email : '',
    password : '',
    user_accept_CGV : 0
  } )

  const subscribe = (e) => {
    e.preventDefault()
    Axios
    .post('http://localhost:3001/users', dataUser)
    .catch(err => console.error(err))
    .finally(setSuccess(true))
  }



  return (
    <div className="register_page">
      <img className="register_logo" src={logo} alt="logo" />
        { 
          success === true ? 
            <div class="alert alert-success" role="alert">
              Votre compte est désormais créé, vous pouvez vous connecter.
           </div> 
          : success === false ?
            <div class="alert alert-danger" role="alert">
              Un problème est survenu lors de la création de votre compte, veuillez réessayer.
            </div>

          : ''
        }

      <div>
        <form className="register_forms">
          <label>
            <input
              required
              className="register_input_text"
              type="text"
              placeholder=" Nom"
              autoFocus
              value={dataUser.lastname}
              onChange={(e) => setDataUser({...dataUser, lastname: e.target.value})}
            />
          </label>
        </form>
        <form className="register_forms">
          <label>
            <input
              required
              className="register_input_text"
              type="text"
              placeholder=" Prénom"
              value={dataUser.firstname}
              onChange={(e) => setDataUser({...dataUser, firstname: e.target.value})}
            />
          </label>
        </form>
        <form className="register_forms">
          <label>
            <input
              required
              className="register_input_text"
              type="text"
              placeholder=" Date de naissance"
              value={dataUser.birthdate}
              onChange={(e) => setDataUser({ ...dataUser, birthdate: e.target.value })}
            />
          </label>
        </form>
        <form className="register_forms">
          <label>
            <input
              className="register_input_text"
              type="email"
              placeholder=" Adresse mail"
              required
              value={dataUser.email}
              onChange={(e) => setDataUser({...dataUser, email: e.target.value})}
            />
          </label>
        </form>
        <form className="register_forms">
          <label className="register_mdp">
            <input
              className="register_input_text"
              type="password"
              placeholder=" Mot de passe"
              required
              value={dataUser.password}
              onChange={(e) => setDataUser({...dataUser, password: e.target.value})}

            />
          </label>
        </form>
        <Form className="register_checkbox">
          <FormGroup check inline>
            <Label check>
              <Input 
              type="checkbox" 
              required
              id="register_checkbox_inp" 
              value={dataUser.user_accept_CGV}
              onChange={(e) => setDataUser({...dataUser, user_accept_CGV : !dataUser.user_accept_CGV })}
              />  
               
            J'accepte les
              conditions d'utilisation
            </Label>
          </FormGroup>
        </Form>
      </div>

      {dataUser.lastname && dataUser.firstname && dataUser.password &&  dataUser.email !== '' && dataUser.user_accept_CGV ? 
        <button 
          type='submit' 
          className='register_button' 
          // disabled='false'
          onClick={(e) => subscribe(e)}
          >
            CREER UN COMPTE
        </button>
        : <button 
          type='submit'
          className='register_button disabled'
          disabled='true'
          onClick={(e) => subscribe(e)}>
            CREER UN COMPTE
        </button>
      }

      <div>
        <p>Vous avez déjà un compte ?</p>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <p className="register_low_text">Se connecter</p>
        </Link>
    </div>
    </div>
  )
};

export default Register;
