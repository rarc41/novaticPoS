import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clienteAxios from '../../config/axios'
import axios from 'axios';

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types";

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // funciones
    const registrarUsuario = async datos => {
        console.log(datos)
        try {
            const response = await clienteAxios.post('/api/v1/users', datos);
            console.log(response)

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: response.data
            })
        } catch (error) {
            const  alerta = {
                msg: error.response.data.msg,
                categoria:'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }


    return (
        <AuthContext.Provider
        value={{
            token: state.token,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje,
            registrarUsuario
        }}
        >
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState
