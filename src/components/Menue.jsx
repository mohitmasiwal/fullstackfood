import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';  
import { Link } from 'react-router-dom';

const Menue = ({ card }) => {

  const [currentpage,setcurrentpage] =useState(1);
   const itemperpage = 9;

   const totalpage =  Math.ceil(card.length/itemperpage);

const lastindex = currentpage* itemperpage;
const firstindex = lastindex-itemperpage;

const currentitem = card.slice(firstindex,lastindex)

const nextPage =()=>{
  if(currentpage < totalpage){  setcurrentpage( currentpage+1)}

}
const  prevPage =()=>{
  if(currentpage > 1){ setcurrentpage( currentpage-1)}
  setcurrentpage( currentpage-1)
}
const   tocart =(itm)=>{

  alert("added to cart")
  console.log(itm.name)
   
  
}


  return (
    <div className="bg-black min-h-screen">
      <h1 className="font-bold text-5xl text-gray-400 mb-4 mt-16 text-center font-serif ">
        Top Restaurants with Recipes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 md:p-4 w-[95%] mx-auto ">
        {currentitem.map((itm, i) => {
          return (
            <div key={i} className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
             
              <img
                className="w-full h-[40vh] md:h-[60vh] object-cover rounded-t-2xl hover:scale-95 transition-transform duration-300"
                src={itm.image}
                alt={itm.name}
              />
 
              <div className="p-4">
                <h3 className="text-3xl font-bold text-white">{itm.name}</h3>
                <h2 className="text-lg font-semibold text-white mt-2">
                  {itm.tags?.[0]} {itm.tags?.[1]} {itm.tags?.[2]}
                </h2>

           
                <div className="flex items-center my-2">
                  <FaStar className="text-yellow-500" />
                  <span className="ml-2 text-white">({itm.rating})</span>
                </div>
 
                <div className="text-lg font-semibold flex justify-between text-white mb-4">
                  <h1 className="animate-bounce">₹ {itm.reviewCount * 4}</h1>
                  <h1>Calories Per Serving: {itm.caloriesPerServing}</h1>
                </div>
 
                <div className="flex justify-between">
                  <Link to={`/detail/${itm.id}`}>
                    <button className="px-4 py-2 bg-slate-500 text-white rounded-md font-bold hover:bg-slate-900 transition-colors">
                      View Recipe
                    </button>
                  </Link>

                  <button onClick={tocart} className="px-4 py-2 bg-slate-500 text-white rounded-md font-bold hover:bg-slate-900 transition-colors">
                    Add to cart  
                  </button>
                </div>
              </div>
            
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mt-8 w-[95%] mx-auto">
        <button
          onClick={prevPage}
          disabled={currentpage === 1}
          className={`px-4 py-2 bg-slate-500 text-white rounded-md font-bold hover:bg-slate-900 transition-colors ${ currentpage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentpage===  totalpage}
          className={`px-4 py-2 bg-slate-500 text-white rounded-md font-bold hover:bg-slate-900 transition-colors ${ currentpage ===  totalpage ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Menue;
