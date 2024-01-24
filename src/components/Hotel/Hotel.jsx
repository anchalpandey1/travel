import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import res from '../../assets/images/res.jpg';
import res1 from '../../assets/images/res1.jpg';
import u1 from '../../assets/images/u1.jpg';
import u2 from '../../assets/images/u2.webp';
import u3 from '../../assets/images/u3.avif';
import u4 from '../../assets/images/u4.jpg';
import u5 from '../../assets/images/u5.jpg';

const Hotel = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
     <div className="text-center">
        <h2 className="font-bold text-[#121212] md:text-[#2D2D2D] text-base md:text-2xl lg:text-4xl xl:text-5xl mt-2 lg:mt-4 mb-4">
        Explore & Rest
        </h2>
        <p className="text-[#121212] md:text-[#2D2D2D] text-base lg:text-xl lg:mt-0 mt-2">
          THE PLEASURE OF LUXURY
        </p>
      </div>

      <div className="mx-auto w-full sm:w-3/4 md:w-2/4 bg-gray-100 shadow-lg text-black p-4 mb-3">
      {/* Use responsive width classes: w-full on small screens, w-1/2 on medium screens, and w-1/3 on large screens */}
      <nav>
        <ul className="flex flex-wrap justify-center space-x-4">
          {/* Use flex-wrap for wrapping links to the next row */}
          <li>
            <a href="/" className="hover:bg-black hover:text-white p-2 rounded">
              Uttar Pradesh
            </a>
          </li>
          <li>
            <a href="/" className="hover:bg-black hover:text-white p-2 rounded">
            Uttarakhand
            </a>
          </li>
          <li>
            <a href="/" className="hover:bg-black hover:text-white p-2 rounded">
             Himachal Pradesh
            </a>
          </li>
          <li>
            <a href="/" className="hover:bg-black hover:text-white p-2 rounded">
             Rajasthan
            </a>
          </li>
          <li>
            <a href="/" className="hover:bg-black hover:text-white p-2 rounded">
             Odisha
            </a>
          </li>
          <li>
            <a href="/" className="hover:bg-black hover:text-white p-2 rounded">
             Madhya Pradesh
            </a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </div>







      <div   className="flex items-center justify-center bg-black h-screen">
        <div className="w-[90%] relative">
          <Slider {...sliderSettings}>
            {/* Slide 1 */}
            <div>
              <div className="flex">
                <div className="w-[50%]">
                  <img
                    src={u1}
                    alt="Slider Image 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[50%] text-white p-8">
                <div className="text-center">
                 <h2 className="text-4xl tracking-wide mb-2">Ram Janmabhoomi</h2>
                 </div>
                  <p className="mb-4">Ayodhya is a city in the northern Indian state of Uttar Pradesh, and it holds significant historical and religious importance. One of the most notable features of Ayodhya is the Ram Janmabhoomi, a religious site associated with Lord Rama, a revered figure in Hinduism.</p>
                  <h2 className="text-3xl tracking-wide mb-2 text-[#A21D3C]">Book Your room </h2>                
                  <p className="text-3xl tracking-wide mb-2">1.Taraji Resort</p>
                  <p className="text-3xl tracking-wide mb-2">2.Dharamshala by prithvi yatra hotels Ayodhya</p>

                  <div className="text-center">
                  <button className="border border-blue-500 rounded-full px-4 py-2 hover:bg-[#A21D3C] hover:text-white">
               Explore More
                </button>
               </div>
                </div>
                
              </div>
            </div>

            {/* Slide 2 */}
            <div>
              <div className="flex">
                <div className="w-[50%]">
                  <img
                    src={u2}
                    alt="Slider Image 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[50%] text-white p-8">
                <div className="text-center">
                 <h2 className="text-4xl tracking-wide mb-2">Taj Mahal</h2>
                 </div>
                  <p className="mb-4">The Taj Mahal is an iconic symbol of love and one of the most famous landmarks in the world. Located in Agra, India, it was built by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. </p>
                  <h2 className="text-3xl tracking-wide mb-2 text-[#A21D3C]">Book Your room </h2>                
                  <p className="text-3xl tracking-wide mb-2">1.Udee's Homestay</p>
                  <p className="text-3xl tracking-wide mb-2">2.Udee's Homestay</p>

                  <div className="text-center">
                  <button className="border border-blue-500 rounded-full px-4 py-2 hover:bg-[#A21D3C] hover:text-white">
               Explore More
                </button>
               </div>
                </div>
                
              </div>
            </div>

            <div>
              <div className="flex">
                <div className="w-[50%]">
                  <img
                    src={u3}
                    alt="Slider Image 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[50%] text-white p-8">
                <div className="text-center">
                 <h2 className="text-4xl tracking-wide mb-2">Krishna Janmabhoomi</h2>
                 </div>
                  <p className="mb-4">Krishna Janmabhoomi refers to the alleged birthplace of Lord Krishna, a central figure in Hinduism. The site is located in Mathura, Uttar Pradesh, India. Similar to Ayodhya's Ram Janmabhoomi, Mathura has been a center of religious and cultural significance due to its association with Lord Krishna.</p>
                  <h2 className="text-3xl tracking-wide mb-2 text-[#A21D3C]">Book Your room </h2>                
                  <p className="text-3xl tracking-wide mb-2">1.Hotel Maharana Palace</p>
                  <p className="text-3xl tracking-wide mb-2">2.Hotel Kridha Residency</p>

                  <div className="text-center">
                  <button className="border border-blue-500 rounded-full px-4 py-2 hover:bg-[#A21D3C] hover:text-white">
               Explore More
                </button>
               </div>
                </div>
                
              </div>
            </div>

            <div>
              <div className="flex">
                <div className="w-[50%]">
                  <img
                    src={u4}
                    alt="Slider Image 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[50%] text-white p-8">
                <div className="text-center">
                 <h2 className="text-4xl tracking-wide mb-2">Shri Kashi Vishwanath Temple</h2>
                 </div>
                  <p className="mb-4">The Shri Kashi Vishwanath Temple, also known as the Golden Temple, is one of the most revered Hindu temples dedicated to Lord Shiva. It is located in Varanasi (Kashi), Uttar Pradesh, India, along the western bank of the holy river Ganges.</p>
                  <h2 className="text-3xl tracking-wide mb-2 text-[#A21D3C]">Book Your room </h2>                
                  <p className="text-3xl tracking-wide mb-2">1.Shiva lodge</p>
                  <p className="text-3xl tracking-wide mb-2">2.Anand Kanan</p>

                  <div className="text-center">
                  <button className="border border-blue-500 rounded-full px-4 py-2 hover:bg-[#A21D3C] hover:text-white">
               Explore More
                </button>
               </div>
                </div>
                
              </div>
            </div>

            <div>
              <div className="flex">
                <div className="w-[50%]">
                  <img
                    src={u5}
                    alt="Slider Image 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[50%] text-white p-8">
                <div className="text-center">
                 <h2 className="text-4xl tracking-wide mb-2">Gorakhnath Temple</h2>
                 </div>
                  <p className="mb-4">Gorakhnath Temple, dedicated to Guru Gorakhnath, is a prominent Hindu temple located in Gorakhpur, Uttar Pradesh, India.</p>
                  <h2 className="text-3xl tracking-wide mb-2 text-[#A21D3C]">Book Your room </h2>                
                  <p className="text-3xl tracking-wide mb-2">1.Nirvana Sarovar Portico Gorakhpur</p>
                  <p className="text-3xl tracking-wide mb-2">2.Kama International</p>

                  <div className="text-center">
                  <button className="border border-blue-500 rounded-full px-4 py-2 hover:bg-[#A21D3C] hover:text-white">
               Explore More
                </button>
               </div>
                </div>
                
              </div>
            </div>

            {/* Add more Slider items as needed for additional content */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
