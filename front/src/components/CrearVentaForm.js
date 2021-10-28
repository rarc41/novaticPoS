import React, { useState, useContext, useEffect } from "react";
import "../styles/Form.css";
import "../styles/Modal.css";
import Input from "./common/Input";
import BtnMaterial from "./common/BtnMaterial";
import VentasContext from "../context/ventas/ventasContext";
import ModalVentaProducto from "./common/ModalVentaProducto"

import { v4 as uuidv4 } from "uuid";
import CrearVentaProductoForm from "./CrearVentaProductoForm";

const CrearVentaForm = ({ handleOpen }) => {
  const ventasContext = useContext(VentasContext);
  const { obtenerVentas, agregarVenta, ventaActual, actualizarVenta, limpiarVentaActual } = ventasContext;

  const [modalForm, setModalForm] = useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };

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

  // efecto para editar el estado de la venta
  useEffect(() => {
    if (ventaActual) {
      setVenta(ventaActual);
    } else {
      setVenta({
        id: uuidv4(),
        total: "",
        date: "",
        customername: "",
        customerid: "",
        products: [],
        status: "entregada",
        user: "",
      });
    }
  }, [ventaActual]);

  const handleChange = (e) => {
    e.preventDefault();
    setVenta({
      ...venta,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(ventaActual===null) {
      agregarVenta(venta);
    } else {
      actualizarVenta(venta);
    }
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
        type="text"
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
       <ModalVentaProducto
        isOpen={modalForm}
        handleOpen={handleModalOpen}
        title={"Agregar Producto"}
      >
        <CrearVentaProductoForm
        handleOpen={handleModalOpen}
        />
      </ModalVentaProducto>
      <BtnMaterial variant="update"
        onClick={(e) => {
          e.preventDefault();
          handleModalOpen();
        }}
      >Agregar Producto</BtnMaterial>
      <div>
        <BtnMaterial type="submit">{ventaActual ?'Editar' : 'Crear'}</BtnMaterial>
        <BtnMaterial
          onClick={(e) => {
            e.preventDefault();
            handleOpen();
            limpiarVentaActual();
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
