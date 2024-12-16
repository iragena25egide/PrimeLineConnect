import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Map = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-fit object-cover"
      >
        <source src="/image/back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with Opacity */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-90"></div>

      {/* Content */}
      <div className="relative text-center h-full flex flex-col items-center justify-center px-4 text-gray-200">
        <div data-aos="fade-down">
          <h1 className="text-2xl md:text-4xl font-medium mb-4 font-sulphur bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Mobilize Your Call Center <br /> Operations in a Flash
          </h1>
        </div>

        <div
          className="mt-8 md:mt-10 px-4 md:w-1/2 mx-auto text-center"
          data-aos="fade-up"
        >
          <h4 className="text-lg md:text-2xl text-gray-300 font-normal mb-4 font-sulphur">
            Our cloud-based network lets us CONNECT CALL CENTERS AND AGENTS
            QUICKLY, without the constraints of hardware and geography.
          </h4>
          <p className="text-sm md:text-lg text-gray-300 font-sulphur">
            Agents are matched to your project based on your needs, whether
            emergency triage, customer care, operator support, bilingual
            services, or others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
