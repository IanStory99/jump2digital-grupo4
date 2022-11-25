import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import "./Home.css";

export default function Home() {
  const [city, setCity] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setCity((prevCity) => {
      return {
        ...prevCity,
        [name]: value,
      };
    });
  }

  console.log(city);

  return (
    <div className="home-container">
      <div className="text-container">
        <h1>Bienvenido</h1>
        <div>
          <p>Seleccione su ciudad</p>
          <select
            name="city"
            id="city"
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option value="">Seleccionar</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Madrid">Madrid</option>
            <option value="Zaragoza">Zaragoza</option>
          </select>
        </div>

        <Link to="/product-list">
          <Button className="btn-success m-2">Ir a comprar</Button>
        </Link>
      </div>
    </div>
  );
}
