import React from "react";
import '../../styles/Toolbar.css'
import BtnMaterial from "./BtnMaterial";

const ToolBar = ({children}) => {
  return (
    <div className="container-inputs">
      <div className="search-box">
        <input
          className="search-txt"
          type="text"
          placeholder="Excribe para buscar"
        ></input>
        <a className="search-btn" href="#">
          <i class="fas fa-search"></i>
        </a>
      </div>
      {children}
      <BtnMaterial>Agregar</BtnMaterial>
    </div>
  );
};

export default ToolBar;
