import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import img1 from "../assets/images/showcase/s1.png";
import img2 from "../assets/images/showcase/s2.png";
import img3 from "../assets/images/showcase/s3.png";
import img4 from "../assets/images/showcase/s4.png";
import img5 from "../assets/images/showcase/s5.png";
import img6 from "../assets/images/showcase/s6.png";
import img7 from "../assets/images/showcase/s7.png";
import img8 from "../assets/images/showcase/s8.png";
import img9 from "../assets/images/showcase/s9.png";
import img10 from "../assets/images/showcase/s10.png";
import img11 from "../assets/images/showcase/s11.png";
import img12 from "../assets/images/showcase/s12.png";
import img13 from "../assets/images/showcase/s14.png";
import img14 from "../assets/images/showcase/s15.png";

import GalleryHero from "../Components/GalleryHero";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const gridStyles = [
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-3 row-span-2",
    "col-span-3 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
  ];

  return (
    <>
      <GalleryHero />

      <section id="gallery-section" className="bg-[#000000] px-4 md:px-10 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-[150px] gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`overflow-hidden shadow-lg cursor-pointer hover:brightness-110 transition-all duration-300 ${
                gridStyles[i] || "col-span-2 row-span-2"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openImage(i)}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal View */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                key={selectedImage}
                className="relative w-full max-w-4xl mx-auto"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
              >
                <img
                  src={selectedImage}
                  alt="Enlarged"
                  className="w-full max-h-[80vh] object-contain rounded-xl"
                />

                {/* Close button */}
                <button
                  className="absolute top-3 right-3 text-white text-xl bg-black/50 p-2 rounded-full"
                  onClick={closeModal}
                >
                  <FaTimes />
                </button>

                {/* Prev button */}
                <button
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xl bg-black/40 p-2 rounded-full"
                  onClick={prevImage}
                >
                  <FaArrowLeft />
                </button>

                {/* Next button */}
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-xl bg-black/40 p-2 rounded-full"
                  onClick={nextImage}
                >
                  <FaArrowRight />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Gallery;
