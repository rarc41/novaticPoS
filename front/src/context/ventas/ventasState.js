import React, { useReducer } from 'react';
import VentasContext from './ventasContext';
import VentasReducer from './ventasReducer';
import clienteAxios from '../../config/axios';
import { AGREGAR_VENTA, OBTENER_VENTAS, VENTA_ACTUAL, ACTUALIZAR_VENTA, LIMPIAR_VENTA_ACTUAL } from '../../types';

const VentasState = (props) => {
  const initialState = {
    ventas: [],
    ventaActual: null,
  };

  const [state, dispatch] = useReducer(VentasReducer, initialState);

  // funciones

  const obtenerVentas = async () => {
    try {
      const response = await clienteAxios.get('sales');
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
      const response = await clienteAxios.post('sales', venta);
      dispatch({
        type: AGREGAR_VENTA,
        payload: response.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // seleccionar venta
  const seleccionarVenta = (venta) => {
    dispatch({
      type: VENTA_ACTUAL,
      payload: venta,
    });
  };

  // actualizar venta
  const actualizarVenta = async (venta) => {
    console.log(venta);
    try {
      const response = await clienteAxios.put(`sales/${venta._id}`, venta);
      dispatch({
        type: ACTUALIZAR_VENTA,
        payload: response.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // limpiar venta actual
  const limpiarVentaActual = () => {
    dispatch({
      type: LIMPIAR_VENTA_ACTUAL,
      payload: null,
    });
  };

  return (
    <VentasContext.Provider
      value={{
        ventas: state.ventas,
        ventaActual: state.ventaActual,
        obtenerVentas,
        agregarVenta,
        seleccionarVenta,
        actualizarVenta,
        limpiarVentaActual,
      }}
    >
      {props.children}
    </VentasContext.Provider>
  );
};

export default VentasState;
