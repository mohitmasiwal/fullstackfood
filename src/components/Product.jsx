import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import Menue from './Menue';
 
 

const Product = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://dummyjson.com/recipes'); 
               
                console.log(result.data);  
                if (result.data.recipes) {
                    setData(result.data.recipes);
                } else {
                    console.error("Recipes data not found");
                }
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    

    const nxt = () => {
        if (value < (data.length - 1) * 100) {
            setValue(value + 40); 
        }
    };

    const pre = () => {
        if (value > 0) {
            setValue(value - 40);  
        }
    };

    return (
        <div className=" bg-black">
        <div className="shadow-2xl">
            <div className="w-[90%] flex justify-between mx-auto pt-3">
                <div onClick={pre} className="bg-gray-200 rounded-full h-12 w-12 flex justify-center items-center cursor-pointer mt-3">
                    <FaArrowLeft />
                </div>
                <h1 className=" font-bold text-5xl text-gray-400 mb-4 mt-7 text-center  ">Top rated food items</h1>
                <div onClick={nxt} className="bg-gray-200 rounded-full h-12 w-12 flex justify-center items-center cursor-pointer mt-3">
                    <FaArrowRight />
                </div>
            </div>
            <div className=" flex rounded-lg gap-4 overflow-hidden mx-auto w-[94%]">
  <div 
    style={{ transform: `translateX(-${value}%)` }}  
    className="flex transition-all duration-300 ease-in-out gap-7 bg-gray-900  pt-8"
  >
    {data.map((product, index) => {
      return (
        <div key={index} className="flex flex-col items-center pb-5 w-[300px]">  
        
          <img className="rounded-full h-[250px] w-[250px] hover:scale-95" src={product.image} alt={product.title} /> 
          <h1 className="  mt-4  font-bold text-2xl  text-gray-400 mb-8 text-center hover:text-gray-700 ">{product.name}</h1>  

        </div>
      );
    })}
  </div>
</div>


           
        </div>
        <div className="">
            <Menue card={data}/>
        </div>
        </div>
    
    );
}

export default Product;
