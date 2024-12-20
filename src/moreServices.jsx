import React from 'react'

const MoreServices = () => {
  return (
    <div className="service-container bg-gray-100 py-8 px-4 sm:px-6 lg:px-16 mt-20">
        <h4 className='font-sulphur p-8 text-center text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Services We Offer:</h4>
      <div className="max-w-6xl mx-auto">
        {/* Cloud-Based Services Section */}
        <div className="cloud-based flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image */}
          <div className="flex-none w-full lg:w-1/3">
            <img 
              src="/image/cloud.jpg" 
              alt="Cloud image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-auto p-6 space-y-4">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Cloud-Based Customer Care Services
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li className='font-sulphur'>
                <strong className='font-sulphur'>VoIP-Powered Call Centers:</strong> Fully hosted solutions designed to manage high call volumes efficiently, reducing costs and enhancing communication quality.
              </li>
              <li className='font-sulphur'>
                <strong className='font-sulphur'>BPO Support for Customer Care:</strong> Scale your operations with our Business Process Outsourcing model, ensuring round-the-clock availability and seamless service.
              </li>
              <li className='font-sulphur'>
                <strong className='font-sulphur'>AI-Powered Chatbots and Voice Bots:</strong> Automate customer interactions with intelligent agents, providing instant and accurate support across platforms.
              </li>
              <li className='font-sulphur'>
                <strong className='font-sulphur'>24/7 Availability:</strong> Offer continuous service, ensuring your customers are supported at any time, across all time zones.
              </li>
            </ul>
          </div>
        </div>


        <div className="cloud-based flex mt-8 flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image */}
          <div className="flex-none w-full lg:w-1/3">
            <img 
              src="/image/sales.jpg" 
              alt="Cloud image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-auto p-6 space-y-4">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
            Sales and Revenue Growth Strategies
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li className='font-sulphur'>
                <strong className='font-sulphur'>Optimized Sales Campaigns:</strong> oDesign and execute data-driven campaigns to acquire and retain customers.
              </li>
              <li className='font-sulphur'>
                <strong className='font-sulphur'>Upselling and Cross-Selling:</strong> oUse advanced analytics to identify opportunities for additional revenue.
              </li>
              <li className='font-sulphur'>
                <strong className='font-sulphur'>Customer Journey Enhancements:</strong> oStreamline the customer experience to improve satisfaction and loyalty, driving higher conversion rates.
              </li>
              <li className='font-sulphur'>
                <strong className='font-sulphur'>Performance Monitoring:</strong> o Real-time tracking of key metrics to adjust strategies and maximize ROI.
              </li>
            </ul>
          </div>
        </div>

        <div className="cloud-based flex mt-8 flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image */}
          <div className="flex-none w-full lg:w-1/3">
            <img 
              src="/image/insight.jpg" 
              alt="Cloud image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-auto p-6 space-y-4">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
            Analytics-Driven Insights
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li className='font-sulphur'>
                <strong className='font-sulphur'>Customer Behavior Analysis:</strong> oLeverage AI to predict trends and adapt services to meet evolving demands.
              </li>
              <li className='font-sulphur'>
                <strong className='font-sulphur'>Proactive Engagement:</strong> oUse predictive analytics to anticipate customer needs and deliver tailored solutions.
              </li>
              <li className='font-sulphur'>
                <strong className='font-sulphur'>Advanced Reporting:</strong> Gain actionable insights into customer interactions and sales performance to inform decision-making.
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreServices
