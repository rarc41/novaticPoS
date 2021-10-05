import React, { useState } from "react";
import AppBar from "./common/AppBar";
import Navbar from "./common/Navbar";
import Productos from './Productos'
import Vendedores from './Vendedores'

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

      </div>
    </main>
  );
};

export default Main;
