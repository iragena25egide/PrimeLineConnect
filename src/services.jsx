import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Services = () => {

    useEffect(() => {
        AOS.init({ duration: 2000, easing: "ease-in-out", once: true });
      }, []);

  return (
    <div className="bg-gray-100 min-h-fit py-8 px-4">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-4 font-sulphur">
        CHECK OUR SERVICES
      </h1>

      <div className="container mx-auto grid grid-cols-2 gap-3 lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        
        {/* Call Center Container */}
        <div className="content bg-white shadow-lg rounded-lg p-6 flex-1"  data-aos="fade-left">
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4 font-sulphur">
            Call Center
          </h1>
          <p className="text-gray-600 font-sulphur">
            The future of cloud computing is driven by emerging technologies
            like edge computing, serverless architecture, and AI integration.
            As businesses continue to adopt a cloud-first approach, innovation
            will accelerate.
          </p>
        </div>
        
        {/* Emergency Call Container */}
        <div className="content bg-white shadow-lg rounded-lg p-6 flex-1 w-fit" data-aos="fade-up">
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4 font-sulphur">
            Emergency Call
          </h1>
          <p className="text-gray-600 font-sulphur">
            The future of cloud computing is driven by emerging technologies
            like edge computing, serverless architecture, and AI integration.
            As businesses continue to adopt a cloud-first approach, innovation
            will accelerate.
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default Services;
