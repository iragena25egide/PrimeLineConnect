import React from "react";
import { MdOutlineEmergencyShare, MdRecordVoiceOver } from "react-icons/md";
import { SiCustomink } from "react-icons/si";

const Capabilities = () => {
  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Capabilities
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mt-4">
            We offer a wide range of digital solutions and best-in-class
            platforms to deliver meaningful outcomes, enhance customer
            experiences, and transform industries at scale and with unparalleled
            speed.
          </p>
        </div>
      </div>

      {/* Capabilities Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Emergency Service Box */}
        <div className="flex flex-col justify-between bg-white border border-blue-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold text-gray-900">
              Emergency Service
            </h4>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-4 border-blue-700">
              <MdOutlineEmergencyShare size={24} className="text-blue-700" />
            </div>
          </div>
          <p className="text-gray-700 text-sm sm:text-base">
            Compassionate support in crisis situations
          </p>
        </div>

        {/* Customer Care Box */}
        <div className="flex flex-col justify-between bg-white border border-blue-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold text-gray-900">
              Customer Care
            </h4>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-4 border-blue-700">
              <SiCustomink size={24} className="text-blue-700" />
            </div>
          </div>
          <p className="text-gray-700 text-sm sm:text-base">
            Scalable call centers adapted to task, brand, and industry
          </p>
        </div>

        {/* Voice-to-cloud Box */}
        <div className="flex flex-col justify-between bg-white border border-blue-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold text-gray-900">
              Voice-to-cloud
            </h4>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-4 border-blue-700">
              <MdRecordVoiceOver size={24} className="text-blue-700" />
            </div>
          </div>
          <p className="text-gray-700 text-sm sm:text-base">
            Modernization of traditional telecommunication platforms and
            applications
          </p>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
