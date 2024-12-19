import React, { useEffect } from 'react';
import { FaCloudUploadAlt, FaRegSmile, FaShieldAlt, FaHeadset } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomerCare = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out",once:true });
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-8 md:px-12 lg:px-20 mt-16" data-aos="fade-up">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 font-sulphur">PrimeLine Customer Care</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-sulphur">
          At PrimeLine, we’re dedicated to ensuring unparalleled support for your business needs. Explore our innovative customer care solutions that prioritize reliability, efficiency, and trust.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 lg:w-2/5" data-aos="fade-right">
          <h4 className="text-2xl font-semibold text-gray-800 mb-6 font-sulphur">
            Why Choose PrimeLine Customer Care?
          </h4>
          <p className="text-gray-700 mb-4 font-sulphur">
            Our comprehensive customer care ensures seamless communication, fast issue resolution, and a personalized experience. Trust us to enhance your business-customer relationship with tailored solutions that deliver outstanding outcomes.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-3">
              <FaHeadset className="text-blue-600" size={24} />
              24/7 Professional Support
            </li>
            <li className="flex items-center gap-3">
              <FaRegSmile className="text-yellow-500" size={24} />
              Customer-Centric Approach
            </li>
            <li className="flex items-center gap-3">
              <FaShieldAlt className="text-green-600" size={24} />
              Data Security and Confidentiality
            </li>
            <li className="flex items-center gap-3">
              <FaCloudUploadAlt className="text-teal-500" size={24} />
              Seamless Integration with Modern Tools
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
            icon: <FaCloudUploadAlt className="text-teal-500" size={32} />,
            title: "Reliable Technology",
            description:
              "Cutting-edge tools to support seamless communication and data access.",
          },
          {
            icon: <FaHeadset className="text-blue-600" size={32} />,
            title: "24/7 Support",
            description: "Always here to resolve issues swiftly and efficiently.",
          },
          {
            icon: <FaShieldAlt className="text-green-600" size={32} />,
            title: "Secure Services",
            description: "Ensuring data protection and client confidentiality.",
          },
          {
            icon: <FaRegSmile className="text-yellow-500" size={32} />,
            title: "Customer-Centric Approach",
            description:
              "Your satisfaction is our priority—delivering tailored solutions.",
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
