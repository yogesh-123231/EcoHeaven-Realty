import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion"; // ✅ Fixed import

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.4,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, amount: 0.1 }} // ✅ Lowered for mobile
      className="container mx-auto px-4 sm:px-6 lg:px-32 py-16 min-h-screen w-full overflow-hidden" // ✅ Ensure full visibility
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        What our customers say?
      </h1>
      <p className="text-center text-gray-500 mb-10 max-w-80 mx-auto">
        Real Stories from Those Who Found Home with Us
      </p>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[320px] sm:max-w-[340px] shadow-lg rounded px-6 py-10 text-center bg-white"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">{testimonial.name}</h2>
            <p className="text-gray-500 mb-2 text-sm">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-3">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <img key={i} src={assets.star_icon} alt="star" className="w-4 h-4" />
              ))}
            </div>
            <p className="text-gray-600 text-sm">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
