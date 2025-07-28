import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaBoxes,
  FaImages,
  FaPhoneAlt,
  FaFileAlt,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: <FaHome />, href: "/" },
    { name: "About", icon: <FaInfoCircle />, href: "/about" },
    { name: "Raw Materials", icon: <FaBoxes />, href: "/raw-materials" },
    { name: "Showcase", icon: <FaImages />, href: "/showcase" },
    { name: "Contact", icon: <FaPhoneAlt />, href: "/contact" },
    { name: "Documents", icon: <FaFileAlt />, href: "/documents" },
  ];

  return (
    <div className="w-full z-50 relative">
      {/* Top Header - Desktop only */}
      <div className="bg-[#5C4033] text-white text-sm py-2 px-4 md:flex justify-between items-center">
        <div className="hidden md:flex space-x-4">
          <a href="mailto:Info@aaryantraders.in" className="flex items-center space-x-1 hover:underline">
            <FaEnvelope className="text-xs" />
            <span>Info@aaryantraders.in</span>
          </a>
          <a href="tel:+919211036765" className="flex items-center space-x-1 hover:underline">
            <FaPhone className="text-xs" />
            <span>+91 9211036765</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-3">
          <a href="https://wa.me/919211036765" target="_blank" rel="noreferrer" className="hover:text-[#A9746E]"><FaWhatsapp /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#A9746E]"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#A9746E]"><FaFacebookF /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#A9746E]"><FaLinkedinIn /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#A9746E]"><FaTwitter /></a>
        </div>
        <div className="text-sm text-right whitespace-nowrap">
          UDYAM-DL-06-1063552 | GSTIN: 07DEHPJ2904E1ZT
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="shadow-xl py-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <img src={logo} alt="Aaryan Traders Logo" className="h-16 w-auto object-contain" />

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center space-x-1 text-[#5C4033] hover:text-[#A9746E] font-medium transition duration-300"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)} className="text-[#5C4033] text-2xl">
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ Mobile Sliding Panel */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Row: Logo & Close */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-300">
          <img src={logo} alt="Logo" className="h-14" />
          <button onClick={() => setMenuOpen(false)} className="text-[#5C4033] text-2xl">
            <FaTimes />
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col space-y-5 px-6 py-4 border-b border-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center space-x-2 text-[#5C4033] hover:text-[#A9746E] font-medium"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Contact & Info */}
        <div className="px-6 py-4 space-y-2 text-sm text-gray-700">
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <a href="mailto:Info@aaryantraders.in" className="hover:underline">Info@aaryantraders.in</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <a href="tel:+919211036765" className="hover:underline">+91 9211036765</a>
          </div>
          <div className="pt-2 text-xs text-gray-600">
            <p>UDYAM-DL-06-1063552</p>
            <p>GSTIN: 07DEHPJ2904E1ZT</p>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
