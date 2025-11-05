import React from "react";
import { FaPaperPlane, FaHeadset } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";

const Specifications = () => {
  return (
    <section className="py-16 bg-white mt-20" id="services">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Our Specifications
        </h2>
        <div className="w-52 h-0.5 bg-purple-500 ml-10 lg:ml-114 mb-7"></div>
        <p className="text-gray-500 mb-12">
          We offer top-tier service and convenience to ensure your shopping
          experience is smooth, secure and completely hassle-free.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-25">
          <div className="bg-green-200 border border-green-100 rounded-lg p-10 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-500 p-3 rounded-md text-white text-xl">
              <FaPaperPlane />
            </div>
            <h3 className="text-lg font-semibold mt-6 mb-2">Free Shipping</h3>
            <p className="text-gray-600 text-sm">
              Enjoy fast, free delivery on every order no conditions, just
              reliable doorstep.
            </p>
          </div>

          <div className="bg-orange-200 border border-orange-100 rounded-lg p-8 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 p-3 rounded-md text-white text-xl">
              <LuClock3 />
            </div>
            <h3 className="text-lg font-semibold mt-6 mb-2">
              7 Days easy Return
            </h3>
            <p className="text-gray-600 text-sm">
              Change your mind? No worries. Return any item within 7 days.
            </p>
          </div>

          <div className="bg-purple-200 border border-purple-100 rounded-lg p-8 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-500 p-3 rounded-md text-white text-xl">
              <FaHeadset />
            </div>
            <h3 className="text-lg font-semibold mt-6 mb-2">
              24/7 Customer Support
            </h3>
            <p className="text-gray-600 text-sm">
              We're here for you. Get expert help with our customer support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
