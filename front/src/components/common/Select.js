import React from 'react';
import '../../styles/Select.css';

function Select({ label, style, required, options, name }) {
  return (
    <div class="selectBox" style={style}>
     
      <select name={name} id={`select-${name}`} required={required}>
        <option>Seleccione una opción</option>
        {options.map((option) => (
          <option value={option.name}>{option.label}</option>
        ))}
      </select>
      <span>{label}</span>
    </div>
  );
}

export default Select;
