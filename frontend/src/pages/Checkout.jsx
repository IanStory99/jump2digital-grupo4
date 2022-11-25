import React from "react";
import { Button } from "react-bootstrap";
import "./Checkout.css";
import ModalCheckout from "../components/ModalCheckout/ModalCheckout";

export default function Checkout() {
  const data = ["a", "b", "c"];

  return (
    <div className="check-container">
      <div className="check-text-container">
        <h1 style={{ textAlign: "center" }}>Checkout</h1>
        <div>
          <p style={{ textAlign: "center" }}>List de Productos</p>
          {data.map((data, i) => (
            <div key={i + 1}>
              <ul>
                <li>Producto: {data}</li>
                <li>Precio: {data}</li>
                <li>Cantidad: {data}</li>
              </ul>
            </div>
          ))}
          <h3 style={{ textAlign: "right" }}>Total: 20</h3>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button className="btn-success m-2">
            <ModalCheckout />
          </Button>
        </div>
      </div>
    </div>
  );
}
