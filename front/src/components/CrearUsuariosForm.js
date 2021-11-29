import React, { useState, useContext, useEffect } from "react";
import "../styles/Form.css";
import "../styles/Modal.css";
import Input from "./common/Input";
import Select from "./common/Select";
import BtnMaterial from "./common/BtnMaterial";
import AuthContext from "../context/autentication/authContext";

const CrearUsuariosForm = ({ handleOpen }) => {
  const authContext = useContext(AuthContext);
  const { registrarUsuario, obtenerUsuarios, actualizarUsuario, usuario, limpiarUsuarioActual } =
    authContext;
  const [userInfo, setUserInfo] = useState({
    id: "",
    user: "",
    role: "",
    state: "",
  });

  // efecto para editar usuario
  useEffect(() => {
    if (usuario) {
      setUserInfo(usuario);
    } else {
      setUserInfo({
        id: "",
        user: "",
        role: "",
        state: "",
      });
    }
  }, [usuario]);

  const handleChange = (e) => {
    e.preventDefault();
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === null) {
      registrarUsuario(userInfo);
    } else {
      actualizarUsuario(userInfo);
    }
    handleOpen();
    obtenerUsuarios();
  };

  const { id, user, role, state } = userInfo;

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <Input
        label="Identificador"
        name="id"
        required={true}
        type="text"
        onChange={handleChange}
        value={id}
        // disabled={usuario !== null? true : false}
        hidden={usuario !== null ? true : false}
      ></Input>
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

      <div>
        <BtnMaterial type="submit">{usuario ? 'Editar': 'Crear'}</BtnMaterial>
        <BtnMaterial
          onClick={(e) => {
            e.preventDefault();
            handleOpen();
            limpiarUsuarioActual();
          }}
          variant="danger"
        >
          Cancelar
        </BtnMaterial>
      </div>
    </form>
  );
};

export default CrearUsuariosForm;
