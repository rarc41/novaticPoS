import React, { useState } from "react";
import Button from "./common/Button";
import PruebasTable from "./pruebas/PruebasTable";
import PruebaModal from "./common/Modal";
import Search from "./common/Search";
import Table from './common/Table';
import ToolBar from "./common/ToolBar";

const Vendedores = () => {
  const [modalForm, setModalForm] = useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };

  const headers = [
    { name: 'Nombre', value: 'name' },
    { name: 'Especialidad', value: 'speciality' },
    { name: 'Telefono', value: 'phone' },
    { name: 'Fecha', value: 'date' },
  ];
  
  const headers_test = ['nombre', 'especialidad', 'telefono', 'fecha']
  
  const values = [
    { name: 'Alejandra', speciality: 'css', phone: '5677848', date: '16 de agosto'},
    { name: 'Elias', speciality: 'react', phone: '7958540',  date: '16 de agosto' },
    { name: 'Elias', speciality: 'react', phone: '7958540',  date: '16 de agosto' }
  ];

  return (
    <div className="Module Module-container">
      <div className="Module Module-container product-section">
        <ToolBar></ToolBar>
        <Table headers={headers_test} data={values}></Table>
      </div>
    </div>
  );
};

export default Vendedores;
