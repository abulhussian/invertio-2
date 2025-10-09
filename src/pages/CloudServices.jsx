"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const CloudServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="shadow-md overflow-hidden relative">
          <motion.img
            src="./cloud-services-bg.jpg"
            alt="bg-cloud-services"
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
                Cloud Services
              </h1>
              <p className="text-lg lg:text-sm max-w-sm">
                Elevate your business with our comprehensive cloud solutions designed for scalability, security, and performance.
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
            Transforming Businesses with Cloud Excellence
          </motion.h2>

          {/* Two-column text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-300">
            {/* Left Column */}
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Cloud computing has become the backbone of modern business operations. With the right cloud strategy, organizations can achieve unprecedented scalability, reduce infrastructure costs, and enhance operational agility.
            </motion.p>

            {/* Right Column */}
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Invertio's cloud experts help businesses migrate, manage, and optimize their cloud infrastructure across leading platforms like AWS, Azure, and Google Cloud, ensuring maximum performance and security.
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
              Comprehensive Cloud Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Invertio delivers end-to-end cloud services designed to transform your business operations, from migration and deployment to optimization and management.
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./cloud-migration.jpg"
                alt="Cloud Migration"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Cloud Migration
              </h3>
              <p className="text-gray-600">
                Seamlessly transition your applications and data to the cloud with our proven migration strategies, minimizing downtime and ensuring business continuity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./cloud-management.jpg"
                alt="Cloud Management"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Cloud Management & Optimization
              </h3>
              <p className="text-gray-600">
                Maximize your cloud investment with continuous monitoring, cost optimization, and performance tuning across your cloud environment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./cloud-security.jpg"
                alt="Cloud Security"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Cloud Security & Compliance
              </h3>
              <p className="text-gray-600">
                Protect your cloud assets with robust security frameworks, compliance management, and proactive threat detection services.
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
              Case Study: Enterprise Cloud Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Invertio partnered with a global enterprise to execute a comprehensive cloud migration strategy, resulting in enhanced scalability, reduced costs, and improved operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="./cloud-casestudy.webp"
              alt="Cloud Transformation Case Study"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business Challenge
              </h3>
              <p className="text-gray-600 mb-4">
                The client faced challenges with outdated on-premise infrastructure, limited scalability, and rising maintenance costs. They needed a modern cloud solution to support business growth and digital innovation.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solution & Impact
              </h3>
              <p className="text-gray-600">
                Invertio designed and implemented a multi-cloud strategy, migrating critical applications to AWS and Azure. The transformation resulted in 40% cost reduction, 99.9% uptime, and enabled seamless scaling to meet evolving business demands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServices;