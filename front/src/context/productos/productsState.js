import React, { useReducer } from 'react';
import ProductsContext from './productsContext';
import ProductsReducer from './productsReducer';
import clienteAxios from '../../config/axios';
import { AGREGAR_PRODUCTO, OBTENER_PRODUCTOS, PRODUCTO_ACTUAL, ACTUALIZAR_PRODUCTO, LIMPIAR_PRODUCTO_ACTUAL } from '../../types';

const ProductsState = (props) => {
  const initialState = {
    productos: [],
    productoActual: null,
  };

  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  // funciones
  const obtenerProductos = async () => {
    try {
      const response = await clienteAxios.get('products');
      console.log(response);
      dispatch({
        type: OBTENER_PRODUCTOS,
        payload: response.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const agregarProducto = async (datos) => {
    try {
      const response = await clienteAxios.post('products', datos);
      console.log(response);
      dispatch({
        type: AGREGAR_PRODUCTO,
        payload: response.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //   seleccionar producto
  const seleccionarProducto = (producto) => {
    dispatch({
      type: PRODUCTO_ACTUAL,
      payload: producto,
    });
  };

  //   actualizar producto
    const actualizarProducto = async (producto) => {
    console.log(producto);
    try {
      const response = await clienteAxios.put(`products/${producto.id}`, producto);
      console.log(response);
      dispatch({
        type: ACTUALIZAR_PRODUCTO,
        payload: response.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // limpiar producto actual
  const limpiarProductoActual = () => {
    dispatch({
      type: LIMPIAR_PRODUCTO_ACTUAL,
      payload: null,
    });
  }

  return (
    <ProductsContext.Provider
      value={{
        productos: state.productos,
        productoActual: state.productoActual,
        obtenerProductos,
        agregarProducto,
        seleccionarProducto,
        actualizarProducto,
        limpiarProductoActual,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
