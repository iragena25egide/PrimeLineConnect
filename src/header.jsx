import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-gray-900 transition-all ${
        isSticky ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo and Menu Button */}
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
              Prime<span className="text-blue-700">Line</span>
            </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            menuActive ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-gray-900 md:relative md:top-auto md:left-auto md:w-auto md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center">
            <li>
              <Link
                to="/about-us"
                className="block text-white py-2 md:py-0 md:inline-block hover:text-blue-400"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/emergency-service"
                className="block text-white py-2 md:py-0 md:inline-block hover:text-blue-400"
              >
                EMERGENCY SERVICE
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="block text-white py-2 md:py-0 md:inline-block hover:text-blue-400"
              >
                CAREERS
              </Link>
            </li>
            {/* Dropdown Menu */}
            <li className="relative group">
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

        {/* Contact Button */}
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
      </div>
    </div>
  );
};

export default Header;
