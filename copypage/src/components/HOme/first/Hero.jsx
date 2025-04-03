import React from 'react'
import 'boxicons/css/boxicons.min.css';
import Main from '../../mainSection/Main';
import About from '../../aboutSection/About';
import CareSec from '../CareSec';
import HowWeWork from '../HowWeWork';
import Events from '../EventsH';
import Gallary from '../Gallary/Gallary';
import Blogs from '../Blogs';
import AboutCard from '../../aboutSection/AboutCard';

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/30104684/pexels-photo-30104684.jpeg')"
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-8 md:px-16">
          <div className="text-white max-w-xl">
            <div className="bg-white text-blue-900 px-6 py-2 rounded-full inline-block mb-6">
              <p className="text-sm font-medium">Let's contribute to make world a better place</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fundraising for helpless and causes you care about
            </h1>
            <p className="text-xl mb-12">
              It is a long established fact that a reader will be page distracted by the readable content of a pain
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold text-lg">
                Get Start A Fundraising
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-lg">
                Donate Now
              </button>
            </div>
          </div>

          {/* Right side circular image with play button */}
          <div className="hidden md:flex absolute right-16 top-1/2 transform -translate-y-1/2 w-[400px] h-[400px] items-center justify-center">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg"
                alt="Child in need"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <i className='bx bx-play text-4xl text-orange-500'></i>
                </div>
              </div>
            </div>

            {/* Small circular image at bottom right */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full overflow-hidden border-4 border-white">
              <img
                src="https://templates.hibootstrap.com/findo/default/assets/img/banner/banner-main2.png"
                alt="Smiling children"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Main />
      <About />
      <AboutCard />
      <CareSec />
      <HowWeWork />
      <Events />
      <Gallary />
      <Blogs />
    </>
  );
};

export default Hero;