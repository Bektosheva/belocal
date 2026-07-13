import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🌍</span>
          <h1 className="text-2xl font-bold text-primary-500">BeLocal</h1>
        </div>

        <button
          className="md:hidden text-primary-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex gap-8 absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 flex-col md:flex-row`}
        >
          <a href="#features" className="text-gray-700 hover:text-primary-500 transition">
            Features
          </a>
          <a href="#regions" className="text-gray-700 hover:text-primary-500 transition">
            Regions
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-primary-500 transition">
            How It Works
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-primary-500 transition">
            Pricing
          </a>
          <a href="#contact" className="btn-primary text-center">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}