import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Smooth scroll helper
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      {/* Logo */}
      <div
        className="cursor-pointer text-3xl font-bold"
        onClick={() => navigate("/")}
      >
        <span className="text-green-600">Gen</span>
        <span className="text-gray-800">c@rt</span>
        <span className="text-green-600">.</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex space-x-10 text-lg font-medium text-gray-700">
        <span
          onClick={() => handleScroll("home")}
          className="hover:text-green-600 cursor-pointer"
        >
          Home
        </span>
        <span
          onClick={() => handleScroll("category")}
          className="hover:text-green-600 cursor-pointer"
        >
          Category
        </span>
        <span
          onClick={() => handleScroll("services")}
          className="hover:text-green-600 cursor-pointer"
        >
          Services
        </span>
        <span
          onClick={() => handleScroll("footer")}
          className="hover:text-green-600 cursor-pointer"
        >
          Contact Us
        </span>
        <span
          onClick={() => navigate("/wishlist")}
          className="text-black cursor-pointer"
        >
          <FaHeart size={30} />
        </span>
      </div>

      <div className="flex items gap-5">
        <div className="hidden lg:block relative">
          <input
            type="text"
            placeholder="Search products"
            className="pl-10 pr-4 py-2 rounded-full bg-gray-200 text-sm focus:outline-none w-70"
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
        </div>

        <div className="hidden lg:flex relative items-center text-sm text-gray-800">
          <ShoppingCartIcon
            className="h-6 w-6 cursor-pointer"
            onClick={() => navigate("/cart")}
          />
          <span
            className="ml-1 cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            Cart
          </span>
        </div>

        <button
          className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full ml-6 lg:ml-0"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>

      {/* Hamburger Menu (Mobile Only) */}
      <button
        className="text-black md:hidden text-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="absolute left-0 top-16 z-50 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 px-6 py-4"
          id="menu"
        >
          <span
            onClick={() => {
              handleScroll("home");
              setIsMobileMenuOpen(false);
            }}
            className="text-green-700 font-medium cursor-pointer"
          >
            Home
          </span>

          <span
            onClick={() => {
              handleScroll("category");
              setIsMobileMenuOpen(false);
            }}
            className="text-green-700 font-medium cursor-pointer"
          >
            Category
          </span>

          <span
            onClick={() => {
              handleScroll("services");
              setIsMobileMenuOpen(false);
            }}
            className="text-green-700 font-medium cursor-pointer"
          >
            Services
          </span>

          <span
            onClick={() => {
              handleScroll("footer");
              setIsMobileMenuOpen(false);
            }}
            className="text-green-700 font-medium cursor-pointer"
          >
            Contact Us
          </span>

          <div className="relative w-full max-w-xs flex gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded-full bg-gray-300 text-sm focus:outline-none"
            />
            <button className="w-10 text-black bg-gray-400 p-2 rounded-full">
              <MagnifyingGlassIcon />
            </button>
          </div>

          <div className="text-sm text-gray-800 flex gap-7">
            <div
              onClick={() => {
                navigate("/cart");
                setIsMobileMenuOpen(false);
              }}
              className="cursor-pointer flex items-center"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="ml-1 font-semibold">Cart</span>
            </div>

            <div
              onClick={() => {
                navigate("/wishlist");
                setIsMobileMenuOpen(false);
              }}
              className="text-2xl cursor-pointer"
            >
              <FaHeart />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
