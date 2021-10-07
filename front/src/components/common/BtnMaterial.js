import React from "react";
import "../../styles/BtnMaterial.css";

const BtnMaterial = ({ children }) => {
  return <button className="pure-material-button-contained">{children}</button>;
};

export default BtnMaterial;
