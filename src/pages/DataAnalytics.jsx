"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const DataAnalytics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="shadow-md overflow-hidden relative">
          <motion.img
            src="./data-analytics-bg.jpg!w700wp"
            alt="bg-data-analytics"
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
                Data Analytics
              </h1>
              <p className="text-lg lg:text-sm max-w-sm">
                Unlock valuable insights from your data with advanced analytics that empower better decision-making and business growth.
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
            Turning Data Into Actionable Insights
          </motion.h2>

          {/* Two-column text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-300">
            {/* Left Column */}
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              At Invertio, we help organizations make sense of their data through advanced analytics and visualization. From data collection to predictive modeling, our experts enable smarter and faster decisions.
            </motion.p>

            {/* Right Column */}
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              We combine statistical techniques, AI, and data visualization tools to transform raw data into meaningful business insights that enhance operational efficiency and drive innovation.
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
              Our Data Analytics Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We deliver data-driven solutions that help businesses uncover opportunities, mitigate risks, and enhance strategic decision-making.
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./data-visualization.jpg"
                alt="Data Visualization"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Data Visualization & Reporting
              </h3>
              <p className="text-gray-600">
                Transform complex data into interactive dashboards and visual reports that make insights clear and actionable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./predictive-analytics.jpg"
                alt="Predictive Analytics"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Predictive Analytics
              </h3>
              <p className="text-gray-600">
                Use machine learning models to forecast trends, identify risks, and make data-backed decisions for future planning.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./data-integration.jpg"
                alt="Data Integration"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Data Integration & Management
              </h3>
              <p className="text-gray-600">
                Combine data from multiple sources into a unified system to ensure accuracy, accessibility, and better analysis.
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
              Case Study: Data-Driven Decision Making
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Invertio partnered with a retail enterprise to implement a data analytics solution that improved sales forecasting and customer targeting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="./data-analytics-case.webp"
              alt="Data Analytics Case Study"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business Challenge
              </h3>
              <p className="text-gray-600 mb-4">
                The client lacked insight into purchasing patterns, leading to inconsistent stock levels and missed sales opportunities.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solution & Impact
              </h3>
              <p className="text-gray-600">
                Invertio deployed a real-time analytics dashboard integrating customer data and predictive algorithms. The result was a 40% improvement in sales forecasting accuracy and optimized inventory management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalytics;
