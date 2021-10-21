import React from 'react';
import '../../styles/Select.css';

function Select({ label, style, required, options, name, onChange, value}) {

  return (
    <div class="selectBox" style={style}>
     
      <select name={name} id={`select-${name}`} required={required} onChange={onChange} value={value}>
        <option>Seleccione una opción</option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      <span>{label}</span>
    </div>
  );
}

export default Select;
