"use client"
import { motion } from "framer-motion"
import { ArrowRight, Play, Clock, Award } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

const CaseStudyCard = ({ study }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  return (
    <motion.div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
        {/* Image/Video Container */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
          />

          {/* Video Preview Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowVideo(true)}
            >
              <Play className="w-6 h-6 text-white ml-1" />
            </motion.button>
          </motion.div>

          {/* Industry Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-[#05164d] text-white text-sm font-medium rounded-full">
            {study.industry}
          </div>

          {/* Featured Badge */}
          {study.featured && (
            <div className="absolute top-4 right-4 w-8 h-8 bg-[#ffad00] rounded-full flex items-center justify-center">
              <Award className="w-4 h-4 text-white" />
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-[#05164d] dark:text-[#ffad00] font-medium">{study.client}</span>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4 mr-1" />
              {study.duration}
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-[#05164d] dark:group-hover:text-[#ffad00] transition-colors line-clamp-2">
            {study.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">{study.description}</p>

          {/* Key Results */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Results:</h4>
            <ul className="space-y-1">
              {study.results.slice(0, 2).map((result, index) => (
                <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                  {result}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {study.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
              {study.technologies.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                  +{study.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* CTA */}
          <Link
            to={`/work/${study.id}`}
            className="inline-flex items-center text-[#05164d] dark:text-[#ffad00] hover:text-[#05164d]/80 dark:hover:text-[#ffad00]/80 font-medium group/link"
          >
            Read Case Study
            <motion.div className="ml-2" animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </div>

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          animate={{ x: isHovered ? "200%" : "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>

      {/* Video Modal (placeholder) */}
      {showVideo && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            className="relative max-w-4xl w-full mx-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <p className="text-white">Video preview would be shown here</p>
            </div>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default CaseStudyCard