import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import HeroImg from "../../assets/HeroSection/HeroImg.png";

function Header() {
  return (
    <>
      <header
        className="bg-cover bg-center h-[800px]  items-center justify-center text-center text-white px-4"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <Navbar />
        <Hero />
      </header>
    </>
  );
}

export default Header;
