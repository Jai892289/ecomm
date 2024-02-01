"use client"

import React, { useState } from 'react';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">Your Logo</div>
        <div className="lg:hidden">
          <button
            className="text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            Menu
          </button>
        </div>
        <div className={`lg:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          {/* This will be shown on screens larger than lg (large) */}
          <a href="#" className="text-white hover:text-gray-300 " >
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Services
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Page;

