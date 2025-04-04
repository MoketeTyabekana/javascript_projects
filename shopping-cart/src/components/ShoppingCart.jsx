import React, { useState } from "react";
import { products } from "./products.jsx";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

const totalPrice=cart.reduce((acc, product) => acc + product.price, 0);

  return <div></div>;
};

export default ShoppingCart;
