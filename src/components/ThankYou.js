import React from 'react';
import backgroundVideo from '../assets/background.mp4'; 

const ThankYou = () => {
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
      <div className="relative z-10 p-8 bg-white bg-opacity-50 backdrop-blur-md rounded-3xl shadow-lg text-center w-full max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-primary font-poppins mt-12">
          Thank you for showing interest in E-Gymkhana.
        </h1>
        <p className="mt-4 text-lg text-secondary font-poppins">
          We will get back to you after proper verification of your application and acceptance by your club/community.
        </p>
        <p className="mt-4 text-lg text-secondary font-poppins">
          While you wait, take a look at our website.
        </p>
        <a href="/" className="inline-block mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out">
          Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
