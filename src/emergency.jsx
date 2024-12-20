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
        <h1 className="text-3xl font-poetsen text-gray-900 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-sulphur">
        How We Deliver Results
        </h1>
      </div>

      <section className="p-8 sm:p-12 bg-white rounded-lg shadow-md" data-aos="fade-right">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* Cloud-Powered Efficiency */}
    <div className="box p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h4 className="text-xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-sulphur">Cloud-Powered Efficiency</h4>
      <p className="text-gray-600 text-base font-sulphur">
        Our solutions are hosted on a scalable cloud infrastructure, allowing for seamless integration with your existing systems and ensuring uninterrupted service.
      </p>
    </div>
    
    {/* AI-Driven Innovation */}
    <div className="box p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h4 className="text-xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-sulphur">AI-Driven Innovation</h4>
      <p className="text-gray-600 text-base font-sulphur">
        With advanced Natural Language Processing (NLP) and machine learning, our chat and voice bots enhance the quality of every customer interaction.
      </p>
    </div>
    
    {/* Unified Customer Engagement */}
    <div className="box p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h4 className="text-xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-sulphur">Unified Customer Engagement</h4>
      <p className="text-gray-600 text-base font-sulphur">
        From call centers to omnichannel platforms, we ensure your customers receive consistent and personalized support.
      </p>
    </div>
    
    {/* Strategic Focus on Growth */}
    <div className="box p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h4 className="text-xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-sulphur">Strategic Focus on Growth</h4>
      <p className="text-gray-600 text-base font-sulphur">
        By blending customer care with targeted sales strategies, we help businesses unlock new revenue opportunities.
      </p>
    </div>
  </div>
</section>


      <div
        className="bg-gray-100 rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6"
        data-aos="fade-left"
      >
        <img
          src="/image/up2.jpg"
          alt="Expand your app"
          className="w-1/3 rounded-lg object-cover"
        />
        <div>
          <h2 className="text-2xl font-sulphur text-gray-900 mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
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
      <section className="bg-white p-8 sm:p-12 rounded-lg shadow-lg" data-aos="fade-up">
  {/* Heading */}
  <div className="text-center mb-6">
    <h4 className="text-2xl sm:text-3xl font-semibold text-gray-800 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-sulphur">
      Partner with Us
    </h4>
  </div>

  {/* Description */}
  <div className="max-w-4xl mx-auto text-center sm:text-left">
    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 font-sulphur">
      Let us help you transform your customer care and sales operations into dynamic drivers of business growth. 
      By leveraging innovative strategies and cutting-edge technology, we enable your business to enhance customer experiences and boost revenue. 
      Simply fill out the form below to get started. 
      A dedicated team member will reach out to discuss personalized solutions designed to address your unique challenges. 
      Let's work together to elevate your business and unlock its full potential.
    </p>
  </div>

  
</section>

      <TextSwiper />
      
    </div>
  );
};

export default Emergency;
