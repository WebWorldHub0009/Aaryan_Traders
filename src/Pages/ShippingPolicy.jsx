// Pages/ShippingPolicy.jsx
import React from "react";
import { motion } from "framer-motion";

const BRAND_GOLD = "#B7791F"; // Brownish-gold for Aaryan Traders
const BRAND_BROWN = "#5A3222";

const CONTACT_PHONE_DISPLAY = "+91 92110 36765";
const CONTACT_PHONE_RAW = "919211036765";
const CONTACT_EMAIL = "info@aaryantraders.in";

const CONTACT_ADDRESS_LINES = [
  "CSC No. 04, Ground Floor, Shop No. 31",
  "DDA Market, Near Police Station",
  "Rohini Sector 5, North West Delhi – 110085",
  "India",
];

const ShippingPolicy = () => {
  return (
    <section className="min-h-screen bg-[#FDF8F3] px-6 md:px-20 pt-32 pb-20 text-gray-900 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 border border-[#f5f0e8]"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide font-heading"
          style={{
            background: `linear-gradient(90deg,${BRAND_GOLD},#8B4513)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Merriweather, serif",
          }}
        >
          Shipping Policy — Aaryan Traders Delhi
        </motion.h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Thank you for shopping with <strong>Aaryan Traders Delhi</strong>. We aim to deliver raw material supplies quickly and safely across India. Kindly read our shipping policy below.
        </p>

        {/* Shipping Coverage */}
        <SectionHeading title="Shipping Coverage" />
        <p className="text-gray-700 mb-4">
          We currently ship to <strong>all major locations across India</strong>. For
          bulk orders, B2B clients, and international shipping support, please get in touch with our team directly.
        </p>

        {/* Order Processing */}
        <SectionHeading title="Order Processing Time" />
        <p className="text-gray-700 mb-4">
          Orders are processed within <strong>1–3 business days</strong> after order confirmation. Orders received on Sundays or public holidays will be processed on the next business day.
        </p>

        {/* Estimated Delivery */}
        <SectionHeading title="Estimated Delivery Timelines" />
        <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4">
          <li>Delhi NCR: <strong>1–2 business days</strong></li>
          <li>Metro Cities: <strong>2–4 business days</strong></li>
          <li>Other cities/towns: <strong>4–7 business days</strong></li>
        </ul>
        <p className="text-gray-600 text-sm mb-6">
          Timelines are approximate and may vary during festive seasons or due to external courier delays.
        </p>

        {/* Packaging & Handling */}
        <SectionHeading title="Packaging & Handling" />
        <p className="text-gray-700 mb-4">
          We ensure that all raw materials, including soles, leather sheets, foams, and adhesives, are properly packed using secure packaging materials to avoid damage during transit.
        </p>

        {/* Shipping Charges */}
        <SectionHeading title="Shipping Charges" />
        <p className="text-gray-700 mb-4">
          Shipping fees are calculated based on destination, weight, and volume. Free shipping offers are available on large or repeat orders. Please check your cart summary during checkout.
        </p>

        {/* Order Tracking */}
        <SectionHeading title="Order Tracking" />
        <p className="text-gray-700 mb-4">
          Once your order is shipped, you will receive a <strong>tracking ID via SMS or Email</strong> with real-time status updates.
        </p>

        {/* Missed Delivery */}
        <SectionHeading title="Missed or Failed Delivery" />
        <p className="text-gray-700 mb-4">
          If a delivery attempt fails due to incorrect address or recipient unavailability, we will contact you. Re-delivery or return charges may apply.
        </p>

        {/* Address Change */}
        <SectionHeading title="Changing Shipping Address" />
        <p className="text-gray-700 mb-4">
          If you need to change your shipping address, please contact us within <strong>12 hours</strong> of placing your order. Changes after dispatch cannot be guaranteed.
        </p>

        {/* External Delays */}
        <SectionHeading title="External Delays" />
        <p className="text-gray-700 mb-4">
          Courier delays due to weather, strikes, or route restrictions are out of our control, but we will assist in tracking and resolving the issue to the best of our ability.
        </p>

        {/* Bulk Shipping */}
        <SectionHeading title="Bulk & B2B Shipments" />
        <p className="text-gray-700 mb-4">
          We serve wholesalers, retailers, and factory outlets. Bulk orders are packed on pallets or in reinforced containers and shipped through dedicated logistics partners.
        </p>

        {/* Contact Info */}
        <div className="mt-12 bg-[#FFF8E7] border border-[#f3e8d2] p-6 rounded-xl">
          <h3
            className="text-xl font-semibold mb-3"
            style={{ color: BRAND_GOLD, fontFamily: "Merriweather, serif" }}
          >
            Shipping & Order Support
          </h3>
          <p className="text-gray-800 mb-2">
            📞 Phone:{" "}
            <a
              href={`tel:+${CONTACT_PHONE_RAW}`}
              className="underline hover:text-[#8B4513]"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
          <p className="text-gray-800 mb-2">
            📧 Email:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline hover:text-[#8B4513] break-all"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="text-gray-800 mt-4">
            📍 Address:
            <br />
            {CONTACT_ADDRESS_LINES.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

/* Reusable Heading */
const SectionHeading = ({ title }) => (
  <h2
    className="text-2xl font-semibold mt-10 mb-3 leading-snug font-heading"
    style={{ color: BRAND_BROWN, fontFamily: "Merriweather, serif" }}
  >
    {title}
  </h2>
);

export default ShippingPolicy;
