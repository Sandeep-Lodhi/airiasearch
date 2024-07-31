import React from 'react';
import aiml from '../../../assets/OurTechnology/aiANDml.svg';

function AIMachineLearning() {
  return (
    <div className="bg-transparent flex flex-col md:flex-row items-center justify-between w-full px-4 md:w-3/4 mx-auto py-8">
      {/* Text Section */}
      <div className="flex-1 text-white flex flex-col items-center md:items-start md:pr-12 mb-6 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">AI & Machine Learning</h2>
        <ul className="list-disc pl-5 mt-2 text-sm md:text-base text-center md:text-left space-y-2">
          <li>AI and machine learning foundation for enhanced efficiency and superior outputs</li>
          <li>Integrating open-source and custom AI solutions for advanced capabilities</li>
          <li>Constant learning models to improve performance as you grow</li>
        </ul>
      </div>
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={aiml}
          alt="AI and Machine Learning"
          className="w-1/2 md:w-full h-auto max-w-xs md:max-w-md rounded-2xl object-contain"
        />
      </div>
    </div>
  );
}

export default AIMachineLearning;
