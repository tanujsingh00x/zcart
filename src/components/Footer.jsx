import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-white text-gray-700 mt-15" id="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-10 mb-3">
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              Gen<span className="text-gray-800">c@rt.</span>
            </h2>
            <p className="text-md leading-relaxed text-gray-600 mb-6 w-72">
              Welcome to genc@rt, your ultimate destination for the latest and
              smartest gadgets. we bring you the best in innovation — all in one
              place.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="/"
                className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-100 text-gray-500 hover:text-green-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="/"
                className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-100 text-gray-500 hover:text-green-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="/"
                className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-100 text-gray-500 hover:text-green-600 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="/"
                className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-100 text-gray-500 hover:text-green-600 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="lg:ml-60">
            <h3 className="font-semibold text-green-500 mb-4">PRODUCTS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  onClick={() => navigate("/headphones")}
                  className="hover:text-green-600 transition"
                >
                  Earphones
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/watches")}
                  className="hover:text-green-600 transition"
                >
                  Watches
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/consoles")}
                  className="hover:text-green-600 transition"
                >
                  Consoles
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/laptops")}
                  className="hover:text-green-600 transition"
                >
                  Laptops
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/speakers")}
                  className="hover:text-green-600 transition"
                >
                  Speakers
                </a>
              </li>
            </ul>
          </div>

          {/* Website */}
          <div className="lg:ml-35">
            <h3 className="font-semibold text-green-500 mb-4">WEBSITE?</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Become Plus Member
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Create Your Store
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Become Seller
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:ml-10">
            <h3 className="font-semibold text-green-500 mb-4">CONTACT</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center space-x-3">
                <HiOutlinePhone className="text-green-600 text-lg" />
                <span>+1-212-456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <HiOutlineMail className="text-green-600 text-lg" />
                <span>contact@example.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <HiOutlineLocationMarker className="text-green-600 text-lg" />
                <span>794 Francisco, 94102</span>
              </li>
            </ul>
            <div className="mt-8 font-semibold">
              {" "}
              Copyright 2025 © genc@rt All Right Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
