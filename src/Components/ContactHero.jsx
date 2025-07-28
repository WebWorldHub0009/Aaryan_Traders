import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import heroBg from "../assets/images/contactnew.png"; // Update this image path

const ContactHero = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[90vh] w-full flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0" />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full px-6 md:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        {/* Left: Text */}
        <div className="text-left max-w-2xl space-y-6">
          <p className="italic text-sm md:text-base text-[#ffdf98]">
            “We’re here to assist you with quick support and custom solutions.”
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Get in Touch <br />
            With <span className="text-[#ffd06c]">Aaryan Traders</span>
          </h1>

          <p className="text-white/90 text-base md:text-lg">
            Whether you’re looking for specific raw materials or have custom requirements,
            reach out to our team — we’re always ready to help.
          </p>
          <div className="">
            <a
            href="#contactsection"
            className="inline-block mt-4 px-6 py-3 rounded-md bg-[#a75a13] hover:bg-[#8f4b0f] transition text-white text-center font-medium shadow-md"
          >
            Send a Message
          </a>
          </div>
        </div>

        
      </motion.div>
    </section>
  );
};

export default ContactHero;
