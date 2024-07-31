import React from 'react';
import TechnologyTabs from './TechnologyTabs';

function Technology() {
  return (
    <>
    <div id="technology"></div>
    <div className="w-full h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6 mt-4 headingH1">Our Technology</h1>
      <TechnologyTabs />
    </div>
    </>
  );
}

export default Technology;
