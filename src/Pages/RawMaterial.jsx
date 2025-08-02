import React, { useState } from "react";
import { FaHandPointRight, FaTags, FaUser, FaPhone, FaMapMarkerAlt, FaMoneyBillWave, FaShoppingCart, FaStickyNote } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import RawMaterialHero from "../Components/RawMaterialHero";

// Import images
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
  { title: "Shoe Leather Rolls", desc: "Premium quality leather in various colors and textures for upper construction.", image: m1, tag1: "Durable Finish", tag2: "Wholesale Ready", price: "₹110" },
  { title: "EVA Foam Sheets", desc: "Lightweight, flexible foam perfect for cushioning and soles.", image: m2, tag1: "Shock Absorbing", tag2: "Highly Flexible", price: "₹76" },
  { title: "Synthetic Uppers", desc: "Affordable and stylish synthetic materials for shoe uppers.", image: m3, tag1: "Stylish Look", tag2: "Custom Orders", price: "₹50" },
  { title: "Leather Boards", desc: "Sturdy leather boards ideal for forming midsoles and structure.", image: m4, tag1: "Rigid Support", tag2: "Eco Friendly", price: "₹90" },
  { title: "Insole Padding", desc: "High-quality soft padding for maximum foot comfort and elegant look.", image: m5, tag1: "Breathable", tag2: "Soft Cushion", price: "₹42" },
  { title: "Shoe Linings", desc: "Inner lining materials available in both fabric and synthetic.", image: m6, tag1: "Moisture Control", tag2: "All Colors", price: "₹54" },
  { title: "Footwear Adhesives", desc: "Strong bonding adhesives for lasting shoe assembly.", image: m7, tag1: "Quick Dry", tag2: "Strong Grip", price: "₹76" },
  { title: "Heavy Duty Threads", desc: "Durable threads ideal for stitching uppers and soles.", image: m8, tag1: "High Tensile", tag2: "Multiple Shades", price: "₹50" },
  { title: "PU Sheets", desc: "Polyurethane sheets ideal for stylish outsoles and inlays.", image: m9, tag1: "Anti-Slip", tag2: "Flexible Use", price: "₹90" },
];

const RawMaterials = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "COD",
  });

  const handlePlaceOrder = () => {
    alert(`✅ Order placed successfully for ${selectedProduct?.title}!`);
    setSelectedProduct(null);
  };

  return (
    <>
      <RawMaterialHero />
      <section className="py-16 px-4 md:px-12 bg-[#fffaf5]" id="rawmaterialsection">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D2B1F]">Explore Our Raw Materials</h2>
          <p className="mt-3 text-gray-600">Premium materials trusted by shoe manufacturers across India</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rawMaterials.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#f5e7d5]">
              <img src={item.image} alt={item.title} className="w-full h-52 object-contain" />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-[#3D2B1F]">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>

                <div className="flex flex-wrap items-center gap-2 text-sm text-[#a75a13] mt-2">
                  <span className="flex items-center gap-1 bg-[#fdf0e7] px-2 py-1 rounded-md"><FaHandPointRight className="text-yellow-800" /> {item.tag1}</span>
                  <span className="flex items-center gap-1 bg-[#fdf0e7] px-2 py-1 rounded-md"><FaTags className="text-yellow-600" /> {item.tag2}</span>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-base font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-md">{item.price}</span>
                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="cursor-pointer bg-[#a75a13] hover:bg-[#8c490f] text-white text-sm font-medium px-4 py-2 rounded-md transition"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Checkout Modal */}
      <AnimatePresence>
  {selectedProduct && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl relative"
      >
        {/* Close Button */}
        <button
          className="cursor-pointer absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
          onClick={() => setSelectedProduct(null)}
        >
          ✕
        </button>

        {/* Product Info */}
        <div className="flex gap-4 items-center mb-6 border-b pb-4">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="w-20 h-20 object-cover rounded-lg border"
          />
          <div>
            <h3 className="font-bold text-lg text-[#3D2B1F]">
              {selectedProduct.title}
            </h3>
            <p className="text-sm text-gray-500">{selectedProduct.desc}</p>
            <span className="font-semibold text-green-700">
              {selectedProduct.price}
            </span>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="grid grid-cols-1 gap-4">
          {/* Name */}
          <div className="flex items-center bg-gray-50 border rounded-lg px-3 py-2">
            <FaUser className="text-[#a75a13] mr-2" />
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent outline-none w-full"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          {/* Phone */}
          <div className="flex items-center bg-gray-50 border rounded-lg px-3 py-2">
            <FaPhone className="text-[#a75a13] mr-2" />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-transparent outline-none w-full"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          {/* Address */}
          <div className="flex items-start bg-gray-50 border rounded-lg px-3 py-2">
            <FaMapMarkerAlt className="text-[#a75a13] mt-2 mr-2" />
            <textarea
              placeholder="Delivery Address"
              rows="2"
              className="bg-transparent outline-none w-full resize-none"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>

          {/* Quantity */}
          <div className="flex items-center bg-gray-50 border rounded-lg px-3 py-2">
            <FaShoppingCart className="text-[#a75a13] mr-2" />
            <input
              type="number"
              min="1"
              value={formData.quantity || 1}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
              className="bg-transparent outline-none w-20"
            />
            <span className="ml-auto font-semibold text-green-700">
              Total: ₹
              {parseInt(selectedProduct.price.replace("₹", "")) *
                (formData.quantity || 1)}
            </span>
          </div>

          {/* Order Notes */}
          <div className="flex items-start bg-gray-50 border rounded-lg px-3 py-2">
            <FaStickyNote className="text-[#a75a13] mt-2 mr-2" />
            <textarea
              placeholder="Order Notes (optional)"
              rows="2"
              className="bg-transparent outline-none w-full resize-none"
              value={formData.notes || ""}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
            />
          </div>
        </div>

        {/* Place Order Button */}
        <button
          onClick={handlePlaceOrder}
          className="cursor-pointer w-full mt-6 bg-[#a75a13] hover:bg-[#8c490f] text-white py-3 rounded-lg font-medium shadow-md transition"
        >
          Place Order
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


    </>
  );
};

export default RawMaterials;
