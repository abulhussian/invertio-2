// CaseStudyCarousel.jsx
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Code, Server, Cloud, Database } from "lucide-react";
import caseStudies from "../data/caseStudies.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const techIcons = {
  React: <Code className="w-5 h-5" />,
  "Node.js": <Server className="w-5 h-5" />,
  AWS: <Cloud className="w-5 h-5" />,
  MongoDB: <Database className="w-5 h-5" />,
};

const CaseStudyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="w-full h-screen">
      <Slider {...settings} className="h-full">
        {caseStudies
          .filter((study) => study.featured)
          .map((study, index) => (
            <div
              key={study.id}
              className="relative w-full h-screen flex items-center justify-center"
            >
              {/* Background Image */}
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl" />

              {/* Text Content */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 2 }}
                >
                  {study.title}
                </motion.h2>

                <motion.p
                  className="max-w-2xl text-lg mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 2 }}
                >
                  {study.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  className="flex flex-wrap gap-4 justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 2 }}
                >
                  {study.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl shadow-lg backdrop-blur-md"
                    >
                      {techIcons[tech] || <Code className="w-5 h-5" />}
                      <span className="text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default CaseStudyCarousel;
