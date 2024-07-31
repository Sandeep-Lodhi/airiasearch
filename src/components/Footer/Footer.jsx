import React from "react";
import Logo from "../../assets/logo.svg"; // Replace with the actual path to your logo image
import Footer2 from "./Footer2 ";

const Footer = () => {
  return (
    <>
      <section className="container mx-auto px-4 mt-20">
        <footer className="w-full bg-transparent text-white py-4">
          <div className="container mx-auto flex flex-wrap justify-between items-center">
            <div className="w-full sm:w-auto mb-4 sm:mb-0">
              <img src={Logo} alt="Logo" className="h-12" />
            </div>
            <div className="w-full sm:w-auto flex flex-wrap justify-center sm:justify-end space-x-4">
              <a
                href="#Howitworks"
                className="hover:text-gray-400 transition duration-300"
              >
                How it works
              </a>
              <a
                href="#technology"
                className="hover:text-gray-400 transition duration-300"
              >
                Technology
              </a>
              <a
                href="#values"
                className="hover:text-gray-400 transition duration-300"
              >
               Values
              </a>
              <a
                href="/blog"
                className="hover:text-gray-400 transition duration-300"
              >
                Blog
              </a>
              <a
                href="/careers"
                className="hover:text-gray-400 transition duration-300"
              >
                Careers
              </a>
            </div>
          </div>
        </footer>
        <hr />
        <Footer2 />
      </section>
    </>
  );
};

export default Footer;
