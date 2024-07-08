// src/components/Home.js
import React from 'react';
import logo from '../assets/logo.jpeg'; 
import backgroundVideo from '../assets/background.mp4'; 
const Home = () => {
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
      <div className="relative z-10 p-8 bg-white bg-opacity-50 backdrop-blur-md rounded-3xl shadow-lg text-center w-full max-w-4xl mx-auto">
      <img src={logo} alt="E-GYMKHANA Logo" className="w-32 h-32 mx-auto mb-8" />
        <h1 className="text-6xl font-extrabold text-primary font-poppins tracking-wide">
          Welcome to E-GYMKHANA IIT Patna
        </h1>
        <p className="mt-6 text-2xl text-secondary font-poppins">
          The Students E Gymkhana of IIT Patna (established in 2008) is the governing council of students consisting of the elected student representative working for the over all well being and holistic development of students in the institute.
        </p>
      </div>
    </div>
  );
};

export default Home;
