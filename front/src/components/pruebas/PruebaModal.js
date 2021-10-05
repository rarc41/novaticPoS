import React from 'react';
import formulario from '../../resources/json/prueba.json';
import  Form  from '../common/Form';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const PruebasTable = () => {
 
  const [modalActualizar, setModalActualizar] = React.useState(true);

  const cerrarModalActualizar = () => {
    setModalActualizar(false);
  };

  const mostrarModalActualizar = () => {
    setModalActualizar(true);
  };

  return (
    <Modal isOpen={modalActualizar}>
        <ModalHeader>
          <div><h3>Actualizar Usuario </h3></div>
        </ModalHeader>

        <ModalBody>
             <FormGroup>
               <Form fields={formulario}></Form>
             </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
          >
            Actualizar
          </Button>
          <Button
            className="btn btn-danger"
            onClick={cerrarModalActualizar}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
  );
  }
export default PruebasTable;