import React, { useEffect } from "react";
import { MdOutlineEmergencyShare, MdRecordVoiceOver } from "react-icons/md";
import { SiCustomink } from "react-icons/si";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out", once: false });
  }, []);

  return (
    <div className="h-fit bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6">
      <h1 className="text-center text-4xl font-bold mb-10 font-sulphur">
        About Our Services
      </h1>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Emergency Services Card */}
        <div
          data-aos="fade-up"
          className="bg-black bg-opacity-70 p-6 rounded-xl transform transition duration-500 hover:scale-105 shadow-lg"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md">
              <MdOutlineEmergencyShare size={32} className="text-blue-700" />
            </div>
            <h2 className="text-2xl font-semibold font-sulphur">Emergency Services</h2>
          </div>
          <p className="mt-4 text-gray-300 font-sulphur">
            Compassionate support in crisis situations.
          </p>
        </div>

        {/* Customer Care Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-black bg-opacity-70 p-6 rounded-xl transform transition duration-500 hover:scale-105 shadow-lg"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md">
              <SiCustomink size={32} className="text-blue-700" />
            </div>
            <h2 className="text-2xl font-semibold font-sulphur">Customer Care</h2>
          </div>
          <p className="mt-4 text-gray-300 font-sulphur">
            Scalable call centers adapted to task, brand, and industry.
          </p>
        </div>

        {/* Voice-to-Cloud Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-black bg-opacity-70 p-6 rounded-xl transform transition duration-500 hover:scale-105 shadow-lg"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md">
              <MdRecordVoiceOver size={32} className="text-blue-700" />
            </div>
            <h2 className="text-2xl font-semibold font-sulphur">Voice-to-Cloud</h2>
          </div>
          <p className="mt-4 text-gray-300 font-sulphur">
            Modernization of traditional telecommunication platforms and
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
