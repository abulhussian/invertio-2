"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const InformationServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="shadow-md overflow-hidden relative">
          <motion.img
            src="./information-bg.jpg"
            alt="bg-information-services"
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
                Information Services 
              </h1>
              <p className="text-lg lg:text-sm max-w-sm">
                Empowering organizations with intelligent data management,
                automation, and analytics solutions that enhance decision-making
                and digital transformation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-[#0b0b12] text-white py-20 flex items-center justify-center">
        <div className="max-w-6xl px-6 lg:px-10 text-left">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10 text-white"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Driving Efficiency Through Intelligent Information Systems
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-300">
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              At Invertio, we design and deliver advanced information service
              platforms that enable businesses to efficiently manage, process,
              and utilize data for strategic growth and innovation.
            </motion.p>

            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              From data integration and digital content management to analytics
              and cloud-based collaboration, our solutions transform information
              into actionable intelligence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Information Services Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Scalable, secure, and intelligent information systems built to
              empower modern enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./data-management.jpg"
                alt="Data Management"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Enterprise Data Management
              </h3>
              <p className="text-gray-600">
                Streamline data collection, storage, and governance with
                centralized, secure, and compliant data management systems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./analytics.jpg"
                alt="Analytics and Insights"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Analytics & Business Intelligence
              </h3>
              <p className="text-gray-600">
                Gain deeper insights with advanced analytics, AI-driven
                reporting, and real-time dashboards for smarter decision-making.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./automation.jpeg"
                alt="Process Automation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Intelligent Process Automation
              </h3>
              <p className="text-gray-600">
                Automate repetitive workflows using AI and RPA to enhance
                efficiency, reduce errors, and accelerate productivity.
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
              Case Study: Transforming Data into Strategic Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Invertio collaborated with a leading information services provider
              to automate data workflows and implement real-time analytics,
              improving decision-making speed and accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="./information-case.jpg"
              alt="Information Services Case Study"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business Challenge
              </h3>
              <p className="text-gray-600 mb-4">
                The client’s legacy data systems lacked integration and
                visibility, leading to slow reporting and missed growth
                opportunities.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solution & Impact
              </h3>
              <p className="text-gray-600">
                Invertio implemented a cloud-based data architecture with
                automated ingestion, advanced analytics, and secure data access
                layers. The result was a 60% faster reporting cycle and improved
                data-driven decision accuracy by 40%.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InformationServices;
