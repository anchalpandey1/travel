import React from 'react';
import u1 from '../../assets/images/u1.jpg';
import u2 from '../../assets/images/u2.webp';

const Team = () => {
  return (
    <div>
      <div className="text-center mt-5">
        <h2 className="font-bold text-[#121212] md:text-[#2D2D2D] text-base md:text-2xl lg:text-4xl xl:text-5xl mt-2 lg:mt-4 mb-4">
          Meet Our Mentor
        </h2>
        <p className="text-[#121212] md:text-[#2D2D2D] text-base lg:text-xl lg:mt-0 mt-2 mb-3">
          A mentor, integral to personal and professional growth, guides and inspires individuals on their journey, providing valuable insights and support.
        </p>
      </div>

      <div style={{ backgroundColor: '' }} className="p-8">
  <div className="flex justify-center items-center space-x-10">
    {/* First Circle */}
    <div className="relative w-48 h-48 bg-white rounded-full overflow-hidden">
      <img src={u1} alt="User 1" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
         </div>
        
    </div>
    
    {/* Second Circle */}
    <div className="relative w-48 h-48 bg-white rounded-full overflow-hidden">
      <img src={u2} alt="User 2" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
          </div>
         
    </div>
  </div>
</div>
    </div>
  );
}

export default Team;
