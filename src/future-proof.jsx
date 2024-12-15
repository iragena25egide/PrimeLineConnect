import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

const Proof = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out", once: false });
  }, []);

  return (
    <div className="mt-0 w-full">
      <div className="h-36 bg-white"></div>

    
      <div
        className="relative bg-cover bg-center h-80 p-6"
        style={{ backgroundImage: "url('/image/try.jpeg')" }}
      >
      
        <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
        
       
        <div
          data-aos="fade-down" 
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-2xl md:text-3xl font-sulphur mb-4">
            Future-Proof Your Communications
          </h1>
          <p className="text-sm md:text-1xl mb-6 font-sulphur">
            PrimeLine develops data-rich, cloud-network solutions that connect your
            <br />
            customers with the information and support they need — today and in the future.
          </p>
          <div className="w-1/2 md:w-1/4 mx-auto py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border rounded-[20px_20px_20px_5px] border-white text-white cursor-pointer hover:text-gray-800 transition duration-300 text-sm">
            Let's Discuss Your Solution
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proof;
