import React, { useEffect,useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";


const Animate = () => {

   
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="relative h-[400px]">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-[400px] object-cover"
      >
        <source src="/image/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with Opacity */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-90"></div>

      {/* Content */}
      <div className="relative text-center h-full flex flex-col items-center justify-center px-4 text-gray-200" data-aos="fade-up">
        <div data-aos="fade-down">
          <h1 className="text-3xl md:text-4xl font-medium mb-4 font-sulphur bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Emergency call  Operations in a Flash
          </h1>

          <button className="mt-6 w-full md:w-1/2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-[20px_20px_20px_5px] transition-all">
            <Link to={'/careers'}>Get Quote.</Link>
          </button>
        </div>

        <div
          className="mt-8 md:mt-10 px-4 md:w-1/2 mx-auto text-center"
        >
        
        
        </div>
      </div>
    </div>
  );
};

export default Animate;
