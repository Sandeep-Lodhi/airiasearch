import React from 'react';
import vision from '../../assets/Values/vision.svg';
import mission from '../../assets/Values/Mission.svg';
import values from '../../assets/Values/Values.svg';

// Card data
const cardData = [
  {
    title: "Our Vision",
    description: "To simplify technology and making it usable and accessible to everyone in the world",
    image: vision // Replace with actual image paths
  },
  {
    title: "Our Mission",
    description: "To help users build, grow and scale adapting to scalable and affordable technology",
    image: mission // Replace with actual image paths
  },
  {
    title: "Our Values",
    description: "We're obsessed with ownership, integrity and agility.",
    image: values // Replace with actual image paths
  }
];

const ValueCards = () => {
  return (
    <div className="container mx-auto flex flex-col sm:flex-row sm:flex-no-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="w-full md:w-1/3 bg-transparent border-transparent border p-4 flex flex-col items-start"
        >
          <img src={card.image} alt={card.title} className="w-25 h-25 mb-4" />
          <h1 className="text-lg font-bold mb-2">{card.title}</h1>
          <p className="text-base text-left">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ValueCards;
