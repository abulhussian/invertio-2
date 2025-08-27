// CaseStudyCards.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.9, duration: 0.6, ease: "easeOut" },
  },
};

const CaseStudyCards = ({ study, index }) => {
  return (
    <motion.div
      key={study.id}
      className="relative min-w-[300px] md:min-w-[360px] lg:min-w-[380px] rounded-2xl overflow-hidden shadow-xl group bg-gray-900"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background Image */}
      <motion.img
        src={study.image}
        alt={study.title}
        className="w-full h-[420px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />

      {/* Dark Overlay on Top of Image */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      {/* Card Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
        {/* Title + Description at the Top (no extra overlay box now) */}
        <div>
          <motion.h3
            className="text-2xl font-semibold mb-2 group-hover:text-primary-400 transition-colors duration-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            {study.title}
          </motion.h3>

          <motion.p
            className="text-sm text-gray-200 line-clamp-2"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {study.description}
          </motion.p>
        </div>

        {/* Read More Button at the Bottom */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-2 px-4 py-2 border border-white rounded-full text-white font-medium cursor-pointer hover:bg-white hover:text-black transition-all duration-300 w-fit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Read More</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCards;
