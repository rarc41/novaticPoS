import React from "react";
import "../../styles/BtnMaterial.css";

const BtnMaterial = ({ children, variant, formSheet, onClick, type}) => {
  return <button onClick={onClick} className={`pure-material-button-contained ${variant} ${formSheet}`} type={type}>{children}</button>;
};

export default BtnMaterial;
