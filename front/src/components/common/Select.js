import React from 'react';

function Select({ label, style, required, options, name }) {
  return (
    <div style={style}>
      <label for={`select-${name}`}>Seleccionar {label}</label> <br />
      <select name={name} id={`select-${name}`} required={required}>
        <option>Seleccione una opción</option>
        {options.map((option) => (
          <option value={option.name}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
