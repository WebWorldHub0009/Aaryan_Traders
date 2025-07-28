// components/RawMaterials.jsx
import React from "react";
import { FaAdjust, FaCheckCircle, FaHandPointRight, FaProcedures, FaTags } from "react-icons/fa";
import { Link } from "react-router-dom";
import RawMaterialHero from "../Components/RawMaterialHero";

// Importing images
import m1 from "../assets/images/raw-materials/m1.jpg";
import m2 from "../assets/images/raw-materials/m2.jpg";
import m3 from "../assets/images/raw-materials/m3.jpg";
import m4 from "../assets/images/raw-materials/m4.jpg";
import m5 from "../assets/images/raw-materials/m5.jpg";
import m6 from "../assets/images/raw-materials/m6.jpg";
import m7 from "../assets/images/raw-materials/m7.jpg";
import m8 from "../assets/images/raw-materials/m8.jpg";
import m9 from "../assets/images/raw-materials/m10.jpg";

const rawMaterials = [
  {
    title: "Shoe Leather Rolls",
    desc: "Premium quality leather in various colors and textures for upper construction.",
    image: m1,
    tag1: "Durable Finish",
    tag2: "Wholesale Ready",
  },
  {
    title: "EVA Foam Sheets",
    desc: "Lightweight, flexible foam perfect for cushioning and soles.",
    image: m2,
    tag1: "Shock Absorbing",
    tag2: "Highly Flexible",
  },
  {
    title: "Synthetic Uppers",
    desc: "Affordable and stylish synthetic materials for shoe uppers.",
    image: m3,
    tag1: "Stylish Look",
    tag2: "Custom Orders",
  },
  {
    title: "Leather Boards",
    desc: "Sturdy leather boards ideal for forming midsoles and structure.",
    image: m4,
    tag1: "Rigid Support",
    tag2: "Eco Friendly",
  },
  {
    title: "Insole Padding",
    desc: "High-quality soft padding for maximum foot comfort and elegant look.",
    image: m5,
    tag1: "Breathable",
    tag2: "Soft Cushion",
  },
  {
    title: "Shoe Linings",
    desc: "Inner lining materials available in both fabric and synthetic.",
    image: m6,
    tag1: "Moisture Control",
    tag2: "All Colors",
  },
  {
    title: "Footwear Adhesives",
    desc: "Strong bonding adhesives for lasting shoe assembly.",
    image: m7,
    tag1: "Quick Dry",
    tag2: "Strong Grip",
  },
  {
    title: "Heavy Duty Threads",
    desc: "Durable threads ideal for stitching uppers and soles.",
    image: m8,
    tag1: "High Tensile",
    tag2: "Multiple Shades",
  },
  {
    title: "PU Sheets",
    desc: "Polyurethane sheets ideal for stylish outsoles and inlays.",
    image: m9,
    tag1: "Anti-Slip",
    tag2: "Flexible Use",
  },
];

const RawMaterials = () => {
  return (
    <>
      <RawMaterialHero />
      <section className="py-16 px-4 md:px-12 bg-[#fffaf5]" id="rawmaterialsection">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D2B1F]">
            Explore Our Raw Materials
          </h2>
          <p className="mt-3 text-gray-600">
            Premium materials trusted by shoe manufacturers across India
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rawMaterials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#f5e7d5]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-contain"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-[#3D2B1F]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>

                <div className="flex items-center gap-3 text-sm text-[#a75a13]">
                  <span className="flex items-center gap-1 bg-[#fdf0e7] px-2 py-1 rounded-md">
                    <FaHandPointRight className="text-yellow-800" /> {item.tag1}
                  </span>
                  <span className="flex items-center gap-1 bg-[#fdf0e7] px-2 py-1 rounded-md">
                    <FaTags className="text-yellow-600" /> {item.tag2}
                  </span>
                </div>

                <Link to="/contact">
                  <button className="cursor-pointer mt-4 bg-[#a75a13] hover:bg-[#8c490f] text-white text-sm font-medium px-4 py-2 rounded-md transition w-full">
                    Get Enquiry
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RawMaterials;
