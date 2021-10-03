import React from 'react'
import './Login.css'
import Logo from "../images/misiontic_logo.png"
import Img1 from "../images/imagenLogin.png"
import ImgGoogle from "../images/logoGoogle.png"

function Login() {
    return (
        <div>
            <div className="logoMinTic">
                <img src={Logo} width="80" />
            </div>
            <div className="contenedor">
                <form className="login">
                    <h1>LOGIN </h1>
                    <label> Usuario o e-mail</label>
                    <input type='text'/> 
                    <label> Contraseña </label>
                    <input type='password' className='inputPass'/>
                    <button className='buttonContinuar'>Continuar</button>
                    <button className='buttonGoogle'> <img src={ImgGoogle} width='25'/> Continuar con Google</button>
                </form>
                <div className="bienvenidos">
                    <img src={Img1} width="500" />
                    
                </div>
            </div>
            <footer><br /><br /><br /><br /><br /></footer>
        </div>
    )
}

export default Login
