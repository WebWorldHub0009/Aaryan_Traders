import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "../assets/images/herobg.png";
import image1 from "../assets/images/hero/hero1.png";
import image2 from "../assets/images/hero/hero3.png";
import image3 from "../assets/images/hero/hero4.png";
import image4 from "../assets/images/hero/hero5.png";
import { Link } from "react-router-dom";

const headings = [
  { main: "Efficient", highlight: " Lifting" },
  { main: "Durability in", highlight: " Design" },
  { main: "Reliable", highlight: " Handling" },
  { main: "Crafted for", highlight: " Industry" },
];

const images = [image1, image2, image3, image4];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const fullText = headings[index].main + headings[index].highlight;
  const splitIndex = headings[index].main.length;

  useEffect(() => {
    let timeout;

    if (isTyping && charIndex < fullText.length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);
    } else if (isTyping && charIndex === fullText.length) {
      timeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000); // pause before transitioning
    } else if (!isTyping) {
      timeout = setTimeout(() => {
        const nextIndex = (index + 1) % headings.length;
        setText("");
        setCharIndex(0);
        setIndex(nextIndex);
        setIsTyping(true);
      }, 1000); // slight gap before next typing starts
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, index, fullText]);

  const normalPart = text.slice(0, Math.min(splitIndex, text.length));
  const highlightedPart = text.length > splitIndex ? text.slice(splitIndex) : "";

  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat min-h-[90vh] flex flex-col md:flex-row"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#572c081a] z-0" />

      {/* Text Section */}
      <div className="w-full md:w-[50%] px-6 md:px-16 py-16 flex flex-col justify-center z-10">
        <motion.span
          className="uppercase tracking-widest text-sm text-black font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Aaryan Traders | Material Handling Experts
        </motion.span>

        <h1 className="text-3xl md:text-6xl font-extrabold text-[#5e3200] mt-4 min-h-[110px] md:min-h-[130px] leading-tight">
          {normalPart}
          <span className="bg-gradient-to-r from-[#5e3200] to-[#863c00] bg-clip-text text-transparent">
            {highlightedPart}
          </span>
          <span className="text-[#5e3200] animate-pulse w-[1ch] inline-block">|</span>
        </h1>

        <motion.p
          className="mt-6 text-gray-600 text-lg md:text-lg leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Supplying top-quality trolleys, lifting tools, and industrial equipment across Delhi.
          Aaryan Traders ensures durability, affordability, and fast delivery for all your handling needs.
        </motion.p>

        <Link to="/products">
          <motion.button
            className="cursor-pointer mt-8 px-7 py-3 text-lg font-semibold rounded-lg bg-[#5e3200] text-white shadow-md hover:bg-[#A9746E] hover:text-black transition-all duration-300 w-fit"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Explore Products
          </motion.button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%] relative flex items-end justify-center md:justify-end px-6 pb-10 md:pb-0 z-10 overflow-hidden h-84 md:h-auto">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="Material Handling"
            className="absolute bottom-0 right-0 md:bottom-6 md:right-8 w-[90%] max-w-[480px] h-[360px] md:h-[440px] object-contain rounded-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
