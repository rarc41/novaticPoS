import React, {useState} from 'react';
import Button from './common/Button';
import PruebasTable from './pruebas/PruebasTable';
import PruebaModal from './pruebas/PruebaModal';
import Modal from './common/Modal';
import form from '../resources/json/prueba.json';

const Vendedores = () => {

  const[modalForm, setModalForm]= useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };



  return (
    <div  className="Module Module-container">
      <Button label={'Nuevo Vendedor'} name={'btn-create'}
       icon={'fas fa-id-card'} onClick={handleModalOpen}></Button>
      <PruebasTable></PruebasTable>
      {modalForm && (
        <PruebaModal isOpen={modalForm} handleOpen={handleModalOpen}/>
      )}
    </div>
  );
};




export default Vendedores;
