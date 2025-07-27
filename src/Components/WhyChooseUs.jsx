// components/WhyChooseUs.jsx
import React from "react";
import {
  FaTruckMoving,
  FaCogs,
  FaShieldAlt,
  FaSmile,
} from "react-icons/fa";
import { motion } from "framer-motion";
import image from "../assets/images/hero/hero5.png"; // Replace this path if needed

const features = [
  {
    icon: <FaCogs size={24} className="text-white" />,
    title: "Premium Leather Materials",
    description:
      "We offer a complete range including Shoe Leather, Soles, Insoles, Linings, Leather Boards & Threads.",
    bgColor: "bg-[#5C4033]",
  },
  {
    icon: <FaTruckMoving size={24} className="text-white" />,
    title: "Wholesale & Retail Available",
    description:
      "Flexible order sizes to support both large manufacturers and small businesses in Delhi and beyond.",
    bgColor: "bg-[#8B5E3C]",
  },
  {
    icon: <FaShieldAlt size={24} className="text-white" />,
    title: "Durable & Customizable",
    description:
      "From synthetic uppers to foam, EVA, and adhesives — available in all colors with custom orders accepted.",
    bgColor: "bg-[#A9746E]",
  },
  {
    icon: <FaSmile size={24} className="text-white" />,
    title: "Trusted Since 2025",
    description:
      "Serving Rohini Sector 5 with pride. Visit us at DDA Market near the police station for reliable service.",
    bgColor: "bg-[#3D2B1F]",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F7F3EF] py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text and Features */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#5C4033] mb-8 relative inline-block">
            Why Choose Us?
            <span className="block w-20 h-1 bg-[#A9746E] mt-2 rounded"></span>
          </h2>

          <div className="space-y-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-white shadow-lg p-5 rounded-xl hover:shadow-xl transition"
              >
                <div
                  className={`w-32 md:w-16 h-12 rounded-full flex items-center justify-center ${feature.bgColor}`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#3D2B1F]">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Image with Diagonal Border */}
        <motion.div
          className="flex-1 w-full relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Diagonal Border/Outline */}
            <div className="absolute top-0 left-0 w-full h-[400px] md:h-[500px] rounded-tl-[60px] rounded-br-[60px] border-[6px] border-[#C4B1A1] z-0 pointer-events-none"></div>

            {/* Actual Image */}
            <img
              src={image}
              alt="Why Choose Us - Aaryan Traders"
              className="relative z-10 w-full h-[100%] object-cover rounded-tl-[60px] rounded-br-[60px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
