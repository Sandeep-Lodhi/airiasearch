import React from "react";
import './Hero.css';

function Hero() {
  return (
    <>
      <section>
        <div className="p-8 rounded-md">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 heroH1">
            AI Search that <br /> reads  <span>intent</span>
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 heroH2">
            Airia is an enterprise search engine designed to help users find
            exactly <br /> what they need without the hassle of using the right
            keywords.
          </h2>
          <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Request Demo
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
