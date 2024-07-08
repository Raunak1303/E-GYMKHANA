import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import RegistrationForm from './components/RegistrationForm';
import ThankYou from './components/ThankYou';
import Clubs from './components/Clubs';  

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/teams" element={<div>Teams</div>} />
        <Route path="/events" element={<div>Events</div>} />
      </Routes>
    </Router>
  );
};

export default App;