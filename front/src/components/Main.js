import React, { useState } from "react";
import AppBar from "./common/AppBar";
import Navbar from "./common/Navbar";

const Main = () => {
  const [section, setSection] = useState("vendedores");
  return (
    <main className="Main">
      <Navbar />

      <AppBar></AppBar>
    </main>
  );
};

export default Main;
