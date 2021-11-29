import { AGREGAR_VENTA, OBTENER_VENTAS, VENTA_ACTUAL, ACTUALIZAR_VENTA, LIMPIAR_VENTA_ACTUAL } from '../../types';

const reducer = (state, action) => {
  switch (action.type) {
    case OBTENER_VENTAS:
      return {
        ...state,
        ventas: action.payload,
      };

    case AGREGAR_VENTA:
      return {
        ...state,
        ventas: [...state.ventas, action.payload],
      };

    case VENTA_ACTUAL:
      console.log(action.payload);
      return {
        ...state,
        ventaActual: state.ventas.filter((venta) => venta._id === action.payload._id)[0],
      };

    case ACTUALIZAR_VENTA:
      return {
        ...state,
        ventas: state.ventas.map((venta) => (venta._id === action.payload._id ? action.payload : venta)),
      };

    case LIMPIAR_VENTA_ACTUAL:
      return {
        ...state,
        ventaActual: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
