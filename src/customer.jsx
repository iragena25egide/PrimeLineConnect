import React, { useEffect } from 'react';
import { FaRegSmile, FaShieldAlt, FaHeadset } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Ri24HoursFill } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";

const CustomerCare = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out",once:true });
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-8 md:px-12 lg:px-20 mt-16" data-aos="fade-up">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 font-sulphur bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">PrimeLine Customer Care</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-sulphur">
        At PrimeLineConnect, we bring together advanced customer care services and strategic revenue growth solutions to help your business thrive. By leveraging cloud-based technologies, AI-powered tools, and data-driven strategies, we ensure exceptional customer experiences while driving measurable business results.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 lg:w-2/5" data-aos="fade-right">
          <h4 className="text-2xl font-semibold text-gray-800 mb-6 font-sulphur bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Why Choose PrimeLine Connect?
          </h4>
          <p className="text-gray-700 mb-4 font-sulphur">
            Our comprehensive customer care ensures seamless communication, fast issue resolution, and a personalized experience. Trust us to enhance your business-customer relationship with tailored solutions that deliver outstanding outcomes.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-3">
              <FaHeadset className="text-blue-600" size={24} />
              Integrated Solutions
            </li>
            <li className="flex items-center gap-3">
              <GrTechnology className="text-yellow-500" size={24} />
              Advanced Technology
            </li>
            <li className="flex items-center gap-3">
              <FaShieldAlt className="text-green-600" size={24} />
              Scalability
            </li>
            <li className="flex items-center gap-3">
              <Ri24HoursFill className="text-teal-500" size={24} />
              24/7 Service Excellence
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 lg:w-2/5" data-aos="fade-left">
          <img
            src="/image/up4.jpg"
            alt="Customer Care"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {[
          {
            icon: <FaHeadset className="text-blue-500" size={32} />,
            title: "Integrated Solutions",
            description:
              "A seamless combination of customer care services and revenue-focused strategies.",
          },
          {
            icon: <GrTechnology className="text-yellow-600" size={32} />,
            title: "Advanced Technology",
            description: "Cutting-edge cloud and AI technologies to enhance both customer satisfaction and operational efficiency.",
          },
          {
            icon: <FaShieldAlt className="text-green-600" size={32} />,
            title: "Scalability",
            description: "EFlexible solutions designed to grow with your business needs.",
          },
          {
            icon: <Ri24HoursFill className="text-teal-500" size={32} />,
            title: "24/7 Service Excellence",
            description:
              "Around-the-clock support to ensure no customer is left behind.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:scale-105 transition transform duration-300 ease-in-out"
            data-aos="zoom-in"
            data-aos-delay={`${index * 200}`}
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 font-sulphur">{item.title}</h3>
            <p className="text-gray-600 text-sm font-sulphur">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerCare;
