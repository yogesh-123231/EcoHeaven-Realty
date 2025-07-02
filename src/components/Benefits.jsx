import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[#f3f4f6] py-12 px-4 sm:px-6 lg:px-20 h-full text-center"
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#08110C] mb-2">
        Benefits of owning an eco–friendly <br /> home.
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-10">
        High-quality homes with low-carbon impact.
      </p>

      {/* Cards Grid */}
      <div className="grid gap-6 mt-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white shadow-sm overflow-hidden flex flex-col h-full">
          <div className="p-6 text-left flex-1">
            <h3 className="text-base font-semibold mt-5 mb-4 text-[#08110C]">
              Low energy costs
            </h3>
            <p className="text-sm text-gray-600">
              One of the most significant benefits of owning an Eco Haven Realty
              Home is lower energy costs. Our eco-friendly homes are designed to
              use less energy with our solar powered system, saving money on
              bills.
            </p>
          </div>
          <img
            src={assets.benefit1}
            alt="Low energy"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-sm overflow-hidden flex flex-col h-full">
          <div className="p-6 text-left flex-1">
            <h3 className="text-base font-semibold mt-5 mb-4 text-[#08110C] ">
              Smaller carbon footprint
            </h3>
            <p className="text-sm text-gray-600">
              Our eco-friendly homes also have a smaller carbon footprint. They
              constantly use renewable energy sources and produce less waste
              which means they have a lower impact on the environment.
            </p>
          </div>
          <img
            src={assets.benefit2}
            alt="Carbon footprint"
            className="h-55 w-full object-cover"
          />
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-sm overflow-hidden flex flex-col h-full">
          <div className="p-6 text-left flex-1">
            <h3 className="text-base font-semibold mt-5 mb-4 text-[#08110C]">
              Indoor
            </h3>
            <p className="text-sm text-gray-600">
              Our hybrid ventilation strategy includes both natural and
              mechanical ventilation, while our airtight wooden structure
              reduces risk of mold development, ensuring a healthy home.
            </p>
          </div>
          <img
            src={assets.benefit3}
            alt="Indoor"
            className="h-55 w-full object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Benefits;
