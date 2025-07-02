import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div
      id="Header"
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start pt-32 sm:pt-40 md:pt-48 px-4 sm:px-6 md:px-20 lg:px-32 overflow-hidden"
      style={{ backgroundImage: `url(${assets.headerBg})` }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-white w-full max-w-4xl"
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[62px] font-bold pb-4 sm:pb-6 leading-tight">
          Live Green, Live Luxuriously.
        </h2>

        <p className="text-sm sm:text-base md:text-lg font-medium text-white max-w-2xl mx-auto px-2 sm:px-0">
          Discover the Advantages of Eco-Friendly Homes with Our Real Estate
          Agency.
        </p>

        {/* Buttons */}
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 mt-8 sm:mt-12 mb-15 sm:mb-10 text-xs sm:text-sm">
          <a
            href="#Projects"
            className="border border-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-white text-center hover:bg-white hover:text-[#27563A] transition duration-300"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="bg-[#27563A] px-3 sm:px-4 py-1.5 sm:py-2 rounded text-white text-center hover:bg-white hover:text-[#27563A] transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
