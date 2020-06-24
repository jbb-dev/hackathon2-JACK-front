import React from 'react'
import {Link} from 'react-router-dom'
import './landing.css'

const Landing = () => {

        return (
            <div className='LandingPage'>
                <div>
                    <img className='Logo' src="" alt=' logo' /> 
                </div>
                <div>
                    <p className='slogan'> Lorem Ipsum</p>
                </div>
                
                <div className='create' >
                    <Link to='/register' style={{ textDecoration: "none" }}>
                        <button type='button' id='createBtn' > Créer un compte </button>
                    </Link>
                </div>
                <div className='login' > 
                    <Link to='/login' style={{ textDecoration: "none" }}>
                        <button type='button' id='loginBtn' > Se connecter </button>
                    </Link>
                </div>
                <div>
                    <Link to="/" style={{ textDecoration: "none" }}>
                            <p id='invite'> Parcourir sans créer de compte </p>
                    </Link>
                </div>
            </div>
        )
    
}
export default Landing 