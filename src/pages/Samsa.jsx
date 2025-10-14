"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaShippingFast, FaProjectDiagram, FaFileInvoice, FaBoxOpen } from "react-icons/fa";

const SamasaLogistics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="shadow-md overflow-hidden relative">
          <motion.img
            src="./sc-samsa.jpeg"
            alt="Samasa Logistics Background"
            className="w-full h-[400px] object-cover"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <motion.div
            className="absolute inset-0 flex flex-col justify-center px-10"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex flex-col space-y-5 items-start w-full">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Samasa Logistics – Intelligent Supply Chain Solutions
              </h1>
              <p className="text-lg lg:text-base max-w-2xl">
                Streamlining logistics with real-time tracking, integrated
                management platforms, customs automation, and e-commerce
                fulfillment workflows. Samasa Logistics ensures efficiency,
                transparency, and timely deliveries.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Project */}
      <section className="bg-[#0b0b12] text-white py-20 flex items-center justify-center">
        <div className="max-w-6xl px-6 lg:px-10 text-left">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10 text-white"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About the Project
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg leading-relaxed text-gray-300">
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Samasa Logistics provides a unified platform for supply chain
              management, enabling real-time digital tracking of shipments,
              automated customs clearance, and efficient e-commerce
              fulfillment.
            </motion.p>

            <motion.p
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              By integrating logistics management platforms with smart
              technologies, Samasa Logistics ensures accuracy, faster
              deliveries, and enhanced visibility for all stakeholders in the
              supply chain.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tech Stack Used
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 justify-items-center"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              { icon: <FaShippingFast size={60} color="#4285F4" />, label: "Real-time Tracking" },
              { icon: <FaProjectDiagram size={60} color="#F44336" />, label: "Integrated Platforms" },
              { icon: <FaFileInvoice size={60} color="#4CAF50" />, label: "Customs Automation" },
              { icon: <FaBoxOpen size={60} color="#FF9800" />, label: "E-commerce Fulfillment" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.1 }}
              >
                {tech.icon}
                <p className="mt-3 text-gray-800 font-semibold text-center">
                  {tech.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Project Impact
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Samasa Logistics enhanced supply chain efficiency through
            real-time digital tracking, automated workflows, and seamless
            integration of logistics platforms. Businesses now enjoy improved
            transparency, faster deliveries, and optimized operations.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default SamasaLogistics;
