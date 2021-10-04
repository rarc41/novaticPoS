import React from 'react';
import Form from '../common/Form';
import formulario from '../../resources/json/prueba.json';
console.log(formulario);

function PruebasTable() {
  return (
    <div>
      <Form fields={formulario} />
    </div>
  );
}

export default PruebasTable;
