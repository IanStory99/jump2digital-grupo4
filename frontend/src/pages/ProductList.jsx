import React, { useState } from "react";
import "./ProductList.css";
import ProductCard from "../components/ProductCard/ProductCard";

const singleProduct = {
  id: 1,
  name: "Product 1",
  type: "Beverage",
  price: 400,
  cusine: "Thai",
  quantity: 0,
};
const singleProduct2 = {
  id: 2,
  name: "Product 1",
  type: "Beverage",
  price: 300,
  cusine: "Thai",
  quantity: 0,
};
const singleProduct3 = {
  id: 3,
  name: "Product 1",
  type: "Beverage",
  price: 200,
  cusine: "Thai",
  quantity: 0,
};
const singleProduct4 = {
  id: 4,
  name: "Product 1",
  type: "Beverage",
  price: 100,
  cusine: "Thai",
  quantity: 0,
};
const products = [
  singleProduct,
  singleProduct2,
  singleProduct3,
  singleProduct4,
];

const ProductList = ({ cart, setCart }) => {
  console.log(cart);
  return (
    <>
      <h2 className="heading-product-list">Product List Page</h2>
      <div className="product-list-view">
        <div className="product-list-box">
          {products.map((product, index) => (
            <ProductCard
              cart={cart}
              cartSetter={setCart}
              product={product}
              key={`${product.name}_${index}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
