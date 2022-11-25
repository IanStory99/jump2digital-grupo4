import "./product.css";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card-item">
      <p>{product.name}</p>
    </div>
  );
};

export default ProductCard;
