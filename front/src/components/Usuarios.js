import React, { useState } from "react";
import "../styles/Button.css";
import Table from "./common/Table";
import ToolBar from "./common/ToolBar";
import BtnMaterial from "./common/BtnMaterial";
import formulario from "../resources/json/usuario.json";
import Modal from "./common/Modal";

const Usuarios = () => {
  const [modalForm, setModalForm] = useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };

  const headers = [
    { name: "Usuario", value: "user" },
    { name: "Rol", value: "role" },
    { name: "Estado", value: "state" },
    { name: " ", value: "button" },
  ];

  const headers_test = ["usuario", "rol", "estado"];

  const values = [
    { user: "Alejandra", role: "Administrador", state: "pendiente" },
    { user: "Elias", role: "Vendedor", state: "autorizado" },
    { user: "Robin", role: "Administrador", state: "no autorizado" },
    { user: "Cristian", role: "Vendedor", state: "pendiente" },
    { user: "Sara", role: "Administrador", state: "autorizado" },
  ];

  return (
    <div className="Module Module-container divider-section">
      <ToolBar>
        <BtnMaterial onClick={handleModalOpen}>
          Nuevo Usuario <i class="fas fa-plus-circle"></i>
        </BtnMaterial>
      </ToolBar>
      <Table headers={headers_test} data={values}></Table>
      <Modal
        isOpen={modalForm}
        handleOpen={handleModalOpen}
        formulario={formulario}
        title={"Crear Usuario"}
      ></Modal>
    </div>
  );
};

export default Usuarios;
