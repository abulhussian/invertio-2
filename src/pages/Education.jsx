"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="shadow-md overflow-hidden relative">
          <motion.img
            src="./eductaion-bg.jpg"
            alt="bg-education"
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
                Education Solutions
              </h1>
              <p className="text-lg lg:text-sm max-w-sm">
                Empower learning through technology-driven educational platforms and digital transformation for institutions and students worldwide.
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
            Transforming Education Through Innovation
          </motion.h2>

          {/* Two-column text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-300">
            {/* Left Column */}
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              At Invertio, we empower educational institutions with digital tools and innovative solutions to enhance teaching, streamline administration, and improve learning experiences for students worldwide.
            </motion.p>

            {/* Right Column */}
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              From e-learning platforms to data-driven insights, our educational technology solutions enable institutions to achieve greater engagement, accessibility, and academic success.
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
              Our Education Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We deliver comprehensive educational technology services designed to modernize institutions and empower learners.
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./elearning-platform.jpg"
                alt="E-Learning Platform"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                E-Learning Platforms
              </h3>
              <p className="text-gray-600">
                Build engaging online learning environments with interactive content, video lectures, and performance analytics for students and teachers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./school-management.png"
                alt="School Management System"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                School Management Systems
              </h3>
              <p className="text-gray-600">
                Simplify academic and administrative operations with automated attendance, grading, scheduling, and student data management.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="./virtual-classroom.jpg"
                alt="Virtual Classroom"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Virtual Classrooms
              </h3>
              <p className="text-gray-600">
                Deliver seamless, real-time online education experiences with integrated video conferencing, whiteboards, and collaborative tools.
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
              Case Study: Modernizing Higher Education
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Invertio collaborated with a leading university to develop a scalable, digital-first learning environment that improved student engagement and academic performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="./sc-qatar-moehe.jpeg"
              alt="Education Case Study"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business Challenge
              </h3>
              <p className="text-gray-600 mb-4">
                The university faced challenges in delivering hybrid learning and managing student performance due to outdated systems and limited digital infrastructure.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solution & Impact
              </h3>
              <p className="text-gray-600">
                Invertio implemented a cloud-based learning management system integrated with analytics and communication tools. The institution achieved a 40% rise in student engagement and improved academic tracking efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
