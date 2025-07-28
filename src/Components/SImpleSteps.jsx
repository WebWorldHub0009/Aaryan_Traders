import React from "react";
import stepsImage from "../assets/images/manonchairnew.png";
import { FaMapMarkerAlt, FaHandshake, FaTruckLoading, FaMoneyCheckAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit Us",
    description: "Find us in DDA Market, Rohini Sector 5, near the police station.",
  },
  {
    icon: <FaHandshake />,
    title: "Consult",
    description: "Discuss your material handling or shoe raw material needs.",
  },
  {
    icon: <FaTruckLoading />,
    title: "Place Order",
    description: "Choose from a wide range of quality products at great prices.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Get It Delivered",
    description: "Enjoy timely delivery with wholesale & retail options.",
  },
];

const SimpleSteps = () => {
  return (
    <section className="bg-gradient-to-br from-[#ffe8ba] via-white to-[#ffeebf] py-12 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 sm:gap-14">
        
        {/* Left: PNG Image */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 hidden md:flex justify-center"
        >
          <img
            src={stepsImage}
            alt="Aaryan Traders Process"
            className="w-[clamp(240px,40vw,380px)] h-auto max-w-full"
          />
        </motion.div>

        {/* Right: Text and Steps */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-balance"
        >
          <h2 className="text-[clamp(1.6rem,4vw,2.4rem)] font-bold text-[#3D2B1F] mb-4 leading-snug">
            Partner with <span className="text-[#a75a13]">Aaryan Traders!</span>
          </h2>

          <p className="text-[clamp(0.85rem,2.5vw,1rem)] text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            Step up your material handling game with Aaryan Traders Delhi — your dedicated partner for top-quality equipment and raw materials. Located in the DDA Market, Rohini Sector 5, we serve businesses of all sizes with efficiency and care.
          </p>

          {/* Steps List */}
          <div className="space-y-5 sm:space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <div className="flex items-center justify-center w-10 h-10 min-w-[40px] bg-[#a75a13] text-white rounded-full text-base sm:text-lg flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-[clamp(0.95rem,2.4vw,1.1rem)] font-semibold text-[#3D2B1F]">
                    {step.title}
                  </h4>
                  <p className="text-[clamp(0.78rem,2.2vw,0.95rem)] text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 flex-wrap">
            <Link to="/contact">
              <button className="cursor-pointer bg-[#683607] hover:bg-[#a75a13] text-white px-4 sm:px-5 py-2 rounded-md text-sm sm:text-base transition">
                Get Started
              </button>
            </Link>
            <Link to="/documents">
              <button className="cursor-pointer border border-[#683607] text-[#462405] hover:bg-[#FFE6DB] px-4 sm:px-5 py-2 rounded-md text-sm sm:text-base transition">
                Learn more
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleSteps;
