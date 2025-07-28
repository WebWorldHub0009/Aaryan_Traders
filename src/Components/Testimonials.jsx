import React from "react";
import { FaUserCircle, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajat Bansal",
    content:
      "Finding Aaryan Traders in DDA Market was a game-changer. Their material handling trolleys are stylish, durable, and affordable — perfect for our warehouse!",
    rating: 5,
  },
  {
    name: "Suman Verma",
    content:
      "From soles to leather boards, I found every raw material I needed for my shoe manufacturing unit. Great quality and timely delivery!",
    rating: 5,
  },
  {
    name: "Tariq Ahmed",
    content:
      "They helped us streamline our storage with high-quality racks. Aaryan Traders is now our trusted equipment partner in Rohini.",
    rating: 4,
  },
  {
    name: "Priya Malhotra",
    content:
      "Loved the variety of synthetic uppers and threads! And the team was so helpful during our visit — highly recommend them.",
    rating: 5,
  },
  {
    name: "Deepak Sharma",
    content:
      "Very professional and always ready to take custom orders. Their foam and EVA quality is top-notch!",
    rating: 5,
  },
  {
    name: "Anjali Chauhan",
    content:
      "We run a mid-size factory and rely on Aaryan Traders for both bulk raw materials and fast local delivery. Never disappointed!",
    rating: 5,
  },
  {
    name: "Mohammed Rizwan",
    content:
      "They offer both wholesale and retail, which is a big plus. I needed a small batch of adhesives urgently and got it the same day.",
    rating: 4,
  },
  {
    name: "Neeraj Kohli",
    content:
      "Great range, honest pricing, and located conveniently near the Rohini police station. Perfect for small business owners like me.",
    rating: 5,
  },
  {
    name: "Sneha Arora",
    content:
      "Their team really understands the needs of manufacturers. Quality raw materials and superb customer service — a rare combo!",
    rating: 5,
  },
];


const Testimonials = () => {
  return (
    <section className="relative py-16 px-4 sm:px-8 md:px-16 bg-[#fffaf6] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffe4c4_1px,transparent_1px)] bg-[length:20px_20px] opacity-20 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-[#3D2B1F] mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto text-sm sm:text-base">
          Trusted by businesses across Delhi for premium materials and service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white shadow-md rounded-lg p-6 text-left border border-[#f2e4d6] hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4 text-[#a75a13]">
                <FaUserCircle size={36} className="mr-2" />
                <div>
                  <h4 className="font-semibold text-[#3D2B1F] text-sm">
                    {testimonial.name}
                  </h4>
                  <div className="flex text-yellow-500 text-sm">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
