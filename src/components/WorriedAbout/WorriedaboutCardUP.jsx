import React from "react";
import EffortlessIntegrationImg from "../../assets/WorriedAbout/EffortlessIntegrationImg.svg"; // Replace with your image path
import IncrediblyFlexibleImg from "../../assets/WorriedAbout/IncrediblyFlexibleImg.svg"; // Replace with your image path

function WorriedaboutCardUP() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-10 container mx-auto px-4">
      {/* Card 1 */}
      <div className="bg-card-gradient border border-card-border from-gray-800 to-gray-900 rounded-2xl p-6 flex flex-col md:flex-row justify-between h-auto md:h-72 w-full md:w-3/4 mb-4 hover:bg-card-gradient-hover transition-all">
      <div className="text-white flex-1 mb-6 md:mb-0">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
          Effortless Integration
        </h1>
        <p className="text-lg md:text-xl text-center md:text-left">
          Ready to use in just three simple steps. It's as easy as Get.Set.Go.
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          src={EffortlessIntegrationImg}
          alt="Effortless Integration"
          className="w-full h-auto max-w-xs md:max-w-full object-cover rounded-2xl"
        />
      </div>
    </div>

      {/* Card 2 */}
      <div className="bg-card-gradient border border-card-border from-gray-800 to-gray-900  rounded-2xl p-6 flex flex-col justify-between items-start h-72 w-full md:w-1/2 hover:bg-card-gradient-hover transition-all">
        <div className="text-white">
          <h1 className="text-2xl font-bold mb-4 text-left">
            Incredibly Flexible
          </h1>
          <p className="text-lg mb-4 text-left">
            Integrates smoothly with all tech stacks and server infrastructure
          </p>
        </div>
        <div className="w-full mt-auto flex justify-end">
          <img
            src={IncrediblyFlexibleImg}
            alt="Incredibly Flexible"
            className="w-46 h-36 object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default WorriedaboutCardUP;
