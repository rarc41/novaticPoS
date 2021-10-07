import React from "react";
import { Button } from "reactstrap";
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
            <th>Actions</th>
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
                  {/* <a href="#">Edit</a>
                  <a href="#">Remove</a> */}
                  <BtnMaterial ><i class="fas fa-edit"></i></BtnMaterial>
                  <BtnMaterial variant='danger' formSheet='rounded'> <i class="fas fa-trash"></i></BtnMaterial>
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
