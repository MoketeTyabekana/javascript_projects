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

  return <div className=" flex flex-column justify-center items-center">
    <h1 className="p-4 bg-blue-600 w-full text-white font-bold" >Shopping Cart</h1>

  </div>;
};

export default ShoppingCart;
