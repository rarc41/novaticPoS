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
        <hr/>
        {children}
      </div>
     
    </div>
    </div>
  );
};
export default Modal;
