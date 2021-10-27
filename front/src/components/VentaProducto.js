import React, { useState } from "react";

import "../styles/Button.css";
import BtnMaterial from "./common/BtnMaterial";
import Table from './common/Table';
import ToolBar from "./common/ToolBar";
import Modal from "./common/Modal";
import formulario from '../resources/json/ventaProducto.json';

const VentaProducto = () => {
  const [modalForm, setModalForm] = useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };

  const headers = [
    { name: "ID venta", value: "id" },
    { name: "Id producto", value: "product" },
    { name: "Cantidad producto", value: "product_count" },
    { name: "Precio producto", value: "product_price" },
    { name: " ", value: "button" },
  ];

  const values = [
    {
      id: 123,
      product: "arroz",
      product_count: 2,
      product_price: 5000,
    },
    {
      id: 123,
      product: "leche",
      product_count: 2,
      product_price: 5000,

    },
    {
      id: 123,
      product: "aceite",
      product_count: 2,
      product_price: 5000,

    },
    {
      id: 123,
      product: "cereal",
      product_count: 2,
      product_price: 5000,
    },
  ];

  const headersTest = Object.keys(values[0])


  return (
    <div className="Module Module-container divider-section">
      <ToolBar>
        <BtnMaterial onClick={handleModalOpen}>Agregar producto <i class="fas fa-plus-circle"></i></BtnMaterial>
      </ToolBar>
      <Table headers={headersTest} data={values}></Table>
    </div>
  );
};

export default VentaProducto;