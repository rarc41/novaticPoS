import { AGREGAR_VENTA, OBTENER_VENTAS } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_VENTAS:
      return {
        ...state,
        ventas: action.payload,
      };

    case AGREGAR_VENTA:
        return {
            ...state,
            ventas: [...state.ventas, action.payload]
        }
    default:
      return state;
  }
};
