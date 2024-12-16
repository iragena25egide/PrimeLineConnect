import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 ,once:true});
  }, []);

  const teamMembers = [
    {
      name: "MUGISHA Dalton",
      role: "CEO",
      img: "/image/experience.png", 
    },
    {
      name: "MUNEZA Batizo",
      role: "CTO",
      img: "/image/exp.png", 
    },
    {
      name: "NTABASHWA Kid",
      role: "Lead Developer",
      img: "/image/lg5.webp", 
    },
   
  ];

  return (
    <div className="mt-24 p-4 bg-gray-50">
      <h1 className="text-3xl font-poetsen text-gray-900 text-center mb-8">
        Meet Our Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            data-aos="fade-up"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-poetsen text-gray-900">{member.name}</h2>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
