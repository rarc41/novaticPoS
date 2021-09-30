import React from "react";
import '../../styles/Input.css';


const Input = ({ label, type, style }) => {
  return (
    <div className="inputBox" style={style}>
      <input type={type?type:'text'} required="required" className=""></input>
      {type!=='date'?<span>{label}</span>:''}
      
    </div>
  );
};

export default Input;
