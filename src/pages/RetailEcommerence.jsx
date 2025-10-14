"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const RetailEcommerce = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="shadow-md overflow-hidden relative">
          <motion.img
            src="./retail-bg.webp"
            alt="bg-retail"
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
                Retail & E-Commerce 
              </h1>
              <p className="text-lg lg:text-sm max-w-sm">
                Empower your retail and online store operations with intelligent
                solutions that drive personalized customer experiences, seamless
                transactions, and data-driven growth.
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
            Transforming Retail Through Digital Innovation
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-300">
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              At Invertio, we help retailers and e-commerce businesses harness
              the power of technology to deliver exceptional shopping
              experiences, from online storefronts to in-store interactions.
            </motion.p>

            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Our solutions combine analytics, automation, and omnichannel
              integration to optimize inventory, streamline order fulfillment,
              and boost customer retention.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Retail & E-Commerce Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              End-to-end digital commerce and retail solutions that enhance
              engagement, efficiency, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./omnichannel.webp"
                alt="Omnichannel Retail Integration"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Omnichannel Retail Integration
              </h3>
              <p className="text-gray-600">
                Connect online and offline experiences through unified commerce
                platforms, inventory synchronization, and seamless checkout
                solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./customer-analytics.jpeg"
                alt="Customer Analytics"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Customer Analytics & Personalization
              </h3>
              <p className="text-gray-600">
                Leverage customer insights and predictive analytics to deliver
                targeted recommendations and improve marketing ROI.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./order-fulfillment.jpeg"
                alt="Order Fulfillment Automation"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Order Fulfillment Automation
              </h3>
              <p className="text-gray-600">
                Streamline order management with smart fulfillment workflows,
                automated inventory updates, and real-time delivery tracking.
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
              Case Study: Revolutionizing Retail Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Invertio collaborated with a global retail chain to modernize
              their e-commerce platform, integrating real-time analytics and
              AI-powered personalization to enhance customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="./sc-baladiexpress.jpg"
              alt="Retail Case Study"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business Challenge
              </h3>
              <p className="text-gray-600 mb-4">
                The client faced high cart abandonment rates, slow website
                performance, and poor cross-channel visibility across stores and
                warehouses.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solution & Impact
              </h3>
              <p className="text-gray-600">
                Invertio deployed a scalable e-commerce infrastructure with
                automated inventory syncing, AI-driven recommendations, and a
                mobile-first design. The company saw a 50% rise in online sales
                and a 35% improvement in customer retention.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetailEcommerce;
