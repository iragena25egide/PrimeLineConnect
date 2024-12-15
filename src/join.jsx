import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Form = () => {

    useEffect(() => {
        AOS.init({ duration: 2000, easing: "ease-in-out", once: false });
      }, []);
  return (
    <div
      className="apply-form container mx-auto bg-gray-100 p-6 rounded-lg mb-12"
      data-aos="fade-up" 
    >
      <h1 className="text-3xl text-center text-gray-900 font-sulphur font-bold mb-4">
        Are You Ready to Apply?
      </h1>
      <p className="text-1xl text-gray-900 text-center mb-6 font-sulphur">
        Please fill out the form below and we will get in contact.
      </p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          className="w-full p-3 border outline-none border-gray-300 rounded-lg h-[40px]"
          type="text"
          name="firstname"
          placeholder="First Name"
        />
        <input
          className="w-full p-3 border outline-none border-gray-300 rounded-lg h-[40px]"
          type="text"
          name="lastname"
          placeholder="Last Name"
        />
        <input
          className="w-full p-3 border outline-none border-gray-300 rounded-lg h-[40px]"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="w-full p-3 border outline-none border-gray-300 rounded-lg h-[40px]"
          type="number"
          name="phone"
          placeholder="Phone"
        />
        <select className="w-full p-3 border outline-none border-gray-300 rounded-lg h-[50px]">
          <option value="">Select Position</option>
          <option value="customer service call">Customer Service Call</option>
          <option value="emergency response">Emergency Response</option>
          <option value="devOps support">DevOps Support</option>
        </select>
        <input
          className="w-full p-3 border border-gray-300 rounded"
          type="file"
          name="resume"
          accept="file/*"
        />
        <input
          className="w-full p-3 border outline-none border-gray-300 rounded-lg h-[40px]"
          type="text"
          name="refer"
          placeholder="Referred By"
        />
        <br />
        <button className=" w-1/3 flex justify-center px-10 mx-auto py-2 rounded-[20px_20px_20px_5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white  transition duration-300 text-sm">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
