import React, { useState } from "react";
import PruebaModal from "./common/Modal";
import PruebasUsuario from "./pruebas/PruebasUsuario";
import formulario from "../resources/json/usuario.json";
import { Button } from "reactstrap";
import "../styles/Button.css";
import Search from "./common/Search";
import Table from './common/Table';
import ToolBar from "./common/ToolBar";


const Usuarios = () => {
  const [modalForm, setModalForm] = useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };

  const headers = [
    { name: 'Usuario', value: 'user' },
    { name: 'Rol', value: 'role' },
    { name: 'Estado', value: 'state' },
    { name: ' ', value: 'button' },
  ];

  const headers_test = [
'usuario',
'rol',
'estado'
  ];
  
  
  const values = [
    { user: 'Alejandra', role: 'Administrador', state: 'pendiente'},
    { user: 'Elias', role: 'Vendedor', state: 'autorizado'},
    { user: 'Robin', role: 'Administrador', state: 'no autorizado'},
    { user: 'Cristian', role: 'Vendedor', state: 'pendiente'},
    { user: 'Sara', role: 'Administrador', state: 'autorizado'},
  ];

  return (
    <div className="Module Module-container product-section">


      <ToolBar></ToolBar>
      <Table headers={headers_test} data={values}></Table>
    </div>
  );
};

export default Usuarios;
