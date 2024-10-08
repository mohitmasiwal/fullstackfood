import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center bg-gray-900 p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Contact Us</h2>
          <p className="text-gray-300 text-center mb-6">
            We're here to help! Please fill out the form below and we will get back to you as soon as possible.
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-200 text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-200 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
