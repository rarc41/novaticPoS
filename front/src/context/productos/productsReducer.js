import { AGREGAR_PRODUCTO, OBTENER_PRODUCTOS } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
      };

      case AGREGAR_PRODUCTO:
          return {
              ...state,
              productos: [...state.productos, action.payload]
          }
    default:
      return state;
  }
};
