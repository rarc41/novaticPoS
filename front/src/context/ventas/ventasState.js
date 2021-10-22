import React, { useReducer } from "react";
import VentasContext from "./ventasContext";
import VentasReducer from "./ventasReducer";
import clienteAxios from "../../config/axios";
import { AGREGAR_VENTA, OBTENER_VENTAS } from "../../types";

const VentasState = (props) => {
  const initialState = {
    ventas: [],
  };

  const [state, dispatch] = useReducer(VentasReducer, initialState);

  // funciones

  const obtenerVentas = async () => {
    try {
      const response = await clienteAxios.get("sales");
      dispatch({
        type: OBTENER_VENTAS,
        payload: response.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const agregarVenta = async (venta) => {
    try {
      const response = await clienteAxios.post("sales", venta);
      dispatch({
        type: AGREGAR_VENTA,
        payload: response.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VentasContext.Provider
      value={{
        ventas: state.ventas,
        obtenerVentas,
        agregarVenta
      }}
    >
      {props.children}
    </VentasContext.Provider>
  );
};

export default VentasState;
