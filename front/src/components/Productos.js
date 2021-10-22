import React, { useState } from "react";
import "../styles/Products.css";
import BtnMaterial from "./common/BtnMaterial";
import Table from "./common/Table";
import ToolBar from "./common/ToolBar";
import Modal from "./common/Modal";
import formulario from "../resources/json/producto.json";
import CreateProductsForm from "./CreateProductsForm";

const Productos = () => {
  const [modalForm, setModalForm] = useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };

  const products = [
    {
      id: 1,
      name: "Juice - V8, Tomato",
      descripcion: "LDR Brachytherapy of Sinuses using Palladium 103",
      stock: 54,
      price: 78.66,
      img: "http://dummyimage.com/107x100.png/ff4444/ffffff",
    },
    {
      id: 2,
      name: "Appetizer - Cheese Bites",
      descripcion: "Bypass Sup Vena Cava to L Pulm Vn w Nonaut Sub, Open",
      stock: 344,
      price: 16.58,
      img: "http://dummyimage.com/105x100.png/cc0000/ffffff",
    },
    {
      id: 3,
      name: "Plasticspoonblack",
      descripcion: "Dilate Hepatic Art w 2 Intralum Dev, Perc Endo",
      stock: 500,
      price: 81.67,
      img: "http://dummyimage.com/250x100.png/ff4444/ffffff",
    },
    {
      id: 4,
      name: "Anchovy Fillets",
      descripcion: "Reposition Left Fibula with Ext Fix, Perc Approach",
      stock: 411,
      price: 39.31,
      img: "http://dummyimage.com/178x100.png/dddddd/000000",
    },
    {
      id: 5,
      name: "Gin - Gilbeys London, Dry",
      descripcion: "Replace R Ankle Tendon w Nonaut Sub, Perc Endo",
      stock: 331,
      price: 10.24,
      img: "http://dummyimage.com/238x100.png/5fa2dd/ffffff",
    },
  ];
  const headers = [
    { name: "nombre", value: "name" },
    { name: "descripcion", value: "descripcion" },
    { name: "stock", value: "stock" },
    { name: "Precio", value: "price" },
    "",
  ];

  return (
    <div className="Module Module-container divider-section">
      <ToolBar>
        <BtnMaterial onClick={handleModalOpen}>
          Nuevo Producto <i class="fas fa-plus-circle"></i>
        </BtnMaterial>
      </ToolBar>
      <Table headers={headers} data={products}></Table>
      <Modal
        isOpen={modalForm}
        handleOpen={handleModalOpen}
        // formulario={formulario}
        title={"Crear Producto"}
      >
        <CreateProductsForm handleOpen={handleModalOpen} />
      </Modal>
    </div>
  );
};

export default Productos;
