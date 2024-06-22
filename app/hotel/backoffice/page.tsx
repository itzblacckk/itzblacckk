"use client"
import React, { useState } from 'react';

const EatofyApp: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const menuItems = [
    'Hotel Management',
    'Setting',
    'Order History',
    'CRM Management',
    'Menu Categories',
    'Menu Item',
    'Menu Modify',
    'Payment',
    'Inventory',
    'Subscribe Management',
    'Expenses Management',
    'Supplier Management',
    'Table Management',
    'Staff Scheduling',
    'Event Booking',
    'Order Management',
  ];

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-screen h-screen p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-red-500 text-2xl font-bold">EATOFY</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for food, coffee, etc..."
              className="border border-zinc-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-zinc-300"
            />
            <img
              src=""
              alt="search"
              className="absolute left-3 top-2.5 w-4 h-4"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`border rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer ${
                activeIndex === index ? 'bg-red-500 text-white' : 'bg-white text-zinc-700 border-red-500'
              }`}
              onClick={() => handleItemClick(index)}
            >
              <img
                src="https://placehold.co/48x48"
                alt={item}
                className="w-12 h-12 mb-2"
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EatofyApp;
