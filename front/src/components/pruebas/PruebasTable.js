import React from 'react';
import Table from '../common/Table';

const headers = [
  { name: 'Nombre', value: 'name' },
  { name: 'Especialidad', value: 'speciality' },
  { name: 'Telefono', value: 'phone' },
  { name: 'Fecha', value: 'date' },
];

const headers_test = ['nombre', 'especialidad', 'telefono', 'fecha']

const values = [
  { name: 'Alejandra', speciality: 'css', phone: '5677848', date: '16 de agosto'},
  { name: 'Elias', speciality: 'react', phone: '7958540',  date: '16 de agosto' },
  { name: 'Elias', speciality: 'react', phone: '7958540',  date: '16 de agosto' }
];

function PruebasTable() {
  return <div>
      <Table headers={headers_test} data={values}></Table>
  </div>;
}

export default PruebasTable;
