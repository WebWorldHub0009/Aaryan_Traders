import React from "react";
import { FaEnvelope, FaPhoneAlt, FaBuilding, FaQuoteLeft } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OwnerCard = () => {
  return (
    <section className="bg-gradient-to-br from-[#fff8ed] to-[#fff6dc] py-16 px-4 sm:px-8 md:px-14 relative overflow-hidden">
      {/* Top Quote Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center mb-12 px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2B1F]">
          “Leadership Rooted in Quality & Vision”
        </h2>
        <p className="mt-3 text-[#a75a13] text-base sm:text-lg max-w-2xl mx-auto">
          Meet the visionary behind Aaryan Traders — a name committed to excellence in material handling and shoe raw material supply.
        </p>
      </motion.div>

      {/* Main Card Section */}
      <div className="max-w-7xl mx-auto rounded-3xl bg-white/70 backdrop-blur-lg border border-[#f5e3d2] shadow-2xl p-8 md:p-12 flex flex-col lg:flex-row gap-10">
        {/* Left Column */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12 space-y-6"
        >
          {/* Profile Card */}
          <div className="bg-[#fff9f3] rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-[#a75a13] text-white rounded-full text-3xl">
                <MdPerson />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#3D2B1F]">Vikaram Jain</h2>
                <p className="text-sm text-[#a75a13]">Founder & Director</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-[#fff9f3] rounded-xl p-6 shadow-md space-y-4">
            <h3 className="text-lg font-semibold text-[#3D2B1F]">Contact Details</h3>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaEnvelope className="text-[#a75a13]" /> info@aaryantraders.in
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaPhoneAlt className="text-[#a75a13]" /> +91 92110 36765
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaBuilding className="text-[#a75a13]" /> DDA Market, Rohini Sector 5, Delhi
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-7/12 space-y-8"
        >
          {/* Message / Quote */}
          <div className="relative p-6 sm:p-8 bg-white border-l-4 border-[#a75a13] rounded-xl shadow-lg">
            <FaQuoteLeft className="absolute text-3xl text-[#a75a13] opacity-20 top-3 left-3" />
            <p className="text-base sm:text-lg italic text-[#5a4632] leading-relaxed">
              “At Aaryan Traders, our commitment is to deliver the finest material handling
              solutions and raw materials tailored for both small businesses and large
              enterprises. We strive to make quality affordable, accessible, and timely.”
            </p>
            <p className="text-right mt-4 text-sm text-[#a75a13] font-semibold">
              — Vikaram Jain
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-14 items-center">
            <Link to="/contact">
              <button className="cursor-pointer bg-[#a75a13] hover:bg-[#81430e] text-white px-6 py-2 rounded-md transition">
                Contact Owner
              </button>
            </Link>
            <Link to="/raw-materials">
              <button className="cursor-pointer bg-white border border-[#a75a13] text-[#a75a13] hover:bg-[#fff2e6] px-6 py-2 rounded-md transition">
                Explore Products
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OwnerCard;
