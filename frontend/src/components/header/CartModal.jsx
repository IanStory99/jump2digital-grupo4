import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function CartModal() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function navigateTo() {
    navigate("/checkout");
    handleClose();
  }

  function showInCart() {
    /* Esta funcion muestra los productos en el carrito y el total */
    let total = calculateTotal();
    document.getElementById("cart_list").innerHTML = "";

    for (let item of cart) {
      document.getElementById("total_price").textContent = total;
      //document.getElementById('remove').classList.add('btn-danger')
      document.getElementById("cart_list").innerHTML += `<tr>
  <th scope="row">${item.name}</th>
  <td>$${item.price}</td>
  <td>${item.quantity}</td>
  <td>$${item.subTotalWithDiscount}</td>
  <td><button class='btn btn-danger btn-sm' onclick='removeFromCart(${item.id})'>X</button></td>
  </tr>`;
    }
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
        <Modal.Body>List of products</Modal.Body>
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
