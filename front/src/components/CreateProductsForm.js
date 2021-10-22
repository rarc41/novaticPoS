import React, { useState, useContext } from "react";
import "../styles/Form.css";
import "../styles/Modal.css";
import Input from "./common/Input";
import Select from "./common/Select";
import BtnMaterial from "./common/BtnMaterial";
import { v4 as uuidv4 } from "uuid";

const CreateProductsForm = ({handleOpen}) => {
  const [producto, setProducto] = useState({
    id: "",
    name: "",
    description: "",
    stock: "",
    value: "",
    price: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducto({
      ...producto,
      id: uuidv4(),
    });
    console.log("registrando producto", producto);
    // registrarUsuario(userInfo);
  };

  const { nombre, description, value, stock, price } = producto;

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <Input
        label="Nombre"
        name="name"
        required={true}
        type="text"
        onChange={handleChange}
        value={nombre}
      ></Input>
      <Input
        label="Descripcion"
        name="description"
        required={true}
        type="text"
        onChange={handleChange}
        value={description}
      ></Input>
      <Input
        label="Stock"
        name="stock"
        required={true}
        type="number"
        onChange={handleChange}
        value={stock}
      ></Input>
      <Input
        label="Precio"
        name="price"
        required={true}
        type="number"
        onChange={handleChange}
        value={price}
      ></Input>
      <div>
        <BtnMaterial type="submit">Crear</BtnMaterial>
        <BtnMaterial
          onClick={(e) => {
            e.preventDefault();
            handleOpen();
          }}
          variant="danger"
        >
          Cancelar
        </BtnMaterial>
      </div>
    </form>
  );
};

export default CreateProductsForm;
