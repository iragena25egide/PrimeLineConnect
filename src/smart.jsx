import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

const Smart = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
  }, []);

  return (
    <div className="bg-white py-16 mt-12 px-4 md:px-16">
      {/* Top Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-Inder text-gray-900">
          Smart Technology, Human Support, <br />
          and the Data That <span className="font-poetsen text-blue-500">Connects</span> Them
        </h1>
        <p className="mt-6 text-sm text-gray-600 max-w-2xl mx-auto font-Inder">
          For 20 years, PrimeLine has developed network communications solutions that combine the best of both worlds:
        </p>
      </div>

      {/* Item 1 */}
      <div className="flex flex-col md:flex-row items-center mb-8 p-6">
        {/* Image with Animation */}
        <img
          src="/image/savex.png"
          alt="Cloud-Based Technology"
          className="w-full md:w-1/3 h-auto object-contain"
          data-aos="fade-right" // Animate from the right
        />
        {/* Text with Animation */}
        <div
          className="item-info w-full md:w-2/3 md:ml-12 mt-4 md:mt-0"
          data-aos="fade-left" // Animate from the left
        >
          <h2 className="text-xl md:text-2xl font-poetsen text-gray-900">
            Cloud-Based Technology
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-700 font-sulphur">
            The future of cloud computing is driven by emerging technologies
            like edge computing, serverless architecture, and AI integration.
            As businesses continue to adopt a cloud-first strategy, the demand
            for innovative cloud solutions will further enhance efficiency,
            innovation, and competitiveness. Cloud technology is not just a
            trend—it is the foundation for a digitally transformed and
            connected world. Our secure and redundant mesh network collects and
            transmits all forms of data, safely and reliably, to enhance the
            customer experience and bolster emergency response services.
          </p>
          <button className="mt-6 w-full md:w-1/2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-[20px_20px_20px_5px] transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center mb-8 p-6">
        {/* Text with Animation */}
        <div
          className="item-info w-full md:w-2/3 md:mr-12 mt-8 md:mt-0"
          data-aos="fade-right" // Animate from the right
        >
          <h2 className="text-xl md:text-2xl font-poetsen text-gray-900">Human Element</h2>
          <p className="mt-4 text-sm md:text-base text-gray-700 font-sulphur">
            Our trained and dedicated call center agents can mobilize quickly to
            provide brand- and industry-specific support, both in crisis and
            customer care situations. Cloud technology, often referred to as
            cloud computing, is a transformative model that allows individuals
            and organizations to access and store data, applications, and
            computing resources over the internet rather than relying solely on
            local devices. This innovation has revolutionized how businesses
            and individuals manage technology by offering flexibility,
            scalability, and efficiency.
          </p>
          <button className="mt-6 w-full md:w-1/2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-[20px_20px_20px_5px] transition-all">
            Learn More
          </button>
        </div>
        {/* Image with Animation */}
        <img
          src="/image/save.png"
          alt="Human Element"
          className="w-full md:w-1/3 h-auto object-contain"
          data-aos="fade-left" // Animate from the left
        />
      </div>
    </div>
  );
};

export default Smart;
