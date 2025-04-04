import React, { useState } from "react";
import { products } from "./products.jsx";
import { MdFavoriteBorder } from "react-icons/md";

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
      <nav className="p-4 bg-blue-600 w-full flex justify-between items-center px-10">
        <h1 className="text-white font-bold text-xl ">Shopping Cart</h1>
        <h1 className="text-white font-bold text-xl ">Shopping Cart</h1>
      </nav>

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
                <div className="flex flex-col items-center">
                  <h2 className="text-lg">{product.name}</h2>
                  <p className="text-gray-900  font-bold">
                    R{product.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center ">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out w-full"
                >
                  Add to Cart
                </button>
                <MdFavoriteBorder
                  size={30}
                  className="ml-4 hover:text-blue-500"
                  onClick={() => {
                    alert("Added to wishlist");
                  }}
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="bg-blue-500 h-screen w-1/3 p-4 rounded-lg shadow-lg flex flex-col ">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-gray-50">Cart Items</h1>
            <p className="text-gray-50 font-bold">
              Total: R{totalPrice.toFixed(2)}
            </p>
          </div>
          <hr className=" my-2 border-1 text-gray-50  " />

          <ul>
            {cart.map((product) => (
              <li
                key={product.id}
                className="flex justify-between items-center bg-white shadow-lg rounded-lg p-4 mb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[32px] h-auto"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-lg">{product.name}</h2>
                    <p className="text-gray-900 font-bold">
                      R{product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ease-in-out"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
