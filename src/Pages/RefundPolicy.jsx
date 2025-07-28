// Pages/RefundPolicy.jsx
import React from "react";
import { motion } from "framer-motion";

/* -------------------------------------------------
   Brand Colors & Contact Constants (Aaryan Traders)
-------------------------------------------------- */
const BRAND_BROWN = "#5E3B2C";
const BRAND_GOLD = "#D6A756";

const CONTACT_PHONE_DISPLAY = "+91 92110 36765";
const CONTACT_PHONE_RAW = "919211036765";
const CONTACT_EMAIL_PRIMARY = "info@aaryantraders.in";

const CONTACT_ADDRESS_LINES = [
  "Aaryan Traders",
  "CSC No. 04, Ground Floor",
  "Shop No. 31, DDA Market",
  "Near Police Station, Rohini Sector 5",
  "North West Delhi – 110085",
  "India",
];

/* -------------------------------------------------
   Section Heading Helper
-------------------------------------------------- */
const SectionHeading = ({ children }) => (
  <h2
    className="text-2xl font-semibold mt-10 mb-3 leading-snug font-heading"
    style={{ color: BRAND_BROWN, fontFamily: "Merriweather, serif" }}
  >
    {children}
  </h2>
);

/* -------------------------------------------------
   Refund Policy Component
-------------------------------------------------- */
const RefundPolicy = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FDF8F2] via-[#F5EFE9] to-[#E8D9C6] px-6 md:px-20 pt-32 pb-20 text-gray-900 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 border border-[#f5f0e8]"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide font-heading"
          style={{
            background: `linear-gradient(90deg, ${BRAND_GOLD}, #B17B45)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Merriweather, serif",
          }}
        >
          Return & Refund Policy — Aaryan Traders
        </motion.h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
          At <strong>Aaryan Traders</strong>, your satisfaction with our high-quality raw materials
          for the footwear and leather goods industry is our priority. We aim to ensure every order
          — whether it's <em>soles, insoles, adhesives, linings, foam, or leather</em> — reaches you in perfect condition.
        </p>

        {/* Return Eligibility */}
        <SectionHeading>Return Eligibility Window</SectionHeading>
        <p className="text-gray-700 mb-4">
          Returns are accepted within <strong>7 days of delivery</strong> for any incorrect, damaged, or missing items.
          For unused, sealed materials, we allow returns within <strong>15 days</strong> from the delivery date.
        </p>

        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>Wrong raw material supplied (e.g., incorrect color, grade, or texture).</li>
          <li>Damaged packaging or leaks (must be reported within 48 hours).</li>
          <li>Unopened, unused materials (return within 15 days, restocking charges may apply).</li>
        </ul>

        {/* Return Process */}
        <SectionHeading>How to Initiate a Return</SectionHeading>
        <p className="text-gray-700 mb-4">
          To initiate a return, please email or WhatsApp us with your <strong>Order ID</strong>,
          <strong> issue details</strong>, and <strong>photos or a short video</strong> of the product and packaging.
        </p>
        <ul className="list-decimal list-inside text-gray-800 space-y-2 mb-6">
          <li>Contact us via email or WhatsApp within the return window.</li>
          <li>Provide clear evidence of the issue — product, label, and packaging.</li>
          <li>Wait for confirmation before shipping back the material.</li>
        </ul>

        {/* Return Shipping */}
        <SectionHeading>Return Shipping</SectionHeading>
        <ul className="list-disc list-inside text-gray-800 mb-6 space-y-2">
          <li>
            <strong>We cover shipping</strong> in cases of incorrect, defective, or damaged items.
          </li>
          <li>
            <strong>Customer bears shipping</strong> for returns due to change of preference or over-ordering.
          </li>
        </ul>

        {/* Inspection */}
        <SectionHeading>Inspection & Approval</SectionHeading>
        <p className="text-gray-700 mb-4">
          Once returned material is received, we inspect it within <strong>3–5 working days</strong>.
          You’ll be informed of acceptance or rejection based on seal, condition, and batch status.
        </p>

        {/* Refund Modes */}
        <SectionHeading>Refunds</SectionHeading>
        <p className="text-gray-700 mb-4">
          Approved refunds are processed within <strong>5–7 working days</strong> to the original payment method.
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
          <li>Full refund to original mode of payment.</li>
          <li>Store credit for future orders (on request).</li>
          <li>Partial refund in case of partial returns.</li>
        </ul>

        {/* Replacements */}
        <SectionHeading>Replacement Policy</SectionHeading>
        <p className="text-gray-700 mb-4">
          If you'd prefer a replacement item instead of a refund, inform our support team while raising the issue.
          We’ll dispatch the replacement post-verification.
        </p>

        {/* Non-Returnable */}
        <SectionHeading>Non‑Returnable Items</SectionHeading>
        <ul className="list-disc list-inside text-gray-800 mb-6 space-y-2">
          <li>Opened adhesives, foams, or cut sheets.</li>
          <li>Custom-cut or dyed leather and linings.</li>
          <li>Items purchased in clearance or discounted bulk.</li>
        </ul>

        {/* Contact Info */}
        <SectionHeading>Need Help? Contact Us</SectionHeading>
        <div className="bg-[#FBF4E6] border border-[#e7d5c2] p-6 rounded-xl text-gray-800">
          <p className="mb-3 font-semibold" style={{ color: BRAND_BROWN }}>
            Returns • Replacements • Damages
          </p>
          <p className="mb-2">
            Email:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL_PRIMARY}`}
              className="underline hover:text-[#B17B45] break-all"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_EMAIL_PRIMARY}
            </a>
          </p>
          <p className="mb-2">
            Phone / WhatsApp:{" "}
            <a
              href={`tel:+${CONTACT_PHONE_RAW}`}
              className="underline hover:text-[#B17B45]"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
          <address className="not-italic text-gray-700 leading-relaxed text-sm mt-3">
            {CONTACT_ADDRESS_LINES.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
        </div>
      </motion.div>
    </section>
  );
};

export default RefundPolicy;
