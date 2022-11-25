import "./product.css";
import React from "react";

const ProductCard = ({ product, cartSetter, cart }) => {
  const removeItemById = (itemID, array) => {
    const arrayWithoutRemovedItem = array.filter((item) => item.id !== itemID);
    console.log(arrayWithoutRemovedItem);
    return cartSetter(arrayWithoutRemovedItem);
  };

  return (
    <div className="product-card-item">
      <img
        className="product-image"
        src="https://aceiteagustin.com/wp-content/uploads/2018/12/Botella-1-litro-AA-e1573081306273.jpg"
        alt="img"
      />
      <p className="product-category">{product.type}</p>
      <div className="product-info">
        <p>{product.name}</p>
        <p>{product.price} u.m</p>
      </div>
      <div className="buttons-display-box">
        <button
          onClick={() => {
            removeItemById(product.id, cart);
            console.log(cart);
          }}
          className="cart-button-remove"
        >
          -
        </button>
        <button
          onClick={() => {
            cart.push(product);
            cartSetter(cart);
            console.log(cart);
          }}
          className="cart-button-add"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
