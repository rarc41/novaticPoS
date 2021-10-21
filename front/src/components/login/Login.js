import React from 'react';
import './Login.css';
import Logo from '../../resources/images/misiontic_logo.png';
import Img1 from '../../resources/images/imagenLogin.png';
import ImgGoogle from '../../resources/images/logoGoogle.png';
import GoogleLogin from 'react-google-login';





function Login({handleSuccess, handleFailure}) {
  console.log(handleSuccess)

  return (
    <div>
      <div className="logoMinTic">
        <img alt="logo" src={Logo} width="80" />
      </div>
      <div className="contenedor">
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
