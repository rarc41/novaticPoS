import React, { useState, useContext } from "react";
import "../styles/Form.css";
import "../styles/Modal.css";
import Input from "./common/Input";
import BtnMaterial from "./common/BtnMaterial";
import VentasContext from "../context/ventas/ventasContext";

import { v4 as uuidv4 } from "uuid";

const CrearVentaForm = ({ handleOpen }) => {
  const ventasContext = useContext(VentasContext);
  const { obtenerVentas, agregarVenta } = ventasContext;

  const [venta, setVenta] = useState({
    id: uuidv4(),
    total: "",
    date: "",
    customername: "",
    customerid: "",
    products: [],
    status: "entregada",
    user: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setVenta({
      ...venta,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarVenta(venta);
    handleOpen();
    obtenerVentas();
  };

  const { total, date, customerid, customername, products, status, user } = venta;

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <Input
        label="Valor Venta"
        name="total"
        required={true}
        type="number"
        onChange={handleChange}
        value={total}
      ></Input>
      <Input
        label="Fecha de Venta"
        name="date"
        required={true}
        type="date"
        onChange={handleChange}
        value={date}
      ></Input>
      <Input
        label="Identificación del Cliente"
        name="customerid"
        required={true}
        type="number"
        onChange={handleChange}
        value={customerid}
      ></Input>
      <Input
        label="Nombre del Cliente"
        name="customername"
        required={true}
        type="text"
        onChange={handleChange}
        value={customername}
      ></Input>

      <Input
        label="Vendedor"
        name="user"
        required={true}
        type="text"
        onChange={handleChange}
        value={user}
      ></Input>
      <div>
        <BtnMaterial type="submit">Crear</BtnMaterial>
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

export default CrearVentaForm;
