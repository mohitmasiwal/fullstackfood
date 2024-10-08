import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { SiAnkermake, SiApollographql } from "react-icons/si";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { BiInfoCircle, BiLogIn } from "react-icons/bi";
import { MdOutlineDesignServices, MdPersonAddAlt1 } from "react-icons/md";
import { GiCookingPot } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 hover:bg-gray-900 z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-lg flex items-center gap-1">
          <SiApollographql className="text-3xl" />
          <SiAnkermake className="text-2xl" />
        </div>
        <div className="flex items-center">
        <GiCookingPot className="text-yellow-500 text-3xl mr-2" />
        <h1 className="text-white text-2xl font-bold">Tasty Recipe </h1>
      </div>

        {/* Links - Hidden on mobile, flex on desktop */}
        <div className="hidden md:flex space-x-14">
          <Link to="/" className="text-gray-300 text-xl hover:text-white flex items-center gap-2">
            <AiFillHome className="text-xl" /> Home
          </Link>
          <Link to="/about" className="text-gray-300 text-xl hover:text-white flex items-center gap-2">
            <BiInfoCircle className="text-xl" /> About
          </Link>
          <Link to="/services" className="text-gray-300 text-xl hover:text-white flex items-center gap-2">
            <MdOutlineDesignServices className="text-xl" /> Services
          </Link>
          <Link to="/contact" className="text-gray-300 text-xl hover:text-white flex items-center gap-2">
            <AiFillPhone className="text-xl" /> Contact
          </Link>
           
          <Link to="/signup" className="text-gray-300 text-xl hover:text-white flex items-center gap-2">
            <MdPersonAddAlt1 className="text-xl" /> Signup
          </Link>
          <Link to="/cart" className="text-gray-300 text-xl hover:text-white flex items-center gap-2">
            <  FaShoppingCart className="text-xl" /><sup className="rounded-full "><button className="h-3 w-3  text-white   ">0</button></sup>
          </Link>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="relative hidden md:flex">
          <input
            type="text"
            className="bg-gray-700 text-white rounded-full pl-4 pr-10 py-2 focus:outline-none focus:bg-gray-600"
            placeholder="Search..."
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
            🔍
          </button>
        </div>

        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white">☰</button> 
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex flex-col">
        <Link to="/" className="px-4 py-2 text-gray-300 hover:text-white flex items-center gap-1">
          <AiFillHome className="text-xl" /> Home
        </Link>
        <Link to="/about" className="px-4 py-2 text-gray-300 hover:text-white flex items-center gap-1">
          <BiInfoCircle className="text-xl" /> About
        </Link>
        <Link to="/services" className="px-4 py-2 text-gray-300 hover:text-white flex items-center gap-1">
          <MdOutlineDesignServices className="text-xl" /> Services
        </Link>
        <Link to="/contact" className="px-4 py-2 text-gray-300 hover:text-white flex items-center gap-1">
          <AiFillPhone className="text-xl" /> Contact
        </Link>
        <Link to="/login" className="px-4 py-2 text-gray-300 hover:text-white flex items-center gap-1">
          <BiLogIn className="text-xl" /> Login
        </Link>
        <Link to="/signup" className="px-4 py-2 text-gray-300 hover:text-white flex items-center gap-1">
          <MdPersonAddAlt1 className="text-xl" /> Signup
        </Link>
        <Link to="/cart" className="px-4 py-2 text-gray-300 hover:text-white flex items-center gap-1">
          <  FaShoppingCart className="text-xl" /> Cart
        </Link>
        

        {/* Mobile Search Bar */}
        <div className="px-4 py-2">
          <input
            type="text"
            className="bg-gray-700 text-white rounded-full pl-4 pr-10 py-2 w-full focus:outline-none focus:bg-gray-600"
            placeholder="Search..."
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
