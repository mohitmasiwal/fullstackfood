import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaClock, FaUtensils } from 'react-icons/fa';  

const Detail = () => {
  const [dataid, setDataId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data for ID:', id);
        const result = await axios.get(`https://dummyjson.com/recipes/${id}`);
        console.log(result.data);
        setDataId(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200">
      <Navbar />
      {dataid ? (
        <div className="max-w-4xl mx-auto p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Image with responsive sizing */}
            <img
              src={dataid.image}
              alt={dataid.name}
              className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
            />
            <div className="w-full md:w-1/2">

              <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">{dataid.name}</h1>


              <div className="flex items-center mb-4">
                <FaStar className="text-yellow-500 text-2xl" />
                <span className="ml-2 text-white text-lg">({dataid.rating})</span>
              </div>


              <div className="flex items-center mb-4 text-lg">
                <FaClock className="text-red-500 text-xl" />
                <span className="ml-2 text-gray-300">
                  Cook Time: <span className="text-white font-semibold">{dataid.cookTimeMinutes} minutes</span>
                </span>
              </div>


              <div className="flex items-center mb-4 text-lg">
                <FaUtensils className="text-green-500 text-xl" />
                <span className="ml-2 text-gray-300">
                  Cuisine: <span className="text-white font-semibold">{dataid.cuisine}</span>
                </span>
              </div>
            </div>
          </div>


          <div className="my-6">
            <h5 className="text-2xl font-semibold text-white mb-2">Ingredients:</h5>
            <p className="text-gray-300 text-lg leading-relaxed">{dataid.ingredients}</p>
          </div>


          <div className="my-6">
            <h5 className="text-2xl font-semibold text-white mb-2">Instructions:</h5>
            <ol className="list-decimal list-inside">
              {dataid.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-300 text-lg leading-relaxed">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-white">Loading...</p>
      )}
    </div>
  );
};

export default Detail;
