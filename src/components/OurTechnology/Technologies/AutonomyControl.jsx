import React from 'react';
import autonomyAndControl from '../../../assets/OurTechnology/autonomyAndControl.svg';

function AutonomyControl() {
  return (
    <div className="bg-transparent flex flex-col md:flex-row items-center justify-center md:w-3/4 mx-auto p-6">
      {/* Text Section */}
      <div className="flex-1 text-white flex flex-col items-center md:items-start md:pr-12 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">Autonomy & Control</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>Complete autonomy with a self-hosted solution</li>
          <li>Maintain data privacy without sharing</li>
          <li>Scale seamlessly and pay based on usage</li>
        </ul>
      </div>
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={autonomyAndControl}
          alt="Autonomy & Control"
          className="w-1/2 md:w-full h-auto max-w-xs md:max-w-md rounded-2xl object-contain"
        />
      </div>
    </div>
  );
}

export default AutonomyControl;
