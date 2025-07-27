import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/collection1.jpg";
import img2 from "../assets/images/collection2.jpg";
import img3 from "../assets/images/collection3.jpg";
import img4 from "../assets/images/collection4.jpg";
import img5 from "../assets/images/collection5.jpg";
import img6 from "../assets/images/collection6.jpg";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CollectionAbout = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-12 py-20 bg-white">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
          Material Handling. Elevated.
        </h2>
        <p className="text-[#8B5E3C] text-lg md:text-xl tracking-wider">
          Industrial-grade solutions designed for real-world demands.
        </p>
      </motion.div>

      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <img src={img1} alt="Equipment 1" className="w-full h-[300px] object-cover rounded-md shadow-md" />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="bg-white flex flex-col items-center justify-center text-center p-6 rounded-md shadow-md min-h-[300px] border border-[#8B5E3C]"
        >
          <h2 className="text-lg font-bold uppercase mb-2 text-[#1A1A1A]">Premium Tools & Supplies</h2>
          <p className="text-base text-[#333] mb-3 tracking-wider">
            From leather boards to adhesives — everything you need under one roof.
          </p>
          <Link to="/contact">
            <button className="cursor-pointer font-semibold bg-white border border-[#1A1A1A] text-[#1A1A1A] px-5 py-2 text-xs uppercase hover:bg-[#1A1A1A] hover:text-white transition rounded-full">
              Get Enquiry
            </button>
          </Link>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
          <img src={img2} alt="Equipment 2" className="w-full h-[300px] object-cover rounded-md shadow-md" />
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <img src={img3} alt="Equipment 3" className="w-full h-[220px] object-cover rounded-md shadow-md" />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="bg-white flex flex-col items-center justify-center text-center p-6 rounded-md shadow-md min-h-[220px] border border-[#8B5E3C]"
        >
          <h2 className="text-lg font-bold uppercase mb-2 text-[#1A1A1A]">Trusted Since 2025</h2>
          <p className="text-base text-[#333] mb-3 tracking-wider">
            Supplying reliable handling equipment to Delhi’s finest industries.
          </p>
          <Link to="/gallery">
            <button className="bg-white text-[#1A1A1A] border border-[#1A1A1A] font-semibold px-5 py-2 text-xs uppercase hover:bg-[#1A1A1A] hover:text-white transition rounded-full">
              View Showcase
            </button>
          </Link>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
          <img src={img4} alt="Equipment 4" className="w-full h-[220px] object-cover rounded-md shadow-md" />
        </motion.div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <motion.img
            src={img5}
            alt="Equipment 5"
            className="w-full h-[280px] object-cover rounded-md shadow-md"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <motion.img
            src={img6}
            alt="Equipment 6"
            className="w-full h-[280px] object-cover rounded-md shadow-md"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          />
        </div>
        <motion.div
          className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-md shadow-md min-h-[280px] border border-[#8B5E3C]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h2 className="text-lg font-bold uppercase mb-2 text-[#1A1A1A]">Wholesale & Custom Orders</h2>
          <p className="text-base text-[#333] tracking-wider">
            Serving businesses of all sizes — custom options available on request.
          </p>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Link to="/about">
          <button className="cursor-pointer px-8 py-3 bg-white text-[#1A1A1A] border border-[#1A1A1A] font-semibold rounded-full hover:bg-[#1A1A1A] hover:text-white transition duration-300 tracking-wide shadow-lg">
            Learn More About Us
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default CollectionAbout;
