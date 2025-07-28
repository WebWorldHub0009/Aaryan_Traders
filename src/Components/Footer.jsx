import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import logo from "../assets/images/logo.png";
// import footerBg from "../assets/images/hero/bghd.png";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const services = [
  "Leather Raw Materials",
  "Footwear Soles & Insoles",
  "Synthetic Uppers",
  "EVA & Foam Sheets",
  "Leather Boards",
  "Insole & Shank Boards",
  "Threads & Stitching",
  "Adhesives & Chemicals",
  "Packaging Materials",
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-gradient-to-br from-[#fff5d6] via-white to-[#ffe9bf] text-black px-6 md:px-16 pt-20 pb-10 relative overflow-hidden"
    //   style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Background Accents */}
      <div className="absolute -top-20 left-[-100px] w-[300px] h-[300px] bg-yellow-900 blur-[130px] opacity-10 rounded-full -z-10" />
      <div className="absolute -bottom-20 right-[-100px] w-[300px] h-[300px] bg-yellow-900 blur-[150px] opacity-10 rounded-full -z-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm z-10 relative">
        {/* About Aaryan Traders */}
        <div className="flex flex-col space-y-3">
          <img src={logo} alt="Aaryan Traders Logo" className="w-[80px] md:w-[150px]" />
          <h4 className="text-brown-900 font-semibold mb-2">About Aaryan Traders</h4>
          <p className="leading-relaxed text-gray-800">
            Aaryan Traders Delhi, your trusted partner for material handling equipment, is located in the heart of Rohini Sector 5. Since opening its doors in 2025, Aaryan Traders has been dedicated to providing top-quality solutions for businesses of all sizes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-brown-900 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-800">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Raw Materials", "/raw-materials"],
              ["Showcase", "/showcase"],
              ["Contact", "/contact"],
              ["Documents", "/documents"],
            ].map(([text, link], i) => (
              <li key={i}>
                <Link to={link} className="hover:text-yellow-900 transition duration-300">
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Email & Contact */}
          <h4 className="mt-6 text-brown-900 font-semibold">Contact</h4>
          <ul className="mt-2 space-y-2 text-gray-800">
            <li>
              <a
                href="mailto:info@aaryantraders.in"
                className="flex items-center space-x-2 hover:text-yellow-900 transition"
              >
                <FaEnvelope className="text-yellow-900" />
                <span>info@aaryantraders.in</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+919211036765"
                className="flex items-center space-x-2 hover:text-yellow-900 transition"
              >
                <FaPhoneAlt className="text-yellow-900" />
                <span>+91 92110 36765</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services (Clickable) */}
        <div>
          <h4 className="text-brown-900 font-semibold mb-4">Raw Materials</h4>
          <ul className="space-y-2 text-gray-800">
            {services.map((item, i) => (
              <li key={i}>
                <Link
                  to="/raw-materials"
                  className="hover:text-yellow-900 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address & Socials */}
        <div>
          <h4 className="text-brown-900 font-semibold mb-4">Our Address</h4>
          <address className="not-italic leading-relaxed text-gray-800 mb-4">
            Csc No. 04 Ground Floor Shop No. 31<br />
            DDA Market, Nearby Police Station<br />
            Rohini Sector 5, North West Delhi - 110085, India
          </address>

          <div className="flex">
            <Translator />
            <div className="w-32 md:w-16"></div>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex space-x-4">
            <a
              href="https://wa.me/919211036765"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#533404] hover:text-green-600 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#533404] hover:text-pink-600 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#533404] hover:text-blue-600 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#533404] hover:text-blue-800 transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#533404] hover:text-black transition"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-10 text-center text-xs text-gray-700 border-t border-gray-800 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Aaryan Traders. All rights reserved.</p>
        <p>
          Designed & Developed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-yellow-900 hover:text-yellow-700 transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
