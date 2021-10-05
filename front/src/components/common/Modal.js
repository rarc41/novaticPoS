import React, { useState } from 'react';
import '../../styles/Modal.css';
import Form from './Form';
import Button from './Button';

const Modal = ({title, formulario, visible}) => {
    const [show, setShow] = useState(false);
     
    const handleModalClose = (e) => {
      const currentClass = e.target.className;
      
      if (currentClass === 'modal-card') {
        return;
      }
      
      setShow(false);
    };
    
    const handleModalOpen = () => {
      setShow(true);
    };
    
    return (
        <div
          hidden={!show}  
        >
            <div className="modal-card">
                <h3>{title}</h3>
                <hr class="line-title"/>
                <Form fields={formulario} />
                <div className="container-buttons">
                  <Button label={"Cancelar"} name={"button"} event={handleModalClose}></Button>
                  <Button label={"Aceptar"} name={"button"}></Button>
                </div>
            </div>
         
        </div>
    );
  };
  
  export default Modal;