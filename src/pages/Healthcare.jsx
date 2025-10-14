"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const HealthcareServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="shadow-md overflow-hidden relative">
          <motion.img
            src="./healthcare-bg.webp"
            alt="bg-healthcare-services"
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
                Healthcare Services 
              </h1>
              <p className="text-lg lg:text-sm max-w-sm">
                Enhancing patient care through innovative healthcare
                technology, digital solutions, and data-driven insights.
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
            Transforming Healthcare with Intelligent Solutions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-300">
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              At Invertio, we provide advanced healthcare platforms that
              streamline patient management, optimize hospital operations, and
              enhance clinical decision-making.
            </motion.p>

            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              From electronic health records and telemedicine solutions to
              predictive analytics, our healthcare services help providers
              deliver safer, more efficient, and patient-centric care.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Healthcare Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Innovative, secure, and patient-focused healthcare solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./patient-management.jpg"
                alt="Patient Management"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Patient Management Systems
              </h3>
              <p className="text-gray-600">
                Centralize patient records, appointments, and treatment plans
                for more efficient care delivery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./telemedicine.jpeg"
                alt="Telemedicine Solutions"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Telemedicine & Remote Care
              </h3>
              <p className="text-gray-600">
                Enable secure virtual consultations, remote monitoring, and
                digital communication between patients and providers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./analytics-healthcare.webp"
                alt="Healthcare Analytics"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Healthcare Analytics
              </h3>
              <p className="text-gray-600">
                Leverage data-driven insights and predictive analytics to
                improve patient outcomes and operational efficiency.
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
              Case Study: Improving Patient Care through Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Invertio collaborated with a leading hospital to implement an
              integrated healthcare platform, improving patient care and
              operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="./healthcare-case.webp"
              alt="Healthcare Services Case Study"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Challenge
              </h3>
              <p className="text-gray-600 mb-4">
                The hospital struggled with fragmented patient records and
                manual processes, leading to delays and errors in care delivery.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solution & Impact
              </h3>
              <p className="text-gray-600">
                Invertio deployed a unified patient management system with
                telemedicine integration and analytics. Results included a 50%
                faster patient check-in process and improved treatment accuracy
                by 35%.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareServices;
