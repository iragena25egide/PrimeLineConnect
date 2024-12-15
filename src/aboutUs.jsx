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
        <h1 className="text-3xl font-poetsen text-gray-900 font-sulphur">About PrimeLine Connect</h1>
        <p className="text-lg text-gray-900 mt-2 font-Inder font-sulphur">
          Empowering businesses with innovative digital solutions.
        </p>
      </div>

      {/* Company Overview */}
      <div className="space-y-8">
        {/* Mission Section */}
        <section className="bg-white p-12 rounded-lg shadow-md" data-aos="fade-up">
          <h2 className="text-2xl text-center font-poetsen text-gray-900 font-sulphur">Our Mission</h2>
          <p className="text-1xl text-gray-600 m-4 font-sulphur">
            At PrimeLine Connect, our mission is to revolutionize the way businesses interact with technology
            At PrimeLine, we’re shaping a new age of network communications. One that combines creative and customized technology solutions
            At PrimeLine, we’re shaping a new age of network communications. One that combines creative and customized technology solutions
            At PrimeLine, we’re shaping a new age of network communications. One that combines creative and customized technology solutions
            At PrimeLine, we’re shaping a new age of network communications. One that combines creative and customized technology solutions
            At PrimeLine, we’re shaping a new age of network communications. One that combines creative and customized technology solutions
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-white p-12 rounded-lg shadow-md" data-aos="fade-up">
          <h2 className="text-3xl font-poetsen text-gray-900 text-center font-sulphur">Why Choose Us?</h2>
          <p className="text-sm text-gray-600 m-4 font-sulphur">
            With PrimeLine Connect, you gain a partner committed to your success
            At PrimeLine, we’re shaping a new age of network communications. One that combines creative and customized technology solutions
            At PrimeLine, we’re shaping a new age of network communications. One that combines creative and customized technology solutions
            At PrimeLine, we’re shaping a new age of network communications. One that combines creative and customized technology solutions
            At PrimeLine, we’re shaping a new age of network communications. One that combines creative and customized technology solutions
            At PrimeLine, we’re shaping a new age of network communications. One that combines creative and customized technology solutions
          </p>
        </section>
      </div>
      <Team />
    </div>
  );
};

export default AboutUs;
