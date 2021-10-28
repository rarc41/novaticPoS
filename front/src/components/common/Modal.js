import React from 'react';
import '../../styles/Modal.css';
import Form from './Form';
import BtnMaterial from './BtnMaterial';

const Modal = ({ isOpen, handleOpen, formulario, title, children }) => {
  return (
    <div
    hidden={!isOpen}  
  >
    <div className="modal-background" >
      <div className="modal-card">
        <h1 className="title">{title}</h1>
        <hr className="hr1"/>
        
        {/* <Form fields={formulario}></Form> */}
        {children}
        {/* <div className="group-button">
>>>>>>> b644b0b72fd6a1a72e5913fba4fc6add9cd2021f
          <BtnMaterial >Crear</BtnMaterial>
          <BtnMaterial onClick={handleOpen} variant='danger'>Cancelar</BtnMaterial>
        </div> */}
       <hr className="hr2"/>
      </div>
     
    </div>
    </div>
  );
};
export default Modal;
