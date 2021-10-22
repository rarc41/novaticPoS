import React from 'react';
import '../../styles/Modal.css';
import Form from './Form';
import BtnMaterial from './BtnMaterial';

const Modal = ({ isOpen, handleOpen, formulario, title }) => {
  return (
    <div
    hidden={!isOpen}  
  >
    <div className="modal-background" >
      <div className="modal-card">
        <h1 className="title">{title}</h1>
        <hr/>
        <Form fields={formulario}></Form>
        <BtnMaterial variant='update'>Agregar producto <i class="fas fa-plus"></i></BtnMaterial>
        <hr/> 
        <div className="group-button">
          <BtnMaterial >Crear</BtnMaterial>
          <BtnMaterial onClick={handleOpen} variant='danger'>Cancelar</BtnMaterial>
        </div>
      
      </div>
     
    </div>
    </div>
  );
};
export default Modal;
