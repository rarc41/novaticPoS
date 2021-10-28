import React from 'react';
import '../../styles/Input.css';

const Input = ({ label, type, style, required, name, onChange, value, disabled, hidden }) => {
  return (
    <div className="inputBox" style={style} hidden={hidden}>
      <input type={type ? type : 'text'} name={name} required={required} className="" onChange={onChange} value={value} disabled={disabled} hidden={hidden}></input>
      {type !== 'date' ? <span hidden={hidden}>{label}</span> : 'fecha'}
    </div>
  );
};

export default Input;