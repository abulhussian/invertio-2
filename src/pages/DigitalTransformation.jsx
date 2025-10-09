"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const DigitalInformation = () => {

useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="shadow-md overflow-hidden relative">
          <motion.img
            src="./digital-transformation-bg.jpg"
            alt="bg-digital-transformation"
            className="w-full h-[350px] object-cover"
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
                Digital Transformation
              </h1>
              <p className="text-lg lg:text-sm max-w-sm">
                Accelerate your digital journey with our comprehensive digital
                strategies and cutting-edge technology solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


 <section className="bg-[#0b0b12] text-white py-20 flex items-center justify-center">
      <div className="max-w-6xl px-6 lg:px-10 text-left">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-white"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Businesses Through Digital Transformation
        </motion.h2>

        {/* Two-column text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-300">
          {/* Left Column */}
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Digital transformation is no longer optional—it’s essential. By adopting
            innovative technologies, businesses can optimize operations, enhance
            customer experiences, and stay ahead in a competitive market.
          </motion.p>

          {/* Right Column */}
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Invertio’s expertise empowers organizations to integrate AI, cloud
            solutions, and automation seamlessly, driving measurable impact and
            enabling sustainable growth in the digital era.
          </motion.p>
        </div>
      </div>
    </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
        Driving Digital Transformation
      </h2>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto">
        Invertio helps organizations accelerate their digital journey by
        leveraging advanced technologies like AI, cloud computing, automation,
        and data analytics to create smarter, efficient, and scalable solutions.
      </p>
    </div>

    {/* Transformation Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
        <img
          src="./ai-tranformation.jpg"
          alt="AI & Automation"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          AI & Automation
        </h3>
        <p className="text-gray-600">
          Implement AI-driven automation to streamline business processes,
          reduce manual effort, and enhance operational efficiency.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
        <img
          src="./cloud-img.jpg"
          alt="Cloud Solutions"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Cloud & Data Analytics
        </h3>
        <p className="text-gray-600">
          Leverage cloud platforms and advanced analytics to gain actionable
          insights, improve decision-making, and drive innovation.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
        <img
          src="./insights-2.png"
          alt="Digital Strategy"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Digital Strategy & Innovation
        </h3>
        <p className="text-gray-600">
          Design and implement digital strategies to transform business
          models, enhance customer experiences, and stay competitive in a
          rapidly evolving digital landscape.
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
        Case Study: Enterprise Digital Transformation
      </h2>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto">
        Invertio partnered with a leading enterprise to implement a comprehensive
        digital transformation strategy, leveraging AI, cloud, and automation
        technologies to improve operational efficiency and drive innovation.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <img
        src="./cloud-robotics.jpg"
        alt="Digital Transformation Case Study"
        className="w-full h-80 object-cover rounded-lg shadow-lg"
      />
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Business Challenge
        </h3>
        <p className="text-gray-600 mb-4">
          Enterprises struggled with fragmented processes, legacy systems, and
          limited data insights, hindering growth and agility in the digital era.
          A scalable digital transformation strategy was needed to unify
          systems, optimize operations, and enhance customer experiences.
        </p>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Solution & Impact
        </h3>
        <p className="text-gray-600">
          Invertio implemented AI-driven automation, cloud integration, and
          real-time analytics to streamline operations, increase productivity,
          and deliver measurable business value. The transformation enabled
          faster decision-making, reduced costs, and improved overall customer
          satisfaction.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default DigitalInformation;
