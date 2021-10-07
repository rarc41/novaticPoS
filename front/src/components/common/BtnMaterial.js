import React from "react";
import "../../styles/BtnMaterial.css";

const BtnMaterial = ({ children, variant, formSheet}) => {
  return <button className={`pure-material-button-contained ${variant} ${formSheet}`}>{children}</button>;
};

export default BtnMaterial;
