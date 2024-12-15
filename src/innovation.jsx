import React from 'react';

const Innovation = () => {
  return (
    <div className="py-16 px-4 md:px-12">

      {/* Innovation Block 1 */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-9">
        <div className="w-full md:w-1/3 mb-3 md:mb-0 mt-4 py-8">
          <img src="/image/inno.png" alt="Graph" className="w-full rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h4 className="text-1xl text-gray-900 font-poetsen text-center mb-4">Quality Services</h4>
          <p className="text-sm text-gray-900 mb-6 font-Inder">
            We are there for you just there to make sure that you will get all communication services you wish.
            We are a small company ensuring you get what you desire in the digitized world.
            We are here to make changes in the new world and we hope to achieve that at any cost.
          </p>
          <button className="w-1/3 py-2 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300 text-sm">
            MORE INFO !
          </button>
        </div>
      </div>

      {/* Innovation Block 2 */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-9">
        <div className="w-full md:w-1/2 p-4">
          <h4 className="text-1xl text-gray-900 font-poetsen text-center mb-4">Quality Services</h4>
          <p className="text-sm  mb-6 text-gray-900">
            We are there for you just there to make sure that you will get all communication services you wish.
            We are a small company ensuring you get what you desire in the digitized world.
            We are here to make changes in the new world and we hope to achieve that at any cost.
          </p>
          <button className="w-1/3 py-2 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300 text-sm">
            MORE INFO !
          </button>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0 py-20">
          <img src="/image/inno2.png" alt="Graph" className="w-full rounded-lg h-45" />
        </div>
      </div>

      {/* Innovation Block 3 */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 py-8">
          <img src="/image/inno3.png" alt="Graph" className="w-full rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h4 className="text-1xl text-gray-900 font-poetsen text-center mb-4">Quality Services</h4>
          <p className="text-sm text-gray-900 mb-6">
            We are there for you just there to make sure that you will get all communication services you wish.
            We are a small company ensuring you get what you desire in the digitized world.
            We are here to make changes in the new world and we hope to achieve that at any cost.
          </p>
          <button className="w-1/3 py-2 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300 text-sm">
            MORE INFO !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
