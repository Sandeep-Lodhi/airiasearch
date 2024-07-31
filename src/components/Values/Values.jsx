import React from "react";
import ValueCards from "./ValueCards";
import BackgroundGrid from "../../assets/Values/BackgroundGrid.svg";

function Values() {
  return (
    <>
    <div id="values"></div>
      <section className="flex justify-center items-center min-h-screen bg-[#080818]">
        <div className="w-full max-w-5xl bg-transparent rounded-3xl border border-gray-300 p-8 bg-[#08081a] text-white" style={{ backgroundImage: `url(${BackgroundGrid})`, fontFamily:"Bricolage Grotesque"}}>
          <h1 className="text-4xl font-semibold mb-4 text-left">
            Join us on a journey of Innovation
          </h1>
          <p className="text-lg mb-8 text-left">
            Sed id lacus eu nibh molestie imperdiet sed vitae elit. Sed
            viverra rutrum velit vestibulum sollicitudin. Duis pretium rutrum
            tellus, a congue urna cursus ut. Sed malesuada aliquam est, at
            fringilla tortor vulputate ac. Proin in laoreet neque. Etiam
            placerat rutrum mauris, sit amet dictum nisi gravida fringilla.
            Nullam laoreet nulla quis ex vehicula fringilla. Integer
            fringilla,
          </p>
          <ValueCards />
        </div>
      </section>
        <div className="downshape -z-10" style={{marginTop:'-280px'}}></div>
    </>
  );
}

export default Values;
