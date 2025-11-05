import React from "react";
import { useStore } from "../context/StoreContext";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useStore();
  const total = cart.reduce(
    (sum, item) => sum + item.pricevalue * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">My Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-18 h-18 rounded"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-500 mt-3">{item.price}</p>

                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      onClick={() => decreaseQuantity(item)}
                      className="cursor-pointer w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded text-lg font-semibold"
                    >
                      −
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item)}
                      className="cursor-pointer w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded text-lg font-semibold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <p className="font-bold text-red-700 mt-22">
                {item.pricevalue * item.quantity}
              </p>
            </div>
          ))}

          <div className="text-right mt-6">
            <h3 className="text-xl font-semibold">Total: {total}</h3>
            <button className="mt-3 bg-purple-600 text-white px-5 py-2 rounded-md">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
