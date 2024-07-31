import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import './Navbar.css';
const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => setSidebarVisible(true);
  const hideSidebar = () => setSidebarVisible(false);

  return (
    // <header> shadow-md
      <nav className="bg-transparent  container mx-auto">
        <ul className="w-full flex justify-end items-center list-none">
          <li className="mr-auto p-2">
            <img src={logo} alt="LogoImg" id="logo" width="100" height="40" />
          </li>
          <li className="hidden md:flex p-2">
            <a href="#Howitworks" className="flex items-center text-[#C9C9C9] px-6 h-full">How it Works</a>
          </li>
          <li className="hidden md:flex p-2">
            <a href="#technology" className="flex items-center text-[#C9C9C9] px-6 h-full">Technology</a>
          </li>
          <li className="hidden md:flex p-2">
            <a href="#values" className="flex items-center text-[#C9C9C9] px-6 h-full">Values</a>
          </li>
          <li className="hidden md:flex p-2">
            <a href="/blog" className="flex items-center text-[#C9C9C9] px-6 h-full">Blog</a>
          </li>
          <li className="hidden md:flex p-2">
            <a href="/careers" className="flex items-center text-[#C9C9C9] px-6 h-full">Careers</a>
          </li>
          <li className="hidden md:flex p-2">
            <button className="bg-transparent border-solid border-2 border-dark-600 text-[#C9C9C9] font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-black">Get Started</button>
          </li>
          <li className="md:hidden p-2" onClick={showSidebar}>
            <a href="#" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" fill="white" />
              </svg>
            </a>
          </li>
        </ul>
        {sidebarVisible && (
          <ul className="fixed top-0 right-0 h-screen w-64 bg-white bg-opacity-15 backdrop-blur-md shadow-lg flex flex-col list-none">
            <li className="p-2" onClick={hideSidebar}>
              <a href="#" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
                  <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" fill="white" />
                </svg>
              </a>
            </li>
            <li className="p-2">
              <a href="#Howitworks" className="w-full flex items-center text-[#C9C9C9] px-6 py-2 hover:bg-gray-800">How it Works</a>
            </li>
            <li className="p-2">
              <a href="#technology" className="w-full flex items-center text-[#C9C9C9] px-6 py-2 hover:bg-gray-800">Technology</a>
            </li>
            <li className="p-2">
              <a href="#values" className="w-full flex items-center text-[#C9C9C9] px-6 py-2 hover:bg-gray-800">Values</a>
            </li>
            <li className="p-2">
              <a href="/blog" className="w-full flex items-center text-[#C9C9C9] px-6 py-2 hover:bg-gray-800">Blog</a>
            </li>
            <li className="p-2">
              <a href="/careers" className="w-full flex items-center text-[#C9C9C9] px-6 py-2 hover:bg-gray-800">Careers</a>
            </li>
            <li className="p-2">
              <button className="w-full bg-transparent border-solid border-2 border-dark-600  text-[#C9C9C9] px-4 py-2 rounded-full hover:bg-gray-800">Get Started</button>
            </li>
          </ul>
        )}
      </nav>
    // </header>
  );
};

export default Navbar;
