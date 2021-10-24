import React, { useReducer } from "react";
import ProductsContext from "./productsContext";
import ProductsReducer from "./productsReducer";
import clienteAxios from "../../config/axios";
import {
  AGREGAR_PRODUCTO,
  OBTENER_PRODUCTOS,
  PRODUCTO_ACTUAL,
} from "../../types";

const ProductsState = (props) => {
  const initialState = {
    productos: [],
    productoActual: null,
  };

  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  // funciones
  const obtenerProductos = async () => {
    try {
      const response = await clienteAxios.get("products");
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
      const response = await clienteAxios.post("products", datos);
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
    }

  return (
    <ProductsContext.Provider
      value={{
        productos: state.productos,
        productoActual: state.productoActual,
        obtenerProductos,
        agregarProducto,
        seleccionarProducto,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
