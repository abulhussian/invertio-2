"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import logos from "../data/logos.json"

const LogoMarquee = () => {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className="w-full overflow-hidden bg-gray-50 dark:bg-gray-800/50 py-12">
      <div className="container-custom mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Trusted by Industry Leaders</h2>
          <p className="text-gray-600 dark:text-gray-400">Partnering with the world's most innovative companies</p>
        </motion.div>
      </div>

      <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <motion.div
          className="flex space-x-16"
          animate={{
            x: isPaused ? 0 : "-50%",
          }}
          transition={{
            duration: isPaused ? 0 : 25,
            ease: "linear",
            repeat: isPaused ? 0 : Number.POSITIVE_INFINITY,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={logo.logo || "/placeholder.svg"}
                alt={`${logo.name} logo`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 dark:from-gray-800/50 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 dark:from-gray-800/50 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}

export default LogoMarquee
