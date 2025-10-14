"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaCloud, FaShieldAlt, FaTools, FaProjectDiagram } from "react-icons/fa";

const KPMG = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="shadow-md overflow-hidden relative">
          <motion.img
            src="./sc-KPMG.jpeg"
            alt="KPMG Background"
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
                KPMG – Intelligent Enterprise Solutions
              </h1>
              <p className="text-lg lg:text-base max-w-2xl">
                Leveraging multi-agent AI, cloud platforms, cybersecurity, automation, 
                and strategic alliance technologies, KPMG enables enterprises to optimize 
                operations, enhance security, and drive innovation globally.
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
            About KPMG Solutions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg leading-relaxed text-gray-300">
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              KPMG integrates multi-agent AI systems, cloud platforms, cybersecurity solutions, 
              and DevOps automation tools to provide intelligent enterprise services 
              for complex business environments.
            </motion.p>

            <motion.p
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              By leveraging strategic alliance technologies like SAP, Hedera, and Zscaler, 
              KPMG empowers organizations to scale operations securely, innovate efficiently, 
              and maintain compliance with global standards.
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
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center"
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
              { icon: <FaRobot size={60} color="#3776AB" />, label: "Multi-agent AI" },
              { icon: <FaCloud size={60} color="#4285F4" />, label: "Cloud Platforms" },
              { icon: <FaShieldAlt size={60} color="#F44336" />, label: "Cybersecurity & Privacy" },
              { icon: <FaTools size={60} color="#FF9800" />, label: "Automation & DevOps" },
              { icon: <FaProjectDiagram size={60} color="#9C27B0" />, label: "Strategic Alliance Tech" },
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
            KPMG enables enterprises to leverage AI, cloud, and automation technologies 
            alongside strategic alliances to optimize operations, improve security, 
            drive innovation, and achieve scalable, intelligent business solutions.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default KPMG;
