import React, { useState, useContext, useEffect } from "react";
import "../styles/Products.css";
import BtnMaterial from "./common/BtnMaterial";
import Table from "./common/Table";
import ToolBar from "./common/ToolBar";
import Modal from "./common/Modal";
import formulario from "../resources/json/producto.json";
import CreateProductsForm from "./CreateProductsForm";
import ProductsContext from "../context/productos/productsContext";

const Productos = () => {
  const [modalForm, setModalForm] = useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };

  const productsContext = useContext(ProductsContext);
  const { obtenerProductos, productos, seleccionarProducto, productoActual } = productsContext;

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    obtenerProductos();
    setFilteredProducts(productos);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    let list = [];
    let search = e.target.value;
    list = productos.filter((item) =>
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(list);
  }

  const handleEdit = async (data) => {
    await seleccionarProducto(data);
    handleModalOpen();
  };

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
        <div className="search-box">
          <input
            className="search-txt"
            type="text"
            placeholder="Excribe para buscar"
            onChange={handleChange}
          ></input>
          <a className="search-btn" href="#">
            <i class="fas fa-search"></i>
          </a>
        </div>
        <BtnMaterial onClick={handleModalOpen}>
          Nuevo Producto <i class="fas fa-plus-circle"></i>
        </BtnMaterial>
      </ToolBar>
      <Table headers={headers} data={filteredProducts} handleModalOpen={handleModalOpen} handleEdit={handleEdit}
       button={
        <BtnMaterial
          onClick={(e) => {
            e.preventDefault();
            handleEdit()
          }}
          variant="update"
        > <i class="fas fa-edit"></i>
          Actualizar
        </BtnMaterial>
       }
      ></Table>
      <Modal
        isOpen={modalForm}
        handleOpen={handleModalOpen}
        // formulario={formulario}
        title={productoActual?'Editar Producto' : 'Crear Producto'}
      >
        <CreateProductsForm handleOpen={handleModalOpen} />
      </Modal>
    </div>
  );
};

export default Productos;
