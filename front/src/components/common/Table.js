import React, { } from 'react';

import BtnMaterial from './BtnMaterial';
import '../../styles/Table.css';

const Table = ({ headers, data, onClick, type, handleEdit, button }) => {


  return (
    <div className="table-responsive">
      <table className="table-main">
        <thead className="fixed">
          <tr>
            {headers.map((field) => (
              <th key={headers.indexOf(field)}>{field.name}</th>
            ))}
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={data.indexOf(row)}>
              {headers.map((field) => (
                <td key={headers.indexOf(field)}>{row[field.value]}</td>
              ))}
              <td>
                <span className="action_btn">
                <BtnMaterial variant="update" onClick={() => handleEdit(row)}>
                    <i className="fas fa-edit"></i>Actualizar
                  </BtnMaterial>       
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
