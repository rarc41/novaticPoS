import React from 'react';
import '../../styles/Input.css';

const Input = ({ label, type, style, required, name, onChange, value }) => {
  return (
    <div className="inputBox" style={style}>
      <input type={type ? type : 'text'} name={name} required={required} className="" onChange={onChange} value={value}></input>
      {type !== 'date' ? <span>{label}</span> : 'fecha'}
    </div>
  );
};

export default Input;