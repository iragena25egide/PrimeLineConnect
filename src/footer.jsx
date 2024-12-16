import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import AOS from 'aos';  
import 'aos/dist/aos.css';  

const Footer = () => {
  const currentYear = new Date().getFullYear();


 

  return (
    <div className="w-full mt-10">
    
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-80 py-6 px-6 md:px-12 flex justify-between items-center"
          >
        {/* Left Section */}
        <div className="w-full md:w-1/2 px-6">
          <h2 className="text-3xl text-white font-sm font-sulphur">Careers</h2>
          <p className=" text-white my-4 text-sm font-sulphur">Gain a heritage. Leave a legacy.</p>
          <button className="px-4 py-2 border-2 text-sm rounded-[20px_20px_20px_5px] border-white text-white hover:bg-white hover:text-black transition-colors">
           <Link to={'/careers'}>JOIN US</Link>
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 px-6">
          <h2 className="text-3xl text-white font-small font-sulphur">Contact Us</h2>
          <p className="text-sm text-white my-4 font-sulphur">What can we help you achieve.</p>
          <button className="px-4 py-2 border-2 text-sm border-white text-white rounded-[20px_20px_20px_5px] hover:bg-white  hover:text-black transition-colors">
            <Link to={'/contact-us'}>SPEAK WITH US</Link>
          </button>
        </div>
      </div>

      {/* Footer Content Section */}
      <div className="bg-gray-900 text-white py-4 px-6 md:px-6 flex flex-wrap justify-between" >
        {/* Logo Section */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0" >
          <img
              src="/image/logo4.png"
              alt="Logo"
              className="w-12 md:w-16"
            />
            <h4 className="text-2xl font-small ">PrimeLine Connect</h4>
        </div>

        {/* Brand Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0" >
          <h4 className="text-1xl font-small font-sulphur">Our Brand</h4>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Sustainability</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Corporate Citizenship</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Investor Relations</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Contact Us</p>
        </div>

        {/* News Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-1xl font-small font-sulphur">News</h4>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Events</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Careers</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Alumni</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Sitemap</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Cookie Preferences</p>
        </div>

        {/* Social Media Section */}
        <div className="w-full md:w-1/4 flex justify-between items-center space-x-4" >
          <FaFacebook color="#FEFEFE" size={22} cursor={'pointer'}/>
          <Link to={'https://www.instagram.com/'} target='_blank'>
            <FaInstagram color="#FEFEFE" size={22} cursor={'pointer'}/>
          </Link>
          <RiTwitterXFill color="#FEFEFE" size={22} cursor={'pointer'}/>
          <FaLinkedin color="#FEFEFE" size={22} cursor={'pointer'}/>
          <FaYoutube color="#FEFEFE" size={22} cursor={'pointer'}/>
        </div>
      </div>

      <div className="bg-gray-900 py-2 text-center border-t border-gray-600" 
  // Explicit background color for footer bottom
    >
  <p className="text-gray-400 text-sm font-small font-sulphur">
    &copy; {currentYear} PrimeLine. All rights reserved.
  </p>
</div>

    </div>
  );
};

export default Footer;
