import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { laptops } from "./Products-Data";
import { useStore } from "../context/StoreContext";
import { useState, useEffect } from "react";

const Laptops = () => {
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
      <h1 className="lg:text-5xl text-3xl font-semibold text-center mt-8">
        Laptops
      </h1>
      <div className="w-15 h-1 bg-green-500 ml-30 mt-0.5 lg:ml-145 mb-10 lg:w-25"></div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-15">
        {laptops.map((laptop) => (
          <div
            key={laptop.id}
            className="h-100 w-75 p-7 bg-gray-300 border rounded-3xl shadow-sm hover:shadow-md transition duration-300 relative"
          >
            <img
              src={`/l${laptop.id}.png`}
              alt={laptop.name}
              className="w-50 h-50 object-contain rounded-t-md ml-8 "
            />
            <div className="p-3">
              <h3 className="text-sm font-medium leading-tight">
                {laptop.name}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-green-600 font-semibold">
                  {laptop.rating}
                </span>
                <span className="text-gray-500 text-sm">{laptop.reviews}</span>
                <span className="ml-3">{"★".repeat(laptop.star)}</span>
              </div>
              <div className="flex items-center mt-2 space-x-4">
                <span className="text-lg font-bold">{laptop.price}</span>

                <span className="text-sm line-through text-gray-500">
                  {laptop.originalPrice}
                </span>
                <span className="text-green-600 text-sm font-medium">
                  {laptop.discount}
                </span>
              </div>
              <div className="flex gap-10 justify-center bg-green-600 w-35 rounded-3xl ml-8 mt-2 py-1">
                <button
                  className="text-white cursor-pointer hover:text-black"
                  onClick={() => {
                    addToWishlist(laptop);
                    handleClick();
                  }}
                >
                  <AiFillHeart size={30} />
                </button>

                <button
                  className="text-white cursor-pointer hover:text-black"
                  onClick={() => {
                    addToCart(laptop);
                    handleClick2();
                  }}
                >
                  <AiOutlineShoppingCart size={30} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Laptops;
