import React, { useState, useEffect, useContext } from 'react';
import '../styles/Button.css';
import Table from './common/Table';
import ToolBar from './common/ToolBar';
import BtnMaterial from './common/BtnMaterial';
import formulario from '../resources/json/usuario.json';
import clienteAxios from '../config/axios';
import Modal from './common/Modal';
import CrearUsuariosForm from './CrearUsuariosForm';
import AuthContext from '../context/autentication/authContext';

const Usuarios = () => {
  const [modalForm, setModalForm] = useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };

  const authContext = useContext(AuthContext);
  const { usuarios, obtenerUsuarios } = authContext;

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const headers = [
    { name: 'ID', value: 'id' },
    { name: 'Usuario', value: 'user' },
    { name: 'Rol', value: 'role' },
    { name: 'Estado', value: 'state' },
  ];

  return (
    <div className="Module Module-container divider-section">
      <ToolBar>
        <BtnMaterial onClick={handleModalOpen}>
          Nuevo Usuario <i class="fas fa-plus-circle"></i>
        </BtnMaterial>
      </ToolBar>
      <Table headers={headers} data={usuarios}></Table>
      <Modal
        isOpen={modalForm}
        handleOpen={handleModalOpen}
        // formulario={formulario}
        title={'Crear Usuario'}
      >
        <CrearUsuariosForm handleOpen={handleModalOpen}></CrearUsuariosForm>
      </Modal>
    </div>
  );
};

export default Usuarios;
