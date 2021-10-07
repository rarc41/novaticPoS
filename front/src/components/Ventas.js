import React, { useState } from 'react';
import PruebaModal from './common/Modal';
import PruebasVenta from './pruebas/PruebasVenta';
import formulario from '../resources/json/venta.json';
import '../styles/Button.css';
import Search from './common/Search';
import Button from './common/Button'

const Ventas = () => {
  const [modalForm, setModalForm] = useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };

  return (
    <div className="Module Module-container">
      <div class="container">
        <div class="row my-3">
          <div class="col">{modalForm && <PruebaModal isOpen={modalForm} handleOpen={handleModalOpen} formulario={formulario} />}</div>
          <div class="col">
            <Search label={'Venta'}></Search>
          </div>
          <div class="col">
            <Button className="buttonBox" color="btn btn-primary" onClick={handleModalOpen}>
              Nueva Venta<i class="fas fa-plus-circle"></i>
            </Button>
          </div>
        </div>
        <div class="row">
          <PruebasVenta></PruebasVenta>
        </div>
      </div>
    </div>
  );
};

export default Ventas;
