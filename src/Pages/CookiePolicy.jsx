import React from "react";
import { motion } from "framer-motion";

const CookiePolicy = () => {
  return (
    <section className="min-h-screen bg-[#FFFDF8] px-6 md:px-20 pt-32 pb-20 text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 border border-[#f5f0e8]"
      >
        {/* ✅ Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide"
          style={{
            background: "linear-gradient(90deg,#A75A13,#5C3A16)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Cookie Policy — Aaryan Traders Delhi
        </motion.h1>

        {/* ✅ Intro */}
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          At <strong>Aaryan Traders Delhi</strong>, we use cookies and similar
          tracking technologies to enhance your browsing experience, improve site
          performance, and analyze traffic. By accessing our website, you agree
          to the use of cookies as outlined in this policy.
        </p>

        {/* ✅ Essential Cookies Section */}
        <h2 className="text-2xl font-semibold text-[#8f4b0f] mt-8 mb-3">
          Essential Cookies
        </h2>
        <p className="text-gray-700 mb-4">
          These cookies are necessary for the core functionality of our website.
          Without them, certain features and services may not operate correctly.
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li>
            <span className="font-semibold text-[#A75A13]">Session Cookies:</span>{" "}
            Preserve your session across different pages while navigating our
            website.
          </li>
          <li>
            <span className="font-semibold text-[#A75A13]">Security Tokens:</span>{" "}
            Assist in protecting your data and enhancing secure interactions.
          </li>
        </ul>

        {/* ✅ Managing Cookies */}
        <h2 className="text-2xl font-semibold text-[#8f4b0f] mt-10 mb-3">
          Managing Your Preferences
        </h2>
        <p className="text-gray-700 mb-6">
          You can modify your browser settings to decline or remove cookies at
          any time. Please note that disabling cookies may limit certain features
          and affect site functionality.
        </p>

        {/* ✅ Closing Note */}
        <div className="mt-10 p-4 bg-[#FFF7EC] rounded-lg border-l-4 border-[#A75A13] text-gray-700">
          <p className="text-sm">
            By continuing to use the <strong>Aaryan Traders Delhi</strong> website,
            you acknowledge and accept our Cookie Policy. We are committed to
            protecting your privacy and ensuring transparency in how we use your
            data.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CookiePolicy;
