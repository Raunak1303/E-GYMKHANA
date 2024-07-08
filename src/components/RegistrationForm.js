import React from 'react';
import backgroundVideo from '../assets/background.mp4'; 
import logo from '../assets/logo.jpeg'; 
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/thank-you');
  };

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
        <h1 className="text-4xl font-extrabold text-primary font-poppins tracking-wide">
          Fill this form to submit your application with us
        </h1>
        <form className="mt-6 space-y-4 flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="text-left w-full max-w-md">
            <label className="block text-xl font-medium text-black">
              Full Name:
              <input type="text" className="mt-2 p-2 border border-gray-300 rounded w-full" required />
            </label>
          </div>
          <div className="text-left w-full max-w-md">
            <label className="block text-xl font-medium text-black">
              Roll Number:
              <input type="text" className="mt-2 p-2 border border-gray-300 rounded w-full" required />
            </label>
          </div>
          <div className="text-left w-full max-w-md">
            <label className="block text-xl font-medium text-black">
              Contact Number:
              <input type="text" className="mt-2 p-2 border border-gray-300 rounded w-full" required />
            </label>
          </div>
          <div className="text-left w-full max-w-md">
            <label className="block text-xl font-medium text-black">
              Course Category:
              <select className="mt-2 p-2 border border-gray-300 rounded w-full">
                <option>UG-Hybrid</option>
                <option>PG-Hybrid</option>
              </select>
            </label>
          </div>
          <div className="text-left w-full max-w-md">
            <label className="block text-xl font-medium text-black">
              Course Name:
              <select className="mt-2 p-2 border border-gray-300 rounded w-full">
                <option>BSc CSDA</option>
                <option>BBA</option>
                <option>MSC</option>
                <option>MBA</option>
              </select>
            </label>
          </div>
          <div className="text-left w-full max-w-md">
            <label className="block text-xl font-medium text-black">
              Admission Year:
              <select className="mt-2 p-2 border border-gray-300 rounded w-full">
                <option>2023</option>
                <option>2024</option>
              </select>
            </label>
          </div>
          <div className="text-left w-full max-w-md">
            <label className="block text-xl font-medium text-black">
              Interested Domain:
              <select className="mt-2 p-2 border border-gray-300 rounded w-full">
                <option>Club1</option>
                <option>Club2</option>
                <option>Club3</option>
              </select>
            </label>
          </div>
          <div className="text-left w-full max-w-md">
            <label className="block text-xl font-medium text-black">
              Hobby/Passion:
              <input type="text" className="mt-2 p-2 border border-gray-300 rounded w-full" required />
            </label>
          </div>
          <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded w-40 text-lg font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
