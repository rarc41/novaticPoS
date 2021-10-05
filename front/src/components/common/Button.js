import React from 'react';
import '../../styles/Button.css';

const Button = ({label, style, name, event, icon, onClick}) => {
  return (
    <div className="buttonBox" style={style}>
      <button onClick={onClick} name={name} class={icon}>
        <span>{label}</span>
      </button>
    </div>
  );
};

export default Button;
