import React, { useState, useContext, useEffect } from "react";
import "../styles/Products.css";
import BtnMaterial from "./common/BtnMaterial";
import Table from "./common/Table";
import ToolBar from "./common/ToolBar";
import Modal from "./common/Modal";
import CreateProductsForm from "./CreateProductsForm";
import ProductsContext from "../context/productos/productsContext";

const Productos = () => {
  const [modalForm, setModalForm] = useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };

  const productsContext = useContext(ProductsContext);
  const { obtenerProductos, productos, seleccionarProducto, productoActual } =
    productsContext;

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    obtenerProductos();
    // setFilteredProducts(productos);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (filteredProducts.length === 0) {
      setFilteredProducts(productos);
    }
  }, [productos]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setFilteredProducts(productos);
  }, [productos]);

  const handleChange = (e) => {
    e.preventDefault();
    let list = [];
    let search = e.target.value;
    list = productos.filter(
      (item) =>
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(list);
  };

  const handleEdit = async (data) => {
    await seleccionarProducto(data);
    handleModalOpen();
  };

  const headers = [
    { name: "ID", value: "id" },
    { name: "nombre", value: "name" },
    { name: "descripcion", value: "description" },
    { name: "stock", value: "stock" },
    { name: "Precio", value: "price" },
    "",
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
          <a className="search-btn" href="#/">
            <i className="fas fa-search"></i>
          </a>
        </div>
        <BtnMaterial onClick={handleModalOpen}>
          Nuevo Producto <i className="fas fa-plus-circle"></i>
        </BtnMaterial>
      </ToolBar>
      <Table
        headers={headers}
        data={filteredProducts}
        handleModalOpen={handleModalOpen}
        handleEdit={handleEdit}
      ></Table>
      <Modal
        isOpen={modalForm}
        handleOpen={handleModalOpen}
        // formulario={formulario}
        title={productoActual ? "Editar Producto" : "Crear Producto"}
      >
        <CreateProductsForm handleOpen={handleModalOpen} />
      </Modal>
    </div>
  );
};

export default Productos;
