import React from 'react';
import  Form  from './Form';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const PruebasTable = ({isOpen, handleOpen, formulario}) => {
  return (
    <Modal isOpen={isOpen}>
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
            onClick={handleOpen}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
  );
  }
export default PruebasTable;