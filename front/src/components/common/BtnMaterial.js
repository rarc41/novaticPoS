import React from "react";
import "../../styles/BtnMaterial.css";

const BtnMaterial = ({ children, variant, formSheet, onClick}) => {
  return <button onClick={onClick} className={`pure-material-button-contained ${variant} ${formSheet}`}>{children}</button>;
};

export default BtnMaterial;
