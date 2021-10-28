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
        <hr className="line1"/>
        
        {children}
        <hr className="line2"/>
      </div>
     
    </div>
    </div>
  );
};
export default Modal;