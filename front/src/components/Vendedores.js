import React, { useState } from 'react';
import Button from './common/Button';
import PruebasTable from './pruebas/PruebasTable';
import PruebaModal from './common/Modal';
import Search from './common/Search';

const Vendedores = () => {
  const [modalForm, setModalForm] = useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };

  return (
    <div className="Module Module-container">
      <div class="container">
        <div class="row my-3">
          <div class="col">{modalForm && <PruebaModal isOpen={modalForm} handleOpen={handleModalOpen} />}</div>
          <div class="col">
            <Search label={'Usuario'}></Search>
          </div>
          <div class="col">
            <Button className="buttonBox" color="btn btn-primary" onClick={handleModalOpen}>
              Nuevo vendedor<i class="fas fa-plus-circle"></i>
            </Button>
          </div>
        </div>
        <div class="row">
          <PruebasTable></PruebasTable>
        </div>
      </div>
    </div>
  );
};

export default Vendedores;
