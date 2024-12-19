import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const emptyFields = [];

    for (const [key, value] of formData.entries()) {
      if (!value.trim()) {
        emptyFields.push(key);
      }
    }

    if (emptyFields.length > 0) {
      setResult(`Please fill out the following fields: ${emptyFields.join(", ")}`);
      return;
    }

    setResult("Sending....");

    // Add access key to formData
    formData.append("access_key", "2922818e-62f5-4633-9a20-206ab88dc2a7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred while submitting the form. Please try again.");
    }
  };

  // Initialize AOS
  React.useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out", once: true });
  }, []);
  return (
    <div className="mt-24 p-4 bg-gray-50">
      {/* Contact Header */}
      <div className="text-center mb-6" data-aos="fade-up">
        <h1 className="text-2xl font-poetsen text-gray-900">Contact Us</h1>
        <p className="text-sm text-gray-900 mt-2 font-Inder">
          We would love to hear from you, your feedback is our priority.
        </p>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        {/* Form Section */}
        <form className="w-full md:w-2/3 space-y-3" onSubmit={handleSubmit} data-aos="fade-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Firstname*" name="firstname"
              className="w-full h-8 p-3 border border-gray-300 rounded-lg focus:outline-red  outline-none text-sm focus:1"
            />
            <input
              type="text"
              placeholder="Lastname*" name="lastname"
              className="w-full h-8 p-3 border border-gray-300 rounded-lg focus:outline-none  outline-none text-sm"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="email" name="email"
              placeholder="Email*"
              className="w-full h-8 p-3 border border-gray-300 rounded-lg focus:outline-none  outline-none text-sm"
            />
            <input
              type="number"
              placeholder="Phone*" name="phone"
              className="w-full h-8 p-3 border border-gray-300 rounded-lg focus:outline-none  outline-none text-sm"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="w-full h-8 p-3 border border-gray-300 rounded-lg focus:outline-none  outline-none text-sm"
            />
            <input
              type="text"
              name="region"
              placeholder="Country/Region"
              className="w-full h-8 p-3 border border-gray-300 rounded-lg focus:outline-none  outline-none text-sm"
            />
          </div>
          <textarea
            placeholder="How can we help?"
            name="message"
            className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none  outline-none text-sm resize-none"
          />
          <button className="px-10 mx-auto py-2 rounded-[20px_20px_20px_5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white transition duration-300 text-sm">
            Submit
          </button>
          <br />
          {result && <span className="px-3 py-1 text-red-600 text-sm font-medium mt-3">{result}</span>}
        </form>

        {/* Contact Info Section */}
        <div className="w-full p-4 md:w-1/3 space-y-3 ml-8" data-aos="fade-left">
          <div>
            <h4 className="text-1xl font-poetsen text-black">PrimeLine Connect.</h4>
            <p className="text-sm text-gray-600 mt-2 font-poetsen">Toronto ON M4N3P6 Canada</p>
            <h5 className="text-sm text-gray-700 mt-2 font-poetsen">Address: 3230 Yonge Street #4063</h5>
          </div>
          <div className="space-y-4">
            <h5 className="text-1xl text-gray-900 text-center font-poetsen">Reach Out</h5>
            <div className="flex items-center space-x-3">
              <MdEmail size={18} color="#005ea1" />
              <p className="text-sm text-gray-700">info@primelineconnect.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone size={18} color="#005ea1" />
              <p className="text-sm text-gray-700">7059883055</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
