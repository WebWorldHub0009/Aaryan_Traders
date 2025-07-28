// components/AboutHero.jsx
import React from "react";
import { motion } from "framer-motion";
import aboutBg from "../assets/images/newaboutbg.png"; // Use a premium photo here

export default function AboutHero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[90vh] "
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  z-0" />

      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white px-6 md:px-20 py-20 flex flex-col md:flex-row items-center gap-12 max-w-7xl w-full"
      >
        {/* Left Text Section */}
        <div className="flex-1 max-w-xl">
          {/* Quote Block */}
          <div className="border-l-4 border-yellow-700 pl-4 mb-4">
            <p className="text-sm md:text-base italic text-yellow-600 tracking-wide">
              “Empowering businesses with reliable solutions since 2025.”
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-black">
            Trusted Partner in{" "}
            <span className="text-yellow-900">Material Handling</span> &{" "}
            <span className="text-yellow-900">Raw Materials</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed">
            At Aaryan Traders Delhi, we deliver smart solutions to elevate your business operations. 
            From premium raw materials to efficient handling systems, we're with you every step of the way.
          </p>

          {/* CTA Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/raw-materials"
            className="inline-block bg-yellow-900 hover:bg-yellow-800 transition text-white font-medium px-6 py-3 rounded-md shadow-md"
          >
            Explore Our Materials
          </motion.a>
        </div>

        {/* Right Highlight Block */}
        {/* <div className="flex-1 max-w-md w-full">
          <div className="bg-white/5 border border-yellow-900 rounded-3xl p-6 backdrop-blur-md shadow-xl">
            <ul className="space-y-4 text-gray-100 text-sm">
              <li>
                ✅ Serving Delhi NCR since <span className="text-yellow-500 font-semibold">2025</span>
              </li>
              <li>
                ✅ Located at the heart of <span className="text-yellow-500 font-semibold">Rohini Sector 5</span>
              </li>
              <li>
                ✅ Focused on <span className="text-yellow-500 font-semibold">material handling excellence</span>
              </li>
              <li>
                ✅ Trusted by <span className="text-yellow-500 font-semibold">hundreds of businesses</span>
              </li>
            </ul>
          </div>
        </div> */}
      </motion.div>
    </section>
  );
}
