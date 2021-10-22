import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import clienteAxios from "../../config/axios";

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
  OBTENER_USUARIOS
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    usuarios: [],
    mensaje: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // funciones
  const registrarUsuario = async (datos) => {
    console.log(datos);
    try {
      const response = await clienteAxios.post("users", datos);
      console.log(response);

      dispatch({
        type: REGISTRO_EXITOSO,
        payload: response.data.data,
      });
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };

      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta,
      });
    }
  };

  const obtenerUsuarios = async () => {
    try {
      const response = await clienteAxios.get("users");
      dispatch({
        type: OBTENER_USUARIOS,
        payload: response.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        usuarios:state.usuarios,
        mensaje: state.mensaje,
        registrarUsuario,
        obtenerUsuarios
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
