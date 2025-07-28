import React from "react";
import { motion } from "framer-motion";

/* -------------------------------------------------
   Brand & Contact Constants for Aaryan Traders
-------------------------------------------------- */
const BRAND_GOLD = "#a75a13";
const BRAND_DARK = "#4b1c06";

const CONTACT_PHONE_DISPLAY = "+91 92110 36765";
const CONTACT_PHONE_RAW = "919211036765";
const CONTACT_EMAIL = "info@aaryantraders.in";
const CONTACT_WEBSITE = "www.aaryantraders.in";

const CONTACT_ADDRESS_LINES = [
  "CSC No. 04, Ground Floor, Shop No. 31",
  "DDA Market, Near Police Station",
  "Rohini Sector 5, North West Delhi – 110085",
  "India",
];

const OWNER = "Vikaram Jain";
const GSTIN = "GSTIN: 07DEHPJ2904E1ZT"; // Replace with correct if different
const UDYAM = "UDYAM-DL-06-1063552";

/* -------------------------------------------------
   Section Heading Helper
-------------------------------------------------- */
const SectionHeading = ({ children }) => (
  <h2
    className="text-2xl font-semibold mt-10 mb-3 leading-snug font-heading"
    style={{ color: BRAND_DARK, fontFamily: "Merriweather, serif" }}
  >
    {children}
  </h2>
);

/* -------------------------------------------------
   Terms & Conditions Component
-------------------------------------------------- */
const TermsAndConditions = () => {
  const lastUpdated = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.div
      className="px-4 sm:px-8 md:px-16 lg:px-32 py-12 bg-[#FDF8F3] text-gray-900 font-sans pt-32"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 border border-[#f5f0e8]">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-3 font-heading tracking-wide"
          style={{
            background: `linear-gradient(90deg,${BRAND_GOLD},#6e3d0c)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Merriweather, serif",
          }}
        >
          Terms &amp; Conditions
        </h1>
        <span className="block text-center text-base font-normal tracking-wide text-gray-600 mb-10">
          This website is operated by <strong>Aaryan Traders</strong>
        </span>

        {/* 1. Electronic Record Notice */}
        <section className="space-y-6 text-justify leading-relaxed">
          <p>
            This document is an electronic record under the Information Technology Act, 2000. It
            does not require any physical or digital signatures.
          </p>
          <p>
            Published under Rule 3(1) of the IT (Intermediaries Guidelines) Rules, 2011, it governs
            access to this platform, operated by <strong>Aaryan Traders</strong>, located at:
            <em> {CONTACT_ADDRESS_LINES.join(", ")}</em>.
          </p>
        </section>

        <SectionHeading>1. Acceptance of Terms</SectionHeading>
        <p>
          By accessing, using, or submitting an enquiry through this platform, you agree to these
          Terms, our{" "}
          <a href="/privacy-policy" className="underline" style={{ color: BRAND_GOLD }}>
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/cookie-policy" className="underline" style={{ color: BRAND_GOLD }}>
            Cookie Policy
          </a>
          .
        </p>
        <p>
          If you do not agree with any clause, discontinue usage immediately. Terms are subject to
          change without notice.
        </p>

        <SectionHeading>2. General Terms of Use</SectionHeading>
        <ul className="list-disc ml-6 space-y-2 text-gray-800">
          <li>Use of this platform constitutes acceptance of all terms mentioned herein.</li>
          <li>
            You agree to provide accurate contact and order information. Any misuse, impersonation,
            or illegal activity is prohibited.
          </li>
          <li>
            Images of raw materials (leather, soles, linings, adhesives) are for representation
            only. Slight variations may occur based on stock.
          </li>
          <li>
            We reserve the right to cancel or adjust orders in case of pricing, stock, or
            information errors.
          </li>
          <li>
            All content on the site (images, descriptions, logos, layout) is the intellectual
            property of Aaryan Traders.
          </li>
          <li>
            You consent to receive communication from us regarding enquiries, orders, and
            promotions via WhatsApp, call, or email.
          </li>
        </ul>

        <SectionHeading>3. Products, Representation & Ordering</SectionHeading>
        <p>
          We deal in shoe leather raw materials, soles, linings, adhesives, synthetic uppers,
          threads, and EVA. Custom colors and bulk orders are accepted.
        </p>
        <p>
          Product appearance, tone, or size may vary slightly in physical stock. We aim for best
          accuracy but recommend confirmation before bulk orders.
        </p>

        <SectionHeading>4. Pricing, Payment & Taxes</SectionHeading>
        <p>
          Prices are in INR and include applicable taxes unless specified. Payment must be made in
          full at the time of order confirmation, unless alternate terms are approved.
        </p>

        <SectionHeading>5. Shipping & Delivery</SectionHeading>
        <p>
          We deliver across India. Delivery timelines depend on stock and location. For bulk and
          business orders, delivery schedules will be confirmed post order.
        </p>

        <SectionHeading>6. Cancellations & Returns</SectionHeading>
        <p>
          Due to the nature of materials, returns are only accepted for damaged or incorrect items
          reported within 2 days of delivery. Returns for cut or customized items are not allowed.
        </p>

        <SectionHeading>7. Communications</SectionHeading>
        <p>
          By using our services, you authorize Aaryan Traders to contact you for transactions,
          promotions, or feedback. You can opt-out of marketing messages at any time.
        </p>

        <SectionHeading>8. Intellectual Property</SectionHeading>
        <p>
          All website content, branding, images, and designs are owned or licensed by Aaryan
          Traders. Unauthorized use, reproduction, or copying is strictly prohibited.
        </p>

        <SectionHeading>9. Limitation of Liability</SectionHeading>
        <p>
          We are not liable for indirect or consequential damages arising from delays, product
          mismatch, or misuse. Maximum liability is limited to the value of the transaction.
        </p>

        <SectionHeading>10. Governing Law</SectionHeading>
        <p>
          These terms are governed by Indian law. All disputes shall be subject to jurisdiction of
          courts in <strong>New Delhi, India</strong>.
        </p>

        <SectionHeading>11. Contact Information</SectionHeading>
        <div
          className="p-6 rounded-md border mt-2 mb-6"
          style={{ borderColor: BRAND_GOLD, backgroundColor: "#FFF3E7" }}
        >
          <p className="font-semibold" style={{ color: BRAND_DARK }}>
            Aaryan Traders
          </p>
          <address className="not-italic leading-relaxed text-gray-800 mt-1 mb-4">
            {CONTACT_ADDRESS_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p>
            Email:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline break-all"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-2">
            Phone:{" "}
            <a
              href={`tel:+${CONTACT_PHONE_RAW}`}
              className="underline"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-2">Owner: {OWNER}</p>
          <p className="mt-2">Website: {CONTACT_WEBSITE}</p>
        </div>

        <div className="mt-8 text-sm text-gray-700">
          <p>
            <strong style={{ color: BRAND_GOLD }}>GSTIN:</strong> {GSTIN}
          </p>
          <p>
            <strong style={{ color: BRAND_GOLD }}>UDYAM:</strong> {UDYAM}
          </p>
        </div>

        <p className="mt-10 text-xs text-gray-500 text-center">
          Last Updated: {lastUpdated}
        </p>
      </div>
    </motion.div>
  );
};

export default TermsAndConditions;
