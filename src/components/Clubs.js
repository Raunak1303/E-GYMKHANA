// src/components/Clubs.js
import React from 'react';
import backgroundVideo from '../assets/background.mp4'; 
const Clubs = () => {
  const clubs = [
    { id: 1, name: 'Club 1', description: 'Description of Club 1' },
    { id: 2, name: 'Club 2', description: 'Description of Club 2' },
    { id: 3, name: 'Club 3', description: 'Description of Club 3' },
    { id: 4, name: 'Club 4', description: 'Description of Club 4' },
    { id: 5, name: 'Club 5', description: 'Description of Club 5' },
    { id: 6, name: 'Club 6', description: 'Description of Club 6' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    <video 
      autoPlay 
      loop 
      muted 
      className="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src={backgroundVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

      {/* Content */}
      <div className="relative z-10 p-8 bg-white bg-opacity-50 backdrop-blur-md rounded-3xl shadow-lg text-center w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-primary font-poppins tracking-wide mb-8">
          Explore Clubs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clubs.map((club) => (
            <div key={club.id} className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{club.name}</h2>
              <p className="text-gray-600 mb-4">{club.description}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Explore</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
