import {useRef} from 'react';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Form from './join';

const Careers = () => {


  

  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out", once: true });
  }, []);
  return (
    <div className="py-8 px-4 md:p-10 mt-20">
      <div 
      className="whyPrimeLine container mx-auto text-center mb-12" 
      data-aos="fade-down" 
    >
      <h1 className="text-3xl font-bold mb-4 text-gray-900 font-sulphur bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Why PrimeLine?</h1>
      <h4 className="text-xl mb-6 font-sulphur bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Become part of our visionary team.</h4>
      <p className="text-lg text-gray-700 mb-6 font-sulphur">
      At PrimeLine, we’re shaping a new age of network communications. One that combines creative and customized technology solutions with compassionate, data-enriched human support. Connecting people with the information, companies, and emergency services they need is our mission.
As we grow, expand our capabilities, and break barriers to forge innovative services and technology advancements, we’re constantly seeking individuals who share our passion for coming through for clients and their customers in the most critical moments.

If being part of a team that makes a difference in people’s lives is what you’re all about, we’d like to hear from you.
      </p>
      <div className="flex justify-center gap-6">
        <button 
          onClick={scrollToForm} 
          className="w-1/8 flex justify-center px-10 mx-auto py-2 rounded-[20px_20px_20px_5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white transition duration-300 text-sm"
        >
          Click To Apply
        </button>
      </div>
    </div>

    
    <div 
  className="customer-call-service-specialist container mx-auto bg-gray-100 p-6 rounded-lg mb-12"
  data-aos="fade-up" // Animation to flow from bottom
>
  <h4 className="text-2xl font-semibold mb-4 text-gray-900 font-sulphur text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Customer Service Call Specialist</h4>
  <p className="text-lg text-gray-900 mb-6 font-sulphur">
  This position is responsible for receiving, evaluating, and coordinating customer care calls. This may include inbound and outbound calls to and from customers, listening to customers’ needs or issues, and providing helpful solutions as needed.


  </p>

  <h5 className="font-semibold mb-2">RESPONSIBILITIES:</h5>
  <ul className="list-disc list-inside mb-6 font-sulphur">
    <li className='font-sulphur'>Answer incoming customer care calls.</li>
    <li className='font-sulphur'>Maintain conversation with the caller in a professional manner.</li>
    <li className='font-sulphur'>Provide alternative solutions when a caller’s request cannot be fulfilled.</li>
  </ul>

  <h5 className="font-semibold mb-2">QUALIFICATIONS:</h5>
  <ul className="list-disc list-inside">
    <li className='font-sulphur'>1-year previous experience in call center, or customer service preferred.</li>
    <li className='font-sulphur'>Ability to retain emotional control in challenging situations.</li>
  </ul>
</div>


      {/* DevOps Support Analyst Section */}
      <div className="dev-op container mx-auto bg-gray-100 p-6 rounded-lg mb-12">
        <h1 className="text-3xl  text-center text-gray-900 font-sulphur font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">DevOps Support Analyst – Night Shift</h1>
        <p className="text-lg text-gray-900 mb-6 font-sulphur">
        We're looking for a DevOps Support Analyst excelling in communication, organization, and problem-solving to join our team. The role involves supporting infrastructure, project participation, system improvements, and proactive issue identification. It also involves researching and helping to resolve issues that are reported by clients or system alarms. The role requires a self-motivated individual with strong collaboration and multitasking skills.
        </p>

        <h5 className="font-semibold mb-2">RESPONSIBILITIES:</h5>
        <ul className="list-disc list-inside mb-6">
          <li className='font-sulphur'>Supporting infrastructure and environments.</li>
          <li className='font-sulphur'>Assisting with code development, QA testing, and debugging issues.</li>
        </ul>

        <h5 className="font-semibold mb-2">QUALIFICATIONS:</h5>
        <ul className="list-disc list-inside">
          <li className='font-sulphur'>3+ years of experience in Information Technology.</li>
          <li className='font-sulphur'>Strong problem-solving and communication skills.</li>
        </ul>
      </div>

      {/* Emergency Response Specialist Section */}
      <div className="emergency-response container mx-auto bg-gray-100 p-6 rounded-lg mb-12">
        <h1 className="text-3xl text-center text-gray-900 font-sulphur font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Emergency Response Specialist</h1>
        <p className="text-lg text-gray-900 mb-6 font-sulphur">
        This position is responsible for receiving, evaluating, and coordinating emergency phone calls. Successful candidates will be responsible for the efficient and effective communication, documentation, and relaying of information as a third-party service to connect callers to emergency services for situations that require police, fire, or medical assistance.
        </p>

        <h5 className="font-semibold mb-2">RESPONSIBILITIES:</h5>
        <ul className="list-disc list-inside mb-6">
          <li className='font-sulphur'>Answer incoming emergency calls.</li>
          <li className='font-sulphur'>Provide clear and concise information to emergency dispatchers.</li>
        </ul>

        <h5 className="font-semibold mb-2">QUALIFICATIONS:</h5>
        <ul className="list-disc list-inside">
          <li className='font-sulphur'>Fluent English speaking, reading, and writing abilities.</li>
          <li className='font-sulphur'>Ability to work non-standard business hours when required.</li>
        </ul>
      </div>

      {/* Apply Form Section */}
    


    </div>
  );
};

export default Careers;
