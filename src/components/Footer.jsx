import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
     
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-5 pb-8">
        
        <div>
          <h3 className="font-bold mb-4">Get to Know Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Careers</a></li>
            <li><a href="#" className="hover:text-gray-400">Press Releases</a></li>
            <li><a href="#" className="hover:text-gray-400">Amazon Cares</a></li>
          </ul>
        </div>
        
       
        <div>
          <h3 className="font-bold mb-4">Make Money with Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Sell on Amazon</a></li>
            <li><a href="#" className="hover:text-gray-400">Become an Affiliate</a></li>
            <li><a href="#" className="hover:text-gray-400">Advertise Your Products</a></li>
            <li><a href="#" className="hover:text-gray-400">Amazon Pay</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="font-bold mb-4">Payment</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400"> Pay with</a></li>
            <li><a href="#" className="hover:text-gray-400">Shop with Points</a></li>
            <li><a href="#" className="hover:text-gray-400">Reload Your Balance</a></li>
            <li><a href="#" className="hover:text-gray-400"> Currency Converter</a></li>
          </ul>
        </div>

   
        <div>
          <h3 className="font-bold mb-4">Let Us Help You</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Your Account</a></li>
            <li><a href="#" className="hover:text-gray-400">Returns Centre</a></li>
            <li><a href="#" className="hover:text-gray-400">100% Purchase Protection</a></li>
            <li><a href="#" className="hover:text-gray-400">Help</a></li>
          </ul>
        </div>
      </div>

     
      <div className="bg-gray-700 py-4">
        <div className="container mx-auto flex justify-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white"><FaFacebookF /></a>
          <a href="#" className="text-gray-300 hover:text-white"><FaTwitter /></a>
          <a href="#" className="text-gray-300 hover:text-white"><FaInstagram /></a>
          <a href="#" className="text-gray-300 hover:text-white"><FaLinkedin /></a>
          <a href="#" className="text-gray-300 hover:text-white"><FaYoutube /></a>
        </div>
      </div>

      
      <div className="text-center py-4 bg-gray-900 text-gray-400 text-sm">
        © 2024 Your Company - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
