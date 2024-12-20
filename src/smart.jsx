import React, { useEffect } from "react";
import "aos/dist/aos.css"; 
import AOS from "aos"; 
import { Link } from "react-router-dom";


const Smart = () => {
  
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="bg-white py-16 mt-12 px-4 md:px-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-Inder bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-sulphur">
         Our Clients
        </h1>
        <p className="mt-6  text-gray-600 max-w-2xl mx-auto font-Inder font-sulphur text-1xl">
        We proudly collaborate with a diverse range of businesses, helping them achieve excellence in customer service and operational efficiency.
        </p>
      </div>

      
      <div className="flex flex-col md:flex-row items-center mb-8 p-6">
        
        <img
          src="/image/client.jpg"
          alt="Cloud-Based Technology"
          className="w-full md:w-1/3 h-auto object-contain"
        />
      
        <div
          className="item-info w-full md:w-2/3 md:ml-12 mt-4 md:mt-0"
          data-aos="fade-up" 
        >
          <h2 className="text-xl md:text-3xl font-poetsen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-sulphur">
            Customer Services
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-700 font-sulphur">
          Industries Served
At PrimeLineConnect, we cater to diverse industries, including retail, telecommunications, healthcare, finance, and more, delivering solutions that drive efficiency and growth.

Our Approach
We pride ourselves on providing tailored solutions designed to meet the unique challenges and goals of each client, ensuring impactful results.

Client Success Stories
Our expertise has helped businesses reduce call waiting times, improve customer satisfaction, and achieve significant revenue growth through cutting-edge, data-driven strategies. We focus on measurable outcomes, empowering our clients to stay ahead in competitive markets.

          </p>
          
        </div>
      </div>

      
      
    </div>
  );
};

export default Smart;
