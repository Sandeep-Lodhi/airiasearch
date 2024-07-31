import React from "react";
import AISearchImg from "../../assets/AISearch/AISearchImg.jpg"; // Replace with the actual path to your background image

const AiSearchCard = () => {
  return (
    <div
      className="w-full max-w-4xl mx-auto p-8 bg-cover bg-center rounded-lg flex flex-col md:flex-row items-center"
      style={{ backgroundImage: `url(${AISearchImg})` }}
    >
      <div className="flex-1 text-left text-white mb-4 md:mb-0">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 headingH1">
          Try the AI search that's <br className="hidden md:block" /> beyond the
          keywords
        </h1>
        <p className="text-base md:text-lg">
          Tailored to handhold the customers throughout the journey
        </p>
      </div>
      <div className="flex-shrink-0 md:ml-8">
        <button className="bg-white text-black py-2 px-6 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300">
          Request Demo
        </button>
      </div>
    </div>
  );
};

export default AiSearchCard;
