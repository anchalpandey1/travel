import React from 'react';
import wl from '../../assets/images/wl.jpg';
import c from '../../assets/images/c.jpeg';
import sp from '../../assets/images/sp.jpg';
import ad from '../../assets/images/ad.jpg';
import na from '../../assets/images/na.jpg';
import pp from '../../assets/images/pp.webp';
import cl from '../../assets/images/cl.webp';

const Destination = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center mt-[3%]">Destination</h1>
      </div>

      {/* The main container */}
      <div className="flex flex-col md:flex-row justify-around mt-[3%] ">
        {/* Card 1 */}
        <div className="card relative w-full md:w-[30%] md:ml-10 mb-5 md:mb-0">
          <img src={sp} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xl font-bold">Spirituals</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gray-800 p-4 text-center md:p-2 sm:p-1">
            <button className="text-white">Read More</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card relative w-full md:w-[30%] md:ml-10 mb-5 md:mb-0">
          <img src={ad} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xl font-bold">Adventure</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gray-800 p-4 text-center md:p-2 sm:p-1">
            <button className="text-white">Read More</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card relative w-full md:w-[30%] md:ml-10 md:mr-10">
          <img src={pp} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xl font-bold">Popular Destination</p>
           </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gray-800 p-4 text-center md:p-2 sm:p-1">
            <button className="text-white">Read More</button>
          </div>
        </div>        
      </div>
      
      <div className="flex flex-col md:flex-row justify-around mt-[3%] ">
        {/* Card 1 */}
        <div className="card relative w-full md:w-[30%] md:ml-10 mb-5 md:mb-0">
          <img src={na} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xl font-bold">Nature</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gray-800 p-4 text-center md:p-2 sm:p-1">
            <button className="text-white">Read More</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card relative w-full md:w-[30%] md:ml-10 mb-5 md:mb-0">
          <img src={wl} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xl font-bold">Wild Life</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gray-800 p-4 text-center md:p-2 sm:p-1">
            <button className="text-white">Read More</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card relative w-full md:w-[30%] md:ml-10 md:mr-10">
          <img src={cl} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">            
          <p className="text-white text-xl font-bold">Cultural</p>         
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gray-800 p-4 text-center md:p-2 sm:p-1">
            <button className="text-white">Read More</button>
          </div>
        </div>        
      </div>
      


    </div>
  );
}

export default Destination;
