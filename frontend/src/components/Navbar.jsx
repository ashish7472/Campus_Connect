import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const userName = location.state?.userName || '';

  return (
    <nav className="bg-blue-500 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">NOLAN</h1>
      <span>Welcome, {userName}</span>
    </nav>
  );
};

export default Navbar;
