import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-3xl">
          <h1 className="text-4xl font-bold text-center text-white mb-6">Our Services</h1>
          <p className="text-gray-300 text-lg mb-4 text-center">
            We offer a range of services to meet your needs. Our dedicated team ensures quality and excellence in every project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service 1 */}
            <div className="bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-white">Web Development</h3>
              <p className="text-gray-400 mt-2">
                Our team specializes in creating dynamic and responsive websites tailored to your needs.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-white">Mobile App Development</h3>
              <p className="text-gray-400 mt-2">
                We design and develop user-friendly mobile applications for both iOS and Android platforms.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-white">Digital Marketing</h3>
              <p className="text-gray-400 mt-2">
                Our digital marketing strategies help you reach a broader audience and grow your brand online.
              </p>
            </div>
            {/* Service 4 */}
            <div className="bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-white">UI/UX Design</h3>
              <p className="text-gray-400 mt-2">
                We create intuitive and engaging user experiences that enhance customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
