import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";


const faqs = [
  {
    question: "What makes EcoHaven Realty different from other real estate agencies?",
    answer:
      "At EcoHaven Realty, we are committed to promoting sustainability in the real estate industry. We prioritize eco-friendly practices, such as green building techniques and energy-efficient systems, in all of our transactions. We believe that promoting environmental responsibility is not only the right thing to do, but it also benefits our clients by providing long-term cost savings and a healthier living environment.",
  },
  {
    question: "Do you only work with eco-friendly properties?",
    answer:
      "While we specialize in promoting and selling eco-friendly properties, we work with all types of properties. Our focus is on promoting sustainable practices and educating our clients on how they can make their properties more eco-friendly.",
  },
  {
    question: "Can you help me find an eco-friendly property?",
    answer:
      "Absolutely! We have a database of eco-friendly properties and can work with you to find a property that aligns with your sustainability goals. Additionally, we can provide guidance on how to make any property more eco-friendly.",
  },
  {
    question: "What is your process for ensuring a property is eco-friendly?",
    answer:
      "We work with builders and contractors who specialize in eco-friendly building practices. We also conduct assessments of a property’s energy and water usage, as well as overall sustainability features, to ensure that it aligns with our eco-friendly standards.",
  },
  {
    question: "Are eco-friendly properties more expensive?",
    answer:
      "Not necessarily. While some eco-friendly features may require an initial investment, such as solar panels or energy-efficient systems, they can ultimately lead to long-term cost savings on utility bills. Additionally, there are often government incentives and tax breaks available for eco-friendly properties and features.",
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
          viewport={{ once: true, amount: 0.3 }}
    className="bg-white min-h-screen px-4 py-16 lg:px-32"
    id="FAQ">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="space-y-6">
          <p className="text-sm font-medium text-[#27563A] uppercase">Frequently Asked Questions</p>
          <h2 className="text-3xl font-bold text-black">Common questions asked about our eco-friendly homes.</h2>
          <p className="text-gray-600">
            Here are some important questions that are frequently asked and the answers to the questions.
          </p>
          <h2 className="text-xl font-bold text-black">Have a different question?</h2>
          <button className="mt-3 px-5 py-2 bg-[#27563A] text-white rounded-md cursor-pointer hover:bg-green-800 transition duration-300">
            Contact Us →
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-2 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between w-full text-left py-4 text-lg font-medium text-gray-800"
              >
                {faq.question}
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <p className="text-gray-600 pb-4 pr-6">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
