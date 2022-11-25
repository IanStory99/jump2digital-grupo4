import React from "react";
import Header from "../components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoutes from "../components/protectedRoutes/ProtectedRoutes";
import Dashboard from "../pages/Dashboard";
import ProductList from "../pages/ProductList";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/product-list" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
