import React from "react";

const Introduction = () => {
  return (
    <div className="w-full mt-20 relative">
      {/* Background Section */}
      <div
        className="w-full h-[350px] md:h-[450px] relative flex items-center justify-center"
        style={{
          backgroundImage: 'url(/image/home.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scaleX(-1)",
        }}
      >
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-black/30"
          style={{
            filter: "blur(4px)",
            clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
          }}
        ></div>

        {/* Text Overlay */}
        <div
          className="absolute z-10 left-1/2 -translate-x-1/2 text-center w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12 text-white"
          style={{
            transform: "scaleX(-1)", // Adjusts overlay content back to normal
          }}
        >
          <h4 className="font-semibold text-xl sm:text-2xl md:text-4xl leading-tight font-sans animate-typewriter overflow-hidden whitespace-nowrap">
            PrimeLine Scale at Speed
          </h4>
          <p className="text-sm sm:text-base text-gray-200 font-medium mt-4 animate-fade-in">
            Our promise to help enterprises across industries transform at speed and bring agility, resilience, and efficiency to their businesses.
          </p>
          <button className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-gray-900 transition text-sm mt-6 font-small text-lg">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
