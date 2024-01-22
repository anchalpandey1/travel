import React, { useRef, useState } from 'react';
import b from '../../assets/images/b.mp4';
import f from '../../assets/images/f.jpg'; 

const Month = () => {
  const videoRef = useRef(null);
  const [clickedMonth, setClickedMonth] = useState(null);

  const startVideoPlayback = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const handleButtonClick = (month) => {
    setClickedMonth(month);
  };

  return (
    <div >
    <h2 className="flex flex-col justify-center mt-[5%] lg:flex-row lg:items-start lg:justify-center font-bold text-base md:text-2xl lg:text-4xl xl:text-5xl text-[#121212] md:text-[#2D2D2D]">Festival in India</h2>
    <div className="flex flex-col mt-[5%] lg:flex-row lg:items-start lg:justify-center">
    
      {/* Left Side */}
      <div className="flex flex-col mx-2 w-40 relative hover:shadow-lg">
        {/* Small Button with Background Color */}
        {[1, 2, 3, 4, 5, 6].map((month) => (
          <button
            key={month}
            onClick={() => handleButtonClick(month)}
            className={`bg-gray-300 p-2 text-center mb-2 rounded focus:outline-none font-bold my-5 ${
              clickedMonth === month ? 'hover:bg-gray-400' : 'hover:bg-gray-300'
            }`}
            style={{
              backgroundImage: `url(${clickedMonth === month ? b : f})`,
            }}
          >
            {monthNames[month - 1]}
          </button>
        ))}
      </div>

      {/* Container between Left and Right Sides */}
      <div className="mx-2 lg:flex items-start border rounded p-1 ml-[5%] mr-[5%] w-[50%] hover:shadow-lg">
        <video autoPlay muted className="w-full" ref={videoRef}>
          <source src={b} type="video/mp4" />
        </video>
      </div>

      {/* Right Side */}
      <div className="flex flex-col mx-2 w-40 lg:ml-0 hover:shadow-lg">
        {[7, 8, 9, 10, 11, 12].map((month) => (
          <button
            key={month}
            onClick={() => handleButtonClick(month)}
            className={`bg-gray-300 p-2 text-center mb-2 rounded focus:outline-none font-bold my-5 ${
              clickedMonth === month ? 'hover:bg-gray-400' : 'hover:bg-gray-300'
            }`}
            style={{
              backgroundImage: `url(${clickedMonth === month ? b : f})`,
            }}
          >
            {monthNames[month - 1]}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Month;









 