import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Services = () => {

    useEffect(() => {
        AOS.init({ duration: 2000, easing: "ease-in-out", once: true });
    }, []);

    return (
        <div className="bg-gray-100 min-h-fit py-8 px-4">
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-4 font-sulphur bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                CHECK OUR SERVICES
            </h1>

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
                {/* Cloud-Based Services Container */}
                <div className="content bg-white shadow-lg rounded-lg p-6 flex-1" data-aos="fade-left">
                    <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4 font-sulphur">
                        Cloud-Based Services
                    </h1>
                    <p className="text-gray-600 font-sulphur">
                        Cloud-based services provide scalable, on-demand access to computing
                        resources and applications over the internet, eliminating the need for
                        physical infrastructure. They enhance flexibility, enable real-time data
                        processing, and reduce operational costs. These services are essential
                        for modern businesses aiming for efficiency and global reach.
                    </p>
                </div>

                {/* Analytics-Driven Insights Container */}
                <div className="content bg-white shadow-lg rounded-lg p-6 flex-1 w-fit" data-aos="fade-up">
                    <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4 font-sulphur">
                        Analytics-Driven Insights
                    </h1>
                    <p className="text-gray-600 font-sulphur">
                        Analytics-driven insights transform raw data into actionable strategies,
                        empowering businesses to make informed decisions. By leveraging advanced
                        analytics tools, companies can uncover trends, improve efficiency, and drive
                        revenue growth. Harnessing data effectively becomes a competitive advantage
                        in today’s digital landscape.
                    </p>
                </div>
            </div>

            <button className="w-1/3 mt-8 flex cursor-pointer justify-center px-10 mx-auto py-2 rounded-[20px_20px_20px_5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white transition duration-300 text-sm border-none outline-none">
                <Link to={'/services'}>More Services!</Link>
            </button>
        </div>
    );
};

export default Services;
