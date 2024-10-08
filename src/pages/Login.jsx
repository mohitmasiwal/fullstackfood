import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center bg-gray-900 p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Login</h2>
          <p className="text-gray-300 text-center mb-6">
            Welcome back! Please enter your credentials to continue.
          </p>
          <form>
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
            <div className="mb-4">
              <label className="block text-gray-200 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 w-full"
            >
              Login
            </button>
            <p className="text-gray-300 text-center mt-4">
              Don't have an account? <Link to="/signup" className="text-blue-600">signup</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
