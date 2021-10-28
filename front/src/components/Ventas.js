import React, { useState, useContext, useEffect } from "react";

import "../styles/Button.css";
import BtnMaterial from "./common/BtnMaterial";
import Table from "./common/Table";
import ToolBar from "./common/ToolBar";
import Modal from "./common/Modal";
import VentasContext from "../context/ventas/ventasContext";
import CrearVentaForm from "./CrearVentaForm";
import Cargando from "./common/Cargando";

const Ventas = () => {
  const ventasContext = useContext(VentasContext);
  const { obtenerVentas, ventas, seleccionarVenta, ventaActual } = ventasContext;
  const [filteredVentas, setFilteredVentas] = useState([]);

  const [modalForm, setModalForm] = useState(false);
  const handleModalOpen = () => {
    setModalForm(!modalForm);
  };

  useEffect(() => {
    obtenerVentas();
  }, []);

  useEffect(() => {
    if (filteredVentas.length === 0) {
      setFilteredVentas(ventas);
    }
  }, [ventas]);

  useEffect(() => {
    setFilteredVentas(ventas);
  }, [ventas]);

  const handleChange = (e) => {
    e.preventDefault();
    let list = [];
    let search = e.target.value;
    list = ventas.filter(
      (item) =>
        item.customerid.toLowerCase().includes(search.toLowerCase()) ||
        item.customername.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredVentas(list);
  };

  const headers = [
    { name: "ID venta", value: "_id" },
    { name: "Valor venta", value: "total" },
    { name: "Fecha de venta", value: "date" },
    { name: "ID cliente", value: "customerid" },
    { name: "Nombre cliente", value: "customername" },
    { name: "Vendedor", value: "user" },
    { name: " ", value: "button" },
  ];

  const handleEdit = async (data) => {
    console.log(data);
    await seleccionarVenta(data);
    handleModalOpen();
  };

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
          Nueva Venta <i class="fas fa-plus-circle"></i>
        </BtnMaterial>
      </ToolBar>
      <Table
        headers={headers}
        data={filteredVentas}
        handleModalOpen={handleModalOpen}
        handleEdit={handleEdit}
      ></Table>
      <Modal
        isOpen={modalForm}
        handleOpen={handleModalOpen}
        title={ventaActual?'Editar Producto' : 'Crear Producto'}
      >
        <CrearVentaForm handleOpen={handleModalOpen} />
      </Modal>
    </div>
  );
};

export default Ventas;
