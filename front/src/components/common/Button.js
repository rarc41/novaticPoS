import React from 'react';
import '../../styles/Button.css';

const Button = ({label, style, name, event, icon}) => {
  return (
    <div className="buttonBox" style={style}>
      <button onClick={event} name={name} class={icon}>
        <span>{label}</span>
      </button>
    </div>
  );
};

export default Button;
