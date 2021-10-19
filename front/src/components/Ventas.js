import React, { useState } from "react";

import "../styles/Button.css";
import BtnMaterial from "./common/BtnMaterial";
import Table from './common/Table';
import ToolBar from "./common/ToolBar";
import Modal from "./common/Modal";
import formulario from '../resources/json/venta.json';
import VentaProducto from "./VentaProducto";

const Ventas = () => {
  const [modalForm, setModalForm] = useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };

  const headers = [
    { name: "ID venta", value: "id" },
    { name: "Valor venta", value: "value" },
    { name: "Fecha de venta", value: "date" },
    { name: "ID cliente", value: "client_id" },
    { name: "Nombre cliente", value: "client_name" },
    { name: "Vendedor", value: "seller" },
    { name: " ", value: "button" },
  ];

  const headers_test = ["ID venta", "Valor venta", "Fecha de venta", "ID cliente", "Nombre cliente", "Vendedor"];

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
        <BtnMaterial onClick={handleModalOpen}>Nueva Venta <i class="fas fa-plus-circle"></i></BtnMaterial>
      </ToolBar>
      <Table headers={headers_test} data={values} type={"ventas"}></Table>
      <Modal isOpen={modalForm} handleOpen={handleModalOpen} formulario={formulario} title={"Crear Venta"}></Modal>
    </div>
  );
};

export default Ventas;
