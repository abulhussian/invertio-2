"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const ITConsulting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="shadow-md overflow-hidden relative">
          <motion.img
            src="./consulting.jpg"
            alt="bg-it-consulting"
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
                IT Consulting
              </h1>
              <p className="text-lg lg:text-sm max-w-sm">
                Empower your business with expert IT consulting services that drive efficiency, innovation, and digital transformation.
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
            Transforming Ideas into Scalable IT Solutions
          </motion.h2>

          {/* Two-column text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-300">
            {/* Left Column */}
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              At Invertio, our IT consulting services bridge the gap between technology and business. We help organizations modernize legacy systems, adopt cutting-edge tools, and build efficient digital ecosystems.
            </motion.p>

            {/* Right Column */}
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              From strategy formulation to implementation, our consultants ensure technology investments deliver measurable results and sustainable growth.
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
              Our IT Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We deliver end-to-end IT consulting solutions to optimize performance, enhance efficiency, and enable digital transformation.
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./it-strategy.jpg"
                alt="IT Strategy Consulting"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                IT Strategy & Planning
              </h3>
              <p className="text-gray-600">
                Align your IT initiatives with business objectives through strategic roadmaps and technology modernization plans.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./digital-transformation.jpg"
                alt="Digital Transformation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Digital Transformation
              </h3>
              <p className="text-gray-600">
                Accelerate innovation with AI, cloud, and automation solutions that streamline operations and enhance customer experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./infrastructure-consulting.webp"
                alt="Infrastructure Consulting"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Infrastructure & Cloud Consulting
              </h3>
              <p className="text-gray-600">
                Design scalable, secure, and efficient IT infrastructures — on-premises or in the cloud — to support business continuity.
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
              Case Study: Driving IT Efficiency
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Invertio partnered with a global enterprise to streamline their IT infrastructure and improve overall operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="./it-consulting-case.jpg"
              alt="IT Consulting Case Study"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business Challenge
              </h3>
              <p className="text-gray-600 mb-4">
                The client’s legacy systems caused frequent downtime and scalability issues, impacting their customer experience and IT performance.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solution & Impact
              </h3>
              <p className="text-gray-600">
                Invertio deployed a hybrid cloud model and modernized workflows using DevOps practices. The result: 45% faster deployment cycles and a 30% boost in system reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsulting;
