import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";
import heroBg from "../assets/images/docbg.jpg"; // Or use a better documents-related image

const DocumentsHero = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[85vh] w-full flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50] z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full px-6 md:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        {/* Left Content */}
        <div className="text-left max-w-2xl space-y-6">
          <div className="flex items-center gap-3 text-[#ffd06c]">
            <FaFileAlt className="text-xl" />
            <p className="uppercase tracking-widest text-sm font-medium">Official Documents</p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Company Certifications <br />
            & Legal <span className="text-[#ffd06c]">Documents</span>
          </h1>

          <p className="text-white/90 text-base md:text-lg">
            Aaryan Traders is a government-registered and certified enterprise. You can verify our authenticity through the downloadable GST and MSME documents provided below.
          </p>

          <div>
            <a
              href="#certificatesection"
              className="cursor-pointer inline-block mt-4 px-6 py-3 rounded-md bg-[#a75a13] hover:bg-[#8f4b0f] transition text-white text-center font-medium shadow-md"
            >
              View Certificates
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DocumentsHero;
