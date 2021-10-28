import React, { useState, useContext, useEffect } from "react";
import AppBar from "./common/AppBar";
import Navbar from "./common/Navbar";
import Productos from './Productos'
import Usuarios from "./Usuarios";
import Login from './login/Login'
import Ventas from './Ventas';
import AuthContext from "../context/autentication/authContext";
import Cargando from './common/Cargando'

const Main = () => {
  const [section, setSection] = useState('productos');
  const [cargando, setCargando] = useState(true);

  const authContext = useContext(AuthContext);
  const {usuarioEnSesion} = authContext;
  
  useEffect(() => {
    if (usuarioEnSesion) {
      setCargando(false);
    }
  }, [usuarioEnSesion]);






  const changeSection = (section) => {
    setSection(section);
  };
  return (
    <main className="Main">
      {cargando ? (
        <>
        <Cargando></Cargando>
        </>
      ):(
        <>
        <Navbar changeSection={changeSection} />

     <AppBar></AppBar>

      <div className="Module">
        {section === 'productos' && <Productos></Productos>}
        {section === 'ventas' && <Ventas></Ventas>}
        {section === 'admin' && <Usuarios></Usuarios>}
        {section==='login' && (
          <Login></Login>
         )}
      </div>
      </>
      )}
      
    </main>
  );
};

export default Main;
