import React, { useState } from "react";
import "../styles/Button.css";
import Table from "./common/Table";
import ToolBar from "./common/ToolBar";
import BtnMaterial from "./common/BtnMaterial";
import formulario from "../resources/json/usuario.json";
import clienteAxios from "../config/axios";
import Modal from "./common/Modal";
import CrearUsuariosForm from "./CrearUsuariosForm";

const Usuarios = () => {
  let [values, setValues] = useState([]);
  const [modalForm, setModalForm] = useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };
  React.useEffect(() => {
    clienteAxios
      .get("users")
      .then((response) => {
        console.log(response.data.data);
        setValues(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        setValues([]);
      });
  }, []);

  const headers = [
    { name: "Usuario", value: "user" },
    { name: "Rol", value: "role" },
    { name: "Estado", value: "state" },
    { name: " ", value: "button" },
  ];

  return (
    <div className="Module Module-container divider-section">
      <ToolBar>
        <BtnMaterial onClick={handleModalOpen}>
          Nuevo Usuario <i class="fas fa-plus-circle"></i>
        </BtnMaterial>
      </ToolBar>
      <Table headers={headers} data={values}></Table>
      <Modal
        isOpen={modalForm}
        handleOpen={handleModalOpen}
        // formulario={formulario}
        title={"Crear Usuario"}
      >
        <CrearUsuariosForm handleOpen={handleModalOpen}/>
      </Modal>
    </div>
  );
};

export default Usuarios;
