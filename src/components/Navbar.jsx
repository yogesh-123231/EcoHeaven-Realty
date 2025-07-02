import { useState } from "react";
import { assets } from "../assets/assets";
import { FiMenu, FiX } from "react-icons/fi"; // Install if not done: npm i react-icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="absolute top-5 left-0 w-full z-10">
      <div className="container flex flex-wrap justify-between items-center mx-auto py-4 px-4 sm:px-6 md:px-20 lg:px-12 bg-transparent">
        {/* Logo */}
        <img src={assets.logo1} alt="Logo" className="w-28 sm:w-32 md:w-36" />

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-white">
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a></li>
          <li><a href="#About" className="cursor-pointer hover:text-gray-400">About</a></li>
          <li><a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a></li>
          <li><a href="#Testimonails" className="cursor-pointer hover:text-gray-400">Testimonial</a></li>
          <li><a href="#Contact" className="cursor-pointer hover:text-gray-400">Contact</a></li>
        </ul>

        {/* Right-side buttons (Login + Create Account) */}
        <div className="hidden md:flex flex-row gap-2 items-center">
          <button className="cursor-pointer hover:text-gray-400 rounded-full border border-[#E5E5E5] text-white px-6 py-2">
            Login
          </button>
          <button className="cursor-pointer hover:text-gray-400 rounded-full bg-[#27563A] text-white px-6 py-2">
            Create an account
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#27563A] text-white px-4 py-6 rounded-md mx-4 mt-2 space-y-4">
          <ul className="flex flex-col gap-4">
            <li><a href="#Header" className="hover:text-gray-300" onClick={toggleMenu}>Home</a></li>
            <li><a href="#About" className="hover:text-gray-300" onClick={toggleMenu}>About</a></li>
            <li><a href="#Projects" className="hover:text-gray-300" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#Testimonails" className="hover:text-gray-300" onClick={toggleMenu}>Testimonial</a></li>
            <li><a href="#Contact" className="hover:text-gray-300" onClick={toggleMenu}>Contact</a></li>
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <button className="hover:text-gray-300 border border-white rounded-full py-2">
              Login
            </button>
            <button className="hover:text-gray-300 bg-white text-[#27563A] rounded-full py-2">
              Create an account
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
