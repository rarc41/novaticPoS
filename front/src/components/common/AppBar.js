import React, {useContext} from 'react';
import '../../styles/AppBar.css';
import AuthContext from '../../context/autentication/authContext';


const AppBar = () => {

    const authContext = useContext(AuthContext);
    const {usuarioEnSesion} = authContext;
    return (
        <div className="AppBar">
            <h3 className="nameUser">{usuarioEnSesion.name}</h3>
            <span ><i class="fas fa-user-circle"></i></span>
        </div>
    );
};

export default AppBar;