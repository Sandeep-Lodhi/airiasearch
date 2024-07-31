import React from "react";
import SearchCard from "./SearchCard";
import SearchComponent from "../Header/SearchComponent";

function UserSearch() {
  return (
    <>
        <SearchComponent />
       <div className="upSape"></div>
      <div className="text-center text-white bg-[#080818]">
        <h1 className="text-4xl font-bold mb-4 headingH1">
          Give your search the power of AI
        </h1>
        <p className="text-lg mb-8">
          Users have to work less, when search works for them.
        </p>
        <SearchCard />
      </div>
    </>
  );
}

export default UserSearch;
