import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // أيقونات من مكتبة lucide-react
import logo from "../../public/1.webp"; // عدّل المسار حسب الصورة

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Cheeseter Logo" className="h-8" />
          <span className="text-xl font-bold text-red-600">Cheeseter</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-red-600 transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-red-600 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-gray-700 hover:text-red-600 transition"
              onClick={toggleMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            className="block bg-red-600 text-white px-4 py-2 rounded text-center hover:bg-red-700 transition"
            onClick={toggleMenu}
          >
            Order Now
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
