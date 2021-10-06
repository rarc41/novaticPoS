import React, {useState} from 'react';
import PruebaModal from './common/Modal';
import PruebasUsuario from './pruebas/PruebasUsuario';
import formulario from '../resources/json/usuario.json';
import { Button } from 'reactstrap';
import '../styles/Button.css'
import Search from './common/Search';

const Usuarios = () => {

  const[modalForm, setModalForm]= useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };

  return (
    <div className="Module Module-container">
        <Search label={"Usuario"}></Search>
      <Button className="buttonBox" color="btn btn-primary" onClick={handleModalOpen}>Nuevo Usuario<i class="fas fa-plus-circle"></i></Button>
      <PruebasUsuario></PruebasUsuario>
      {modalForm && (
        <PruebaModal isOpen={modalForm} handleOpen={handleModalOpen} formulario={formulario}/>
      )}
    </div>
  );
};

export default Usuarios;