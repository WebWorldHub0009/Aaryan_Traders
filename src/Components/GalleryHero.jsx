import React from "react";
import { motion } from "framer-motion";
import galleryHero from "../assets/images/galleryhero.jpg"; // Make sure this image exists

const GalleryHero = () => {
  return (
    <section
      className="relative min-h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${galleryHero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-6 md:px-10 max-w-3xl"
      >
        {/* Quote */}
        <p className="italic text-sm md:text-base text-[#ffdf98] mb-3">
          “A glimpse into our legacy of quality materials.”
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#ffd06c] leading-tight mb-4">
          Explore Our Gallery
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-lg text-white mb-6">
          See real materials, manufacturing moments, and product collections through the lens of craftsmanship.
        </p>

        {/* Button */}
        <motion.a
          href="#gallery-section"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#a75a13] hover:bg-[#81430e] transition text-white font-medium px-6 py-3 rounded-md shadow-md"
        >
          View Gallery
        </motion.a>
      </motion.div>
    </section>
  );
};

export default GalleryHero;
