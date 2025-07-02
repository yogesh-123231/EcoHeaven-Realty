import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <section className="bg-[#f3f4f6] w-full px-4 sm:px-6 md:px-10 py-16 space-y-24" id="About">

        {/* Section 1 - WHO WE ARE */}
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2 space-y-4 md:pl-14">
            <p className="text-sm font-semibold underline text-[#27563A]">WHO WE ARE</p>
            <h2 className="text-3xl md:text-3xl font-bold max-w-lg">
              Discover Sustainable Luxury Living with EcoHaven Realty.
            </h2>
            <p className="text-gray-600 leading-7 max-w-xl text-sm">
              EcoHaven Realty is a real estate agency specialising in eco-friendly homes and sustainable living.
              We offer a range of eco-friendly properties, including energy-efficient homes, homes built with
              eco-friendly materials, and homes equipped with sustainable technologies such as solar panels.
            </p>
            <button className="inline-flex items-center bg-[#27563A] text-white px-6 py-2 rounded-full mt-2 hover:bg-[#1d3f2c] transition">
              Our Company
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="md:w-1/2">
            <img
              src={assets.first}
              alt="Eco home"
              className="rounded-xl w-full object-contain max-w-sm mx-auto"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col-reverse md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2">
            <img
              src={assets.second}
              alt="Our Team"
              className="rounded-xl w-full object-contain max-w-sm mx-auto"
            />
          </div>

          <div className="md:w-1/2 space-y-4 md:pl-14">
            <p className="text-sm font-semibold underline text-[#27563A]">OUR MISSION</p>
            <h2 className="text-3xl md:text-3xl font-bold max-w-lg">
              Building a Better Future with <br />
              Eco–Friendly Homes.
            </h2>
            <p className="text-gray-600 leading-7 max-w-xl text-sm">
              The agency’s mission is to provide clients with a selection of properties that meet high environmental standards,
              while also providing a comfortable and luxurious lifestyle.
            </p>
            <button className="inline-flex items-center bg-[#27563A] text-white px-6 py-2 rounded-full mt-2 hover:bg-[#1d3f2c] transition">
              Learn More
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
