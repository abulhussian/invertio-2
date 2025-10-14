"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const FinanceBanking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="shadow-md overflow-hidden relative">
          <motion.img
            src="./finance-bg.jpg"
            alt="bg-finance"
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
                Finance & Banking 
              </h1>
              <p className="text-lg lg:text-sm max-w-sm">
                Accelerate financial innovation with secure, intelligent, and
                customer-centric digital banking solutions built for the modern
                economy.
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
            Transforming the Future of Finance
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-300">
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              At Invertio, we empower financial institutions and fintech
              startups to innovate securely and deliver seamless banking
              experiences powered by digital transformation.
            </motion.p>

            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Our finance and banking solutions combine automation, AI, and
              advanced analytics to enhance customer engagement, improve risk
              management, and streamline regulatory compliance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Finance & Banking Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive digital finance solutions that drive efficiency,
              innovation, and security across banking ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./digital-banking.jpg"
                alt="Digital Banking Solutions"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Digital Banking Platforms
              </h3>
              <p className="text-gray-600">
                Build next-generation digital banking systems that offer
                frictionless onboarding, personalized experiences, and
                omnichannel access for customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./fraud-detection.jpg"
                alt="Fraud Detection & Risk Management"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Fraud Detection & Risk Management
              </h3>
              <p className="text-gray-600">
                Use AI-driven fraud detection, transaction monitoring, and risk
                scoring to secure assets and ensure compliance with global
                standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./financial-analytics.webp"
                alt="Financial Analytics & Insights"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Financial Analytics & Insights
              </h3>
              <p className="text-gray-600">
                Gain deep insights into financial performance with predictive
                analytics, real-time dashboards, and automated reporting tools.
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
              Case Study: Modernizing Digital Banking
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Invertio partnered with a leading financial institution to enhance
              its digital banking infrastructure, integrating AI, automation,
              and secure cloud technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="./sc-single-view.jpeg"
              alt="Finance Case Study"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business Challenge
              </h3>
              <p className="text-gray-600 mb-4">
                The client faced rising cybersecurity threats, fragmented
                customer data, and outdated legacy systems that slowed their
                digital transformation journey.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solution & Impact
              </h3>
              <p className="text-gray-600">
                Invertio implemented a unified digital banking ecosystem with
                secure cloud migration, AI-based fraud prevention, and
                real-time analytics. The client achieved a 40% increase in user
                engagement and a 50% reduction in operational risks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinanceBanking;
