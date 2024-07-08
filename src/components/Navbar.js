import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  return (
    <nav className="bg-purple-800 p-4 flex items-center justify-between shadow-md">
      <img src={logo} alt="E-GYMKHANA Logo" className="h-12 w-auto" />

      <div className="flex space-x-6">
        <Link
          to="/"
          className="text-white hover:text-yellow-300 transition duration-300 font-medium py-2 px-3 rounded-md"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white hover:text-yellow-300 transition duration-300 font-medium py-2 px-3 rounded-md"
        >
          About Us
        </Link>
        <Link
          to="/clubs"
          className="text-white hover:text-yellow-300 transition duration-300 font-medium py-2 px-3 rounded-md"
        >
          Clubs
        </Link>
        <Link
          to="/teams"
          className="text-white hover:text-yellow-300 transition duration-300 font-medium py-2 px-3 rounded-md"
        >
          Teams
        </Link>
        <Link
          to="/events"
          className="text-white hover:text-yellow-300 transition duration-300 font-medium py-2 px-3 rounded-md"
        >
          Events
        </Link>
        <Link
          to="/register"
          className="text-white hover:text-yellow-300 transition duration-300 font-medium py-2 px-3 rounded-md"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
