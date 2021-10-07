import React, { useState } from "react";

import "../styles/Button.css";
import BtnMaterial from "./common/BtnMaterial";
import Table from './common/Table';
import ToolBar from "./common/ToolBar";

const Ventas = () => {
  const headers = [
    { name: "ID venta", value: "id" },
    { name: "Valor venta", value: "value" },
    { name: "Id producto", value: "product" },
    { name: "Cantidad producto", value: "product_count" },
    { name: "Precio producto", value: "product_price" },
    { name: "fecha de venta", value: "date" },
    { name: "ID cliente", value: "client_id" },
    { name: "Nombre cliente", value: "client_name" },
    { name: "Vendedor", value: "seller" },
    { name: " ", value: "button" },
  ];

  const values = [
    {
      id: 123,
      value: 10000,
      product: 1,
      product_count: 2,
      product_price: 5000,
      date: "2021-10-05",
      client_id: 12345,
      client_name: "Sara",
      seller: "Alejandra",
    },
    {
      id: 123,
      value: 10000,
      product: 1,
      product_count: 2,
      product_price: 5000,
      date: "2021-10-05",
      client_id: 12345,
      client_name: "Sara",
      seller: "Alejandra",
    },
    {
      id: 123,
      value: 10000,
      product: 1,
      product_count: 2,
      product_price: 5000,
      date: "2021-10-05",
      client_id: 12345,
      client_name: "Sara",
      seller: "Alejandra",
    },
    {
      id: 123,
      value: 10000,
      product: 1,
      product_count: 2,
      product_price: 5000,
      date: "2021-10-05",
      client_id: 12345,
      client_name: "Sara",
      seller: "Alejandra",
    },
  ];

  const headersTest = Object.keys(values[0])


  return (
    <div className="Module Module-container divider-section">
      <ToolBar>
        <BtnMaterial>Nueva Venta</BtnMaterial>
      </ToolBar>
      <Table headers={headersTest} data={values}></Table>
    </div>
  );
};

export default Ventas;
