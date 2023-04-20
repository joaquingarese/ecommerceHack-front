import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../redux/cartReducer";

function CartModal({ show, handleClose, selectedProduct }) {
  const dispatch = useDispatch();

  return selectedProduct !== undefined ? (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Está seguro que desea eliminar "{selectedProduct?.name}" de su carrito?
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={() => {
            dispatch(removeFromCart(selectedProduct.id));
            handleClose();
          }}
        >
          Eliminar
        </Button>
        <Button variant="dark" onClick={handleClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  ) : (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar carrito</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Está seguro que desea eliminar todos los productos de su carrito?
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={() => {
            dispatch(clearCart());
            handleClose();
          }}
        >
          Eliminar
        </Button>
        <Button variant="dark" onClick={handleClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
