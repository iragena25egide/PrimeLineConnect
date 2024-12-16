import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

const Network = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out", once: true }); // Ensures animations run smoothly and once per scroll
  }, []);

  return (
    <div className="bg-gray-50 py-10 mt-8 px-4 md:px-16 md:flex">
      {/* Left Section with Text */}
      <div
        className="w-full md:w-2/5 mb-12 md:mb-0 px-4"
        data-aos="fade-down" // Text section animates flowing down
      >
        <small className="text-2xl font-caveat bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-small font-sulphur">
          Our Network:
        </small>
        <h1 className="text-1xl font-semibold my-4 text-gray-800 font-sulphur">
          The Foundation for Modern Solutions
        </h1>
        <p className="text-sm text-gray-700 mt-4 text-1xl font-sulphur">
          Our fully redundant cloud-based mesh network integrates and
          transports all forms of data from any device to enhance and
          personalize the end-user experience.
        </p>
      </div>

      {/* Right Section with Statistics */}
      <div
        className="w-full md:w-3/5 grid grid-cols-2 gap-8 px-4"
        data-aos="fade-up" // Statistics animates flowing up
      >
        {/* Statistic Item 1 */}
        <div className="item text-center">
          <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
            100M
          </h1>
          <p className="text-sm text-gray-700 mt-2 font-sulphur">interactions per year</p>
        </div>

        {/* Statistic Item 2 */}
        <div className="item text-center">
          <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
            24x7
          </h1>
          <p className="text-sm text-gray-700 mt-2 font-sulphur">
            monitoring and data protection
          </p>
        </div>

        {/* Statistic Item 3 */}
        <div className="item text-center">
          <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
            500M
          </h1>
          <p className="text-sm text-gray-700 mt-2 font-sulphur">
            endpoints able to connect to the PrimeLine cloud through their
            service providers
          </p>
        </div>

        {/* Statistic Item 4 */}
        <div className="item text-center">
          <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
            5
          </h1>
          <p className="text-sm text-gray-700 mt-2 font-sulphur">
            call centers in North America and abroad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Network;
