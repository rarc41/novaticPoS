import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
  OBTENER_USUARIOS,
  ACTUALIZAR_USUARIO,
  USUARIO_ACTUAL,
  LIMPIAR_USUARIO_ACTUAL
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

      case USUARIO_ACTUAL:
      return {
        ...state,
        usuario: state.usuarios.filter(usuario => usuario.id === action.payload.id)[0]

      }

      case ACTUALIZAR_USUARIO:{
        return {
          ...state,
          usuarios: state.usuarios.map(usuario => usuario.id === action.payload.id ? action.payload : usuario)
        }
      }
      case LIMPIAR_USUARIO_ACTUAL:{
        return {
          ...state,
          usuario: action.payload
        }
      }

    default:
      return state;
  }
};
