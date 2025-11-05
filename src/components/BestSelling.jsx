import React from "react";
import { FaStar, FaRegStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useStore } from "../context/StoreContext";
import { useState, useEffect } from "react";

const BestSelling = () => {
  const { addToWishlist, addToCart } = useStore();
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClick2 = () => {
    setShowPopup2(true);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  useEffect(() => {
    if (showPopup2) {
      const timer = setTimeout(() => {
        setShowPopup2(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showPopup2]);

  const products = [
    {
      id: 1,
      name: "Lenovo Yoga Laptop",
      price: "₹45000",
      pricevalue: 45000,
      rating: 4,
      img: "/l3.png",
    },
    {
      id: 2,
      name: "Smartwatch with AMOLED Display",
      price: "₹1599",
      pricevalue: 1599,
      rating: 5,
      img: "/w4.png",
    },
    {
      id: 3,
      name: "Mustang Edition Earphones",
      price: "₹1299",
      pricevalue: 1299,
      rating: 5,
      img: "/b12.png",
    },
    {
      id: 4,
      name: "PlayStation 5 with Ultra-Fast SSD",
      price: "₹150000",
      pricevalue: 150000,
      rating: 4,
      img: "/c2.png",
    },
    {
      id: 5,
      name: "Home Speaker with HDR Audio",
      price: "₹52000",
      pricevalue: 52000,
      rating: 4,
      img: "/s10.png",
    },
    {
      id: 6,
      name: "Sport Wireless Earbuds, Sweatproof",
      price: "₹2000",
      pricevalue: 2000,
      rating: 4,
      img: "/b27.png",
    },
  ];

  return (
    <>
      {/* Popup for Wishlist */}
      {showPopup && (
        <div className="fixed top-10 right-5 bg-pink-500 text-white px-5 py-2 rounded-full shadow-md animate-bounce z-50">
          💖 Added to Wishlist!
        </div>
      )}

      {/* Popup for Cart */}
      {showPopup2 && (
        <div className="fixed top-10 right-5 bg-green-500 text-white px-5 py-2 rounded-full shadow-md animate-bounce z-50">
          🛒 Added to Cart!
        </div>
      )}
      <section className="py-16 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Best Selling
          </h2>
          <div className="w-26 h-0.5 bg-green-500 ml-20 lg:ml-135 lg:w-30 mb-6"></div>
          <div className="flex justify-center items-center gap-2 mb-12 text-gray-500 text-sm">
            <p>Showing 6 of All products</p>
            <a
              href="#"
              className="text-green-600 font-medium hover:underline flex items-center gap-1"
            >
              View more <span className="text-lg">→</span>
            </a>
          </div>

          {/* Product Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-200"
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-gray-800 font-medium text-sm">
                    {product.name}
                  </h3>
                  <p className="text-gray-800 font-semibold mt-10">
                    {product.price}
                  </p>
                </div>

                <div className="flex items-center space-x-1 text-green-500 text-sm">
                  {[...Array(5)].map((_, i) =>
                    i < product.rating ? (
                      <FaStar key={i} />
                    ) : (
                      <FaRegStar key={i} className="text-gray-300" />
                    )
                  )}
                </div>
                <div className="flex gap-10 justify-end">
                  <button
                    className="cursor-pointer text-4xl"
                    onClick={() => {
                      addToWishlist(product);
                      handleClick();
                    }}
                  >
                    <FaHeart />
                  </button>
                  <button
                    className="cursor-pointer text-2xl"
                    onClick={() => {
                      addToCart(product);
                      handleClick2();
                    }}
                  >
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSelling;
