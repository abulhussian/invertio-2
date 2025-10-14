"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const QatarMoehe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="shadow-md overflow-hidden relative">
          <motion.img
            src="./sc-qatar-moehe.jpeg"
            alt="Qatar MOEHE Background"
            className="w-full h-[400px] object-cover"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <motion.div
            className="absolute inset-0 flex flex-col justify-center px-10"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex flex-col space-y-5 items-start w-full">
              <h1 className="text-4xl lg:text-5xl font-bold">
                QATAR MOEHE – Education Transformation
              </h1>
              <p className="text-lg lg:text-base max-w-2xl">
                Empowering Qatar’s Ministry of Education and Higher Education
                with a unified digital ecosystem that modernizes operations,
                streamlines data management, and enhances accessibility across
                educational institutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Project */}
      <section className="bg-[#0b0b12] text-white py-20 flex items-center justify-center">
        <div className="max-w-6xl px-6 lg:px-10 text-left">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10 text-white"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About the Project
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg leading-relaxed text-gray-300">
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              The QATAR MOEHE project aims to digitize and unify the education
              management systems across Qatar. Invertio played a key role in
              developing and integrating scalable web-based solutions to improve
              efficiency and transparency across the education sector.
            </motion.p>

            <motion.p
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              From student enrollment systems to data analytics dashboards,
              Invertio ensured seamless coordination between schools,
              universities, and the Ministry, powered by cutting-edge
              technologies and cloud integration.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tech Stack Used
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              { icon: <FaReact size={60} color="#61DBFB" />, label: "React" },
              { icon: <SiTailwindcss size={60} color="#38BDF8" />, label: "Tailwind CSS" },
              { icon: <FaJsSquare size={60} color="#F7DF1E" />, label: "JavaScript" },
              { icon: <SiExpress size={60} color="#000000" />, label: "Express.js" },
              { icon: <FaNodeJs size={60} color="#3C873A" />, label: "Node.js" },
              { icon: <SiMongodb size={60} color="#4DB33D" />, label: "MongoDB" },
              { icon: <FaDatabase size={60} color="#5A67D8" />, label: "SQL" },
              { icon: <FaAws size={60} color="#FF9900" />, label: "AWS Cloud" },
              { icon: <FaHtml5 size={60} color="#E34F26" />, label: "HTML5" },
              { icon: <FaCss3Alt size={60} color="#1572B6" />, label: "CSS3" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.1 }}
              >
                {tech.icon}
                <p className="mt-3 text-gray-800 font-semibold">{tech.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Project Impact
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            The QATAR MOEHE platform empowered the Ministry with real-time
            insights, centralized reporting, and efficient communication between
            stakeholders. The digital transformation reduced administrative
            delays by 60% and significantly enhanced educational data accuracy
            and accessibility.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default QatarMoehe;
