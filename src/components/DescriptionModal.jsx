import React from "react";
import "./styles/descriptionModal.css";
import { Modal, Button } from "react-bootstrap";

function DescriptionModal({ showModal, handleClose, product }) {
  return (
    <Modal show={showModal} onHide={handleClose} id="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Descripcion de {product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{product.description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DescriptionModal;
