import React, { useState, useContext, useEffect } from 'react';
import '../styles/Form.css';
import '../styles/Modal.css';
import Input from './common/Input';
import Select from './common/Select';
import BtnMaterial from './common/BtnMaterial';
import ProductsContext from '../context/productos/productsContext';

const CreateProductsForm = ({ handleOpen }) => {
  const productsContext = useContext(ProductsContext);
  const { obtenerProductos, agregarProducto, productoActual, actualizarProducto } = productsContext;
  const [producto, setProducto] = useState({
    id: '',
    name: '',
    description: '',
    stock: '',
    price: '',
  });

  // efecto para editar el producto
  useEffect(() => {
    if (productoActual) {
      setProducto(productoActual);
    } else {
      setProducto({
        id: '',
        name: '',
        description: '',
        stock: '',
        price: '',
      });
    }
  }, [productoActual]);

  const handleChange = (e) => {
    e.preventDefault();
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productoActual === null) {
      agregarProducto(producto);
    } else {
      actualizarProducto(producto);
    }

    handleOpen();
    obtenerProductos();
  };

  const { id, name, description, stock, price } = producto;

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <Input label="ID" name="id" required={true} type="text" onChange={handleChange} value={id}></Input>
      <Input label="Nombre" name="name" required={true} type="text" onChange={handleChange} value={name}></Input>
      <Input label="Descripcion" name="description" required={true} type="text" onChange={handleChange} value={description}></Input>
      <Input label="Stock" name="stock" required={true} type="number" onChange={handleChange} value={stock}></Input>
      <Input label="Precio" name="price" required={true} type="number" onChange={handleChange} value={price}></Input>
      <div>
        <BtnMaterial type="submit">{productoActual ? 'Editar' : 'Crear'}</BtnMaterial>
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
