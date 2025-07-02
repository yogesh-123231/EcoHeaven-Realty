import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="footer bg-[#27563A] text-white mt-10"
    >
      <div className="px-4 sm:px-6 lg:px-20 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1: Logo + Social + Button */}
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <img src={assets.logo1} alt="Logo" className="w-24 sm:w-28" />
          </div>

          <div className="flex gap-3">
            <img className="w-6 h-6 cursor-pointer" src={assets.fb} alt="Facebook" />
            <img className="w-6 h-6 cursor-pointer" src={assets.linkdin} alt="LinkedIn" />
            <img className="w-6 h-6 cursor-pointer" src={assets.twitter} alt="Twitter" />
            <img className="w-6 h-6 cursor-pointer" src={assets.insta} alt="Instagram" />
          </div>

          <button
            className="px-5 py-2 bg-white text-[#27563A] rounded-full font-medium cursor-pointer hover:text-gray-600 transition text-sm sm:text-base"
            id="Contact"
          >
            Contact Us
          </button>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="font-semibold mb-4 text-base sm:text-md">Navigation</h3>
          <ul className="space-y-2 sm:space-y-3 text-sm text-gray-200">
            <li><a href="#Header" className="hover:underline">Home</a></li>
            <li><a href="#Contact" className="hover:underline">Contact Us</a></li>
            <li><a href="#Projects" className="hover:underline">Blog</a></li>
            <li><a href="#Projects" className="hover:underline">Properties</a></li>
            <li><a href="#Testimonails" className="hover:underline">Reviews</a></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="font-semibold mb-4 text-base sm:text-md">Company</h3>
          <ul className="space-y-2 sm:space-y-3 text-sm text-gray-200">
            <li><a href="#About" className="hover:underline">About us</a></li>
            <li><a href="#About" className="hover:underline">Our mission and vision</a></li>
            <li><a href="#About" className="hover:underline">Our team</a></li>
            <li><a href="#FAQ" className="hover:underline">FAQ's</a></li>
          </ul>
        </div>

        {/* Column 4: Support */}
        <div>
          <h3 className="font-semibold mb-4 text-base sm:text-md">Support</h3>
          <ul className="space-y-2 sm:space-y-3 text-sm text-gray-200">
            <li><a href="#Contact" className="hover:underline">Contact us</a></li>
            <li><a href="#Header" className="hover:underline">Login</a></li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-gray-500 mx-4 sm:mx-6 lg:mx-20" />
      <p className="text-xs text-center text-gray-300 py-4">
        Copyright © 2025. All rights reserved.
      </p>
    </motion.div>
  );
};

export default Footer;
