import React from "react";
import "./ProductList.css";
import ProductCard from "../components/ProductCard/ProductCard";

const singleProduct = {
  name: "Product 1",
  type: "Beverage",
  price: "400",
  cusine: "Thai",
};
const products = [
  singleProduct,
  singleProduct,
  singleProduct,
  singleProduct,
  singleProduct,
  singleProduct,
  singleProduct,
  singleProduct,
  singleProduct,
  singleProduct,
  singleProduct,
  singleProduct,
];

const ProductList = () => {
  return (
    <>
      <h2 className="heading-product-list">Product List Page</h2>
      <div className="product-list-view">
        <div className="product-list-box">
          {products.map((product, index) => (
            <ProductCard product={product} key={`${product.name}_${index}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
