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
  OBTENER_USUARIOS,
  USUARIO_ACTUAL,
  ACTUALIZAR_USUARIO,
  LIMPIAR_USUARIO_ACTUAL,
  USUARIO_SESION
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    usuarioActual: null,
    usuarioEnSesion: null,
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

  // seleccionar usuario cuando se haga click en el nombre
  const seleccionarUsuario = (usuario) => {
    dispatch({
      type: USUARIO_ACTUAL,
      payload: usuario,
    });
  }

  // ACTUALIZAR USUARIO
  const actualizarUsuario = async (datos) => {
    try {
      const response = await clienteAxios.put(`users/${datos.id}`, datos);
      dispatch({
        type: ACTUALIZAR_USUARIO,
        payload: response.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // limpiar usuario actual
  const limpiarUsuarioActual = () => {
    dispatch({
      type: LIMPIAR_USUARIO_ACTUAL,
      payload: null,
    });
  }

  // set usuario en session
  const setUsuarioEnSesion = (usuario) => {
    dispatch({
      type: USUARIO_SESION,
      payload: usuario,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        usuarioEnSesion: state.usuarioEnSesion,
        usuarios:state.usuarios,
        mensaje: state.mensaje,
        registrarUsuario,
        obtenerUsuarios,
        seleccionarUsuario,
        actualizarUsuario,
        limpiarUsuarioActual,
        setUsuarioEnSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
