import React from "react";

import BtnMaterial from "./BtnMaterial";
import "../../styles/Table.css";

const Table = ({ headers, data }) => {
  return (
    <div className="table-responsive">
      <table className="table-main">
        <thead className="fixed">
          <tr>
            {headers.map((field) =>
              field !== "id" && field !== "client_id" ? <th>{field}</th> : ""
            )}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr key={element.id}>
              {Object.keys(element).map((key) =>
                key !== "id" && key !== "img" && key !== "client_id" ? (
                  <td>{element[key]}</td>
                ) : (
                  ""
                )
              )}
              {/* <td>{element.name}</td>
              <td>{element.descripcion}</td>
              <td>{element.price}</td>
              <td>{element.stock}</td> */}
              <td>
                <span class="action_btn">
                  <BtnMaterial variant='update'><i class="fas fa-edit"></i>Actualizar</BtnMaterial>
                  <BtnMaterial variant='danger'> <i class="fas fa-trash"></i> Eliminar</BtnMaterial>
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
