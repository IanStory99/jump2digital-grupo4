import React from "react";
import { Button } from "react-bootstrap";
import "./Checkout.css";

export default function Checkout() {
  const data = ["a", "b", "c"];

  return (
    <div className="check-container">
      <div className="check-text-container">
        <h1>Checkout</h1>
        <div>
          <p>List de Productos</p>
          {data.map((data, i) => (
            <div key={i + 1}>
              <ul>
                <li>Producto: {data}</li>
                <li>Precio: {data}</li>
                <li>Cantidad: {data}</li>
              </ul>
            </div>
          ))}
          <p>Total: </p>
        </div>
        <Button className="btn-success m-2">Comprar</Button>
      </div>
    </div>
  );
}
