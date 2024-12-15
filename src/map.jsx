import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

const Map = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out", once: false });
  }, []);

  return (
    <div className="bg-cover bg-center h-98 py-8 bg-gray-800">
      {/* Header Section - Animates from the top */}
      <div
        className="text-center px-4"
        data-aos="fade-down" // Animates text flowing from the top
      >
        <h1 className="text-2xl md:text-2xl font-medium text-gray-200 font-sulphur">
          Mobilize Your Call Center <br /> Operations in a Flash
        </h1>
      </div>

      {/* Description Section - Animates from the bottom */}
      <div
        className="mt-8 md:mt-10 px-4 md:w-1/2 mx-auto text-center"
        data-aos="fade-up" // Animates text flowing from the bottom
      >
        <h4 className="text-sm md:text-2xl text-gray-400 font-small font-sulphur">
          Our cloud-based network lets us CONNECT CALL CENTERS AND AGENTS
          QUICKLY, without the constraints of hardware and geography.
        </h4>
        <p className="text-1xl text-gray-400 mt-4 font-sulphur">
          Agents are matched to your project based on your needs, whether
          emergency triage, customer care, operator support, bilingual services
          or other.
        </p>
      </div>

      <div className="mt-16"></div>
    </div>
  );
};

export default Map;
