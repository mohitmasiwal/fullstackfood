import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-3xl">
          <h1 className="text-4xl font-bold text-center text-white mb-6">About Us</h1>
          <p className="text-gray-300 text-lg mb-4">
            We are a dedicated team passionate about providing the best services for our customers. Our mission is to deliver quality and excellence in everything we do.
          </p>
          <p className="text-gray-300 text-lg mb-6">
            With years of experience in the industry, we strive to innovate and improve our offerings continuously. Our team works collaboratively to ensure that we meet and exceed our clients' expectations.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Team Member 1 */}
            <div className="bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-white">Aanchal Chimwal</h3>
              <p className="text-gray-400">CEO & Founder</p>
              <p className="text-gray-300 mt-2">
                Aanchal is a visionary leader with over 10 years of experience in the industry. Her passion for excellence drives the team to achieve great results.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-white">Subham Negi</h3>
              <p className="text-gray-400">Lead Developer</p>
              <p className="text-gray-300 mt-2">
                Subham is an expert in web development and brings innovative solutions to the team. He is committed to delivering high-quality products.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-white">Gaurav Nainwal</h3>
              <p className="text-gray-400">Marketing Specialist</p>
              <p className="text-gray-300 mt-2">
                Gaurav's creativity and strategic thinking help promote our services effectively. He has a knack for connecting with our audience.
              </p>
            </div>
            {/* Team Member 4 */}
            <div className="bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-white">Mohit Masiwal</h3>
              <p className="text-gray-400">Customer Support</p>
              <p className="text-gray-300 mt-2">
                Mohit is dedicated to ensuring customer satisfaction. His friendly approach and problem-solving skills make him an invaluable part of the team.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
