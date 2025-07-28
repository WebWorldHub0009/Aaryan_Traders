import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import your 11 images
import img1 from "../assets/images/showcase/s1.png";
import img2 from "../assets/images/showcase/s2.png";
import img3 from "../assets/images/showcase/s3.png";
import img4 from "../assets/images/showcase/s4.png";
import img5 from "../assets/images/showcase/s5.png";
import img6 from "../assets/images/showcase/s6.png";
import img7 from "../assets/images/showcase/s7.png";
import img8 from "../assets/images/showcase/s8.png";
import img9 from "../assets/images/showcase/s1.png";
import img10 from "../assets/images/showcase/s2.png";
import img11 from "../assets/images/showcase/s3.png";
import GalleryHero from "../Components/GalleryHero";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

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
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  return (
    <>
      <GalleryHero />

      <section id="gallery-section" className="bg-[#fffaf4] px-4 md:px-10 py-16">
        <div className="grid grid-cols-6 auto-rows-[150px] gap-4">
          {images.map((img, i) => {
            const gridStyles = [
              "col-span-2 row-span-2", // img1
              "col-span-2 row-span-2", // img2
              "col-span-2 row-span-2", // img3
              "col-span-3 row-span-2", // img4
              "col-span-3 row-span-2", // img5
              "col-span-2 row-span-2", // img6
              "col-span-2 row-span-2", // img7
              "col-span-2 row-span-2", // img8
              "col-span-1 row-span-2", // img9
              "col-span-2 row-span-2", // img10
              "col-span-3 row-span-2", // img11
            ];

            return (
              <motion.div
                key={i}
                className={`overflow-hidden rounded-xl shadow-lg cursor-pointer hover:brightness-110 transition-all duration-300 ${gridStyles[i]}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openImage(i)}
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Modal */}
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
                className="relative max-w-4xl w-full"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
              >
                <img
                  src={selectedImage}
                  alt="Enlarged"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                />

                {/* Controls */}
                <button
                  className="absolute top-3 right-3 text-white text-xl bg-black/50 p-2 rounded-full"
                  onClick={closeModal}
                >
                  <FaTimes />
                </button>
                <button
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xl bg-black/40 p-2 rounded-full"
                  onClick={prevImage}
                >
                  <FaArrowLeft />
                </button>
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
