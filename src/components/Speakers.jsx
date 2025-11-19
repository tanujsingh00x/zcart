import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { speakers } from "./Products-Data";
import { useStore } from "../context/StoreContext";
import { useState, useEffect } from "react";

const Speakers = () => {
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
        <div className=" flex gap-3 fixed top-10 right-5 bg-pink-500 text-white px-3 py-1 rounded-full shadow-md animate-bounce z-50">
          <AiFillHeart size={30} /> Added to Wishlist!
        </div>
      )}

      {/* Popup for Cart */}
      {showPopup2 && (
        <div className="flex gap-3 fixed top-10 right-5 bg-green-500 text-white px-3 py-1 rounded-full shadow-md animate-bounce z-50">
          <AiOutlineShoppingCart size={30} />
          Added to Cart!
        </div>
      )}
      <h1 className="lg:text-5xl text-3xl font-semibold text-center mt-8">
        Speakers
      </h1>
      <div className="w-26 h-1 bg-green-500 ml-35 lg:ml-141 mb-10 lg:w-45"></div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-15">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="h-100 w-75 p-7 ml-5 md:ml-0 bg-gray-300 border rounded-3xl shadow-sm hover:shadow-md transition duration-300 relative"
          >
            <img
              src={`/s${speaker.id}.png`}
              alt={speaker.name}
              className="w-50 h-50 object-contain rounded-t-md ml-8"
            />
            <div className="p-3">
              <h3 className="text-sm font-medium leading-tight">
                {speaker.name}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-green-600 font-semibold">
                  {speaker.rating}
                </span>
                <span className="text-gray-500 text-sm">{speaker.reviews}</span>
                <span className="ml-3">{"★".repeat(speaker.star)}</span>
              </div>
              <div className="flex items-center mt-2 space-x-4">
                <span className="text-lg font-bold">{speaker.price}</span>

                <span className="text-sm line-through text-gray-500">
                  {speaker.originalPrice}
                </span>
                <span className="text-green-600 text-sm font-medium">
                  {speaker.discount}
                </span>
              </div>
              <div className="flex gap-10 justify-center bg-green-600 w-35 rounded-3xl ml-8 mt-2 py-1">
                <button
                  className="text-white cursor-pointer hover:text-black"
                  onClick={() => {
                    addToWishlist(speaker);
                    handleClick();
                  }}
                >
                  <AiFillHeart size={30} />
                </button>

                <button
                  className="text-white cursor-pointer hover:text-black"
                  onClick={() => {
                    addToCart(speaker);
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

export default Speakers;
