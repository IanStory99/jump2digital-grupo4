import React, { useState } from "react";
import Header from "../components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ProductList from "../pages/ProductList";
import Checkout from "../pages/Checkout";

export default function AppRoutes() {
  const cartArray = [];
  const [cart, setCart] = useState(cartArray);
  return (
    <>
      <BrowserRouter>
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/product-list"
            element={<ProductList setCart={setCart} cart={cart} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
