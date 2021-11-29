import React, { useState } from "react";
import "../styles/Form.css";
import "../styles/ModalVentaProducto.css";
import Input from "./common/Input";
import BtnMaterial from "./common/BtnMaterial";
import Table from "./common/Table";

const CrearVentaProductoForm = ({ handleOpen }) => {
  const headers = [
    { name: "Producto", value: "product" },
    { name: "Cantidad", value: "cantidad" },
    { name: "Precio", value: "price" },
    { name: " ", value: "button" },
  ];

  const [venta, setVenta] = useState({
    data :[],
    product: "",
    cantidad: "",
    price: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setVenta({
      ...venta,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    let arreglo = venta.data;
    arreglo.push(venta);
    setVenta({
      ...venta,
      data: arreglo
    });
  }

  const { product, cantidad, price } =
    venta;

  return (
    <form className="formularioVenta" onSubmit={handleSubmit}>
      <div className="divForm">
        <Input
          label="Producto"
          name="product"
          required={true}
          type="text"
          onChange={handleChange}
          value={product}
        ></Input>
        <Input
          label="Cantidad"
          name="cantidad"
          required={true}
          type="number"
          onChange={handleChange}
          value={cantidad}
        ></Input>
        <Input
          label="Precio Unitario"
          name="price"
          required={true}
          type="number"
          onChange={handleChange}
          value={price}
        ></Input>
        <BtnMaterial variant="update"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>+</BtnMaterial>
      </div>
      <Table headers={headers} data={venta.data} 
      button={
        <BtnMaterial
          onClick={(e) => {
            e.preventDefault();
            
          }}
          variant="danger"
        > <i className="fas fa-trash"></i>
          Eliminar
        </BtnMaterial>
      }>
      </Table>
      <div className="group-button">
        <BtnMaterial type="submit">Aceptar</BtnMaterial>
        <BtnMaterial
          onClick={(e) => {
            e.preventDefault();
            handleOpen();
          }}
          variant="danger"
        >
          Cancelar
        </BtnMaterial>
      </div>
    </form>
  );
};

export default CrearVentaProductoForm;
