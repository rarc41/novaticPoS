import React from 'react';
import '../../styles/Input.css';

const Input = ({ label, type, style, required, name }) => {
  return (
    <div className="inputBox" style={style}>
      <input type={type ? type : 'text'} name={name} required={required} className=""></input>
      {type !== 'date' ? <span>{label}</span> : ''}
    </div>
  );
};

export default Input;