import React from 'react';
import '../../styles/Modal.css';


const Modal = ({ isOpen, handleOpen, formulario, title, children }) => {
  return (
    <div
    hidden={!isOpen}  
  >
    <div className="modal-background" >
      <div className="modal-card">
        <h1 className="title">{title}</h1>
        <hr className="hr1"/>
        {children}
       <hr className="hr2"/>
      </div>
     
    </div>
    </div>
  );
};
export default Modal;
