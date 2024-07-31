import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Mock search function, replace with actual search logic
    const results = ["Result 1", "Result 2", "Result 3"].filter((result) =>
      result.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <div className="flex justify-center" style={{marginTop:'-100px'}}>
        <div className="p-4 bg-black container mx-auto  rounded">
          <div className="flex items-center bg-[#161B28] rounded-full shadow-md p-2">
            <FaSearch className="text-gray-500 ml-2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="bg-[#161B28] flex-grow p-2 rounded-full outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white rounded-full px-4 py-2 ml-2"
            >
              Search
            </button>
          </div>
          <div className="mt-4">
            {searchResults.map((result, index) => (
              <div
                key={index}
                className="bg-[#43454F] text-white bg-black-100 p-2  rounded-lg mb-2 shadow-sm"
              >
                {result}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
