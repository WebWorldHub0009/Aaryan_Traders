import React from "react";
import { FaFilePdf, FaEye, FaDownload, FaCheckCircle } from "react-icons/fa";

import gstPDF from "../assets/documents/gst.pdf";
import udyamPDF from "../assets/documents/udyam.pdf";
import DocumentsHero from "../Components/DocumentsHero";

const certificates = [
  {
    title: "GST Registration Document",
    company: "Aaryan Traders",
    description:
      "Legally registered under India's GST framework. Ensuring transparent business operations and tax compliance.",
    pdf: gstPDF,
    color: "text-[#a75a13]",
    border: "border-[#a75a13]",
  },
  {
    title: "Udyam MSME Document",
    company: "Aaryan Traders",
    description:
      "Recognized as a Micro, Small & Medium Enterprise under the Udyam scheme by the Government of India.",
    pdf: udyamPDF,
    color: "text-[#3a2b1c]",
    border: "border-[#3a2b1c]",
  },
];

const Certificates = () => {
  return (
    <>
    <DocumentsHero/>
    <section id="certificatesection" className="w-full bg-[#fdf7ee] min-h-screen px-6 py-20 text-[#3a2b1c] font-sans">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-[#a75a13] mb-4">
          Company Certifications
        </h1>
        <p className="text-lg md:text-xl text-[#5a4b3a] max-w-2xl mx-auto">
          Aaryan Traders is a fully registered and recognized business. View or download our official government-approved certifications.
        </p>
      </div>

      {/* Certificate Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden bg-white rounded-2xl border ${cert.border} shadow-md hover:shadow-xl transition-all duration-300 group p-6 flex flex-col justify-between`}
          >
            {/* Ribbon */}
            <span className="absolute top-4 right-4 bg-[#a75a13] text-white px-3 py-1 text-xs rounded-md shadow-md tracking-wide">
              Verified
            </span>

            {/* Icon */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-[#f7eee1] rounded-full shadow-inner">
                <FaFilePdf className={`text-4xl ${cert.color}`} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-sm text-[#7b6754] mt-1">{cert.company}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#5a4b3a] leading-relaxed flex-grow">
              {cert.description}
            </p>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-6 gap-4">
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#a75a13] text-white rounded-lg hover:bg-[#8f4710] transition-all duration-300 text-sm font-medium"
              >
                <FaEye />
                View Document
              </a>
              <a
                href={cert.pdf}
                download
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#3a2b1c] text-white rounded-lg hover:bg-[#2e2217] transition-all duration-300 text-sm font-medium"
              >
                <FaDownload />
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="mt-16 text-center">
        <FaCheckCircle className="text-3xl mx-auto mb-3 text-[#a75a13]" />
        <p className="text-sm text-[#7b6754]">
          These documents validate Aaryan Traders as a trusted and officially registered supplier of material handling equipment.
        </p>
      </div>
    </section>
    </>
  );
};

export default Certificates;
