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

  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className=" flex flex-col h-screen bg-gray-50">
      <h1 className="p-4 bg-blue-600 w-full text-white font-bold text-xl flex justify-start items-center px-10">
        Shopping Cart
      </h1>

      <div className=" p-10 bg-white flex flex-row justify-between gap-4 ">
        <ul className="grid grid-cols-3 gap-4 h-screen bg-gray-100 p-4 w-2/3 rounded-lg shadow-lg">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col h-[300px] justify-between  bg-white shadow-lg rounded-lg p-4 mb-4"
            >
              <div className="flex flex-col items-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-auto mb-6"
                />
                <div>
                  <h2 className="text-md font-bold">{product.name}</h2>
                  <p className="text-gray-600">R{product.price.toFixed(2)}</p>
                </div>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>

        <div className="bg-gray-100 h-screen w-1/3 p-4 rounded-lg shadow-lg flex flex-col justify-between">
           <h1>List Items</h1>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
