import React, { useState, useContext, useEffect } from "react";

import "../styles/Button.css";
import BtnMaterial from "./common/BtnMaterial";
import Table from "./common/Table";
import ToolBar from "./common/ToolBar";
import Modal from "./common/Modal";
import formulario from "../resources/json/venta.json";
import VentaProducto from "./VentaProducto";
import VentasContext from "../context/ventas/ventasContext";
import CrearVentaForm from "./CrearVentaForm";

const Ventas = () => {
  const ventasContext = useContext(VentasContext);
  const { obtenerVentas, ventas } = ventasContext;


  const [modalForm, setModalForm] = useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };


  useEffect(() => {
    obtenerVentas()
  }, [])

  const headers = [
    { name: "ID venta", value: "_id" },
    { name: "Valor venta", value: "total" },
    { name: "Fecha de venta", value: "date" },
    { name: "ID cliente", value: "customerid" },
    { name: "Nombre cliente", value: "customername" },
    { name: "Vendedor", value: "user" },
    { name: " ", value: "button" },
  ];

  const values = [
    {
      id: 123,
      value: 10000,
      date: "2021-10-05",
      client_id: 12345,
      client_name: "Sara",
      seller: "Alejandra",
    },
    {
      id: 124,
      value: 10000,
      date: "2021-10-05",
      client_id: 12345,
      client_name: "Sara",
      seller: "Alejandra",
    },
    {
      id: 125,
      value: 2000,
      date: "2021-10-05",
      client_id: 12345,
      client_name: "Sara",
      seller: "Alejandra",
    },
    {
      id: 126,
      value: 20000,
      date: "2021-10-05",
      client_id: 12345,
      client_name: "Sara",
      seller: "Alejandra",
    },
  ];

  return (
    <div className="Module Module-container divider-section">
      <ToolBar>
        <BtnMaterial onClick={handleModalOpen}>
          Nueva Venta <i class="fas fa-plus-circle"></i>
        </BtnMaterial>
      </ToolBar>
      <Table headers={headers} data={ventas} type={"ventas"}></Table>
      <Modal
        isOpen={modalForm}
        handleOpen={handleModalOpen}
        title={"Crear Venta"}
      >
        <CrearVentaForm
        handleOpen={handleModalOpen}
        />
      </Modal>
    </div>
  );
};

export default Ventas;
