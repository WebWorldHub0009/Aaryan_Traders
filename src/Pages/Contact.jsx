import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaXTwitter,
  FaLinkedinIn,
  // FaMapMarkerAlt,
} from "react-icons/fa6";
import bgContact from "../assets/images/contactnew.png";
import MapSection from "../Components/MapSection";
import ContactHero from "../Components/ContactHero";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <section id="contactsection" className="w-full min-h-screen py-16 flex flex-col lg:flex-row bg-[#f6f1e6] text-[#3a2b1c]">
        {/* LEFT SECTION */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-16 flex flex-col justify-between"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 border-b-4 border-[#a75a13] inline-block pb-2">
                Let’s Connect
              </h1>
              <p className="text-xl tracking-wide italic mb-10 text-[#5a4b3a]">
                For quality raw material, bulk orders, or inquiries, reach out to Aaryan Traders.
              </p>

              <div className="space-y-6 text-sm sm:text-base text-[#5a4b3a]">
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p>+91 92110 36765</p>
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p>info@aaryantraders.in</p>
                </div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p>
                    CSC No. 04, Ground Floor, Shop No. 31<br />
                    DDA Market, Near Police Station<br />
                    Rohini Sector 5, North West Delhi – 110085, India
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-10 flex flex-wrap gap-4 text-xl text-[#3a2b1c]">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#a75a13] transition">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#a75a13] transition">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#a75a13] transition">
                <FaYoutube />
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" className="hover:text-[#a75a13] transition">
                <FaPinterestP />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#a75a13] transition">
                <FaXTwitter />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#a75a13] transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM SECTION */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative flex items-center justify-center"
        >
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgContact})` }}></div>
          <div className="absolute inset-0 bg-black opacity-70"></div>

          {/* FORM */}
          <form
            action="https://formsubmit.co/info@aaryantraders.in"
            method="POST"
            className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-16 text-white"
          >
            <h3 className="text-2xl font-bold uppercase border-b-2 border-white pb-2 mb-6">
              Contact Form
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-transparent border-b border-white p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-transparent border-b border-white p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-white p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-transparent border-b border-white p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <textarea
                name="message"
                placeholder="Tell us what you're interested in"
                required
                className="col-span-1 sm:col-span-2 bg-transparent border-b border-white p-2 focus:outline-none resize-none h-24 text-white placeholder-gray-300"
              ></textarea>
              <button
                type="submit"
                className="cursor-pointer col-span-1 sm:col-span-2 bg-[#a75a13] text-white font-semibold py-3 mt-4 rounded-full hover:bg-white hover:text-[#a75a13] transition-all duration-300"
              >
                Send Message
              </button>
            </div>

            {/* HIDDEN INPUTS */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://aaryantraders.in" />
          </form>
        </motion.div>
      </section>

      {/* MAP SECTION */}
      <MapSection />
    </>
  );
};

export default ContactPage;
