import React from 'react';
import res from '../../assets/images/res.jpg';

const Room = () => {

     // Define the handleButtonClick function
  const handleButtonClick = () => {
    // Implement the logic to open the desired page
    console.log('Button clicked! Open the page logic goes here.');
  };



  return (
    <div>
      <p className="flex flex-col justify-center mt-[5%] lg:flex-row lg:items-start lg:justify-center  text-base  text-[#121212] md:text-[#2D2D2D]">
        THE PLEASURE OF LUXURY
      </p>
      <h2 className="flex flex-col justify-center mt-[2%] lg:flex-row lg:items-start lg:justify-center font-bold text-base md:text-2xl lg:text-4xl xl:text-5xl text-[#121212] md:text-[#2D2D2D] mb-10">
        ROOMS & SUITES
      </h2>
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${res})` }}>
          {/* Flex container for small divs */}
          <div className="flex items-center justify-center mt-5">
            {/* First small div */}
            <div className="flex items-center justify-center text-white mx-2 w-full md:w-1/5 bg-black bg-opacity-50 hover:bg-gray-500 transition-all duration-300">
                <div className="text-center">
                <div className="flex items-center justify-center">
                  <img src={res} alt="Icon" className="w-10 h-10 mt-2" />
                </div>
                  <h3>Agra</h3>
                 <p>Discover a haven of comfort and luxury. Your journey to relaxation begins here.</p>
                 <ul className='mt-1'>
                    <li>
                    1. The Oberoi Amarvilas, Agra
                   </li>
                    <li>
                    2. Taj Hotel & Convention Centre, Agra
                    </li>
                  </ul>
                <a href="/" className="text-white">
              Read More
            </a>
        
                </div>
            </div>

            {/* Second small div */}
            <div className="flex items-center justify-center text-white mx-2 w-full md:w-1/5 bg-black bg-opacity-50 hover:bg-gray-500 transition-all duration-300">
                <div className="text-center">
                <div className="flex items-center justify-center">
                  <img src={res} alt="Icon" className="w-10 h-10 mt-2" />
                </div>
                  <h3>Jaipur, Rajasthan</h3>
                  <p>Discover a haven of comfort and luxury. Your journey to relaxation begins here.</p>
                  <ul className='mt-1'>
                    <li>
                    1. The Raj Palace
                  </li>
                    <li>
                    2.  The Lalit Jaipur
                    </li>
                  </ul>
                <a href="/" className="text-white">
              Read More
            </a>
                </div>
            </div>
            {/* Third small div */}
            <div className="flex items-center justify-center text-white mx-2 w-full md:w-1/5 bg-black bg-opacity-50 hover:bg-gray-500 transition-all duration-300">
                <div className="text-center">
                <div className="flex items-center justify-center">
                  <img src={res} alt="Icon" className="w-10 h-10 mt-2" />
                </div>
                  <h3>Varanasi, Uttar Pradesh</h3>
                  <p>Discover a haven of comfort and luxury. Your journey to relaxation begins here.</p>
                  <ul className='mt-1'>
                    <li>Taj Nadesar Palace
                  
                  </li>
                    <li>
                    2.  Hotel Ganges View
                    </li>
                  </ul>
                <a href="/" className="text-white">
              Read More
            </a>
                </div>
            </div>
            {/* Fourth small div */}
            <div className="hidden md:flex items-center justify-center text-white mx-2 w-1/5 bg-black bg-opacity-50 hover:bg-gray-500 transition-all duration-300">
                <div className="text-center">
                <div className="flex items-center justify-center">
                  <img src={res} alt="Icon" className="w-10 h-10 mt-2" />
                </div>
                  <h3>Goa</h3>
                  <p>Discover a haven of comfort and luxury. Your journey to relaxation begins here.</p>
                  <ul className='mt-1'>
                    <li>
                    1. The Leela Goa
                   </li>
                    <li>
                    2. W Goa
                    </li>
                  </ul>
                 
                <a href="/" className="text-white">
              Read More
            </a>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-5">
            {/* First small div */}
            <div className="flex items-center justify-center text-white mx-2 w-full md:w-1/5 bg-black bg-opacity-50 hover:bg-gray-500 transition-all duration-300">
                <div className="text-center">
                <div className="flex items-center justify-center">
                  <img src={res} alt="Icon" className="w-10 h-10 mt-2" />
                </div>
                  <h3>Rishikesh and Haridwar, Uttarakhand</h3>
                  <p>Discover a haven of comfort and luxury. Your journey to relaxation begins here.</p>
                  <ul className='mt-1'>
                    <li>
                    1. The Taj Rishikesh Resort & Spa
                  </li>
                    <li>
                    2. Radisson Blu Hotel Haridwar
                    </li>
                  </ul>
                <a href="/" className="text-white">
              Read More
            </a>
                </div>
            </div>
            {/* Second small div */}
            <div className="flex items-center justify-center text-white mx-2 w-full md:w-1/5 bg-black bg-opacity-50 hover:bg-gray-500 transition-all duration-300">
                <div className="text-center">
                <div className="flex items-center justify-center">
                  <img src={res} alt="Icon" className="w-10 h-10 mt-2" />
                </div>
                  <h3>Rann of Kutch, Gujarat</h3>
                  <p>Discover a haven of comfort and luxury. Your journey to relaxation begins here.</p>
                  <ul className='mt-1'>
                    <li>
                    1. Gateway to Rann Resort, Dhordo
                   </li>
                    <li>
                    2.  Rann Riders, Dasada
                    </li>
                  </ul>
                <a href="/" className="text-white">
              Read More
            </a>
                </div>
            </div>
            {/* Third small div */}
            <div className="flex items-center justify-center text-white mx-2 w-full md:w-1/5 bg-black bg-opacity-50 hover:bg-gray-500 transition-all duration-300">
                <div className="text-center">
                <div className="flex items-center justify-center">
                  <img src={res} alt="Icon" className="w-10 h-10 mt-2" />
                </div>
                  <h3>Manali in Himachal Pradesh</h3>
                  <p>Discover a haven of comfort and luxury. Your journey to relaxation begins here.</p>
                  <ul className='mt-1'>
                    <li>
                    1. The Himalayan
                  </li>
                    <li>
                    2. The Manali Inn
                    </li>
                  </ul>
                <a href="/" className="text-white">
              Read More
            </a>
                </div>
            </div>
            {/* Fourth small div */}
            <div className="hidden md:flex items-center justify-center text-white mx-2 w-1/5 bg-black bg-opacity-50 hover:bg-gray-500 transition-all duration-300">
                <div className="text-center">
                <div className="flex items-center justify-center">
                  <img src={res} alt="Icon" className="w-10 h-10 mt-2" />
                </div>
                  <h3>Khajuraho, Madhya Pradesh</h3>
                  <p>Discover a haven of comfort and luxury. Your journey to relaxation begins here.</p>
                  <ul className='mt-1'>
                    <li>
                    1. The Lalit Temple View Khajuraho
                  </li>
                    <li>
                    2. Hotel Chandela
                    </li>
                  </ul>
                <a href="/" className="text-white">
              Read More
            </a>
                </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Room;
