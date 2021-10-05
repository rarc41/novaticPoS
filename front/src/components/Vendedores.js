import React from 'react';
import Button from './common/Button';
import PruebasTable from './pruebas/PruebasTable';
import Modal from './common/Modal';
import form from '../resources/json/prueba.json';

const Vendedores = () => {

  return (
    <div>
      <Button label={'Nuevo Vendedor'} name={'btn-create'}
       icon={'fas fa-id-card'} event={handleModalOpen}></Button>
      <PruebasTable></PruebasTable>
    </div>
  );
};

const handleModalOpen = () => {
  
};

export default Vendedores;
