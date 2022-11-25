import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/home.jpg";
import Button from "react-bootstrap/esm/Button";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container ">
      <Link to="/dashboard">
        <Button className="btn-light">Iniciar</Button>
      </Link>
    </div>
  );
}
