import React, { useState } from "react";
import AppBar from "./common/AppBar";
import Navbar from "./common/Navbar";
import Productos from './Productos'
import Usuarios from "./Usuarios";
import Vendedores from './Vendedores'
import Login from './login/Login'

const Main = () => {
  const [section, setSection] = useState("productos");

  const changeSection = (section) => {
    setSection(section)
  }
  return (
    <main className="Main">
      <Navbar changeSection={changeSection}/>

      <AppBar></AppBar>

      <div className="Module">
          {section==='productos' && (
              <Productos>

              </Productos>
          )}
          {section==='vendedores' && (
            <Vendedores>

            </Vendedores>
          )}
          {section==='admin' && (
            <Usuarios>

            </Usuarios>
          )}

          {section==='login' && (
           <Login></Login>
          )}

      </div>
    </main>
  );
};

export default Main;
