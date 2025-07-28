import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';

const MapSection = () => {
  return (
    <section className="px-4 py-20 bg-[#fdf7ee] text-[#3a2b1c]">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FaMapMarkedAlt className="text-4xl text-[#a75a13]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide leading-tight">
            Locate Aaryan Traders
          </h2>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-[#5a4b3a] font-light italic">
            Visit our workspace in the heart of Rohini, New Delhi
          </p>
        </div>

        {/* Embedded Google Map */}
        <div className=" overflow-hidden shadow-2xl border-2 border-[#d8c0a0]">
          <iframe
            title="Aaryan Traders Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7001.110352014993!2d77.09678595!3d28.7293796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d016ec0800001%3A0x1e9c68cba78ccde1!2sRohini%20Sector%205%2C%20Delhi!5e0!3m2!1sen!2sin!4v1722401436792!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[280px] sm:h-[200px] md:h-[300px] lg:h-[480px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
