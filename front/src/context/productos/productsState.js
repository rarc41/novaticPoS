import React, { useReducer } from "react";
import ProductsContext from "./productsContext";
import ProductsReducer from "./productsReducer";
import clienteAxios from "../../config/axios";
import { AGREGAR_PRODUCTO, OBTENER_PRODUCTOS } from "../../types";

const ProductsState = (props) => {
  const initialState = {
    productos: [],
  };

  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  // funciones
  const obtenerProductos = async () => {
    try {
      const response = await clienteAxios.get("products");
      console.log(response)
      dispatch({
          type: OBTENER_PRODUCTOS,
          payload: response.data.data
      })
    } catch (error) {
        console.log(error);
    }
  };

  const agregarProducto = async (datos) => {
      try {
          const response = await clienteAxios.post("products", datos)
          console.log(response)
          dispatch({
              type: AGREGAR_PRODUCTO,
              payload: response.data.data
          })
      } catch (error) {
          console.log(error);
      }
  };
  
  return (
      <ProductsContext.Provider
      value={{
          productos: state.productos,
          obtenerProductos,
          agregarProducto
      }}>
          {props.children}
      </ProductsContext.Provider>
  )
};

export default ProductsState;

