import React from 'react';
import InnovationImg from "../../../assets/OurTechnology/innovation.svg";

function Innovation() {
  return (
    <div className="bg-transparent flex flex-col md:flex-row items-center justify-center md:w-3/4 mx-auto p-6">
      {/* Text Section */}
      <div className="flex-1 text-white flex flex-col items-center md:items-start md:pr-12 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Innovation</h2>
        <p className="text-lg mb-4 text-center md:text-left">Explore Our Cutting-Edge Core Technology:</p>
        <ul className="list-disc pl-5 mt-2 text-center md:text-left">
          <li>Search Engine: Redefining search dynamics</li>
          <li>Database: Scalable, secure, and self-hosted</li>
          <li>Pipeline: Seamlessly integrating data flows</li>
          <li>LLM: Developing our proprietary Large Language Model</li>
        </ul>
      </div>
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={InnovationImg}
          alt="Innovation"
          className="w-1/2 md:w-full h-auto max-w-xs md:max-w-md rounded-2xl object-contain"
        />
      </div>
    </div>
  );
}

export default Innovation;
