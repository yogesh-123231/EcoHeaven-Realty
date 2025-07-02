import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; // fixed incorrect import

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "bbc7414c-2194-4b75-ab06-f3d5010c7eef");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
      id="Contact"
      className="text-center bg-[#f3f4f6] px-4 sm:px-6 md:px-16 lg:px-32 pt-20 pb-10 w-full overflow-visible"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-3 text-center">
        Contact With Us
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-xs sm:max-w-md md:max-w-lg mx-auto">
        Ready to Make a Move? Let’s Build Your Future Together
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-6 px-2 sm:px-4"
      >
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="w-full md:w-1/2 text-left mb-4 md:mb-0">
            <label className="block mb-2">Your Name</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-3"
              type="text"
              name="Name"
              placeholder="Enter Your Name"
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left">
            <label className="block mb-2">Your Email</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-3"
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              required
            />
          </div>
        </div>

        <div className="my-6 text-left">
          <label className="block mb-2">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#27563A] text-white  py-2 px-8 mb-15 sm:px-10 lg:px-12 rounded mx-auto block cursor-pointer hover:underline"
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
