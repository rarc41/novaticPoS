import React from "react";
import "../../styles/Table.css";

const Table = ({ headers, data }) => {
  return (
    <div className="table-responsive">
      <table className="table-main">
        <thead className="fixed">
          <tr>
            {headers.map((field) => (
              <th>{field}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
              
            <tr key={element.id}>
                {Object.keys(element).map((key) => (
                    
                    (key!=='id' && key!=='img')?
                    <td>{element[key]}</td>
                    :
                    ''
                ))}
              {/* <td>{element.name}</td>
              <td>{element.descripcion}</td>
              <td>{element.price}</td>
              <td>{element.stock}</td> */}
              <td>
                <span class="action_btn">
                  <a href="#">Edit</a>
                  <a href="#">Remove</a>
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
