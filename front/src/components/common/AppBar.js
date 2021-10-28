import React, {useContext, useEffect, useState} from 'react';
import '../../styles/AppBar.css';
import AuthContext from '../../context/autentication/authContext';

const AppBar = () => {

    const authContext = useContext(AuthContext);
    const {usuarioEnSesion} = authContext;

    const [nombreUsuario, setNombreUsuario] = useState('User Name');

    useEffect(() => {
        if(usuarioEnSesion){
            setNombreUsuario(usuarioEnSesion.nombre);
        }
    } , [usuarioEnSesion]);
    return (
        <div className="AppBar">
            <h3 className="nameUser">{nombreUsuario}</h3>
            <span ><i className="fas fa-user-circle"></i></span>
        </div>
    );
};

export default AppBar;