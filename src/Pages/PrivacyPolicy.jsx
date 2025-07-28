import React from "react";
import { motion } from "framer-motion";

/* -------------------------------------------------
   Brand + Contact Constants
-------------------------------------------------- */
const BRAND_GOLD = "#F4B400";
const BRAND_MAROON = "#7A1E09";

const CONTACT_PHONE_DISPLAY = "+91 92110 36765";
const CONTACT_PHONE_RAW = "919211036765";
const CONTACT_EMAIL_PRIMARY = "info@aaryantraders.in";
const CONTACT_EMAIL_SECONDARY = "vikaram@aaryantraders.in";

const CONTACT_ADDRESS_LINES = [
  "CSC No. 04, Ground Floor, Shop No. 31",
  "DDA Market, Near Police Station",
  "Rohini Sector 5",
  "North West Delhi – 110085",
  "India",
];

const GSTIN = "GSTIN: 07DEHPJ2904E1ZT";
const UDYAM = "UDYAM-DL-06-1063552";

/* -------------------------------------------------
   Reusable Section Heading
-------------------------------------------------- */
const SectionHeading = ({ children }) => (
  <h2
    className="text-2xl font-semibold mt-10 mb-3 leading-snug font-heading"
    style={{ color: BRAND_MAROON, fontFamily: "Merriweather, serif" }}
  >
    {children}
  </h2>
);

/* -------------------------------------------------
   Privacy Policy Component
-------------------------------------------------- */
const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.div
      className="px-4 sm:px-8 md:px-16 lg:px-32 py-12 bg-[#FDF8F3] text-gray-900 font-sans pt-32"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 border border-[#f5f0e8]">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 font-heading tracking-wide"
          style={{
            background: `linear-gradient(90deg,${BRAND_GOLD},#C47E00)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Merriweather, serif",
          }}
        >
          Privacy Policy — Aaryan Traders
        </h1>

        <p className="text-xs sm:text-sm text-gray-500 italic text-center max-w-2xl mx-auto mb-10">
          This Privacy Policy outlines how Aaryan Traders collects, uses, shares, and protects personal data.
          Please consult a legal advisor for region-specific compliance.
        </p>

        {/* Intro */}
        <section className="space-y-6 leading-relaxed text-justify">
          <p>
            This Privacy Policy explains how <strong>Aaryan Traders</strong> (“we”, “our”, “us”) collects and processes your information when
            you visit our website, place orders, or contact us via phone, WhatsApp, email, or visit our physical store.
          </p>
          <p>
            By using our services or providing your information, you consent to the practices described in this policy.
          </p>
        </section>

        {/* 1. What We Collect */}
        <SectionHeading>1. Information We Collect</SectionHeading>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Full name, contact number, and email address</li>
          <li>Billing and delivery address including PIN code</li>
          <li>Order history and product preferences</li>
          <li>Company name, GSTIN, or trade information (for B2B)</li>
          <li>Payment confirmation status (not full card data)</li>
          <li>Technical details: browser, device, IP, analytics, cookies</li>
        </ul>

        {/* 2. How We Use Data */}
        <SectionHeading>2. How We Use Your Information</SectionHeading>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Process and dispatch orders</li>
          <li>Communicate with customers for queries or support</li>
          <li>Maintain purchase records for tax & audit</li>
          <li>Send order updates, shipping info, or special offers</li>
          <li>Prevent fraud and unauthorized transactions</li>
        </ul>

        {/* 3. Sharing Policy */}
        <SectionHeading>3. Information Sharing</SectionHeading>
        <p>We do not sell your data. We only share with:</p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Shipping and logistics providers</li>
          <li>Payment gateways and financial institutions</li>
          <li>Government regulators when legally required</li>
        </ul>

        {/* 4. Security */}
        <SectionHeading>4. Data Security</SectionHeading>
        <p>
          We implement reasonable security practices like secure servers and access control.
          However, no method is 100% secure—please keep your credentials and devices protected.
        </p>

        {/* 5. Retention */}
        <SectionHeading>5. Data Retention</SectionHeading>
        <p>
          Data is retained as long as needed for operations, taxes, and compliance.
          You may request deletion of personal data that is not legally required to retain.
        </p>

        {/* 6. Rights */}
        <SectionHeading>6. Your Rights</SectionHeading>
        <p>
          You can request to access, correct, or delete your data by emailing us from your registered email ID.
          Please include the subject line: <em>“Privacy Request – Aaryan Traders.”</em>
        </p>

        {/* 7. Consent */}
        <SectionHeading>7. Consent & Withdrawal</SectionHeading>
        <p>
          You may withdraw consent to receive communications at any time by emailing us or using unsubscribe options.
        </p>

        {/* 8. Cookies */}
        <SectionHeading>8. Cookies</SectionHeading>
        <p>
          We use cookies to improve website functionality and monitor traffic. You can disable cookies in your browser settings.
        </p>

        {/* 9. Updates */}
        <SectionHeading>9. Policy Updates</SectionHeading>
        <p>This policy may be revised from time to time. Changes will be reflected with an updated “Last Updated” date below.</p>

        {/* 10. Contact */}
        <SectionHeading>10. Contact & Grievance Officer</SectionHeading>
        <div
          className="p-6 rounded-md border mb-6"
          style={{ borderColor: BRAND_GOLD, backgroundColor: "#FFF8E7" }}
        >
          <p><strong>Name:</strong> Vikaram Jain</p>
          <p><strong>Designation:</strong> Owner / Grievance Contact</p>
          <p><strong>Company:</strong> Aaryan Traders</p>
          <p className="mt-2">
            <strong>Address:</strong><br />
            {CONTACT_ADDRESS_LINES.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </p>
          <p className="mt-3">
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${CONTACT_EMAIL_PRIMARY}`}
              className="underline break-all"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_EMAIL_PRIMARY}
            </a>
          </p>
          {/* <p>
            <strong>Alt Email:</strong>{" "}
            <a
              href={`mailto:${CONTACT_EMAIL_SECONDARY}`}
              className="underline break-all"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_EMAIL_SECONDARY}
            </a>
          </p> */}
          <p className="mt-2">
            <strong>Phone:</strong>{" "}
            <a
              href={`tel:+${CONTACT_PHONE_RAW}`}
              className="underline"
              style={{ color: BRAND_GOLD }}
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-2">
            <strong>Working Hours:</strong> Monday – Saturday (10:00 AM – 7:00 PM IST)
          </p>
        </div>

        {/* IDs */}
        <div className="mt-8 text-sm text-gray-700">
          <p><strong style={{ color: BRAND_GOLD }}>GSTIN:</strong> {GSTIN}</p>
          <p><strong style={{ color: BRAND_GOLD }}>UDYAM:</strong> {UDYAM}</p>
        </div>

        {/* Last Updated */}
        <p className="mt-10 text-xs text-gray-500 text-center">
          Last Updated: {lastUpdated}
        </p>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
