import React, { useContext } from 'react';

import BtnMaterial from './BtnMaterial';
import '../../styles/Table.css';
import productContext from '../../context/productos/productsContext';

const Table = ({ headers, data, onClick, type, handleEdit }) => {
  // obtenemos el context de productos
  const productsContext = useContext(productContext);
  const { seleccionarProducto } = productsContext;



const Table = ({ headers, data, onClick, type, button }) => {
  return (
    <div className="table-responsive">
      <table className="table-main">
        <thead className="fixed">
          <tr>
            {headers.map((field) => (
              <th>{field.name}</th>
            ))}
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {headers.map((field) => (
                <td>{row[field.value]}</td>
              ))}
              <td>
                <span class="action_btn">
                 {button}           
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
