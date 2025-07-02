import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const EcoBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative mt-10 mx-10 w-auto h-[260px] sm:h-[300px] md:h-[400px] lg:h-[450px] bg-cover bg-center rounded-3xl overflow-hidden flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${assets.banner})`,
      }}
    >
      <div className="bg-white text-center max-w-[95%] sm:max-w-xl w-full px-4 sm:px-6 py-6 sm:py-8 rounded-3xl shadow-md">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Ready to find your eco-friendly home?
        </h2>
        <p className="text-gray-600 mt-3 sm:mt-5 text-sm sm:text-base">
          We have homes in 20+ cities across the country to choose from!
        </p>
        <a href="#Projects">
          <button className="mt-4 sm:mt-5 bg-[#27563A] cursor-pointer hover:underline text-white text-sm px-5 py-2 rounded-full transition duration-300">
            Browse homes →
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default EcoBanner;
