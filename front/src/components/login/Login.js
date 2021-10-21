<<<<<<< Updated upstream
import React, { useContext, useState } from "react";
import "./Login.css";
import Logo from "../../resources/images/misiontic_logo.png";
import Img1 from "../../resources/images/imagenLogin.png";
import ImgGoogle from "../../resources/images/logoGoogle.png";
import AuthContext from "../../context/autentication/authContext";

function Login() {
  const authContext = useContext(AuthContext);
  const { registrarUsuario } = authContext;

  const [login, setLogin] = useState({
    usuario: "",
    password: "",
  });

  const handleChange = e =>{
    e.preventDefault();
    setLogin({
      ...login,
      [e.target.name] : e.target.value
    })

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    registrarUsuario({email:usuario, password})

  }


  const { usuario, password } = login;


=======
import React from 'react';
import './Login.css';
import Logo from '../../resources/images/misiontic_logo.png';
import Img1 from '../../resources/images/imagenLogin.png';
import ImgGoogle from '../../resources/images/logoGoogle.png';
import GoogleLogin from 'react-google-login';





function Login({handleSuccess, handleFailure}) {
  console.log(handleSuccess)

>>>>>>> Stashed changes
  return (
    <div>
      <div className="logoMinTic">
        <img alt="logo" src={Logo} width="80" />
      </div>
      <div className="contenedor">
<<<<<<< Updated upstream
        <form className="login" onSubmit={handleSubmit}>
          <h1>LOGIN </h1>
          <label> Usuario o e-mail</label>
          <input type="text" value={usuario} onChange={handleChange} name="usuario"/>
          <label> Contraseña </label>
          <input type="password" className="inputPass" value={password} name='password'onChange={handleChange}/>
          <button className="buttonContinuar" type="submit">Continuar</button>
          <button className="buttonGoogle">
            {" "}
            <img alt="google" src={ImgGoogle} width="25" /> Continuar con Google
          </button>
=======
        <form className="login">
          <h1>Log in to your account  </h1>
          <br /><br /><br /><br /><br /><br /><br /><br /><br />
          {/* <label> Usuario o e-mail</label>
          <input type="text" />
          <label> Contraseña </label>
          <input type="password" className="inputPass" />
          <button className="buttonContinuar">Continuar</button> */}
          <div className="Login">
            <GoogleLogin 
                clientId="26554192346-buka2291464j9klmqiipei5jerhrckc9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'} 
                render={renderProps => (
                  <button className="buttonGoogle" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <img alt="google" src={ImgGoogle} width="25" />Log in with Google</button>
                )}
            />
          </div>
>>>>>>> Stashed changes
        </form>
        <div className="bienvenidos">
          <img alt="imagen" src={Img1} width="500" />
        </div>
      </div>
      <footer>
        <br />
        <br />
        <br />
        <br />
        <br />
      </footer>
    </div>
  );
}

export default Login;
