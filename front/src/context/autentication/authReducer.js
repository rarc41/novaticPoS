import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
  OBTENER_USUARIOS,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      console.log(action.payload)
      return {
        ...state,
        autenticado: true,
        mensaje: null,
        usuarios: [...state.usuarios, action.payload],
      };

    case REGISTRO_ERROR:
      return {
        ...state,
        token: null,
        mensaje: action.payload,
      };

    case OBTENER_USUARIOS:
      return {
        ...state,
        usuarios: action.payload,
      };

    default:
      return state;
  }
};
