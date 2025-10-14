"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaBluetoothB,
  FaCloud,
  FaDatabase,
  FaMicrosoft,
} from "react-icons/fa";
import { SiTensorflow, SiPostgresql } from "react-icons/si";

const AIPilot = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="shadow-md overflow-hidden relative">
          <motion.img
            src="./sc-ai-pilot.jpeg"
            alt="AI Pilot Background"
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
                AI Pilot – Intelligent Automation Platform
              </h1>
              <p className="text-lg lg:text-base max-w-2xl">
                Revolutionizing business operations through an AI-driven pilot
                system that automates workflows, enhances decision-making, and
                accelerates digital transformation using data intelligence and
                predictive analytics.
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
              The AI Pilot project empowers organizations with smart automation
              capabilities by integrating Artificial Intelligence into modern
              systems. It provides real-time insights, workflow automation, and
              predictive analytics to optimize decision-making and efficiency.
            </motion.p>

            <motion.p
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Built with cutting-edge AI models, BLE-based device connectivity,
              and cloud-powered scalability, AI Pilot bridges the gap between
              hardware and intelligence. It enhances business processes with
              automation and actionable insights.
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
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center"
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
              { icon: <FaCloud size={60} color="#2F80ED" />, label: "Artificial Intelligence (AI)" },
              { icon: <SiTensorflow size={60} color="#FF6F00" />, label: "TensorFlow" },
              { icon: <FaPython size={60} color="#3776AB" />, label: "Python" },
              { icon: <FaReact size={60} color="#61DBFB" />, label: "React Native" },
              { icon: <FaBluetoothB size={60} color="#0082FC" />, label: "BLE (Bluetooth Low Energy)" },
              { icon: <FaMicrosoft size={60} color="#0078D4" />, label: "Azure Cloud" },
              { icon: <SiPostgresql size={60} color="#336791" />, label: "PostgreSQL" },
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
            AI Pilot transformed traditional workflows into AI-automated
            processes, achieving up to 50% faster operational turnaround. By
            combining AI, cloud computing, and BLE connectivity, it enables
            smarter, more connected systems with improved data-driven
            efficiency.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default AIPilot;
