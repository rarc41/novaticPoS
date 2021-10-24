import React, { useContext } from "react";

import BtnMaterial from "./BtnMaterial";
import "../../styles/Table.css";
import productContext from "../../context/productos/productsContext";

const Table = ({ headers, data, onClick, type, handleModalOpen }) => {
  // obtenemos el context de productos
  const productsContext = useContext(productContext);
  const { seleccionarProducto } = productsContext;

  const handleEdit = async (data) => {
    await seleccionarProducto(data);
    handleModalOpen();
  };

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
            <tr key={row._id}>
              {headers.map((field) => (
                <td>{row[field.value]}</td>
              ))}
              <td>
                <span class="action_btn">
                  <BtnMaterial onClick={onClick}>
                    <i class="fas fa-list-alt"></i>Detalle
                  </BtnMaterial>
                  <BtnMaterial variant="update" onClick={() => handleEdit(row)}>
                    <i class="fas fa-edit"></i>Actualizar
                  </BtnMaterial>
                  <BtnMaterial variant="danger">
                    {" "}
                    <i class="fas fa-trash"></i> Eliminar
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
