import React from 'react';
import security from '../../../assets/OurTechnology/security.svg';

function SecurityPrivacy() {
  return (
    <div className="bg-transparent flex flex-col md:flex-row items-center justify-center md:w-3/4 mx-auto p-6">
      {/* Text Section */}
      <div className="flex-1 text-white flex flex-col items-center md:items-start md:pr-12 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">Security and Privacy</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>Advanced encryption technology safeguards your data at every level</li>
          <li>Robust security protocols ensure data integrity and confidentiality</li>
          <li>Single tenancy ensures no database sharing, guaranteeing data security and privacy</li>
        </ul>
      </div>
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={security}
          alt="Security and Privacy"
          className="w-1/2 md:w-full h-auto max-w-xs md:max-w-md rounded-2xl object-contain"
        />
      </div>
    </div>
  );
}

export default SecurityPrivacy;
