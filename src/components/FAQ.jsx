import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What makes EcoHaven Realty different from other real estate agencies?",
    answer:
      "At EcoHaven Realty, we are committed to promoting sustainability in the real estate industry. We prioritize eco-friendly practices, such as green building techniques and energy-efficient systems, in all of our transactions.",
  },
  {
    question: "Do you only work with eco-friendly properties?",
    answer:
      "While we specialize in promoting and selling eco-friendly properties, we work with all types of properties. Our focus is on promoting sustainable practices and educating our clients on how they can make their properties more eco-friendly.",
  },
  {
    question: "Can you help me find an eco-friendly property?",
    answer:
      "Absolutely! We have a database of eco-friendly properties and can work with you to find a property that aligns with your sustainability goals.",
  },
  {
    question: "What is your process for ensuring a property is eco-friendly?",
    answer:
      "We work with builders and contractors who specialize in eco-friendly building practices. We also assess a property’s energy and water usage and sustainability features.",
  },
  {
    question: "Are eco-friendly properties more expensive?",
    answer:
      "Not necessarily. While some eco-friendly features may require an initial investment, they lead to long-term savings and often qualify for government incentives.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.1 }} // ✅ More reliable on mobile
      className="bg-white min-h-screen px-4 py-16 sm:px-6 lg:px-32"
      id="FAQ"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="space-y-6">
          <p className="text-sm font-semibold text-[#27563A] uppercase">
            Frequently Asked Questions
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Common questions about our eco-friendly homes
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Here are some important questions that are frequently asked and the answers.
          </p>
          <h2 className="text-lg font-bold text-black">Have a different question?</h2>
          <button className="mt-3 px-5 py-2 bg-[#27563A] text-white rounded-md hover:bg-green-800 transition duration-300">
            Contact Us →
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-2 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-2">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between w-full text-left py-4 text-base sm:text-lg font-medium text-gray-800"
              >
                {faq.question}
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>

              {/* Animated Answer */}
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600 pb-3 pr-4 text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
