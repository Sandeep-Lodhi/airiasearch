import React from "react";
import Header from "../components/Header/Header";
import UserSearch from "../components/UserSearch/UserSearch";
import Worriedabout from "../components/WorriedAbout/Worriedabout";
import Technology from "../components/OurTechnology/Technology";
import Values from "../components/Values/Values";
import AiSearch from "../components/AISearch/AiSearch";
import Footer from "../components/Footer/Footer";
function HomePage() {
  return (
    <>
      <Header />
      <UserSearch />
      <Worriedabout />
      <Technology />
      <Values />
      <AiSearch />
      <Footer />
    </>
  );
}

export default HomePage;
