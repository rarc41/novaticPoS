import {
  AGREGAR_PRODUCTO,
  OBTENER_PRODUCTOS,
  PRODUCTO_ACTUAL,
  ACTUALIZAR_PRODUCTO,
} from "../../types";

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
        productos: [...state.productos, action.payload],
      };

    case PRODUCTO_ACTUAL:
      return {
        ...state,
        productoActual: state.productos.filter(
          (producto) => producto.id === action.payload.id
        )[0],
      };

    case ACTUALIZAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.map((producto) =>
          producto.id === action.payload.id ? action.payload : producto
        ),
      };
    default:
      return state;
  }
};
