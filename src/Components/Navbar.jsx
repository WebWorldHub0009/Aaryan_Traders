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

import logo from "../assets/images/logo.png"; // ✅ Logo path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: <FaHome />, href: "#home" },
    { name: "About", icon: <FaInfoCircle />, href: "#about" },
    { name: "Raw Materials", icon: <FaBoxes />, href: "#raw-materials" },
    { name: "Showcase", icon: <FaImages />, href: "#showcase" },
    { name: "Contact", icon: <FaPhoneAlt />, href: "#contact" },
    { name: "Documents", icon: <FaFileAlt />, href: "#documents" },
  ];

  return (
    <div className="w-full z-50">
      {/* Top Header */}
      <div className="bg-[#5C4033] text-white text-sm py-2 px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-y-2 md:gap-y-0">
        {/* Left - Email & Phone */}
        <div className="flex flex-wrap items-center space-x-4">
          <a
            href="mailto:Info@aaryantraders.in"
            className="flex items-center space-x-1 hover:underline transition"
          >
            <FaEnvelope className="text-xs" />
            <span>Info@aaryantraders.in</span>
          </a>
          <a
            href="tel:+919211036765"
            className="flex items-center space-x-1 hover:underline transition"
          >
            <FaPhone className="text-xs" />
            <span>+91 9211036765</span>
          </a>
        </div>

        {/* Center - Social Icons */}
        <div className="flex justify-center space-x-3 text-white text-base">
          <a
            href="https://wa.me/919211036765"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A9746E]"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A9746E]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A9746E]"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A9746E]"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A9746E]"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Right - UDYAM & GSTIN */}
        <div className="text-sm text-right whitespace-nowrap">
          <span>UDYAM-DL-06-1063552 | GSTIN: 07DEHPJ2904E1ZT</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="Aaryan Traders Logo"
                className="h-18 w-auto object-contain"
              />
            </div>

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
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-[#5C4033] text-2xl focus:outline-none"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 text-[#5C4033] hover:text-[#A9746E] font-medium transition duration-300"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
