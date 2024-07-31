import React from 'react';
import TwitterIcon from '../../assets/Footer/x.png'
import LinkedInIcon from '../../assets/Footer/linkedin.png'

const Footer2 = () => {
  return (
    <footer className="w-full bg-transparent text-white py-4 mb-10">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center sm:text-left">
          <p>© All rights reserved.</p>
        </div>
        <div className="w-full sm:w-auto flex justify-center sm:justify-end space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition duration-300">
            <img src={TwitterIcon} alt="Twitter" className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition duration-300">
            <img src={LinkedInIcon} alt="LinkedIn" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
