import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure to import AOS styles
import Team from "./team";

const AboutUs = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mt-24 p-4 bg-gray-50">
      {/* About Header */}
      <div className="text-center mb-6" data-aos="fade-down">
        <h1 className="text-3xl font-poetsen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-sulphur">About PrimeLine Connect</h1>
        <p className="text-lg text-gray-900 mt-2 font-Inder font-sulphur">
          Empowering businesses with innovative digital solutions.
        </p>
      </div>

      {/* Company Overview */}
      <div className="space-y-8">
        {/* Mission Section */}
        <section className="bg-white p-12 rounded-lg shadow-md" data-aos="fade-up">
          <h2 className="text-2xl text-center font-poetsen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-sulphur">Our Vision</h2>
          <p className="text-1xl text-gray-600 m-4 font-sulphur">
          To  redefine customer service excellence by creating seamless connections that bridge businesses and their customers with efficiency and care. We focus on delivering innovative solutions that enhance operations and customer experiences, ensuring satisfaction at every interaction. Through our services, we empower clients to achieve measurable growth, driving success and long-term value in a competitive landscape.
          </p>
        </section>

        {/* goal */}

        <section className="bg-white p-12 rounded-lg shadow-md" data-aos="fade-up">
          <h2 className="text-2xl text-center font-poetsen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-sulphur">Our Goal</h2>
          <p className="text-1xl text-gray-600 m-4 font-sulphur">
          To become the premier partner for businesses looking to revolutionize their customer service through seamless, efficient experiences that enhance both customer satisfaction and operational performance. By combining cutting-edge technology with human expertise, we deliver tailored solutions that address unique challenges and drive growth. We are committed to transforming how businesses engage with customers, helping them achieve long-term success and a competitive edge.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-white p-8 sm:p-12 rounded-lg shadow-md" data-aos="fade-up">
  {/* Title Section */}
  <h2 className="text-3xl font-sulphur bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center font-bold mb-8">
    Our Team
  </h2>
  
  {/* Team Boxes Container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    
    {/* Dedicated Professionals */}
    <div className="box p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4 font-sulphur">Dedicated Professionals</h4>
      <p className="text-gray-600 text-base font-sulphur">
        A team of highly trained specialists in customer service, sales, technical support, and data analysis.
      </p>
    </div>

    {/* Innovative Thinkers */}
    <div className="box p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4 font-sulphur">Innovative Thinkers</h4>
      <p className="text-gray-600 text-base font-sulphur">
        Problem-solvers who leverage AI-powered tools, a cloud-based network, and analytics to deliver exceptional results.
      </p>
    </div>

    {/* Collaborative Environment */}
    <div className="box p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4 font-sulphur">Collaborative Environment</h4>
      <p className="text-gray-600 text-base font-sulphur">
        We foster a culture of teamwork and growth, ensuring our employees have the tools and support to excel.
      </p>
    </div>

  </div>
</section>

      </div>
      
    </div>
  );
};

export default AboutUs;
