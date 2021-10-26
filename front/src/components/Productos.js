import React, { useState, useContext, useEffect } from 'react';
import '../styles/Products.css';
import BtnMaterial from './common/BtnMaterial';
import Table from './common/Table';
import ToolBar from './common/ToolBar';
import Modal from './common/Modal';
import formulario from '../resources/json/producto.json';
import CreateProductsForm from './CreateProductsForm';
import ProductsContext from '../context/productos/productsContext';

const Productos = () => {
  const [modalForm, setModalForm] = useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };

  const productsContext = useContext(ProductsContext);
  const { obtenerProductos, productos } = productsContext;

  useEffect(() => {
    obtenerProductos();
  }, []);

  const headers = [
    { name: 'ID', value: 'id' },
    { name: 'nombre', value: 'name' },
    { name: 'descripcion', value: 'description' },
    { name: 'stock', value: 'stock' },
    { name: 'Precio', value: 'price' },
    '',
  ];

  return (
    <div className="Module Module-container divider-section">
      <ToolBar>
        <BtnMaterial onClick={handleModalOpen}>
          Nuevo Producto <i class="fas fa-plus-circle"></i>
        </BtnMaterial>
      </ToolBar>
      <Table headers={headers} data={productos} handleModalOpen={handleModalOpen}></Table>
      <Modal
        isOpen={modalForm}
        handleOpen={handleModalOpen}
        // formulario={formulario}
        title={'Crear Producto'}
      >
        <CreateProductsForm handleOpen={handleModalOpen} />
      </Modal>
    </div>
  );
};

export default Productos;
