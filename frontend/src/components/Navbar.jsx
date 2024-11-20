import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.state?.userName || '';

  const handleLogout = () => {
    // Clear the user data (this can be customized based on your authentication flow)
    localStorage.removeItem('authToken');
    navigate('/login');  // Redirect to login page after logout
  };

  return (
    <nav className="bg-blue-500 text-white py-4 px-8 flex justify-between items-center">
      {/* Left side: CAMPUSCONNECT */}
      <h1 className="text-2xl font-bold">CAMPUSCONNECT</h1>

      {/* Middle: Navigation menu */}
      <div className="space-x-4">
        <button className="hover:bg-blue-700 px-4 py-2 rounded">Home</button>
        <button className="hover:bg-blue-700 px-4 py-2 rounded">Contact</button>
        <button className="hover:bg-blue-700 px-4 py-2 rounded">About Us</button>
        <button className="hover:bg-blue-700 px-4 py-2 rounded">Connections</button>
      </div>

      {/* Right side: User's name and Logout button */}
      <div className="flex items-center space-x-4">
        <span>Welcome, {userName}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
