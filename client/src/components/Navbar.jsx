import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {Button} from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">DF</span>
          </div>
          <span className="text-2xl font-bold text-blue-600">DonateFlow</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </a>
          
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button className="border border-blue-600 text-blue-600 hover:bg-blue-100">
            Donor Login
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800">
            Admin Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
            Footer
          </a>
          <div className="flex flex-col space-y-2 pt-2">
            <Button className="border border-blue-600 text-blue-600 hover:bg-blue-100 w-full">
              Donor Login
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full hover:from-blue-600 hover:to-blue-800">
              Admin Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
