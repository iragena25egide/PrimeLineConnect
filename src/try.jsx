import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEmergencyShare, MdRecordVoiceOver } from "react-icons/md";
import { SiCustomink } from "react-icons/si";
import AOS from 'aos';  
import 'aos/dist/aos.css';  

const NetworkCommunications = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState("");
  const fullText = "PrimeLine Scale At Speed";

 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-screen text-white md:h-[500px]"
      style={{ backgroundImage: `url('/image/home.jpg')` }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

   
      <header 
        className="relative z-10 flex items-center justify-between px-4 md:px-8 py-3"
        data-aos="fade-down"  
      >
       
        <div className="flex items-center">
          <button
            className="block md:hidden text-white text-xl mr-4"
            onClick={() => setMenuActive(!menuActive)}
          >
            &#9776;
          </button>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/image/logo4.png"
              alt="Logo"
              className="w-12 md:w-16"
            />
            <p className="font-sans text-xl md:text-2xl text-white font-medium ml-2">
              PrimeLine<span className="text-blue-700"> Connect</span>
            </p>
          </div>
        </div>

      
        <div
          className={`${
            menuActive ? "block" : "hidden"
          } absolute top-full left-0 w-full p-4 md:relative md:top-auto md:left-auto md:w-auto md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center">
           
            <li className="relative group" data-aos="fade-left" data-aos-delay="100">
              <Link
                to="/about-us"
                className="block text-white py-2 md:py-0 md:inline-block hover:text-blue-400"
              >
                ABOUT US
              </Link>
            </li>
            <li className="relative group" data-aos="fade-left" data-aos-delay="200">
              <Link
                to="/emergency-service"
                className="block text-white py-2 md:py-0 md:inline-block hover:text-blue-400"
              >
                EMERGENCY SERVICES
              </Link>
            </li>
            <li className="relative group" data-aos="fade-left" data-aos-delay="300">
              <Link
                to="/careers"
                className="block text-white py-2 md:py-0 md:inline-block hover:text-blue-400"
              >
                CAREERS
              </Link>
            </li>
            {/* Dropdown Menu */}
            <li className="relative group" data-aos="fade-left" data-aos-delay="400">
              <span className="block text-white py-2 md:py-0 cursor-pointer md:inline-block hover:text-blue-400">
                LEARN MORE
              </span>
              <div className="absolute hidden top-full left-1/2 transform -translate-x-1/2 bg-gray-900 shadow-md group-hover:block md:group-hover:flex">
                <ul className="flex flex-col text-center p-4 space-y-2">
                  <li>
                    <Link
                      to="/emergency-service"
                      className="text-white hover:text-blue-400 font-sulphur"
                    >
                      EMERGENCY SERVICE
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/customer-care"
                      className="text-white hover:text-blue-400 font-sulphur"
                    >
                      CUSTOMER CARE
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

       
        <button
          className="relative group w-[10%] text-[14px] h-[40px] text-[#fff] font-medium rounded-[20px_20px_20px_5px] cursor-pointer text-center bg-transparent hidden md:block"
          data-aos="zoom-in" data-aos-delay="500"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[20px_20px_20px_5px] p-[2px]">
            <span className="relative flex items-center justify-center w-full h-full bg-transparent rounded-[20px_20px_20px_5px]">
              <Link to={'/contact-us'}>Contact Us</Link>
            </span>
          </span>
        </button>
      </header>

    
      <div className="flex justify-center items-center h-[60px] mt-20">
        <h2
          className="text-4xl font-poetsen md:text-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-sulphur"
          data-aos="fade-up"
        >
         
        </h2>
      </div>
    </div>
  );
};

export default NetworkCommunications;
