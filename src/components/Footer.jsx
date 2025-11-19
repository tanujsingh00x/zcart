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

export default function Footer() {
  return (
    <footer className="mt-16 gap-35 md:flex" id="footer">
      <div className="p-6">
        <h2 className="text-3xl font-bold">
          <span className="text-green-600">Genc</span>
          <span className="text-black">@rt.</span>
        </h2>

        <p className="text-gray-600 mt-4 w-85">
          Welcome to genc@rt, your ultimate destination for the latest and
          smartest gadgets. We bring you the best in innovation — all in one
          place.
        </p>

        <div className="flex gap-4 mt-6">
          {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
            (Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full hover:bg-green-600 hover:text-white transition"
              >
                <Icon className="text-gray-700 text-lg" />
              </div>
            )
          )}
        </div>
      </div>
      <div className="gap-15 md:flex">
        <div className="flex gap-20 p-5">
          <div>
            {" "}
            <h3 className="text-green-600 font-semibold mb-4 underline">
              PRODUCTS
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Earphones</li>
              <li>Watches</li>
              <li>Consoles</li>
              <li>Laptops</li>
              <li>Speakers</li>
            </ul>
          </div>
          <div>
            {" "}
            <h3 className="text-green-600 font-semibold mb-4 underline">
              WEBSITE
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Home</li>
              <li>Privacy Policy</li>
              <li>Become Plus Member</li>
              <li>Create Your Store</li>
            </ul>
          </div>
        </div>
        <div className="p-5">
          {" "}
          <h3 className="text-green-600 font-semibold mb-4 underline">
            CONTACT
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <HiOutlinePhone className="text-green-600 text-xl" />
              +1-212-456-7890
            </li>
            <li className="flex items-center gap-3">
              <HiOutlineMail className="text-green-600 text-xl" />
              contact@example.com
            </li>
            <li className="flex items-center gap-3">
              <HiOutlineLocationMarker className="text-green-600 text-xl" />
              794 Francisco, 94102
            </li>
          </ul>
          <div className="mt-8 text-center text-gray-900 text-lg font-semibold">
            Copyright 2025 © genc@rt — All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
