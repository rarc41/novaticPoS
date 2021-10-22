import React, { useState, useContext } from "react";
import Modal from "./common/Modal";
import "../styles/Form.css";
import '../styles/Modal.css';
import Input from "./common/Input";
import Select from "./common/Select";
import BtnMaterial from "./common/BtnMaterial";
import AuthContext from "../context/autentication/authContext";
import { v4 as uuidv4 } from 'uuid';


const CrearUsuariosForm = ({handleOpen}) => {
  const [userInfo, setUserInfo] = useState({
    user: "",
    role: "",
    state: "",
    id: uuidv4(),
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const authContext = useContext(AuthContext);
  const { registrarUsuario } = authContext;

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({
      ...userInfo,
      id: uuidv4(),
    });
    console.log("registrando usuario", userInfo)
    registrarUsuario(userInfo);
  }

  const { user, role, state } = userInfo;

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <Input
        label="Nombre de usuario"
        name="user"
        required={true}
        type="text"
        onChange={handleChange}
        value={user}
      ></Input>
      <Select
        label="Rol"
        name="role"
        required={true}
        options={["Administrador", "Vendedor"]}
        onChange={handleChange}
        value={role}
      ></Select>
      <Select
        label="Estado"
        name="state"
        required={true}
        options={["Pendiente", "Autorizado", "No autorizado"]}
        onChange={handleChange}
        value={state}
      ></Select>

      <div >
        <BtnMaterial type='submit'>Crear</BtnMaterial>
        <BtnMaterial onClick={(e)=>{e.preventDefault(); handleOpen()}} variant="danger">
          Cancelar
        </BtnMaterial>
      </div>
    </form>
  );
};

export default CrearUsuariosForm;
