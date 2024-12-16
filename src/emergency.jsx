import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TextSwiper from './swipe';
import { Link } from 'react-router-dom';

const Emergency = () => {
  useEffect(() => {
    AOS.init({ duration: 1000,once:true });
  }, []);

  return (
    <div className="mt-24 p-6 bg-gray-50">
      <div
        className="text-center mb-8"
        data-aos="fade-down"
      >
        <h1 className="text-3xl font-poetsen text-gray-900">
          Emergency Services with PrimeLine
        </h1>
      </div>

      <div
        className="bg-white rounded-lg shadow-md p-8 mb-8"
        data-aos="fade-right"
      >
        <h2 className="text-2xl font-sulphur text-gray-900 mb-4">
          App Data Can Become a Vital Lifeline
        </h2>
        <p className="text-lg text-gray-600">
          Any app has the potential to become a life-saving tool once its data
          is accessible to emergency triage agents and first responders who can
          help. PrimeLine offers an expansive network and API integrations to
          connect your app to the cloud, enabling faster, more accurate support
          when it matters most.
        </p>
      </div>

      <div
        className="bg-gray-100 rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6"
        data-aos="fade-left"
      >
        <img
          src="/image/exp.png"
          alt="Expand your app"
          className="w-1/3 rounded-lg object-cover"
        />
        <div>
          <h2 className="text-2xl font-sulphur text-gray-900 mb-4">
            Expand Your App's Potential
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Integrating with PrimeLine adds value to your app and makes it stand
            out. You can offer customers data-enriched emergency response
            support when they need it most.
          </p>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition duration-300">
           <Link to={'/contact-us'}>Talk To Us</Link> 
          </button>
        </div>
      </div>
      <TextSwiper />
      <div className="bg-gray-100 py-12 px-6 rounded-lg shadow-lg mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
        What PrimeLine Can Do For Your App
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Customer data can be invaluable in directing emergency response if your users experience a crash, fall, threat, or other urgent situation. Viiz helps you expand your safety capabilities.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li className="text-lg font-medium">Emergency Service</li>
        <li className="text-lg font-medium">Call Center</li>
        <li className="text-lg font-medium">Technology</li>
      </ul>
    </div>
    </div>
  );
};

export default Emergency;
