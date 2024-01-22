import React from 'react';
import bg from '../../assets/images/bg.webp';
import t from '../../assets/images/t.jpg';
import j from '../../assets/images/j.jpg';
import g from '../../assets/images/g.jpg';
import l from '../../assets/images/l.jpg';
import v from '../../assets/images/v.jpg';
import r from '../../assets/images/r.jpg';
import rk from '../../assets/images/rk.jpg';
import k from '../../assets/images/k.jpg';
import m from '../../assets/images/m.avif';




const Plan = () => {
  return (
    <div className="">
      <h2 className="flex flex-col justify-center mt-[5%] lg:flex-row lg:items-start lg:justify-center font-bold text-base md:text-2xl lg:text-4xl xl:text-5xl text-[#121212] md:text-[#2D2D2D] mb-10">
        Plan Your Trip
      </h2>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
          <div className='flex flex-col lg:flex-row'>

            {/* Left side (1/3 width on larger screens, full width on smaller screens) */}
            <div className='left w-full lg:w-1/3'>
              <div className="bg-black bg-opacity-50 m-[5%] h-4/4 border border-grey-400 rounded transition duration-800 hover:shadow-lg">
                <h2 className="flex flex-col justify-center mt-[5%] lg:flex-row lg:items-start lg:justify-center font-bold text-base md:text-2xl lg:text-4xl xl:text-5xl text-[#121212] md:text-[#ffffff] mb-10">
                  Plan Your Trip
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#bbbbbbb] text-bold m-4">
                  Discover the beauty of India and plan your unforgettable trip with us.
                </p>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-[#ffff] text-bold m-4">
                  Explore diverse cultures, historical landmarks, and breathtaking landscapes.
                  Travel and tourism is the largest service industry in India. It provides heritage, cultural, medical, business and sports tourism. The main objective of this sector is to develop and promote tourism, maintain competitiveness of India as a tourist destination, and improve and expand existing tourism products to ensure employment generation and economic growth.
                </p>
              </div>
            </div>

            {/* Right side (2/3 width on larger screens) */}
            <div className='right w-full lg:w-2/3 ml-[5%] mt-4 lg:mt-0'>
              <div className="flex space-x-4 mb-3 mt-2">
                <div className="bg-blue-300 bg-opacity-50   w-1/4 p-1 border border-white hover:bg-black hover:bg-opacity-50 transition duration-300">
                  <img src={t} alt="" />
                  <h1 className="text-center text-white font-bold">Taj Mahal, Agra, Uttar Pradesh</h1>
                  <p className="text-center text-white">Rs. 999</p>
                </div>
                <div className="bg-blue-300 bg-opacity-50 w-1/4 p-1 border border-white hover:bg-black hover:bg-opacity-50 transition duration-300">
                  <img src={j} alt="" />
                  <h1 className="text-center text-white font-bold">Jaipur, Rajasthan</h1>
                  <p className="text-center text-white">Rs. 999</p>
                </div>
                <div className="bg-blue-300 bg-opacity-50 w-1/4 p-1 border border-white hover:bg-black hover:bg-opacity-50 transition duration-300">
                  <img src={v} alt="" />
                  <h1 className="text-center text-white font-bold">Varanasi, Uttar Pradesh</h1>
                  <p className="text-center text-white">Rs. 999</p>
                </div>
                  </div>
                  <div className="flex space-x-4 mb-3">
                <div className="bg-blue-300 bg-opacity-50 w-1/4 p-1 border border-white hover:bg-black hover:bg-opacity-50 transition duration-300">
                  <img src={g} alt="" />
                  <h1 className="text-center text-white font-bold">Goa</h1>
                  <p className="text-center text-white">Rs. 999</p>
                </div>
                <div className="bg-blue-300 bg-opacity-50 w-1/4 p-1 border border-white hover:bg-black hover:bg-opacity-50 transition duration-300">
                  <img src={r} alt="" />
                  <h1 className="text-center text-white font-bold">Rishikesh and Haridwar, Uttarakhand</h1>
                  <p className="text-center text-white">Rs. 999</p>
                </div>
                <div className="bg-blue-300 bg-opacity-50 w-1/4 p-1 border border-white hover:bg-black hover:bg-opacity-50 transition duration-300">
                  <img src={l} alt="" />
                  <h1 className="text-center text-white font-bold">Leh-Ladakh, Jammu and Kashmir</h1>
                  <p className="text-center text-white">Rs. 999</p>
                </div> </div>
              <div className="flex space-x-4 mb-3">
                <div className="bg-blue-300 bg-opacity-50 w-1/4 p-1 border border-white hover:bg-black hover:bg-opacity-50 transition duration-300">
                  <img src={m} alt="" />
                  <h1 className="text-center text-white font-bold">Rann of Kutch, Gujarat</h1>
                  <p className="text-center text-white">Rs. 999</p>
                </div>
                <div className="bg-blue-300 bg-opacity-50 w-1/4 p-1 border border-white hover:bg-black hover:bg-opacity-50 transition duration-300">
                  <img src={rk} alt="" />
                  <h1 className="text-center text-white font-bold">Manali in Himachal Pradesh</h1>
                  <p className="text-center text-white">Rs. 999</p>
                </div>
                <div className="bg-blue-300 bg-opacity-50 w-1/4 p-1 border border-white hover:bg-black hover:bg-opacity-50 transition duration-300">
                  <img src={k} alt="" />
                  <h1 className="text-center text-white font-bold">Khajuraho, Madhya Pradesh</h1>
                  <p className="text-center text-white">Rs. 999</p>
                </div></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
