import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function CartModal({ cart }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function navigateTo() {
    navigate("/checkout");
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="btn-dark">
        <BsFillCartFill style={{ fontSize: "1.5rem" }} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>List of products</p>
          {cart.length > 0 && <p>Hola </p>}
          {cart.map((item) => {
            <p>{item.name}</p>;
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => navigateTo()}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
