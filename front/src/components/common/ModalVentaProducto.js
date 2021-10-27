import React from 'react';
import '../../styles/ModalVentaProducto.css';

const Modal = ({ isOpen, isVisible, formulario, title, children }) => {
  return (
    <div
    hidden={!isOpen}  
  >
    <div className="modal-back" >
      <div className="modal-car">
        <h1 className="title">{title}</h1>
        <hr className="line"/>
        
        {/* <Form fields={formulario}></Form> */}
        {children}
        {/* <div className="group-button">
>>>>>>> b644b0b72fd6a1a72e5913fba4fc6add9cd2021f
          <BtnMaterial >Crear</BtnMaterial>
          <BtnMaterial onClick={handleOpen} variant='danger'>Cancelar</BtnMaterial>
        </div> */}
       <hr className="line"/>
      </div>
     
    </div>
    </div>
  );
};
export default Modal;