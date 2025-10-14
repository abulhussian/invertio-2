"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const CyberSecurity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="shadow-md overflow-hidden relative">
          <motion.img
            src="./cyber-security-bg.png"
            alt="bg-cyber-security"
            className="w-full h-[400px] object-cover"
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <motion.div
            className="absolute inset-0 flex flex-col justify-center px-10"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex flex-col space-y-5 items-start w-full">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Cyber Security
              </h1>
              <p className="text-lg lg:text-sm max-w-sm">
                Protect your digital assets with cutting-edge cybersecurity solutions designed to detect, prevent, and respond to evolving threats.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-[#0b0b12] text-white py-20 flex items-center justify-center">
        <div className="max-w-6xl px-6 lg:px-10 text-left">
          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10 text-white"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Safeguarding Your Digital Future
          </motion.h2>

          {/* Two-column text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-300">
            {/* Left Column */}
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              At Invertio, we help businesses stay secure in an ever-changing digital landscape. Our cybersecurity experts provide end-to-end protection across infrastructure, applications, and data.
            </motion.p>

            {/* Right Column */}
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Using advanced threat intelligence, AI-powered detection systems, and best-in-class security frameworks, we ensure your organization remains resilient against cyberattacks.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Cyber Security Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We provide comprehensive cybersecurity solutions to help organizations defend, detect, and respond to threats effectively.
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./network-security.jpeg"
                alt="Network Security"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Network Security
              </h3>
              <p className="text-gray-600">
                Protect your IT infrastructure with advanced firewalls, intrusion detection systems, and continuous monitoring.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./cloud-security.jpg"
                alt="Cloud Security"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Cloud Security
              </h3>
              <p className="text-gray-600">
                Secure your cloud environment with encryption, access controls, and compliance-driven protection for sensitive data.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./threat-detection.avif"
                alt="Threat Detection"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Threat Detection & Response
              </h3>
              <p className="text-gray-600">
                Identify, contain, and eliminate threats in real time using AI-driven monitoring and rapid incident response strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Case Study: Strengthening Cyber Resilience
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Invertio worked with a financial enterprise to enhance their cybersecurity posture and protect critical assets from evolving threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="./cyber-security-case.webp"
              alt="Cyber Security Case Study"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business Challenge
              </h3>
              <p className="text-gray-600 mb-4">
                The client faced frequent phishing attacks and lacked a unified monitoring system to identify breaches across networks and endpoints.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solution & Impact
              </h3>
              <p className="text-gray-600">
                Invertio implemented a multi-layered defense strategy with SIEM integration and real-time threat analytics. The result was a 60% reduction in attack response time and improved compliance with data protection standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;
