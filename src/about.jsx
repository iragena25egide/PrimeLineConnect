import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import "aos/dist/aos.css"; 
import AOS from "aos"; 


const About = () => {

  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out", once: true });
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-200 opacity-90 py-4 px-6 md:py-20 md:px-8 lg:px-8 mt-0" >
     
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <img
          src="/image/about.png"
          alt="About Us"
          className="w-full h-auto rounded-full shadow-lg"
        />
      </div>

     
      <div className="w-full md:w-full md:pl-12" data-aos="fade-up">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4 font-sulphur">
          About PrimeLine
        </h1>
        <p className="text-gray-700 text-1xl leading-relaxed font-sulphur mb-6">
        At PrimeLineConnect, we specialize in empowering businesses with solutions designed to streamline customer service, optimize operations, and drive sales and revenue growth. From managing high call volumes with dedicated call center and chat support to providing advanced technical and data-driven solutions, we are your trusted partner in enhancing customer satisfaction and operational efficiency.
        Blending innovation with human insight, our cloud-based mesh network seamlessly handles modern data from any device, enabling real-time connectivity and transforming the end-user experience. 
        </p>
        <button className=" w-1/3 flex justify-center px-10 mx-auto py-2 rounded-[20px_20px_20px_5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white  transition duration-300 text-sm border-none outline-none">
         <Link to={'/about-primeLine'}>Read More</Link>
        </button>
      </div>
    </div>
  );
};

export default About;
