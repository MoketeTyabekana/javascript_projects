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

  return <div className=" flex flex-col h-screen bg-gray-50">
    <h1 className="p-4 bg-blue-600 w-full text-white font-bold text-xl flex justify-start items-center px-10" >Shopping Cart</h1>

    <div className=" p-10 bg-white ">
     <ul className="flex flex-row md:flex-wrap justify-between items-center gap-10">
        {products.map((product) => (
          <li key={product.id} className="flex flex-col h-auto w-1/5 bg-white shadow-lg rounded-lg p-4 mb-4">
            <div className="flex items-center">
              <img src={product.image} alt={product.name} className="w-16 h-16 " />
              <div>
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-gray-600">R{product.price.toFixed(2)}</p>
              </div>
            </div>
            <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
          </li>
        ))}
        <li></li>
     </ul>
    </div>

  </div>;
};

export default ShoppingCart;
