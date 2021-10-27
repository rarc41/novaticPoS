import React from 'react';

import BtnMaterial from './BtnMaterial';
import '../../styles/Table.css';

const Table = ({ headers, data, onClick, type, button }) => {
  console.log(data);
  return (
    <div className="table-responsive">
      <table className="table-main">
        <thead className="fixed">
          <tr>
            {headers.map(field=> <th>{field.name}</th>)}
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => 
            <tr key={row._id}>
              {headers.map(field => <td>{row[field.value]}</td>)}
              <td>
                <span class="action_btn">
                 {button}
                </span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
