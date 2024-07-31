import React from 'react';
import EasyToUseImg from '../../assets/SearchCard/EasyToUseImg.svg'; // Replace with your image path
import FastImg from '../../assets/SearchCard/FastImg.svg'; // Replace with your image path
import AccurateImg from '../../assets/SearchCard/AccurateImg.svg'; // Replace with your image path

const SearchCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-10 container mx-auto">
      {/* Card 1 */}
      <div className="bg-card-gradient border border-card-border rounded-2xl p-6 flex flex-col justify-between h-60 hover:bg-card-gradient-hover transition-all">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-white text-left">Easy to use</h2>
          <p className="text-white text-left">User friendly interface with intuitive <br /> navigation</p>
        </div>
        <img src={EasyToUseImg} alt="Easy to use" className="w-24 h-24 ms-auto" />
      </div>

      {/* Card 2 */}
      <div className="bg-card-gradient border border-card-border rounded-2xl p-6 flex flex-col justify-between h-60 hover:bg-card-gradient-hover transition-all">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-white text-left">Fast</h2>
          <p className="text-white text-left">Lightning fast speed showing instant <br /> results at a click</p>
        </div>
        <img src={FastImg} alt="Fast" className="w-24 h-24 ms-auto" />
      </div>

      {/* Card 3 */}
      <div className="bg-card-gradient border border-card-border rounded-2xl p-6 flex flex-col justify-between h-60 hover:bg-card-gradient-hover transition-all">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-white text-left">Accurate</h2>
          <p className="text-white text-left">Pin point accuracy to find exactly what the <br /> customers are looking for</p>
        </div>
        <img src={AccurateImg} alt="Accurate" className="w-24 h-24 ms-auto" />
      </div>
    </div>
  );
};

export default SearchCard;
