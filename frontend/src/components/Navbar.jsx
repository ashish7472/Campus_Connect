import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.state?.userName || '';
  const userEmail = location.state?.userEmail || '';

  const handleLogout = () => {
    // Clear the user data (this can be customized based on your authentication flow)
    localStorage.removeItem('authToken');
    navigate('/');  // Redirect to login page after logout
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white py-5 px-8 flex justify-between items-center shadow-lg h-24">
      {/* Left side: CAMPUSCONNECT */}
      <h1 className="text-3xl font-extrabold tracking-wide text-white">NOLAN</h1>

      {/* Middle: Navigation menu */}
      <div className="space-x-6 hidden md:flex">
        <button className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-700 px-5 py-2 rounded-xl text-lg font-semibold">
          Home
        </button>
        <button className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-700 px-5 py-2 rounded-xl text-lg font-semibold">
          Contact
        </button>
        <button className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-700 px-5 py-2 rounded-xl text-lg font-semibold">
          About Us
        </button>
        <button className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-700 px-5 py-2 rounded-xl text-lg font-semibold">
          Connections
        </button>
      </div>

      {/* Right side: User's name and Logout button */}
      <div className="flex items-center space-x-6">
        <span className="text-lg font-medium">Welcome, {userName}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 text-white px-5 py-2 rounded-xl font-semibold text-lg"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
