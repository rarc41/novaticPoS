import React from 'react';
import Table from '../common/Table';

const headers = [
  { name: 'Usuario', value: 'user' },
  { name: 'Rol', value: 'role' },
  { name: 'Estado', value: 'state' },
  { name: ' ', value: 'button' },
];

const values = [
  { user: 'Alejandra', role: 'Administrador', state: 'pendiente'},
  { user: 'Elias', role: 'Vendedor', state: 'autorizado'},
  { user: 'Robin', role: 'Administrador', state: 'no autorizado'},
  { user: 'Cristian', role: 'Vendedor', state: 'pendiente'},
  { user: 'Sara', role: 'Administrador', state: 'autorizado'},
];

function PruebasUsuario() {
  return <div>
      <Table head= {headers} content={values}></Table>
  </div>;
}

export default PruebasUsuario;