import React from "react";
import '../../styles/Toolbar.css'
import { OBTENER_PRODUCTOS } from "../../types";
import BtnMaterial from "./BtnMaterial";

const ToolBar = ({children, onChange}) => {
  return (
    <div className="container-inputs">
      {children}
    </div>
  );
};

export default ToolBar;
