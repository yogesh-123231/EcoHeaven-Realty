import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react"

const Testimonails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{
    duration: 1.4,
    ease: [0.25, 0.1, 0.25, 1]
  }}
  viewport={{ once: true, amount: 0.3 }}

      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Testimonails"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        What our customers say?
      </h1>
      <p className="text-center text-gray-500 mb-10 max-w-80 mx-auto">
        Real Stories from Those Who Found Home with Us
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="max-w-[340px] shadow-lg rounded px-8 py-12 text-center">
            <img className="w-20 h-20 rounded-full mx-auto mb-4" src={testimonial.image} alt={testimonial.alt} />
            <h2 className="text-xl text-gray-700 font-medium">{testimonial.name}</h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
                {Array.from({length: testimonial.rating},(item, index)=>(
                    <img key={index} src={assets.star_icon}/>
                ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonails;
