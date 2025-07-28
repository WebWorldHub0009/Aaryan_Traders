import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/images/rawhero.png"; // Make sure this path is correct

const RawMaterialHero = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[90vh] w-full flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-black/40" />

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full px-6 md:px-10 py-8 flex justify-start"
      >
        <div className="w-full max-w-2xl text-left space-y-6">
          {/* Quote */}
          <p className="italic text-sm md:text-base text-[#ffdf98]">
            “Delivering trusted materials that drive quality manufacturing.”
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#ffd06c] leading-tight">
            Premium Raw Materials <br />
            For Modern Industry
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-white">
            EVA Sheets, Rubber Soles, Adhesives, PU Foam, and more – all at one place.
          </p>

          {/* Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#rawmaterialsection"
            className="inline-block bg-[#a75a13] hover:bg-[#81430e] transition text-white font-medium px-6 py-3 rounded-md shadow-md"
          >
            Explore Raw Materials
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default RawMaterialHero;
