import React from "react";
import WorriedaboutCardUP from "./WorriedaboutCardUP";
import WorriedaboutCardDown from "./WorriedaboutCardDown";

function Worriedabout() {
  return (
    <>
      <div id="Howitworks"></div>
      <div className="text-center text-white py-20 bg-[#080818]">
        <h1 className="text-4xl font-bold mb-4 headingH1">
          Worried about implementation? <br /> We've got you covered!
        </h1>
        <p className="text-lg mb-8">
          Experience a seamless end-to-end solution with simplified integration,
          ready in just minutes
        </p>
        <WorriedaboutCardUP />
        <WorriedaboutCardDown />
      </div>
    </>
  );
}

export default Worriedabout;
