import React, { useState } from "react";
import AppBar from "./common/AppBar";
import Navbar from "./common/Navbar";
import Productos from './Productos'

const Main = () => {
  const [section, setSection] = useState("productos");
  return (
    <main className="Main">
      <Navbar />

      <AppBar></AppBar>

      <div className="Module">
          {section==='productos' && (
              <Productos>

              </Productos>
          )}

      </div>
    </main>
  );
};

export default Main;
