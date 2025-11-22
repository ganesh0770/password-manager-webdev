"use cllient"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    


      <div className="md:hidden p-4 bg-purple-700 flex justify-between items-center">
        <div className="text-white font-bold text-lg">Password Manager</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white bg-purple-800 px-3 py-1 rounded-lg"
        >
          Menu
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-64 bg-gray-800 text-gray-100 shadow-lg z-50">
          <nav className="flex flex-col px-4 py-6 space-y-2">
            <Link to="/" className="block px-4 py-2 rounded hover:bg-gray-700" onClick={() => setIsOpen(false)}>Dashboard</Link>
            <Link to="/vault" className="block px-4 py-2 rounded hover:bg-gray-700" onClick={() => setIsOpen(false)}>Vault / Passwords</Link>
            <Link to="/add" className="block px-4 py-2 rounded hover:bg-gray-700" onClick={() => setIsOpen(false)}>Add New Password</Link>
            <Link to="/generate" className="block px-4 py-2 rounded hover:bg-gray-700" onClick={() => setIsOpen(false)}>Password Generator</Link>
            <Link to="/categories" className="block px-4 py-2 rounded hover:bg-gray-700" onClick={() => setIsOpen(false)}>Categories / Tags</Link>
            <Link to="/security" className="block px-4 py-2 rounded hover:bg-gray-700" onClick={() => setIsOpen(false)}>Security / Reports</Link>
            <Link to="/settings" className="block px-4 py-2 rounded hover:bg-gray-700" onClick={() => setIsOpen(false)}>Settings</Link>
            <Link to="/contact" className="block px-4 py-2 rounded hover:bg-gray-700" onClick={() => setIsOpen(false)}>Contact / Support</Link>
          </nav>
          <div className="px-6 py-4 border-t border-gray-700 text-sm text-gray-400">v1.0.0</div>
        </div>
      )}

      {/* Sidebar for Desktop */}
      <div className="hidden md:flex h-screen w-64 bg-gray-800 text-gray-100 flex-col ">
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link to="/" className="block px-4 py-2 rounded hover:bg-gray-700">Dashboard</Link>
          <Link to="/vault" className="block px-4 py-2 rounded hover:bg-gray-700">Vault / Passwords</Link>
          <Link to="/add" className="block px-4 py-2 rounded hover:bg-gray-700">Add New Password</Link>
          <Link to="/generate" className="block px-4 py-2 rounded hover:bg-gray-700">Password Generator</Link>
          <Link to="/categories" className="block px-4 py-2 rounded hover:bg-gray-700">Categories / Tags</Link>
          <Link to="/security" className="block px-4 py-2 rounded hover:bg-gray-700">Security / Reports</Link>
          <Link to="/settings" className="block px-4 py-2 rounded hover:bg-gray-700">Settings</Link>
          <Link to="/contact" className="block px-4 py-2 rounded hover:bg-gray-700">Contact / Support</Link>
        </nav>
        <div className="px-6 py-4 border-t border-gray-700 text-sm text-gray-400">v1.0.0</div>
      </div>
    </>
  );
}
